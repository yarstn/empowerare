import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Users, TrendingUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/artwork-card";
import { artworks, artists } from "@/lib/data";
import heroArt from "@/assets/hero-art.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EmpowerArt — A creative marketplace for artists with disabilities" },
      { name: "description", content: "Discover, support and buy art from talented artists with disabilities. Inclusive, accessible, and human-centered." },
      { property: "og:title", content: "EmpowerArt" },
      { property: "og:description", content: "An inclusive marketplace empowering artists with disabilities." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-peach/40 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sage/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
              <Sparkles className="h-4 w-4" /> A marketplace built on belonging
            </span>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
              Art that empowers, hands that inspire.
            </h1>
            <p className="max-w-xl text-balance text-lg text-muted-foreground">
              EmpowerArt is a warm, accessible home where artists with disabilities showcase, sell, and grow — supported by community, AI tools, and people like you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-cta px-7 text-base text-primary-foreground shadow-soft hover:opacity-95">
                <Link to="/marketplace">Explore Creations <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary px-7 text-base text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/ai-studio">Start Selling</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-7 text-base text-primary">
                <Link to="/community">Support Artists <Heart className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <dl className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "1.2k+", v: "Artists" },
                { k: "$840k", v: "Earned" },
                { k: "62", v: "Countries" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-card/70 p-4 text-center backdrop-blur">
                  <dt className="font-display text-2xl font-bold text-primary">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] bg-card shadow-card">
              <img src={heroArt} alt="Diverse artists with disabilities creating art together" width={1536} height={1152} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sage text-2xl">🌻</span>
                <div>
                  <p className="text-sm font-semibold">Maya just sold</p>
                  <p className="text-xs text-muted-foreground">"Sunrise Over Stillness"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured artists */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">Featured Artists</p>
            <h2 className="mt-2 font-display text-4xl font-semibold">Voices behind the work</h2>
          </div>
          <Link to="/artists" className="hidden text-sm font-medium text-primary hover:underline md:block">View all artists →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((a) => (
            <Link key={a.id} to="/artists/$id" params={{ id: a.id }} className="group rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-warm text-3xl">{a.emoji}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{a.name}</h3>
              <p className="text-sm text-muted-foreground">{a.location}</p>
              <p className="mt-3 line-clamp-3 text-sm text-foreground/80">{a.story}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">Trending Now</p>
              <h2 className="mt-2 font-display text-4xl font-semibold">Creations the community loves</h2>
            </div>
            <Link to="/marketplace" className="hidden text-sm font-medium text-primary hover:underline md:block">Browse marketplace →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artworks.slice(0, 4).map((a) => <ArtworkCard key={a.id} art={a} />)}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Stories of impact</p>
          <h2 className="mt-2 font-display text-4xl font-semibold">Real artists, real change</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Maya O.", quote: "EmpowerArt let me turn painting from therapy into a living. I support my family with my art now.", emoji: "🌻" },
            { name: "Luca F.", quote: "The AI Studio helped me price my ceramics fairly. I doubled my monthly revenue in eight weeks.", emoji: "🌊" },
            { name: "Amira S.", quote: "I work from bed when I need to. The platform met me where I am — that changed everything.", emoji: "🌙" },
          ].map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border/60 bg-card p-7 shadow-soft">
              <Quote className="h-8 w-8 text-secondary" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-xl">{t.emoji}</span>
                <span className="font-medium">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-cta p-10 text-primary-foreground shadow-card md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold md:text-5xl">Together we are building something kinder.</h2>
              <p className="mt-4 max-w-md text-primary-foreground/90">Every purchase, donation, and share reaches an artist directly. 92% of every sale goes to the creator.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-cream text-primary hover:bg-peach">
                  <Link to="/community">Donate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-cream/40 bg-transparent text-primary-foreground hover:bg-cream/10">
                  <Link to="/marketplace">Buy art</Link>
                </Button>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {[
                { k: "92¢", v: "of every $1 to artists", icon: Heart },
                { k: "1,240", v: "active artists", icon: Users },
                { k: "+38%", v: "average earnings growth", icon: TrendingUp },
                { k: "62", v: "countries reached", icon: Sparkles },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-cream/10 p-5 backdrop-blur">
                  <s.icon className="h-6 w-6 text-cream" />
                  <dt className="mt-3 font-display text-3xl font-bold">{s.k}</dt>
                  <dd className="text-sm text-cream/80">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
