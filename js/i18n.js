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
    "nav.donate": "今すぐ寄付する",

    "hero.eyebrow": "認定NPO法人グローブジャングル",
    "hero.title": "<span class=\"hero-title-line\">HAPPYの連鎖を、</span><span class=\"hero-title-line\">一緒に広げよう</span>",
    "hero.lead": "つながっている同じ空の下、<br>笑い合い、応援しあえる社会へ。",
    "hero.sub": "くっくま孤児院から始まる、<br>カンボジアの次世代リーダーたちの物語",
    "hero.ctaPrimary": "子供の未来を支援する",
    "hero.ctaSecondary": "ストーリーを見る",

    "featureBar.item1": "寄付を100%現場へ",
    "featureBar.item2": "現地のリアルを届ける",
    "featureBar.item3": "開かれた運営体制",

    "story.eyebrow": "STORY",
    "story.title": "くっくま孤児院から始まる、<br>未来のリーダーたち",
    "story.card1.icon": "🏠",
    "story.card1.title": "くっくま孤児院",
    "story.card1.body": "22人の子どもたちが暮らす家。毎日の食事、教育、医療を提供し、子どもたちが自立できるまでサポートしています。",
    "story.card2.icon": "🌅",
    "story.card2.title": "毎朝5時からの挑戦",
    "story.card2.body": "子どもたちは毎朝5時に起きて、カンボジア伝統舞踊を練習。学校の勉強と両立しながら、日々頑張っています。",
    "story.card3.icon": "🎓",
    "story.card3.title": "夢を実現した卒業生",
    "story.card3.body": "ある子は10年かけて税理士補助の資格を取り、マネージャーに。ある子は大学で医学を学び、医者を目指しています。",
    "story.quote": "孤児院育ちでも、医者になれる。<br>税理士になれる。先生になれる。<br><br>彼らは、カンボジアの次世代のリーダーです。",

    "concept.eyebrow": "CONCEPT",
    "concept.title": "すべての子どもに<br>「当たり前の幸せ」を",
    "concept.lead": "私たちは、これらを「特権」ではなく「当たり前の幸せ」にすることを目指しています。",
    "concept.item1.icon": "🍚",
    "concept.item1.title": "食",
    "concept.item1.body": "おなかいっぱい食べられること。栄養のある食事で、子どもたちの成長を支えます。",
    "concept.item2.icon": "📚",
    "concept.item2.title": "学び",
    "concept.item2.body": "子どもが教育を受けられること。学ぶ楽しさと、未来への可能性を広げます。",
    "concept.item3.icon": "👔",
    "concept.item3.title": "仕事",
    "concept.item3.body": "働く環境が整っていること。自立して生きる力を育みます。",
    "concept.item4.icon": "✨",
    "concept.item4.title": "夢",
    "concept.item4.body": "未来に夢や希望を持てること。一人ひとりの夢を全力で応援します。",
    "concept.item5.icon": "💛",
    "concept.item5.title": "愛",
    "concept.item5.body": "自由に人を愛し、愛情を受け取ること。温かいつながりの中で育ちます。",

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
    "support.stat1.unit": "年",
    "support.stat1.label": "2005年から続く支援活動",
    "support.stat2.unit": "+",
    "support.stat2.label": "教育プログラムで<br>支援した子どもたち",
    "support.stat3.unit": "人",
    "support.stat3.label": "くっくま孤児院で<br>暮らす子どもたち",
    "support.stat4.unit": "校+",
    "support.stat4.label": "学校建設・修繕支援",
    "support.stat5.unit": "人",
    "support.stat5.label": "2024年度の<br>奨学金支援",
    "support.stat6.label": "認定NPO法人",
    "support.stat6.prefix": "上位 ",

    "moments.eyebrow": "EVERYDAY MOMENTS",
    "moments.title": "子どもたちの日々",

    "donate.eyebrow": "Changes Lives Today.",
    "donate.title": "今、最も必要な支援を",
    "donate.lead": "現場では毎日、新しいニーズが生まれます。緊急で具体的なニーズにリアルタイムで対応するプロジェクト型寄付が重要です。",
    "donate.action": "支援する",
    "donate.item1.icon": "🏫",
    "donate.item1.title": "学校の屋根修繕",
    "donate.item1.goal": "目標: <span class=\"amount-number\">€3,200</span>（約<span class=\"amount-number\">¥500,000</span>）",
    "donate.item1.body": "雨漏りするトタン屋根を修理し、雨に濡れずに勉強できる環境を作ります。",
    "donate.item2.icon": "🚻",
    "donate.item2.title": "学校のトイレ建設",
    "donate.item2.goal": "目標: <span class=\"amount-number\">€2,500</span>（約<span class=\"amount-number\">¥400,000</span>）",
    "donate.item2.body": "安全で衛生的なトイレを建設。特に女子生徒の教育継続に不可欠です。",
    "donate.item3.icon": "🍚",
    "donate.item3.title": "子どもたちへの毎日の食事",
    "donate.item3.goal": "継続的支援",
    "donate.item3.body": "朝ごはんを食べずに学校に来る子どもたちへ、栄養のある食事を提供する給食プロジェクト。",
    "donate.item3.amount": "継続募集中",
    "donate.item4.icon": "💡",
    "donate.item4.title": "最も必要なところへ",
    "donate.item4.goal": "金額自由",
    "donate.item4.body": "最も緊急性の高いニーズにあなたの寄付を充てさせていただきます。",
    "donate.item4.amount": "金額自由",

    "report.eyebrow": "REPORT",
    "report.title": "隠れたコストなし。<br>正直なインパクトのみ。",
    "report.body": "あなたには、お金がどのように使われているかを正確に知る権利があると、私たちは信じています。",
    "report.featureTitle": "認定NPO法人",
    "report.featureBody": "日本のNPOのわずか3%にしか認められない基準をクリアしています。",
    "report.orgLabel": "認定NPO法人",
    "report.link1": "2024年度 活動報告書",
    "report.link2": "財務諸表の全文",
    "report.link3": "現場からの日々の写真",
    "report.link4": "スタッフブログ",

    "finalCta.title": "子どもたちが、<br>待っています。",
    "finalCta.body": "あなたの支援が、子どもたちの「当たり前の幸せ」を創ります。<br>一緒に、HAPPYの連鎖を広げませんか？",
    "finalCta.ctaPrimary": "月額サポーターになる",
    "finalCta.ctaSecondary": "プロジェクトに寄付する",
    "finalCta.ctaTertiary": "現地を訪れる",

    "footer.orgName": "認定特定非営利活動法人 Globe Jungle",
    "footer.tagline": "カンボジアで21年間、子どもたちの未来を支援しています。",
    "footer.contactHeading": "お問い合わせ",
    "footer.contactTel": "TEL: 080-7535-6072",
    "footer.contactJp": "日本支部：<br>大阪府吹田市垂水町三丁目16-39 グラントォータス",
    "footer.contactKh": "カンボジア事務所：<br>#154, st369, Chbar Ampov II,<br>Khan Chbar Ampov, Phnom Penh, Cambodia",
    "footer.linksHeading": "リンク",
    "footer.link1": "私たちの想い",
    "footer.link2": "支援プロジェクト",
    "footer.link3": "スタッフブログ",
    "footer.link4": "お問い合わせ",
    "footer.socialHeading": "ソーシャルメディア",
    "footer.copyright": "© 2026 NPO法人 GLOBE JUNGLE. All rights reserved.",

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
    "hero.title": "<span class=\"hero-title-line\">Join the Circle</span><span class=\"hero-title-line\">of Happiness.</span>",
    "hero.lead": "Under the same sky, a society where we can<br>laugh and cheer for each other.",
    "hero.sub": "The story of Cambodia's next-generation leaders,<br>beginning at CCMHA Orphanage.",
    "hero.ctaPrimary": "Support a Child's Future",
    "hero.ctaSecondary": "See Our Story",

    "featureBar.item1": "100% to the field",
    "featureBar.item2": "Real stories from the ground",
    "featureBar.item3": "Open, transparent operations",

    "story.eyebrow": "STORY",
    "story.title": "Future Leaders, Starting<br>from CCMHA Orphanage",
    "story.card1.icon": "🏠",
    "story.card1.title": "CCMHA Orphanage",
    "story.card1.body": "Cambodia's Children Make the Heaven Association (CCMHA) — a home for 22 children. We provide daily meals, education, and healthcare, supporting each child until they can stand on their own.",
    "story.card2.icon": "🌅",
    "story.card2.title": "Challenges from 5 a.m.",
    "story.card2.body": "Every morning at 5, the children practice Cambodian traditional dance. They balance their studies and training with passion.",
    "story.card3.icon": "🎓",
    "story.card3.title": "Graduates Living Their Dreams",
    "story.card3.body": "One spent 10 years earning a tax accountant qualification and became a manager. Another is studying medicine to become a doctor.",
    "story.quote": "Even if raised in an orphanage, you can become a doctor.<br>An accountant. A teacher.<br><br>They are Cambodia's next generation of leaders.",

    "concept.eyebrow": "CONCEPT",
    "concept.title": "Everyday Happiness<br>for Every Child",
    "concept.lead": "We aim to turn these from privileges into everyday happiness for every child.",
    "concept.item1.icon": "🍚",
    "concept.item1.title": "Food",
    "concept.item1.body": "Being able to eat until full. Nutritious meals to support children's growth.",
    "concept.item2.icon": "📚",
    "concept.item2.title": "Learning",
    "concept.item2.body": "Access to education — opening up the joy of learning and possibilities for the future.",
    "concept.item3.icon": "👔",
    "concept.item3.title": "Work",
    "concept.item3.body": "A safe working environment. Growing the strength to live independently.",
    "concept.item4.icon": "✨",
    "concept.item4.title": "Dreams",
    "concept.item4.body": "The freedom to dream about the future. We cheer on each child's hopes.",
    "concept.item5.icon": "💛",
    "concept.item5.title": "Love",
    "concept.item5.body": "To love freely and to be loved. Growing up in warm, meaningful connections.",

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
    "support.stat1.unit": " yrs",
    "support.stat1.label": "Supporting children since 2005",
    "support.stat2.unit": "+",
    "support.stat2.label": "Children reached by our<br>education programs",
    "support.stat3.unit": "",
    "support.stat3.label": "Children living at<br>CCMHA Orphanage",
    "support.stat4.unit": "+",
    "support.stat4.label": "Schools built or renovated",
    "support.stat5.unit": "",
    "support.stat5.label": "Scholarship recipients<br>in FY2024",
    "support.stat6.label": "Certified NPO",
    "support.stat6.prefix": "Top ",

    "moments.eyebrow": "EVERYDAY MOMENTS",
    "moments.title": "The Children's Everyday",

    "donate.eyebrow": "Changes Lives Today.",
    "donate.title": "The Support Needed Right Now",
    "donate.lead": "New needs arise on the ground every day. Project-based giving with real-time transparency is essential to respond to urgent, concrete needs.",
    "donate.action": "Support",
    "donate.item1.icon": "🏫",
    "donate.item1.title": "School Roof Repair",
    "donate.item1.goal": "Goal: <span class=\"amount-number\">€3,200</span> (~<span class=\"amount-number\">¥500,000</span>)",
    "donate.item1.body": "Fixing the leaking tin roof so children can study without getting wet in the rain.",
    "donate.item2.icon": "🚻",
    "donate.item2.title": "School Toilet Construction",
    "donate.item2.goal": "Goal: <span class=\"amount-number\">€2,500</span> (~<span class=\"amount-number\">¥400,000</span>)",
    "donate.item2.body": "Building safe, sanitary toilets — essential for girls to continue their education.",
    "donate.item3.icon": "🍚",
    "donate.item3.title": "Daily Meals for Children",
    "donate.item3.goal": "Ongoing support",
    "donate.item3.body": "A school-meals project providing nutritious food to children who come to school without breakfast.",
    "donate.item3.amount": "Ongoing",
    "donate.item4.icon": "💡",
    "donate.item4.title": "Where Needed Most",
    "donate.item4.goal": "Any amount",
    "donate.item4.body": "We'll direct your gift to the most urgent need right now.",
    "donate.item4.amount": "Any amount",

    "report.eyebrow": "REPORT",
    "report.title": "No Hidden Costs.<br>Just Honest Impact.",
    "report.body": "We believe you have the right to know exactly how your money is being used.",
    "report.featureTitle": "Certified NPO",
    "report.featureBody": "We meet a standard that only 3% of Japanese NPOs achieve.",
    "report.orgLabel": "Certified NPO",
    "report.link1": "2024 Annual Report",
    "report.link2": "Full Financial Statements",
    "report.link3": "Daily Photos from the Field",
    "report.link4": "Staff Blog",

    "finalCta.title": "The children are<br>waiting for you.",
    "finalCta.body": "Your support creates everyday happiness for children.<br>Let's spread the circle of HAPPY together.",
    "finalCta.ctaPrimary": "Become a Monthly Supporter",
    "finalCta.ctaSecondary": "Donate to a Project",
    "finalCta.ctaTertiary": "Visit the Site",

    "footer.orgName": "Certified NPO — Globe Jungle",
    "footer.tagline": "Supporting children's futures in Cambodia for 21 years.",
    "footer.contactHeading": "Contact",
    "footer.contactTel": "TEL: 080-7535-6072",
    "footer.contactJp": "Japan office:<br>3-16-39 Tarumi-cho, Suita, Osaka, Grand Otas",
    "footer.contactKh": "Cambodia office:<br>#154, st369, Chbar Ampov II,<br>Khan Chbar Ampov, Phnom Penh, Cambodia",
    "footer.linksHeading": "Links",
    "footer.link1": "Our Vision",
    "footer.link2": "Support Projects",
    "footer.link3": "Staff Blog",
    "footer.link4": "Contact Us",
    "footer.socialHeading": "Social Media",
    "footer.copyright": "© 2026 NPO GLOBE JUNGLE. All rights reserved.",

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
