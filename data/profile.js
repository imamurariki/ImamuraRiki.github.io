/*
 * ABOUT ページの内容
 * ------------------------------------------------------------
 * 表示順：プロフィール（名前・生年月日・年齢・略歴）→ Education → Awards & Selections
 * 文章は { en: "英語", ja: "日本語" } の形で書くと EN / JP 切り替えに対応します。
 * 項目が空（[]）のセクションは自動で非表示になります。
 * 公開前の受賞結果や、確認できていない経歴は載せないでください。
 */
window.PROFILE = {
  name: "RIKI IMAMURA", // 日本語名は site.js の nameJa

  // 生年月日（YYYY-MM-DD）。年齢は閲覧日から自動で計算されます
  birthDate: "2004-08-30",

  // 写真を載せる場合：{ src: "images/about/portrait.jpg", alt: { en: "Portrait of Riki Imamura", ja: "RIKI IMAMURA のポートレート" } }
  portrait: null,

  // 略歴（名前・生年月日・年齢の下に表示。構造化データの説明文にも英語版を使用）
  biography: {
    en: [
      "Riki Imamura is a student at Bunka Fashion College and the Open University of Japan. His work explores sustainable fashion through technology, focusing on the design of 3D-printed garments and products, as well as new approaches to clothing production. His projects have received recognition in multiple fashion design competitions in Japan.",
    ],
    ja: [
      "今村吏希は、文化服装学院と放送大学に在学する学生。テクノロジーを活用したサステナブルなファッションに関心を持ち、現在は3Dプリント技術による衣服やプロダクトのデザインと、新しい製造方法の探究に取り組んでいる。これまでに国内の複数のファッションコンテストで受賞・入選している。",
    ],
  },

  // 学歴（時系列順）
  //   date   年月と状態（卒業・入学など）
  //   title  学校の正式名称
  //   detail 学科・課程などの正式名称
  //   note   在学状況など（不要なら省略）
  education: [
    {
      date: { en: "March 2025 — Graduated", ja: "2025年3月 — 卒業" },
      title: { en: "National Institute of Technology (KOSEN), Ariake College", ja: "有明工業高等専門学校" },
      detail: { en: "Department of Creative Engineering, Life and Environmental Science Course", ja: "創造工学科 環境生命コース" },
    },
    {
      date: { en: "April 2025 — Enrolled", ja: "2025年4月 — 入学" },
      title: { en: "Bunka Fashion College", ja: "文化服装学院" },
      detail: { en: "Fashion Creation Department, Garment Creation", ja: "服飾専門課程 服装科" },
      note: { en: "Currently enrolled in the second year", ja: "2年次在学" },
    },
    {
      date: { en: "April 2026 — Transferred into the third year", ja: "2026年4月 — 3年次編入学" },
      title: { en: "The Open University of Japan", ja: "放送大学" },
      detail: { en: "Faculty of Liberal Arts, Department of Liberal Arts, Nature and Environment", ja: "教養学部 教養学科 自然と環境コース" },
      note: { en: "Currently enrolled in the third year", ja: "3年次在学" },
    },
  ],

  // 受賞・選考歴
  //   id     作品ページ（works.js の awards）から参照するためのID。変えないでください
  //   year   活動年（コンテスト名の年ではなく、活動した年）
  //   title  コンテストの正式名称
  //   status 選考状況。公式発表があったら、ここだけを書き換えます
  //          （公表前の結果や賞名は書かないでください）
  //   url    公式ページなど（任意）
  awards: [
    {
      id: "nippori-2026",
      year: "2026",
      title: { en: "Nippori Fashion Design Contest 2026", ja: "日暮里ファッションデザインコンテスト2026" },
      status: { en: "Selected (Finalist)", ja: "入選（ファイナリスト）" },
      url: "https://www.city.arakawa.tokyo.jp/a020/sangyou/nipporicollection/2026ichijishinsakekka.html",
    },
    {
      id: "nfdt-2027",
      year: "2026",
      title: "Next Fashion Designer of Tokyo 2027",
      status: { en: "Passed the First Screening (Awaiting Second Screening Results)", ja: "一次審査通過（二次審査結果待ち）" },
      url: "https://nfdt.metro.tokyo.lg.jp/primary-selection2027_free/",
    },
    {
      id: "ykk-fastening-awards-26",
      year: "2026",
      title: { en: "The 26th YKK FASTENING AWARDS", ja: "第26回 YKKファスニングアワード" },
      status: { en: "Fashion Goods Category — Selected (Finalist)", ja: "ファッショングッズ部門 入選（ファイナリスト）" },
      url: "https://www.ykk.com/fa/award/result/",
    },
    {
      id: "japan-leather-award-2026",
      year: "2026",
      title: { en: "Japan Leather Award 2026", ja: "ジャパンレザーアワード2026" },
      status: { en: "Student Category Best Award and Overall Grand Prix (Double Award Winner)", ja: "学生部門最優秀賞・グランプリ（ダブル受賞）" },
      url: "https://award.jlia.or.jp/2026/winner/",
    },
  ],

  // 展示歴（任意）
  exhibitions: [
    {
      id: "nippori-fashion-design-contest-2026-exhibition",
      year: "2026",
      title: { en: "Nippori Fashion Design Contest 2026 — Public Exhibition", ja: "日暮里ファッションデザインコンテスト2026公開展示会" },
      detail: {
        en: [
          "Nippori Fashion Design Contest 2026 — Exhibition of 40 selected works",
          "Related work: ZERO CUT PATTERN",
          "Tokyo: Flat Nippori (November 13–18, 2026)",
        ],
        ja: [
          "日暮里ファッションデザインコンテスト2026 入選作品展示（40作品）",
          "関連作品：ZERO CUT PATTERN",
          "東京：ふらっとにっぽり（2026年11月13日〜18日）",
        ],
      },
      url: "https://www.city.arakawa.tokyo.jp/a020/sangyou/nipporicollection/2026koukai.html",
    },
    {
      id: "ykk-fastening-creation-2027",
      year: "2026",
      title: { en: "YKK FASTENING CREATION for 2027", ja: "YKK FASTENING CREATION for 2027" },
      detail: {
        en: [
          "26th YKK FASTENING AWARDS — Selected Works Fashion Show",
          "Related work: CURVE CELL BAG",
          "Tokyo: YKK60 Building, 1F AZ1 (October 29–30, 2026)",
          "Osaka: MyDome Osaka, 3F, Halls E & F (October 7–8, 2026)",
        ],
        ja: [
          "第26回YKKファスニングアワード 入選作品ファッションショー",
          "関連作品：CURVE CELL BAG",
          "東京：YKK60ビル 1階 AZ1（2026年10月29日〜30日）",
          "大阪：マイドームおおさか 3階 E・Fホール（2026年10月7日〜8日）",
        ],
      },
      url: "https://www.ykk.com/fa/award/announcement.html",
    },
  ],

  // 論文・発表（任意）
  // 例: { year: "2027", title: "Paper title", detail: { en: "Conference / Journal", ja: "学会・論文誌名" }, url: "https://..." },
  publications: [],

  // 自由に追加できるセクション（ソフトウェア、ブランド活動など）
  // 例: { label: { en: "Software", ja: "ソフトウェア" }, items: [{ year: "2026", title: "Tool name", detail: "...", url: "https://..." }] },
  //     { label: { en: "Statement", ja: "ステートメント" }, text: { en: ["..."], ja: ["..."] } },
  sections: [],
};
