import { useEffect, useState } from "react";
import { Accessibility, Moon, Sun, Type, Contrast, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [dark, setDark] = useState(false);
  const { t, lang, setLang, dir } = useI18n();

  useEffect(() => {
    document.documentElement.style.fontSize = `${size}%`;
  }, [size]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => {
    document.documentElement.style.filter = contrast ? "contrast(1.25)" : "";
  }, [contrast]);

  const sideClass = dir === "rtl" ? "left-5" : "right-5";
  const alignClass = dir === "rtl" ? "items-start" : "items-end";
  const title = t("Accessibility", "إمكانية الوصول");

  return (
    <div className={`fixed bottom-5 z-50 flex flex-col gap-2 ${sideClass} ${alignClass}`}>
      {open && (
        <div className="w-64 rounded-2xl border border-border bg-card p-4 shadow-card" role="region" aria-label={title}>
          <p className="mb-3 font-display text-sm font-semibold text-foreground">{title}</p>
          <div className="space-y-2 text-sm">
            <button onClick={() => setSize((s) => Math.min(140, s + 10))} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Type className="h-4 w-4" /> {t("Increase text", "تكبير النص")} ({size}%)
            </button>
            <button onClick={() => setSize(100)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Type className="h-4 w-4" /> {t("Reset text size", "إعادة حجم النص")}
            </button>
            <button onClick={() => setContrast((c) => !c)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Contrast className="h-4 w-4" /> {contrast ? t("Disable high contrast", "إلغاء التباين العالي") : t("Enable high contrast", "تفعيل التباين العالي")}
            </button>
            <button onClick={() => setDark((d) => !d)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? t("Light mode", "الوضع الفاتح") : t("Dark mode", "الوضع الداكن")}
            </button>
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Languages className="h-4 w-4" /> {t("Language", "اللغة")}: {lang === "en" ? "English → العربية" : "العربية → English"}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={title}
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-cta text-primary-foreground shadow-card transition-transform hover:scale-105"
      >
        <Accessibility className="h-6 w-6" />
      </button>
    </div>
  );
}
