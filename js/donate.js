/* ============================================================
 * donate.js — Donation form + Stripe Checkout integration
 *
 * FLOW: LP → donate.html → Stripe Checkout
 *
 * There are two ways to hook this up to Stripe. Pick whichever
 * fits your stack:
 *
 *   (A) SERVERLESS — recommended (dynamic amounts, metadata, monthly)
 *       Create a function (Cloudflare Workers / Netlify Functions /
 *       Vercel / AWS Lambda) that calls the Stripe API to create a
 *       Checkout Session with the amount + metadata, then returns
 *       { url }. Set STRIPE_CONFIG.checkoutEndpoint to its URL.
 *
 *       Example (Cloudflare Worker / Node):
 *         const session = await stripe.checkout.sessions.create({
 *           mode: frequency === "monthly" ? "subscription" : "payment",
 *           line_items: [{ price_data: {
 *             currency: "jpy",
 *             unit_amount: amount,
 *             product_data: { name: `GLOBE JUNGLE - ${project}` },
 *             recurring: frequency === "monthly"
 *                          ? { interval: "month" } : undefined,
 *           }, quantity: 1 }],
 *           success_url: "https://your-site/thanks.html",
 *           cancel_url: "https://your-site/donate.html",
 *           metadata: { project, name, email },
 *         });
 *         return Response.json({ url: session.url });
 *
 *   (B) STRIPE PAYMENT LINKS — no backend required
 *       Create one Payment Link per preset amount in Stripe Dashboard
 *       (https://dashboard.stripe.com/payment-links) and paste the
 *       URLs into STRIPE_CONFIG.paymentLinks below. Custom amounts
 *       and monthly subscriptions can also be Payment Links.
 *       The form will redirect to the correct Payment Link on submit.
 *
 * Switch modes with STRIPE_CONFIG.mode = "serverless" | "paymentLinks".
 * ============================================================ */

const STRIPE_CONFIG = {
  // "serverless" or "paymentLinks"
  mode: "paymentLinks",

  // Used when mode === "serverless"
  checkoutEndpoint: "/api/create-checkout-session",

  // Used when mode === "paymentLinks"
  // Fill these in from your Stripe Dashboard.
  // Key format: `${frequency}-${amount}` or `${frequency}-custom`
  paymentLinks: {
    "onetime-1000":  "https://buy.stripe.com/REPLACE_ME_ONETIME_1000",
    "onetime-3000":  "https://buy.stripe.com/REPLACE_ME_ONETIME_3000",
    "onetime-5000":  "https://buy.stripe.com/REPLACE_ME_ONETIME_5000",
    "onetime-10000": "https://buy.stripe.com/REPLACE_ME_ONETIME_10000",
    "onetime-30000": "https://buy.stripe.com/REPLACE_ME_ONETIME_30000",
    "onetime-custom":"https://buy.stripe.com/REPLACE_ME_ONETIME_CUSTOM",
    "monthly-1000":  "https://buy.stripe.com/REPLACE_ME_MONTHLY_1000",
    "monthly-3000":  "https://buy.stripe.com/REPLACE_ME_MONTHLY_3000",
    "monthly-5000":  "https://buy.stripe.com/REPLACE_ME_MONTHLY_5000",
    "monthly-10000": "https://buy.stripe.com/REPLACE_ME_MONTHLY_10000",
    "monthly-30000": "https://buy.stripe.com/REPLACE_ME_MONTHLY_30000",
    "monthly-custom":"https://buy.stripe.com/REPLACE_ME_MONTHLY_CUSTOM"
  }
};

(function () {
  const form = document.getElementById("donate-form");
  if (!form) return;

  const customWrap = form.querySelector(".custom-amount-wrap");
  const customInput = document.getElementById("custom-amount");
  const projectSelect = document.getElementById("project");
  const submitBtn = document.getElementById("donate-submit");

  // Summary elements
  const sumFrequency = document.getElementById("summary-frequency");
  const sumAmount = document.getElementById("summary-amount");
  const sumProject = document.getElementById("summary-project");
  const impactText = document.getElementById("impact-text");

  // Pre-select project from URL query (?project=roof)
  const params = new URLSearchParams(window.location.search);
  const projectParam = params.get("project");
  if (projectParam && projectSelect.querySelector(`option[value="${projectParam}"]`)) {
    projectSelect.value = projectParam;
  }

  function getState() {
    const frequency = form.frequency.value;
    const amountRaw = form.amount.value;
    let amount = amountRaw === "custom"
      ? parseInt(customInput.value, 10) || 0
      : parseInt(amountRaw, 10);
    const project = projectSelect.value;
    return { frequency, amount, amountKey: amountRaw, project };
  }

  function t(key, fallback) {
    const lang = (window.GJ_I18N && window.GJ_I18N.getLang()) || "ja";
    const dict = (window.GJ_I18N && window.GJ_I18N.dict[lang]) || {};
    return dict[key] || fallback || key;
  }

  function fmtAmount(amount) {
    if (!amount) return "—";
    return "¥" + amount.toLocaleString();
  }

  function updateSummary() {
    const { frequency, amount, project } = getState();
    sumFrequency.textContent = frequency === "monthly"
      ? t("donatePage.frequency.monthly", "毎月")
      : t("donatePage.frequency.onetime", "今回のみ");
    sumAmount.textContent = fmtAmount(amount);
    sumProject.textContent = t(`donatePage.project.${project}`, project);

    // Impact text
    let impactKey = "donatePage.impact.default";
    if (amount >= 10000) impactKey = "donatePage.impact.10000";
    else if (amount >= 5000) impactKey = "donatePage.impact.5000";
    else if (amount >= 3000) impactKey = "donatePage.impact.3000";
    else if (amount >= 1000) impactKey = "donatePage.impact.1000";
    impactText.textContent = t(impactKey);
  }

  function onAmountChange() {
    const isCustom = form.amount.value === "custom";
    customWrap.hidden = !isCustom;
    if (isCustom) customInput.focus();
    updateSummary();
  }

  // Listeners
  form.querySelectorAll('input[name="amount"]').forEach((r) =>
    r.addEventListener("change", onAmountChange)
  );
  form.querySelectorAll('input[name="frequency"]').forEach((r) =>
    r.addEventListener("change", updateSummary)
  );
  projectSelect.addEventListener("change", updateSummary);
  customInput.addEventListener("input", updateSummary);
  document.addEventListener("langchange", updateSummary);

  updateSummary();

  // ============ Submit → Stripe ============
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { frequency, amount, amountKey, project } = getState();
    const name = document.getElementById("donor-name").value.trim();
    const email = document.getElementById("donor-email").value.trim();

    if (!amount || amount < 100) {
      alert(t("donatePage.amount.placeholder", "金額を入力してください"));
      return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "...";

    try {
      if (STRIPE_CONFIG.mode === "serverless") {
        // (A) Call your serverless endpoint → get Checkout Session URL
        const res = await fetch(STRIPE_CONFIG.checkoutEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ frequency, amount, project, name, email }),
        });
        if (!res.ok) throw new Error("checkout session failed");
        const data = await res.json();
        if (!data.url) throw new Error("no checkout url");
        window.location.href = data.url;
      } else {
        // (B) Redirect to a Stripe Payment Link
        const key = `${frequency}-${amountKey}`;
        const url = STRIPE_CONFIG.paymentLinks[key];
        if (!url || url.includes("REPLACE_ME")) {
          alert(
            "Stripe Payment Link が未設定です。\n" +
            "js/donate.js の STRIPE_CONFIG.paymentLinks を編集してください。\n\n" +
            "Missing Stripe Payment Link. Edit STRIPE_CONFIG.paymentLinks in js/donate.js."
          );
          return;
        }
        // Forward prefill via query params (Stripe supports prefilled_email)
        const finalUrl = new URL(url);
        if (email) finalUrl.searchParams.set("prefilled_email", email);
        window.location.href = finalUrl.toString();
      }
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
})();
