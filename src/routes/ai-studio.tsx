import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, TrendingUp, Tag, MessageSquare, BarChart3, Wand2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Route = createFileRoute("/ai-studio")({
  head: () => ({
    meta: [
      { title: "AI Studio — EmpowerArt" },
      { name: "description", content: "AI tools for pricing, descriptions, market trends and marketing — built to help artists grow." },
      { property: "og:title", content: "EmpowerArt AI Studio" },
      { property: "og:description", content: "AI assistance to grow your art business." },
    ],
  }),
  component: AIStudio,
});

function AIStudio() {
  const [desc, setDesc] = useState("");
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal"><Sparkles className="h-4 w-4" /> AI Studio</p>
          <h1 className="mt-2 font-display text-5xl font-semibold">Grow your craft, at your pace</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Smart tools that suggest pricing, write descriptions, and surface trends — so you can focus on the art.</p>
        </div>
      </header>

      {/* Stat cards */}
      <div className="mb-10 grid gap-4 md:grid-cols-4">
        {[
          { icon: TrendingUp, label: "Suggested price", value: "$240–$310", note: "+18% vs last month" },
          { icon: BarChart3, label: "Market demand", value: "High", note: "Paintings · Acrylic" },
          { icon: Tag, label: "Top tags", value: "calming, sunrise", note: "Trending this week" },
          { icon: Sparkles, label: "Engagement", value: "+38%", note: "from new captions" },
        ].map((c) => (
          <div key={c.label} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
            <c.icon className="h-6 w-6 text-teal" />
            <p className="mt-3 text-sm text-muted-foreground">{c.label}</p>
            <p className="font-display text-2xl font-semibold">{c.value}</p>
            <p className="text-xs text-muted-foreground">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Description generator */}
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">Product description generator</h2>
          </div>
          <label className="text-sm font-medium" htmlFor="d">Describe your artwork</label>
          <Textarea
            id="d"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Acrylic painting of a quiet sunrise over a misty lake..."
            className="mt-2 min-h-32 rounded-2xl"
          />
          <Button className="mt-4 rounded-full bg-gradient-cta text-primary-foreground shadow-soft">Generate description</Button>

          <div className="mt-6 rounded-2xl bg-gradient-warm p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">AI suggestion</p>
            <p className="mt-2 leading-relaxed text-foreground/90">
              "A meditative acrylic study capturing the first soft light over still water. Hand-painted on stretched cotton canvas, finished with a museum-grade matte varnish — a quiet companion for any wall that wants to breathe."
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">Recommendations</h2>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              { t: "Try a smaller print series", d: "Buyers in your audience search for $80–$120 wall pieces." },
              { t: "Add 3 more tags", d: '"calming", "earth tones", "minimalist" trend up 24%.' },
              { t: "Schedule for Sunday", d: "Your last 4 Sunday posts had 2.3× engagement." },
            ].map((r) => (
              <li key={r.t} className="rounded-2xl bg-muted/60 p-4">
                <p className="font-semibold">{r.t}</p>
                <p className="mt-1 text-muted-foreground">{r.d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Captions */}
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-3">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">Marketing captions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Slow mornings deserve quiet color. New piece, in the shop today. 🌅",
              "Made by hand. Made on my own time. Made with intention. ✨",
              "Every sale supports an artist directly. Find your next favorite at EmpowerArt. 💛",
            ].map((c, i) => (
              <div key={i} className="rounded-2xl bg-gradient-warm p-4 text-sm leading-relaxed text-foreground/90">{c}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
