import { createFileRoute } from "@tanstack/react-router";
import { User, Accessibility, Bell, Globe, CreditCard, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — EmpowerArt" },
      { name: "description", content: "Profile, accessibility, notifications, language, payments and privacy." },
      { property: "og:title", content: "EmpowerArt Settings" },
      { property: "og:description", content: "Personalize your EmpowerArt experience." },
    ],
  }),
  component: Settings,
});

const sections = [
  { id: "profile", icon: User, title: "Profile" },
  { id: "a11y", icon: Accessibility, title: "Accessibility" },
  { id: "notif", icon: Bell, title: "Notifications" },
  { id: "lang", icon: Globe, title: "Language" },
  { id: "pay", icon: CreditCard, title: "Payments" },
  { id: "sec", icon: Shield, title: "Security" },
];

function Settings() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">Settings</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">Make EmpowerArt yours</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Settings sections" className="space-y-1">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">
              <s.icon className="h-4 w-4 text-teal" /> {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-6">
          <Card id="profile" title="Profile">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Display name" defaultValue="Maya Okonkwo" />
              <Field label="Pronouns" defaultValue="she/her" />
              <Field label="Email" defaultValue="maya@empowerart.app" />
              <Field label="Location" defaultValue="Lagos, Nigeria" />
            </div>
          </Card>

          <Card id="a11y" title="Accessibility preferences">
            <Toggle label="High contrast mode" desc="A bolder palette for low-vision users." />
            <Toggle label="Reduce motion" desc="Disable subtle animations." defaultChecked />
            <Toggle label="Always show captions" desc="Captions on all videos by default." defaultChecked />
            <Toggle label="Voice navigation" desc="Browse hands-free." />
          </Card>

          <Card id="notif" title="Notifications">
            <Toggle label="New sales" defaultChecked />
            <Toggle label="Workshop reminders" defaultChecked />
            <Toggle label="Community replies" />
          </Card>

          <Card id="lang" title="Language">
            <Field label="Preferred language" defaultValue="English" />
          </Card>

          <Card id="pay" title="Payment methods">
            <div className="rounded-2xl bg-muted/60 p-4 text-sm">Visa ending in 4422 — default</div>
            <Button variant="outline" className="mt-3 rounded-full border-2 border-primary text-primary">Add payment method</Button>
          </Card>

          <Card id="sec" title="Security & privacy">
            <Toggle label="Two-factor authentication" defaultChecked />
            <Toggle label="Show profile in search" defaultChecked />
            <Button variant="ghost" className="mt-2 text-destructive hover:bg-destructive/10">Delete account</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
      <h2 className="mb-5 font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} defaultValue={defaultValue} className="mt-1.5 rounded-xl" />
    </div>
  );
}

function Toggle({ label, desc, defaultChecked }: { label: string; desc?: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-muted/40 p-4">
      <div>
        <p className="font-medium">{label}</p>
        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
