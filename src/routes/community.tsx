import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Users, MessageCircle, Heart, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "المجتمع وورش العمل — تلاقي" },
      { name: "description", content: "جلسات فنية مباشرة وورش عمل ومحادثات وحملات تبرّع." },
    ],
  }),
  component: Community,
});

function Community() {
  const { t } = useI18n();

  const events = [
    { day: t("FRI 12", "الجمعة ١٢"), title: t("Watercolor with Maya", "ألوان مائية مع مايا"), host: "Maya Okonkwo", time: t("6:00 PM · Live", "٦:٠٠ مساءً · مباشر"), spots: t("12 spots left", "١٢ مقعدًا متبقيًا"), tag: t("Workshop", "ورشة") },
    { day: t("SAT 13", "السبت ١٣"), title: t("Clay basics, hand-built", "أساسيات الطين بالأيدي"), host: "Luca Ferreira", time: t("3:00 PM · Live", "٣:٠٠ عصرًا · مباشر"), spots: t("Sold out — waitlist", "نفدت المقاعد — قائمة انتظار"), tag: t("Workshop", "ورشة") },
    { day: t("WED 17", "الأربعاء ١٧"), title: t("Selling digital prints", "بيع المطبوعات الرقمية"), host: "Amira Said", time: t("5:30 PM · Online", "٥:٣٠ مساءً · عبر الإنترنت"), spots: t("Open seats", "مقاعد متاحة"), tag: t("Talk", "حديث") },
  ];

  const posts = [
    { who: t("Noor K.", "نور خ."), what: t("Just shipped my 100th order — thank you all 🌸", "شحنتُ للتو طلبي رقم ١٠٠ — شكرًا لكم جميعًا 🌸"), emoji: "🌸", likes: 124, replies: 18 },
    { who: t("Daniel R.", "دانيال ر."), what: t("Looking for blind sculptors to collaborate on a tactile exhibit. DM me!", "أبحث عن نحّاتين مكفوفين للتعاون في معرض لمسي. راسلوني!"), emoji: "🌊", likes: 42, replies: 9 },
    { who: t("Maya O.", "مايا أ."), what: t("Sharing my morning palette — what does it sound like to you?", "أشارك ألوان صباحي — كيف تبدو لكم صوتيًا؟"), emoji: "🌻", likes: 87, replies: 23 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("Community & Workshops", "المجتمع وورش العمل")}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">{t("A place to learn and to belong", "مكانٌ لنتعلّم ونَنتمي")}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {t(
            "Live sessions, peer discussions, and donation drives — all hosted by and for our artists.",
            "جلسات مباشرة ونقاشات بين الأقران وحملات تبرّع — جميعها يقودها فنانونا ولأجلهم."
          )}
        </p>
      </header>

      <section className="mb-14">
        <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-semibold"><Calendar className="h-6 w-6 text-teal" /> {t("Upcoming sessions", "الجلسات القادمة")}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft">
              <div className="bg-gradient-warm p-5">
                <p className="font-display text-3xl font-semibold text-teal-deep">{e.day}</p>
                <span className="mt-1 inline-block rounded-full bg-card/80 px-3 py-0.5 text-xs font-medium">{e.tag}</span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{t("with", "مع")} {e.host}</p>
                <p className="flex items-center gap-1 text-sm"><Video className="h-4 w-4 text-teal" /> {e.time}</p>
                <p className="text-xs text-muted-foreground">{e.spots}</p>
                <Button className="w-full rounded-full bg-gradient-cta text-primary-foreground">{t("Register", "سجّل")}</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section>
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-semibold"><Users className="h-6 w-6 text-teal" /> {t("Community feed", "تغذية المجتمع")}</h2>
          <div className="space-y-4">
            {posts.map((p) => (
              <article key={p.who} className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-2xl">{p.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold">{p.who}</p>
                    <p className="mt-1 text-foreground/90">{p.what}</p>
                    <div className="mt-3 flex gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary"><Heart className="h-4 w-4" /> {p.likes}</button>
                      <button className="flex items-center gap-1 hover:text-primary"><MessageCircle className="h-4 w-4" /> {p.replies}</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-gradient-cta p-6 text-primary-foreground shadow-card">
            <Heart className="h-7 w-7" />
            <h3 className="mt-3 font-display text-xl font-semibold">{t("Donate to the artist fund", "تبرّع لصندوق الفنانين")}</h3>
            <p className="mt-2 text-sm text-primary-foreground/90">
              {t(
                "Helps cover materials, shipping, and accessibility tools for new artists.",
                "يساعد في تغطية المواد والشحن وأدوات إمكانية الوصول للفنانين الجدد."
              )}
            </p>
            <div className="mt-4 flex gap-2">
              {["$10", "$25", "$50"].map((a) => (
                <button key={a} className="flex-1 rounded-full bg-cream/15 py-2 text-sm font-semibold backdrop-blur hover:bg-cream/25">{a}</button>
              ))}
            </div>
            <Button className="mt-3 w-full rounded-full bg-cream text-primary hover:bg-peach">{t("Give", "تبرّع الآن")}</Button>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-semibold">{t("Active campaigns", "الحملات النشطة")}</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                { title: t("Adaptive easels for 30 artists", "حوامل رسم مُكيَّفة لـ ٣٠ فنانًا"), p: 72 },
                { title: t("Braille catalog printing", "طباعة كتالوج بلغة برايل"), p: 41 },
                { title: t("Tactile exhibit, Lisbon 2026", "معرض لمسي، لشبونة ٢٠٢٦"), p: 18 },
              ].map((c) => (
                <li key={c.title}>
                  <div className="flex justify-between"><span>{c.title}</span><span className="text-muted-foreground">{c.p}%</span></div>
                  <div className="mt-1 h-2 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-cta" style={{ width: `${c.p}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
