import { Link, useRouterState } from "@tanstack/react-router";
import { Palette, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/artists", label: "Artists" },
  { to: "/community", label: "Community" },
  { to: "/ai-studio", label: "AI Studio" },
  { to: "/accessibility", label: "Accessibility" },
];

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
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
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/settings">Settings</Link>
          </Button>
          <Button asChild className="rounded-full bg-gradient-cta text-primary-foreground shadow-soft hover:opacity-95">
            <Link to="/marketplace">Explore</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full bg-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
              Settings
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
