import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { artists, artworks } from "@/lib/data";
import { ArtworkCard } from "@/components/artwork-card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/artists/$id")({
  head: ({ params }) => {
    const a = artists.find((x) => x.id === params.id);
    return {
      meta: [
        { title: a ? `${a.name} — تلاقي` : "Artist — تلاقي" },
        { name: "description", content: a?.story ?? "Artist profile on Tallaqee." },
        { property: "og:title", content: a?.name ?? "Artist" },
        { property: "og:description", content: a?.story ?? "" },
      ],
    };
  },
  component: ArtistPage,
});

function ArtistPage() {
  const { t } = useI18n();
  const { id } = Route.useParams();
  const a = artists.find((x) => x.id === id);
  if (!a) throw notFound();
  const works = artworks.filter((w) => w.artistId === id);

  return (
    <div>
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[auto_1fr] md:px-6">
          <img src={a.image} alt={a.name} loading="lazy" width={896} height={896} className="h-32 w-32 rounded-3xl object-cover shadow-soft" />
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
              <Button asChild className="rounded-full bg-gradient-cta text-primary-foreground shadow-soft">
                <Link to="/marketplace">{t(`Shop ${a.name.split(" ")[0]}'s art`, `تسوّق أعمال ${a.name.split(" ")[0]}`)}</Link>
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-primary text-primary"><Heart className="me-1 h-4 w-4" /> {t("Support", "ادعم")}</Button>
              <Button variant="ghost" className="rounded-full"><MessageCircle className="me-1 h-4 w-4" /> {t("Custom order", "طلب خاص")}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1fr_320px] md:px-6">
        <div>
          <h2 className="mb-6 font-display text-3xl font-semibold">{t("Portfolio", "معرض الأعمال")}</h2>
          {works.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {works.map((w) => <ArtworkCard key={w.id} art={w} />)}
            </div>
          ) : (
            <p className="text-muted-foreground">{t("No artworks listed yet.", "لا توجد أعمال مدرجة بعد.")}</p>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">{t("At a glance", "نظرة سريعة")}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Stat label={t("Rating", "التقييم")} value={<span className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> {a.rating}</span>} />
              <Stat label={t("Total sales", "إجمالي المبيعات")} value={a.sales} />
              <Stat label={t("Member since", "عضو منذ")} value="2023" />
            </dl>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">{t("Recent reviews", "آخر التقييمات")}</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> 5.0</p>
                <p className="mt-1 text-foreground/80">"{t("Beautiful work, packaged with so much care.", "عملٌ جميل، مُغلَّف بعناية فائقة.")}"</p>
                <p className="text-xs text-muted-foreground">— {t("Sara, last week", "سارة، الأسبوع الماضي")}</p>
              </li>
              <li>
                <p className="flex items-center gap-1"><Star className="h-4 w-4 fill-secondary text-secondary" /> 4.8</p>
                <p className="mt-1 text-foreground/80">"{t("Knowing the story behind the piece makes it priceless.", "معرفة القصة وراء العمل تجعله لا يُقدَّر بثمن.")}"</p>
                <p className="text-xs text-muted-foreground">— {t("Daniel", "دانيال")}</p>
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
