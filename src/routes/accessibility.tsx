import { createFileRoute } from "@tanstack/react-router";
import { Mic, Volume2, Hand, Type, Contrast, Keyboard, Eye, ScanLine } from "lucide-react";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility — EmpowerArt" },
      { name: "description", content: "Voice navigation, text-to-speech, sign language support, screen reader compatibility, and more." },
      { property: "og:title", content: "Accessibility on EmpowerArt" },
      { property: "og:description", content: "Built so everyone can browse, sell, and connect." },
    ],
  }),
  component: AccessibilityPage,
});

const features = [
  { icon: Mic, title: "Voice navigation", desc: "Move through the platform hands-free with simple voice commands." },
  { icon: Volume2, title: "Text-to-speech", desc: "Listen to any product description, story, or article aloud." },
  { icon: Hand, title: "Sign language support", desc: "Key videos include ASL and BSL interpretation." },
  { icon: Type, title: "Adjustable text size", desc: "Scale text up to 140% without losing layout." },
  { icon: Contrast, title: "High contrast mode", desc: "A bolder palette for low-vision readers." },
  { icon: Keyboard, title: "Full keyboard navigation", desc: "Every action reachable without a mouse." },
  { icon: Eye, title: "Screen reader friendly", desc: "Semantic HTML, ARIA labels, alt text on every image." },
  { icon: ScanLine, title: "Reduced motion", desc: "Respects your system's reduce-motion preference." },
];

function AccessibilityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">Accessibility</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">Built so everyone belongs</h1>
        <p className="mt-3 text-lg text-muted-foreground">Accessibility isn't a feature on EmpowerArt — it's the foundation. Use the floating tool in the bottom-right corner to adjust your experience anytime.</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-teal-deep">
              <f.icon className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold">{f.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-[2.5rem] bg-gradient-cta p-10 text-primary-foreground shadow-card md:p-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Our accessibility commitment</h2>
            <p className="mt-3 text-primary-foreground/90">We test with disabled users, follow WCAG 2.2 AA, and ship improvements every month. If something isn't working for you, tell us.</p>
          </div>
          <ul className="space-y-3 text-primary-foreground/95">
            {["WCAG 2.2 AA conformance", "Tested with NVDA, JAWS, VoiceOver", "Captions on every video", "Plain-language content guidelines"].map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-2xl bg-cream/10 px-4 py-3 backdrop-blur">
                <span className="grid h-2 w-2 rounded-full bg-cream" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
