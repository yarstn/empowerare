import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.marketplace": "Marketplace",
  "nav.artists": "Artists",
  "nav.community": "Community",
  "nav.ai": "AI Studio",
  "nav.accessibility": "Accessibility",
  "nav.settings": "Settings",
  "nav.explore": "Explore",
  "cta.exploreCreations": "Explore Creations",
  "cta.startSelling": "Start Selling",
  "cta.supportArtists": "Support Artists",
  "hero.badge": "A marketplace built on belonging",
  "hero.title": "Art that empowers, hands that inspire.",
  "hero.subtitle": "EmpowerArt is a warm, accessible home where artists with disabilities showcase, sell, and grow — supported by community, AI tools, and people like you.",
  "stats.artists": "Artists",
  "stats.earned": "Earned",
  "stats.countries": "Countries",
  "section.featured": "Featured Artists",
  "section.featuredTitle": "Voices behind the work",
  "section.trending": "Trending Now",
  "section.trendingTitle": "Creations the community loves",
  "footer.tagline": "A creative marketplace empowering artists with disabilities to thrive.",
  "footer.discover": "Discover",
  "footer.forArtists": "For Artists",
  "footer.support": "Support",
  "footer.made": "Made with love for inclusive creativity.",
  "a11y.title": "Accessibility",
  "a11y.increase": "Increase text",
  "a11y.reset": "Reset text size",
  "a11y.contrastOn": "Enable high contrast",
  "a11y.contrastOff": "Disable high contrast",
  "a11y.dark": "Dark mode",
  "a11y.light": "Light mode",
  "a11y.language": "Language",
  "skip": "Skip to content",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.marketplace": "السوق",
  "nav.artists": "الفنانون",
  "nav.community": "المجتمع",
  "nav.ai": "استوديو الذكاء",
  "nav.accessibility": "إمكانية الوصول",
  "nav.settings": "الإعدادات",
  "nav.explore": "استكشف",
  "cta.exploreCreations": "استكشف الأعمال",
  "cta.startSelling": "ابدأ البيع",
  "cta.supportArtists": "ادعم الفنانين",
  "hero.badge": "سوق مبني على الانتماء",
  "hero.title": "فن يُمكّن، وأيادٍ تُلهم.",
  "hero.subtitle": "إمباور آرت هو بيت دافئ وسهل الوصول يعرض فيه الفنانون من ذوي الإعاقة أعمالهم ويبيعونها وينمون — بدعم من المجتمع وأدوات الذكاء الاصطناعي وأشخاص مثلك.",
  "stats.artists": "فنان",
  "stats.earned": "أرباح",
  "stats.countries": "دولة",
  "section.featured": "فنانون مميزون",
  "section.featuredTitle": "أصوات خلف الأعمال",
  "section.trending": "الأكثر رواجاً",
  "section.trendingTitle": "إبداعات يحبها المجتمع",
  "footer.tagline": "سوق إبداعي يمكّن الفنانين من ذوي الإعاقة من الازدهار.",
  "footer.discover": "اكتشف",
  "footer.forArtists": "للفنانين",
  "footer.support": "الدعم",
  "footer.made": "صُنع بحب من أجل إبداع شامل للجميع.",
  "a11y.title": "إمكانية الوصول",
  "a11y.increase": "تكبير النص",
  "a11y.reset": "إعادة حجم النص",
  "a11y.contrastOn": "تفعيل التباين العالي",
  "a11y.contrastOff": "إلغاء التباين العالي",
  "a11y.dark": "الوضع الداكن",
  "a11y.light": "الوضع الفاتح",
  "a11y.language": "اللغة",
  "skip": "تخطّ إلى المحتوى",
};

const dicts: Record<Lang, Dict> = { en, ar };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string; dir: "ltr" | "rtl" };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    t: (k) => dicts[lang][k] ?? dicts.en[k] ?? k,
    dir: lang === "ar" ? "rtl" : "ltr",
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
