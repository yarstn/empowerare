import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, TrendingUp, Tag, MessageSquare, BarChart3, Wand2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/ai-studio")({
  head: () => ({
    meta: [
      { title: "استوديو الذكاء — تلاقي" },
      { name: "description", content: "أدوات ذكاء اصطناعي للتسعير والأوصاف واتجاهات السوق والتسويق — لدعم نمو الفنانين." },
    ],
  }),
  component: AIStudio,
});

function AIStudio() {
  const { t } = useI18n();
  const [desc, setDesc] = useState("");

  const cards = [
    { icon: TrendingUp, label: t("Suggested price", "السعر المقترح"), value: "$240–$310", note: t("+18% vs last month", "+١٨٪ مقارنة بالشهر الماضي") },
    { icon: BarChart3, label: t("Market demand", "الطلب في السوق"), value: t("High", "مرتفع"), note: t("Paintings · Acrylic", "لوحات · أكريليك") },
    { icon: Tag, label: t("Top tags", "أبرز الوسوم"), value: t("calming, sunrise", "مهدّئ، شروق"), note: t("Trending this week", "رائج هذا الأسبوع") },
    { icon: Sparkles, label: t("Engagement", "التفاعل"), value: "+38%", note: t("from new captions", "من التسميات الجديدة") },
  ];

  const recs = [
    { title: t("Try a smaller print series", "جرّب سلسلة مطبوعات أصغر"), d: t("Buyers in your audience search for $80–$120 wall pieces.", "جمهورك يبحث عن أعمال حائط بين ٨٠ و١٢٠ دولارًا.") },
    { title: t("Add 3 more tags", "أضف ٣ وسوم إضافية"), d: t('"calming", "earth tones", "minimalist" trend up 24%.', "«مهدّئ»، «ألوان ترابية»، «بساطة» ترتفع بنسبة ٢٤٪.") },
    { title: t("Schedule for Sunday", "انشر يوم الأحد"), d: t("Your last 4 Sunday posts had 2.3× engagement.", "آخر ٤ منشورات أيام الأحد حقّقت تفاعلًا أعلى بـ ٢٫٣ مرّة.") },
  ];

  const captions = [
    t("Slow mornings deserve quiet color. New piece, in the shop today. 🌅", "الصباحات الهادئة تستحق ألوانًا هادئة. عمل جديد في المتجر اليوم. 🌅"),
    t("Made by hand. Made on my own time. Made with intention. ✨", "صُنع باليد. على إيقاعي. بنيّةٍ صادقة. ✨"),
    t("Every sale supports an artist directly. Find your next favorite at EmpowerArt. 💛", "كل عملية بيع تدعم فنانًا مباشرةً. اعثر على المفضّل القادم في إمباور آرت. 💛"),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal"><Sparkles className="h-4 w-4" /> {t("AI Studio", "استوديو الذكاء")}</p>
          <h1 className="mt-2 font-display text-5xl font-semibold">{t("Grow your craft, at your pace", "انمِ بحرفتك، بإيقاعك")}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {t(
              "Smart tools that suggest pricing, write descriptions, and surface trends — so you can focus on the art.",
              "أدوات ذكية تقترح الأسعار وتكتب الأوصاف وتُبرز الاتجاهات — لتتفرّغ للفن."
            )}
          </p>
        </div>
      </header>

      <div className="mb-10 grid gap-4 md:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
            <c.icon className="h-6 w-6 text-teal" />
            <p className="mt-3 text-sm text-muted-foreground">{c.label}</p>
            <p className="font-display text-2xl font-semibold">{c.value}</p>
            <p className="text-xs text-muted-foreground">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">{t("Product description generator", "مولّد وصف المنتج")}</h2>
          </div>
          <label className="text-sm font-medium" htmlFor="d">{t("Describe your artwork", "صِف عملك الفني")}</label>
          <Textarea
            id="d"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder={t("Acrylic painting of a quiet sunrise over a misty lake...", "لوحة أكريليك لشروقٍ هادئ فوق بحيرة ضبابية...")}
            className="mt-2 min-h-32 rounded-2xl"
          />
          <Button className="mt-4 rounded-full bg-gradient-cta text-primary-foreground shadow-soft">{t("Generate description", "اكتب الوصف")}</Button>

          <div className="mt-6 rounded-2xl bg-gradient-warm p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-deep">{t("AI suggestion", "اقتراح الذكاء")}</p>
            <p className="mt-2 leading-relaxed text-foreground/90">
              {t(
                '"A meditative acrylic study capturing the first soft light over still water. Hand-painted on stretched cotton canvas, finished with a museum-grade matte varnish — a quiet companion for any wall that wants to breathe."',
                "«دراسة تأمّلية بالأكريليك تلتقط أوّل ضوءٍ ناعم فوق ماءٍ ساكن. رُسمت يدويًا على قماش قطني ممدود، وأُنهيت بطلاء مطفي بدرجة المتاحف — رفيقٌ هادئ لأي حائطٍ يرغب أن يتنفّس.»"
              )}
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">{t("Recommendations", "توصيات")}</h2>
          </div>
          <ul className="space-y-4 text-sm">
            {recs.map((r) => (
              <li key={r.title} className="rounded-2xl bg-muted/60 p-4">
                <p className="font-semibold">{r.title}</p>
                <p className="mt-1 text-muted-foreground">{r.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-3">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-teal" />
            <h2 className="font-display text-xl font-semibold">{t("Marketing captions", "تسميات تسويقية")}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {captions.map((c, i) => (
              <div key={i} className="rounded-2xl bg-gradient-warm p-4 text-sm leading-relaxed text-foreground/90">{c}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
