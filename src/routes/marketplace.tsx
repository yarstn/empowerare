import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { artworks, categories } from "@/lib/data";
import { ArtworkCard } from "@/components/artwork-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — EmpowerArt" },
      { name: "description", content: "Browse paintings, handmade crafts, digital art and accessories from artists with disabilities." },
      { property: "og:title", content: "EmpowerArt Marketplace" },
      { property: "og:description", content: "Original art and crafts by talented disabled artists worldwide." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () =>
      artworks.filter(
        (a) =>
          (cat === "All" || a.category === cat) &&
          (a.title.toLowerCase().includes(q.toLowerCase()) || a.artist.toLowerCase().includes(q.toLowerCase()))
      ),
    [q, cat]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">Marketplace</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">Find work that moves you</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Every piece is original and made by an artist with a disability. 92% of each sale goes directly to the creator.</p>
      </header>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search artworks or artists..."
            className="h-12 rounded-full border-border bg-card pl-11 text-base"
            aria-label="Search artworks"
          />
        </div>
        <button className="flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Categories">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors",
              cat === c ? "bg-gradient-cta text-primary-foreground shadow-soft" : "bg-card text-foreground hover:bg-muted"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((a) => <ArtworkCard key={a.id} art={a} />)}
      </div>
      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">No artworks found. Try a different search.</p>
      )}
    </div>
  );
}
