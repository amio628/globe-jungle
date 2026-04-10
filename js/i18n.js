/* ============================================================
 * i18n.js — JP / EN language switcher
 * Usage:
 *   <h1 data-i18n="hero.title">デフォルト日本語</h1>
 *   <h1 data-i18n="hero.title" data-i18n-html>改行<br>を許可</h1>
 * Language preference is stored in localStorage ("gj-lang").
 * ============================================================ */

const I18N = {
  ja: {
    "meta.title": "GLOBE JUNGLE | Happyの連鎖を一緒にひろげよう",
    "meta.description": "カンボジアの子どもたちに、当たり前の幸せを届ける認定NPO法人グローブジャングルの寄付サイトです。",

    "nav.story": "STORY",
    "nav.concept": "CONCEPT",
    "nav.support": "SUPPORT",
    "nav.report": "REPORT",
    "nav.contact": "CONTACT",
    "nav.donate": "寄付する",

    "hero.eyebrow": "認定NPO法人グローブジャングル",
    "hero.title": "Happyの連鎖を<br>一緒にひろげよう",
    "hero.lead": "カンボジアの子どもたちに、当たり前の幸せを。<br>あなたの想いが、未来のリーダーを育てます。",
    "hero.ctaPrimary": "子どもの未来を応援する",
    "hero.ctaSecondary": "ストーリーを見る",

    "featureBar.item1": "寄付は10円から",
    "featureBar.item2": "寄付の使い道",
    "featureBar.item3": "質問と回答",

    "story.eyebrow": "STORY",
    "story.title": "くっくま孤児院から始まる、<br>未来のリーダーたち",
    "story.card1.title": "くっくま孤児院",
    "story.card1.body": "貧困や家庭の事情で行き場を失った子どもたちに、安心して暮らせる家を。カンボジア・プノンペンの小さな孤児院から物語は始まりました。",
    "story.card2.title": "毎日の時からの挑戦",
    "story.card2.body": "子どもたちが夢を抱き、学び、笑い合える日常を。小さな一歩の積み重ねが、大きな変化を生み出しています。",
    "story.card3.title": "夢を実現した卒業生",
    "story.card3.body": "くっくまを巣立った子どもたちが、今度は地域のリーダーとして活躍。Happyの連鎖がひろがっています。",

    "concept.eyebrow": "CONCEPT",
    "concept.title": "すべての子どもに<br>当たり前の幸せを",
    "concept.lead": "私たちは、「特別」ではなく「当たり前の日常」をつくることを目指しています。",
    "concept.item1.icon": "食",
    "concept.item1.title": "栄養いっぱいの食事",
    "concept.item1.body": "おなかいっぱい食べられること。子どもたちの健康は食から。",
    "concept.item2.icon": "育",
    "concept.item2.title": "教育",
    "concept.item2.body": "子どもが夢を描ける力を育てる。学ぶ楽しさと、未来への投資を行います。",
    "concept.item3.icon": "職",
    "concept.item3.title": "仕事",
    "concept.item3.body": "働く喜びと誇りをもって、自立して生きていける力を育みます。",
    "concept.item4.icon": "家",
    "concept.item4.title": "家",
    "concept.item4.body": "安心して眠れる、愛情に満ちた「家」があること。一人ひとりに帰る場所を。",

    "howItWorks.eyebrow": "HOW IT WORKS",
    "howItWorks.title": "あなたの寄付が<br>子どもの未来になるまで",
    "howItWorks.lead": "一つの寄付が、4つの支援を通じて、未来のリーダーを育てます。",
    "howItWorks.step1.title": "あなたの寄付",
    "howItWorks.step1.body": "1,000円から。今回のみ、または毎月の継続から選べます。",
    "howItWorks.step2.title": "GLOBE JUNGLE",
    "howItWorks.step2.body": "認定NPOとして現地へ直接届けます。",
    "howItWorks.step3.title": "4つの支援",
    "howItWorks.step3.body": "食・教育・仕事・家<br>暮らしの全てを支えます。",
    "howItWorks.step4.title": "未来のリーダー",
    "howItWorks.step4.body": "自立して地域を支える大人へ。",

    "support.eyebrow": "SUPPORT",
    "support.title": "21年間の支援の軌跡",
    "support.stat1.unit": "年間",
    "support.stat1.label": "2003年から活動を継続",
    "support.stat2.unit": "人",
    "support.stat2.label": "支援プログラムに参加した子どもたち",
    "support.stat3.unit": "人",
    "support.stat3.label": "ハッピを巣立った卒業生たち",
    "support.stat4.unit": "校",
    "support.stat4.label": "学校建設・修繕支援",
    "support.stat5.unit": "人",
    "support.stat5.label": "2024年度の継続支援者",
    "support.stat6.label": "認定NPO法人",

    "moments.eyebrow": "EVERYDAY MOMENTS",
    "moments.title": "子どもたちの日常",

    "donate.eyebrow": "Changes Lives Today.",
    "donate.title": "今、最も必要な支援を",
    "donate.lead": "現場の声と子どもたちのリアルなニーズに基づき、リアルタイムで公開するプロジェクト形式の支援です。",
    "donate.action": "支援する",
    "donate.item1.title": "学校の屋根修繕",
    "donate.item1.body": "雨期でも安全な教室を守るため、屋根の修繕に必要な資金を集めています。",
    "donate.item2.title": "学校のトイレ改修",
    "donate.item2.body": "安心して使える衛生的なトイレは、女の子たちが学び続けるために欠かせません。",
    "donate.item3.title": "毎日の食事",
    "donate.item3.body": "毎日温かいごはんを食べられること。子どもたちの成長を支える基本のプロジェクトです。",
    "donate.item3.amount": "継続募集中",
    "donate.item4.title": "最も必要なところへ",
    "donate.item4.body": "寄付を私たちに一任いただくことで、今最も必要とされている分野にお届けします。",
    "donate.item4.amount": "金額自由",

    "report.eyebrow": "REPORT",
    "report.title": "隠れたコストはありません<br>正直なインパクトのみ。",
    "report.body": "寄付の使い道から成果まで、すべて公開しています。",
    "report.orgLabel": "認定NPO法人",
    "report.link1": "財務報告書公開",
    "report.link2": "現地からのリアル報告",
    "report.link3": "スタッフブログ",
    "report.link4": "2024年度活動報告書",

    "finalCta.title": "The children are waiting for you.",
    "finalCta.body": "あなたの一歩が、子どもたちの未来を変えます。",
    "finalCta.ctaPrimary": "寄付する",
    "finalCta.ctaSecondary": "活動を知る",

    "footer.orgName": "認定NPO法人グローブジャングル",
    "footer.contactHeading": "お問い合わせ",
    "footer.linksHeading": "リンク",

    /* ----- donate.html ----- */
    "donatePage.meta.title": "寄付する | GLOBE JUNGLE",
    "donatePage.breadcrumb.home": "ホーム",
    "donatePage.breadcrumb.donate": "寄付する",
    "donatePage.title": "あなたの寄付が未来を変えます",
    "donatePage.lead": "ご支援いただいた寄付は、子どもたちの食事、教育、住まい、そして夢のために大切に使わせていただきます。",
    "donatePage.frequency.label": "寄付の頻度",
    "donatePage.frequency.onetime": "今回のみ",
    "donatePage.frequency.monthly": "毎月",
    "donatePage.amount.label": "寄付金額を選択",
    "donatePage.amount.custom": "その他の金額",
    "donatePage.amount.placeholder": "金額を入力",
    "donatePage.project.label": "支援先プロジェクト",
    "donatePage.project.general": "最も必要なところへ",
    "donatePage.project.roof": "学校の屋根修繕",
    "donatePage.project.toilet": "学校のトイレ改修",
    "donatePage.project.meals": "毎日の食事",
    "donatePage.email.label": "メールアドレス（任意）",
    "donatePage.email.placeholder": "example@mail.com",
    "donatePage.name.label": "お名前（任意）",
    "donatePage.name.placeholder": "山田 太郎",
    "donatePage.submit": "Stripeで決済する",
    "donatePage.securityNote": "決済は Stripe で安全に処理されます。当サイトにカード情報は保存されません。",
    "donatePage.summary.title": "ご寄付内容",
    "donatePage.summary.frequency": "頻度",
    "donatePage.summary.amount": "金額",
    "donatePage.summary.project": "支援先",
    "donatePage.impact.title": "この金額でできること",
    "donatePage.impact.1000": "1,000円で、子ども1人の1週間の給食がまかなえます。",
    "donatePage.impact.3000": "3,000円で、教科書と学用品を1人に届けられます。",
    "donatePage.impact.5000": "5,000円で、1人の子どもの1ヶ月の生活を支えられます。",
    "donatePage.impact.10000": "10,000円で、教室の修繕資材の一部となります。",
    "donatePage.impact.default": "金額に応じて、最も必要なところへ大切に使わせていただきます。",
    "donatePage.back": "← LPに戻る"
  },

  en: {
    "meta.title": "GLOBE JUNGLE | Join the Circle of Happiness",
    "meta.description": "Donation site for GLOBE JUNGLE, a certified NPO delivering everyday happiness to children in Cambodia.",

    "nav.story": "STORY",
    "nav.concept": "CONCEPT",
    "nav.support": "SUPPORT",
    "nav.report": "REPORT",
    "nav.contact": "CONTACT",
    "nav.donate": "Donate",

    "hero.eyebrow": "Certified NPO — GLOBE JUNGLE",
    "hero.title": "Join the Circle<br>of Happiness.",
    "hero.lead": "Bring everyday happiness to children in Cambodia.<br>Your kindness raises the leaders of tomorrow.",
    "hero.ctaPrimary": "Support a Child's Future",
    "hero.ctaSecondary": "See Our Story",

    "featureBar.item1": "Donate from as little as 10 yen",
    "featureBar.item2": "How your donation is used",
    "featureBar.item3": "Questions & Answers",

    "story.eyebrow": "STORY",
    "story.title": "Future Leaders, Starting<br>from Kukuma Orphanage",
    "story.card1.title": "Kukuma Orphanage",
    "story.card1.body": "A safe home for children who have lost their place due to poverty or family circumstances. Our story began at a small orphanage in Phnom Penh, Cambodia.",
    "story.card2.title": "Every Day is a New Challenge",
    "story.card2.body": "An ordinary life where children can dream, learn, and laugh together. Small steps add up to create meaningful change.",
    "story.card3.title": "Graduates Living Their Dreams",
    "story.card3.body": "Children who grew up at Kukuma are now community leaders themselves. The circle of happiness keeps expanding.",

    "concept.eyebrow": "CONCEPT",
    "concept.title": "Everyday Happiness<br>for Every Child",
    "concept.lead": "We aim to build not an exceptional life, but an ordinary, happy everyday for every child.",
    "concept.item1.icon": "Food",
    "concept.item1.title": "Nutritious Meals",
    "concept.item1.body": "Being able to eat until full. Children's health starts with what they eat.",
    "concept.item2.icon": "Edu",
    "concept.item2.title": "Education",
    "concept.item2.body": "Nurturing the power to dream. We invest in the joy of learning and the future.",
    "concept.item3.icon": "Work",
    "concept.item3.title": "Work",
    "concept.item3.body": "Growing the strength to live independently with pride and joy in one's work.",
    "concept.item4.icon": "Home",
    "concept.item4.title": "Home",
    "concept.item4.body": "A loving home where you can sleep peacefully. A place to come back to for everyone.",

    "howItWorks.eyebrow": "HOW IT WORKS",
    "howItWorks.title": "How Your Gift Becomes<br>a Child's Future",
    "howItWorks.lead": "One donation supports four pillars, raising future leaders.",
    "howItWorks.step1.title": "Your Donation",
    "howItWorks.step1.body": "From 1,000 JPY — one-time or monthly.",
    "howItWorks.step2.title": "GLOBE JUNGLE",
    "howItWorks.step2.body": "A certified NPO delivering directly on the ground.",
    "howItWorks.step3.title": "Four Pillars",
    "howItWorks.step3.body": "Food, education, work, and home<br>for every part of life.",
    "howItWorks.step4.title": "Future Leaders",
    "howItWorks.step4.body": "Growing into adults who support their community.",

    "support.eyebrow": "SUPPORT",
    "support.title": "21 Years of Impact",
    "support.stat1.unit": " years",
    "support.stat1.label": "Operating continuously since 2003",
    "support.stat2.unit": "",
    "support.stat2.label": "Children reached by our programs",
    "support.stat3.unit": "",
    "support.stat3.label": "Graduates who have left the nest",
    "support.stat4.unit": "",
    "support.stat4.label": "Schools built or renovated",
    "support.stat5.unit": "",
    "support.stat5.label": "Continuing supporters in 2024",
    "support.stat6.label": "Certified NPO",

    "moments.eyebrow": "EVERYDAY MOMENTS",
    "moments.title": "Everyday Life of the Children",

    "donate.eyebrow": "Changes Lives Today.",
    "donate.title": "The Support Needed Right Now",
    "donate.lead": "Project-based giving with real-time transparency, based on voices from the field and the real needs of children.",
    "donate.action": "Support",
    "donate.item1.title": "School Roof Repair",
    "donate.item1.body": "Protecting safe classrooms during the rainy season — we're raising funds to repair the roof.",
    "donate.item2.title": "School Toilet Renovation",
    "donate.item2.body": "Clean, safe toilets are essential for girls to stay in school.",
    "donate.item3.title": "Daily Meals",
    "donate.item3.body": "A warm meal every day — the foundational project that supports children's growth.",
    "donate.item3.amount": "Ongoing",
    "donate.item4.title": "Where Needed Most",
    "donate.item4.body": "Entrust us with your gift, and we'll direct it to where it's needed most right now.",
    "donate.item4.amount": "Any amount",

    "report.eyebrow": "REPORT",
    "report.title": "No Hidden Costs.<br>Just Honest Impact.",
    "report.body": "Everything is public — from how donations are used to the outcomes.",
    "report.orgLabel": "Certified NPO",
    "report.link1": "Financial Reports",
    "report.link2": "Reports from the Field",
    "report.link3": "Staff Blog",
    "report.link4": "2024 Annual Report",

    "finalCta.title": "The children are waiting for you.",
    "finalCta.body": "Your single step can change a child's future.",
    "finalCta.ctaPrimary": "Donate",
    "finalCta.ctaSecondary": "Learn More",

    "footer.orgName": "Certified NPO — GLOBE JUNGLE",
    "footer.contactHeading": "Contact",
    "footer.linksHeading": "Links",

    /* ----- donate.html ----- */
    "donatePage.meta.title": "Donate | GLOBE JUNGLE",
    "donatePage.breadcrumb.home": "Home",
    "donatePage.breadcrumb.donate": "Donate",
    "donatePage.title": "Your donation changes futures",
    "donatePage.lead": "Your gift goes directly to meals, education, homes, and dreams for the children we serve.",
    "donatePage.frequency.label": "Frequency",
    "donatePage.frequency.onetime": "One-time",
    "donatePage.frequency.monthly": "Monthly",
    "donatePage.amount.label": "Select an amount",
    "donatePage.amount.custom": "Other amount",
    "donatePage.amount.placeholder": "Enter amount",
    "donatePage.project.label": "Project",
    "donatePage.project.general": "Where needed most",
    "donatePage.project.roof": "School roof repair",
    "donatePage.project.toilet": "School toilet renovation",
    "donatePage.project.meals": "Daily meals",
    "donatePage.email.label": "Email (optional)",
    "donatePage.email.placeholder": "example@mail.com",
    "donatePage.name.label": "Name (optional)",
    "donatePage.name.placeholder": "Your name",
    "donatePage.submit": "Continue to Stripe",
    "donatePage.securityNote": "Payments are securely processed by Stripe. We never store your card information.",
    "donatePage.summary.title": "Your donation",
    "donatePage.summary.frequency": "Frequency",
    "donatePage.summary.amount": "Amount",
    "donatePage.summary.project": "Project",
    "donatePage.impact.title": "What your gift makes possible",
    "donatePage.impact.1000": "1,000 JPY provides one week of school meals for a child.",
    "donatePage.impact.3000": "3,000 JPY provides textbooks and school supplies for one child.",
    "donatePage.impact.5000": "5,000 JPY covers one month of living essentials for a child.",
    "donatePage.impact.10000": "10,000 JPY contributes to classroom repair materials.",
    "donatePage.impact.default": "Your gift will be directed where it is needed most.",
    "donatePage.back": "← Back to LP"
  }
};

(function () {
  const STORAGE_KEY = "gj-lang";
  const DEFAULT_LANG = "ja";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.lang = lang;

    // Update <title>
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      if (dict[key]) titleEl.textContent = dict[key];
    }

    // Update all [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value == null) return;

      if (el.tagName === "TITLE") {
        el.textContent = value;
      } else if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.tagName === "INPUT" && (el.type === "text" || el.type === "email" || el.type === "number")) {
        el.placeholder = value;
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Update placeholder attributes via data-i18n-placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    // Sync lang toggle active state
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-selected", String(active));
      btn.classList.toggle("active", active);
    });

    // Broadcast so other scripts (donate page) can react
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function init() {
    // Attach click handlers to language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
    // Mobile menu toggle (simple)
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".global-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    }
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose small API for other scripts
  window.GJ_I18N = { getLang, setLang, applyLang, dict: I18N };
})();
