import { createFileRoute } from "@tanstack/react-router";
import { Users, DollarSign, Heart, Handshake, TrendingUp, Eye } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — EmpowerArt" },
      { name: "description", content: "Manage artists, products, partnerships and analytics." },
      { property: "og:title", content: "EmpowerArt Admin" },
      { property: "og:description", content: "Platform analytics and management." },
    ],
  }),
  component: Admin,
});

function Admin() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Admin</p>
          <h1 className="mt-2 font-display text-5xl font-semibold">Platform overview</h1>
        </div>
        <p className="text-sm text-muted-foreground">Last updated 2 minutes ago</p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {[
          { icon: Users, label: "Total artists", value: "1,240", trend: "+34 this week" },
          { icon: DollarSign, label: "Total sales", value: "$842k", trend: "+12% MoM" },
          { icon: Heart, label: "Donations", value: "$58k", trend: "+8% MoM" },
          { icon: Handshake, label: "Partnerships", value: "27", trend: "3 pending" },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-teal-deep"><s.icon className="h-5 w-5" /></span>
              <span className="text-xs text-teal">{s.trend}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{s.label}</p>
            <p className="font-display text-3xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><TrendingUp className="h-5 w-5 text-teal" /> Sales last 12 weeks</h2>
            <span className="text-sm text-muted-foreground">All categories</span>
          </div>
          <div className="flex h-56 items-end gap-2">
            {[40, 55, 48, 62, 70, 58, 75, 82, 68, 90, 88, 96].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xl bg-gradient-cta" style={{ height: `${h}%`, opacity: 0.5 + i / 24 }} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
          <h2 className="mb-4 font-display text-xl font-semibold">Pending product approvals</h2>
          <ul className="space-y-3">
            {[
              { t: "Wovenly Scarf #04", a: "Noor K." },
              { t: "Lake Series III", a: "Maya O." },
              { t: "Clay vessel, ribbed", a: "Luca F." },
            ].map((p) => (
              <li key={p.t} className="flex items-center justify-between rounded-2xl bg-muted/60 p-3 text-sm">
                <div>
                  <p className="font-medium">{p.t}</p>
                  <p className="text-xs text-muted-foreground">by {p.a}</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-teal-deep">Approve</button>
                  <button className="rounded-full bg-card px-3 py-1 text-xs font-semibold">Review</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-2">
          <h2 className="mb-4 font-display text-xl font-semibold">Top performing artists</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr><th className="pb-3">Artist</th><th className="pb-3">Sales</th><th className="pb-3">Revenue</th><th className="pb-3">Rating</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { n: "Amira Said", s: 211, r: "$48k", g: 5.0 },
                { n: "Noor Khan", s: 167, r: "$32k", g: 4.9 },
                { n: "Maya Okonkwo", s: 142, r: "$36k", g: 4.9 },
                { n: "Luca Ferreira", s: 98, r: "$24k", g: 4.8 },
              ].map((row) => (
                <tr key={row.n}><td className="py-3 font-medium">{row.n}</td><td>{row.s}</td><td>{row.r}</td><td>{row.g}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold"><Eye className="h-5 w-5 text-teal" /> Most viewed</h2>
          <ol className="space-y-3 text-sm">
            {["Sunrise Over Stillness", "Echoes in Color", "Tactile Dreams", "Woven Light"].map((t, i) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-cta text-xs font-bold text-primary-foreground">{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
