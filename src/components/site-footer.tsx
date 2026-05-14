import { Link } from "@tanstack/react-router";
import { Heart, Palette } from "lucide-react";

export function SiteFooter() {
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
            A creative marketplace empowering artists with disabilities to thrive.
          </p>
        </div>
        <FooterCol title="Discover" links={[
          { to: "/marketplace", label: "Marketplace" },
          { to: "/artists", label: "Artists" },
          { to: "/community", label: "Workshops" },
        ]} />
        <FooterCol title="For Artists" links={[
          { to: "/ai-studio", label: "AI Studio" },
          { to: "/admin", label: "Admin" },
          { to: "/settings", label: "Settings" },
        ]} />
        <FooterCol title="Support" links={[
          { to: "/accessibility", label: "Accessibility" },
          { to: "/community", label: "Donate" },
          { to: "/", label: "Contact" },
        ]} />
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        Made with <Heart className="inline h-4 w-4 fill-secondary text-secondary" /> for inclusive creativity.
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
