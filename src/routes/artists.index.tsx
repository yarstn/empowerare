import { createFileRoute, Link } from "@tanstack/react-router";
import { artists } from "@/lib/data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/artists/")({
  head: () => ({
    meta: [
      { title: "Artists — EmpowerArt" },
      { name: "description", content: "Meet the talented artists with disabilities behind every EmpowerArt creation." },
      { property: "og:title", content: "EmpowerArt Artists" },
      { property: "og:description", content: "Profiles of disabled artists from around the world." },
    ],
  }),
  component: ArtistsList,
});

function ArtistsList() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">Our Artists</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">Voices that shape the work</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Each artist brings a story, a craft, and a way of seeing the world that deserves a stage.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((a) => (
          <Link key={a.id} to="/artists/$id" params={{ id: a.id }} className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
            <div className="relative h-40 overflow-hidden bg-gradient-warm">
              <img src={a.image} alt={a.name} loading="lazy" width={896} height={896} className="absolute -bottom-10 left-6 h-20 w-20 rounded-2xl border-4 border-card object-cover shadow-soft" />
            </div>
            <div className="space-y-3 p-6 pt-12">
              <div>
                <h3 className="font-display text-xl font-semibold">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.pronouns} · {a.location}</p>
              </div>
              <p className="line-clamp-2 text-sm text-foreground/80">{a.story}</p>
              <div className="flex items-center justify-between border-t border-border pt-3 text-sm">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" />{a.rating}</span>
                <span className="text-muted-foreground">{a.sales} sales</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
