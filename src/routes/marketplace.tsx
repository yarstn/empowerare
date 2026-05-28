import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { artworks, categories } from "@/lib/data";
import { ArtworkCard } from "@/components/artwork-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "السوق — تلاقي" },
      { name: "description", content: "تصفّح اللوحات والحرف اليدوية والفن الرقمي والإكسسوارات من فنانين ذوي إعاقة." },
    ],
  }),
  component: Marketplace,
});

const catLabels: Record<string, [string, string]> = {
  All: ["All", "الكل"],
  Paintings: ["Paintings", "اللوحات"],
  Handmade: ["Handmade", "أعمال يدوية"],
  "Digital Art": ["Digital Art", "فن رقمي"],
  Accessories: ["Accessories", "إكسسوارات"],
  "Custom Orders": ["Custom Orders", "طلبات خاصة"],
};

function Marketplace() {
  const { t, dir } = useI18n();
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
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("Marketplace", "السوق")}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">{t("Find work that moves you", "اعثر على عملٍ يُحرّكك")}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {t(
            "Every piece is original and made by an artist with a disability. 92% of each sale goes directly to the creator.",
            "كل قطعة أصلية ومصنوعة بيد فنان من ذوي الإعاقة. ٩٢٪ من كل عملية بيع تذهب مباشرةً للمبدع."
          )}
        </p>
      </header>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className={cn("absolute top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground", dir === "rtl" ? "right-4" : "left-4")} />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("Search artworks or artists...", "ابحث عن أعمال أو فنانين...")}
            className={cn("h-12 rounded-full border-border bg-card text-base", dir === "rtl" ? "pr-11" : "pl-11")}
            aria-label={t("Search artworks", "ابحث في الأعمال")}
          />
        </div>
        <button className="flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium">
          <SlidersHorizontal className="h-4 w-4" /> {t("Filters", "تصفية")}
        </button>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={t("Categories", "التصنيفات")}>
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
            {t(...(catLabels[c] ?? [c, c]))}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((a) => <ArtworkCard key={a.id} art={a} />)}
      </div>
      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">{t("No artworks found. Try a different search.", "لا توجد أعمال مطابقة. جرّب بحثًا مختلفًا.")}</p>
      )}
    </div>
  );
}
