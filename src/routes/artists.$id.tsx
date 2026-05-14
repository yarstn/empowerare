import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artists, artworks } from "@/lib/data";
import { ArtworkCard } from "@/components/artwork-card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/artists/$id")({
  head: ({ params }) => {
    const a = artists.find((x) => x.id === params.id);
    return {
      meta: [
        { title: a ? `${a.name} — EmpowerArt` : "Artist — EmpowerArt" },
        { name: "description", content: a?.story ?? "Artist profile on EmpowerArt." },
        { property: "og:title", content: a?.name ?? "Artist" },
        { property: "og:description", content: a?.story ?? "" },
      ],
    };
  },
  component: ArtistPage,
});

function ArtistPage() {
  const { id } = Route.useParams();
  const a = artists.find((x) => x.id === id);
  if (!a) throw notFound();
  const works = artworks.filter((w) => w.artistId === id);

  return (
    <div>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[auto_1fr] md:px-6">
          <div className="grid h-32 w-32 place-items-center rounded-3xl bg-card text-6xl shadow-soft">{a.emoji}</div>
          <div>
            <p className="text-sm font-medium text-teal">{a.location}</p>
            <h1 className="mt-1 font-display text-5xl font-semibold">{a.name}</h1>
            <p className="text-muted-foreground">{a.pronouns}</p>
            <p className="mt-4 max-w-2xl text-lg text-foreground/90">{a.story}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {a.specialties.map((s) => (
                <span key={s} className="rounded-full bg-card/80 px-3 py-1 text-sm">{s}</span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-cta text-primary-foreground shadow-soft"><Link to="/marketplace">Shop {a.name.split(" ")[0]}'s art</Link></Button>
              <Button variant="outline" className="rounded-full border-2 border-primary text-primary"><Heart className="mr-1 h-4 w-4" /> Support</Button>
              <Button variant="ghost" className="rounded-full"><MessageCircle className="mr-1 h-4 w-4" /> Custom order</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1fr_320px] md:px-6">
        <div>
          <h2 className="mb-6 font-display text-3xl font-semibold">Portfolio</h2>
          {works.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {works.map((w) => <ArtworkCard key={w.id} art={w} />)}
            </div>
          ) : (
            <p className="text-muted-foreground">No artworks listed yet.</p>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Stat label="Rating" value={<span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> {a.rating}</span>} />
              <Stat label="Total sales" value={a.sales} />
              <Stat label="Member since" value="2023" />
            </dl>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">Recent reviews</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> 5.0</p>
                <p className="mt-1 text-foreground/80">"Beautiful work, packaged with so much care."</p>
                <p className="text-xs text-muted-foreground">— Sara, last week</p>
              </li>
              <li>
                <p className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> 4.8</p>
                <p className="mt-1 text-foreground/80">"Knowing the story behind the piece makes it priceless."</p>
                <p className="text-xs text-muted-foreground">— Daniel</p>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
