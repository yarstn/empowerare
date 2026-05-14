import { Link, useRouterState } from "@tanstack/react-router";
import { Palette, Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/marketplace", label: t("nav.marketplace") },
    { to: "/artists", label: t("nav.artists") },
    { to: "/community", label: t("nav.community") },
    { to: "/ai-studio", label: t("nav.ai") },
    { to: "/accessibility", label: t("nav.accessibility") },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-cta text-primary-foreground shadow-soft">
            <Palette className="h-5 w-5" />
          </span>
          EmpowerArt
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                path === n.to && "bg-secondary text-secondary-foreground"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex h-9 items-center gap-1.5 rounded-full bg-muted px-3 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <Button asChild className="rounded-full bg-gradient-cta text-primary-foreground shadow-soft hover:opacity-95">
            <Link to="/marketplace">{t("nav.explore")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="grid h-10 w-10 place-items-center rounded-full bg-muted text-xs font-bold"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full bg-muted"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-4" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium",
                  path === n.to ? "bg-secondary text-secondary-foreground" : "text-foreground"
                )}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/settings" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base">
              {t("nav.settings")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
