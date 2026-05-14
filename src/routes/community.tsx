import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Users, MessageCircle, Heart, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Workshops — EmpowerArt" },
      { name: "description", content: "Live art sessions, workshops, discussions and donation campaigns." },
      { property: "og:title", content: "EmpowerArt Community" },
      { property: "og:description", content: "Workshops, sessions and ways to support disabled artists." },
    ],
  }),
  component: Community,
});

const events = [
  { day: "FRI 12", title: "Watercolor with Maya", host: "Maya Okonkwo", time: "6:00 PM · Live", spots: "12 spots left", tag: "Workshop" },
  { day: "SAT 13", title: "Clay basics, hand-built", host: "Luca Ferreira", time: "3:00 PM · Live", spots: "Sold out — waitlist", tag: "Workshop" },
  { day: "WED 17", title: "Selling digital prints", host: "Amira Said", time: "5:30 PM · Online", spots: "Open seats", tag: "Talk" },
];

const posts = [
  { who: "Noor K.", what: "Just shipped my 100th order — thank you all 🌸", emoji: "🌸", likes: 124, replies: 18 },
  { who: "Daniel R.", what: "Looking for blind sculptors to collaborate on a tactile exhibit. DM me!", emoji: "🌊", likes: 42, replies: 9 },
  { who: "Maya O.", what: "Sharing my morning palette — what does it sound like to you?", emoji: "🌻", likes: 87, replies: 23 },
];

function Community() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">Community & Workshops</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">A place to learn and to belong</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Live sessions, peer discussions, and donation drives — all hosted by and for our artists.</p>
      </header>

      <section className="mb-14">
        <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-semibold"><Calendar className="h-6 w-6 text-teal" /> Upcoming sessions</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
              <div className="bg-gradient-warm p-5">
                <p className="font-display text-3xl font-semibold text-teal-deep">{e.day}</p>
                <span className="mt-1 inline-block rounded-full bg-card/80 px-3 py-0.5 text-xs font-medium">{e.tag}</span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground">with {e.host}</p>
                <p className="flex items-center gap-1 text-sm"><Video className="h-4 w-4 text-teal" /> {e.time}</p>
                <p className="text-xs text-muted-foreground">{e.spots}</p>
                <Button className="w-full rounded-full bg-gradient-cta text-primary-foreground">Register</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section>
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-semibold"><Users className="h-6 w-6 text-teal" /> Community feed</h2>
          <div className="space-y-4">
            {posts.map((p) => (
              <article key={p.who} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-2xl">{p.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{p.who}</p>
                    <p className="mt-1 text-foreground/90">{p.what}</p>
                    <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary"><Heart className="h-4 w-4" /> {p.likes}</button>
                      <button className="flex items-center gap-1 hover:text-primary"><MessageCircle className="h-4 w-4" /> {p.replies}</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-gradient-cta p-6 text-primary-foreground shadow-card">
            <Heart className="h-7 w-7" />
            <h3 className="mt-3 font-display text-xl font-semibold">Donate to the artist fund</h3>
            <p className="mt-2 text-sm text-primary-foreground/90">Helps cover materials, shipping, and accessibility tools for new artists.</p>
            <div className="mt-4 flex gap-2">
              {["$10", "$25", "$50"].map((a) => (
                <button key={a} className="flex-1 rounded-full bg-cream/15 py-2 text-sm font-semibold backdrop-blur hover:bg-cream/25">{a}</button>
              ))}
            </div>
            <Button className="mt-3 w-full rounded-full bg-cream text-primary hover:bg-peach">Give</Button>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">Active campaigns</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                { t: "Adaptive easels for 30 artists", p: 72 },
                { t: "Braille catalog printing", p: 41 },
                { t: "Tactile exhibit, Lisbon 2026", p: 18 },
              ].map((c) => (
                <li key={c.t}>
                  <div className="flex justify-between"><span>{c.t}</span><span className="text-muted-foreground">{c.p}%</span></div>
                  <div className="mt-1 h-2 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-cta" style={{ width: `${c.p}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
