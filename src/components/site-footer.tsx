import { Link } from "@tanstack/react-router";
import { Heart, Palette } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border/60 bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-cta text-primary-foreground">
              <Palette className="h-5 w-5" />
            </span>
            EmpowerArt
          </div>
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>
        <FooterCol title={t("footer.discover")} links={[
          { to: "/marketplace", label: t("nav.marketplace") },
          { to: "/artists", label: t("nav.artists") },
          { to: "/community", label: t("nav.community") },
        ]} />
        <FooterCol title={t("footer.forArtists")} links={[
          { to: "/ai-studio", label: t("nav.ai") },
          { to: "/admin", label: "Admin" },
          { to: "/settings", label: t("nav.settings") },
        ]} />
        <FooterCol title={t("footer.support")} links={[
          { to: "/accessibility", label: t("nav.accessibility") },
          { to: "/community", label: "Donate" },
          { to: "/", label: "Contact" },
        ]} />
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        {t("footer.made")} <Heart className="inline h-4 w-4 fill-secondary text-secondary" />
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 font-display text-base font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
