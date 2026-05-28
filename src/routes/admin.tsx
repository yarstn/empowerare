import { createFileRoute } from "@tanstack/react-router";
import { Users, DollarSign, Heart, Handshake, TrendingUp, Eye } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "لوحة الإدارة — تلاقي" },
      { name: "description", content: "إدارة الفنانين والمنتجات والشراكات والتحليلات." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const { t } = useI18n();
  const stats = [
    { icon: Users, label: t("Total artists", "إجمالي الفنانين"), value: "1,240", trend: t("+34 this week", "+٣٤ هذا الأسبوع") },
    { icon: DollarSign, label: t("Total sales", "إجمالي المبيعات"), value: "$842k", trend: t("+12% MoM", "+١٢٪ شهريًا") },
    { icon: Heart, label: t("Donations", "التبرّعات"), value: "$58k", trend: t("+8% MoM", "+٨٪ شهريًا") },
    { icon: Handshake, label: t("Partnerships", "الشراكات"), value: "27", trend: t("3 pending", "٣ قيد المراجعة") },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("Admin", "الإدارة")}</p>
          <h1 className="mt-2 font-display text-5xl font-semibold">{t("Platform overview", "نظرة عامة على المنصة")}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{t("Last updated 2 minutes ago", "آخر تحديث قبل دقيقتين")}</p>
      </header>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
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
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><TrendingUp className="h-5 w-5 text-teal" /> {t("Sales last 12 weeks", "مبيعات آخر ١٢ أسبوعًا")}</h2>
            <span className="text-sm text-muted-foreground">{t("All categories", "كل التصنيفات")}</span>
          </div>
          <div className="flex h-56 items-end gap-2">
            {[40, 55, 48, 62, 70, 58, 75, 82, 68, 90, 88, 96].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-xl bg-gradient-cta" style={{ height: `${h}%`, opacity: 0.5 + i / 24 }} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
          <h2 className="mb-4 font-display text-xl font-semibold">{t("Pending product approvals", "منتجات بانتظار الموافقة")}</h2>
          <ul className="space-y-3">
            {[
              { title: "Wovenly Scarf #04", a: "Noor K." },
              { title: "Lake Series III", a: "Maya O." },
              { title: "Clay vessel, ribbed", a: "Luca F." },
            ].map((p) => (
              <li key={p.title} className="flex items-center justify-between rounded-2xl bg-muted/60 p-3 text-sm">
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{t("by", "بواسطة")} {p.a}</p>
                </div>
                <div className="flex gap-2">
                  <button className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-teal-deep">{t("Approve", "اعتمد")}</button>
                  <button className="rounded-full bg-card px-3 py-1 text-xs font-semibold">{t("Review", "راجع")}</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft lg:col-span-2">
          <h2 className="mb-4 font-display text-xl font-semibold">{t("Top performing artists", "أفضل الفنانين أداءً")}</h2>
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground rtl:text-right">
              <tr><th className="pb-3">{t("Artist", "الفنان")}</th><th className="pb-3">{t("Sales", "المبيعات")}</th><th className="pb-3">{t("Revenue", "الإيراد")}</th><th className="pb-3">{t("Rating", "التقييم")}</th></tr>
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
          <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold"><Eye className="h-5 w-5 text-teal" /> {t("Most viewed", "الأكثر مشاهدةً")}</h2>
          <ol className="space-y-3 text-sm">
            {["Sunrise Over Stillness", "Echoes in Color", "Tactile Dreams", "Woven Light"].map((title, i) => (
              <li key={title} className="flex items-center gap-3 rounded-xl bg-muted/60 p-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-cta text-xs font-bold text-primary-foreground">{i + 1}</span>
                <span>{title}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
