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
          <p className="text-sm text-muted-foreground">
            {t(
              "A creative marketplace empowering artists with disabilities to thrive.",
              "سوق إبداعي يُمكّن الفنانين من ذوي الإعاقة من الازدهار."
            )}
          </p>
        </div>
        <FooterCol title={t("Discover", "اكتشف")} links={[
          { to: "/marketplace", label: t("Marketplace", "السوق") },
          { to: "/artists", label: t("Artists", "الفنانون") },
          { to: "/community", label: t("Community", "المجتمع") },
        ]} />
        <FooterCol title={t("For Artists", "للفنانين")} links={[
          { to: "/ai-studio", label: t("AI Studio", "استوديو الذكاء") },
          { to: "/admin", label: t("Admin", "لوحة الإدارة") },
          { to: "/settings", label: t("Settings", "الإعدادات") },
        ]} />
        <FooterCol title={t("Support", "الدعم")} links={[
          { to: "/accessibility", label: t("Accessibility", "إمكانية الوصول") },
          { to: "/community", label: t("Donate", "تبرّع") },
          { to: "/", label: t("Contact", "تواصل") },
        ]} />
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        {t("Made with love for inclusive creativity.", "صُنع بحبّ من أجل إبداع شامل للجميع.")}{" "}
        <Heart className="inline h-4 w-4 fill-secondary text-secondary" />
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
