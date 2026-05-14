import { Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Artwork } from "@/lib/data";

export function ArtworkCard({ art }: { art: Artwork }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className={`relative aspect-[4/5] bg-gradient-to-br ${art.gradient} grid place-items-center`}>
        <span className="text-7xl drop-shadow-sm transition-transform duration-500 group-hover:scale-110" aria-hidden>{art.emoji}</span>
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {art.category}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-display text-lg font-semibold leading-tight">{art.title}</h3>
        <Link to="/artists/$id" params={{ id: art.artistId }} className="block text-sm text-muted-foreground hover:text-primary">
          by {art.artist}
        </Link>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl font-semibold text-primary">${art.price}</span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-secondary text-secondary" /> {art.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
