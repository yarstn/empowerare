import { createFileRoute } from "@tanstack/react-router";
import { Mic, Volume2, Hand, Type, Contrast, Keyboard, Eye, ScanLine } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "إمكانية الوصول — تلاقي" },
      { name: "description", content: "تنقّل صوتي، تحويل النص إلى كلام، دعم لغة الإشارة، توافق مع قارئات الشاشة، والمزيد." },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  const { t } = useI18n();

  const features = [
    { icon: Mic, title: t("Voice navigation", "تنقّل صوتي"), desc: t("Move through the platform hands-free with simple voice commands.", "تنقّل في المنصة دون استخدام اليدين بأوامر صوتية بسيطة.") },
    { icon: Volume2, title: t("Text-to-speech", "تحويل النص إلى كلام"), desc: t("Listen to any product description, story, or article aloud.", "استمع لأي وصف منتج أو قصة أو مقال بصوتٍ عالٍ.") },
    { icon: Hand, title: t("Sign language support", "دعم لغة الإشارة"), desc: t("Key videos include ASL and BSL interpretation.", "الفيديوهات الأساسية تتضمّن ترجمة بلغتي الإشارة الأمريكية والبريطانية.") },
    { icon: Type, title: t("Adjustable text size", "حجم نص قابل للتعديل"), desc: t("Scale text up to 140% without losing layout.", "كبّر النص حتى ١٤٠٪ دون الإخلال بالتنسيق.") },
    { icon: Contrast, title: t("High contrast mode", "وضع التباين العالي"), desc: t("A bolder palette for low-vision readers.", "ألوان أكثر حدّة لضعاف البصر.") },
    { icon: Keyboard, title: t("Full keyboard navigation", "تنقّل كامل بلوحة المفاتيح"), desc: t("Every action reachable without a mouse.", "كل إجراء متاح دون فأرة.") },
    { icon: Eye, title: t("Screen reader friendly", "متوافق مع قارئات الشاشة"), desc: t("Semantic HTML, ARIA labels, alt text on every image.", "HTML دلالي، وتسميات ARIA، ونص بديل لكل صورة.") },
    { icon: ScanLine, title: t("Reduced motion", "تقليل الحركة"), desc: t("Respects your system's reduce-motion preference.", "يحترم تفضيل تقليل الحركة في نظامك.") },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("Accessibility", "إمكانية الوصول")}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">{t("Built so everyone belongs", "مُصمَّم ليكون للجميع")}</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {t(
            "Accessibility isn't a feature on EmpowerArt — it's the foundation. Use the floating tool in the bottom-right corner to adjust your experience anytime.",
            "إمكانية الوصول ليست ميزة في إمباور آرت — بل هي الأساس. استخدم الأداة العائمة في الزاوية لضبط تجربتك في أي وقت."
          )}
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-teal-deep">
              <f.icon className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold">{f.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-[2.5rem] bg-gradient-cta p-10 text-primary-foreground shadow-card md:p-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{t("Our accessibility commitment", "التزامنا بإمكانية الوصول")}</h2>
            <p className="mt-3 text-primary-foreground/90">
              {t(
                "We test with disabled users, follow WCAG 2.2 AA, and ship improvements every month. If something isn't working for you, tell us.",
                "نختبر مع مستخدمين من ذوي الإعاقة، ونتّبع معيار WCAG 2.2 AA، ونُطلق تحسينات شهريًا. إن لم يعمل شيء معك، أخبرنا."
              )}
            </p>
          </div>
          <ul className="space-y-3 text-primary-foreground/95">
            {[
              t("WCAG 2.2 AA conformance", "مطابقة WCAG 2.2 AA"),
              t("Tested with NVDA, JAWS, VoiceOver", "مُختبر مع NVDA و JAWS و VoiceOver"),
              t("Captions on every video", "ترجمة على كل فيديو"),
              t("Plain-language content guidelines", "إرشادات محتوى بلغة بسيطة"),
            ].map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-2xl bg-cream/10 px-4 py-3 backdrop-blur">
                <span className="grid h-2 w-2 rounded-full bg-cream" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
