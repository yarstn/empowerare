import { createFileRoute } from "@tanstack/react-router";
import { User, Accessibility, Bell, Globe, CreditCard, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "الإعدادات — تلاقي" },
      { name: "description", content: "الملف الشخصي وإمكانية الوصول والإشعارات واللغة والمدفوعات والخصوصية." },
    ],
  }),
  component: Settings,
});

function Settings() {
  const { t, lang, setLang } = useI18n();

  const sections = [
    { id: "profile", icon: User, title: t("Profile", "الملف الشخصي") },
    { id: "a11y", icon: Accessibility, title: t("Accessibility", "إمكانية الوصول") },
    { id: "notif", icon: Bell, title: t("Notifications", "الإشعارات") },
    { id: "lang", icon: Globe, title: t("Language", "اللغة") },
    { id: "pay", icon: CreditCard, title: t("Payments", "المدفوعات") },
    { id: "sec", icon: Shield, title: t("Security", "الأمان") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal">{t("Settings", "الإعدادات")}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold">{t("Make Tallaqee yours", "خصّص تلاقي لك")}</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <nav aria-label={t("Settings sections", "أقسام الإعدادات")} className="space-y-1">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">
              <s.icon className="h-4 w-4 text-teal" /> {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-6">
          <Card id="profile" title={t("Profile", "الملف الشخصي")}>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={t("Display name", "اسم العرض")} defaultValue="Maya Okonkwo" />
              <Field label={t("Pronouns", "ضمائر")} defaultValue="she/her" />
              <Field label={t("Email", "البريد الإلكتروني")} defaultValue="maya@empowerart.app" />
              <Field label={t("Location", "الموقع")} defaultValue="Lagos, Nigeria" />
            </div>
          </Card>

          <Card id="a11y" title={t("Accessibility preferences", "تفضيلات إمكانية الوصول")}>
            <Toggle label={t("High contrast mode", "وضع التباين العالي")} desc={t("A bolder palette for low-vision users.", "ألوان أكثر حدّة لضعاف البصر.")} />
            <Toggle label={t("Reduce motion", "تقليل الحركة")} desc={t("Disable subtle animations.", "تعطيل الحركات الخفيفة.")} defaultChecked />
            <Toggle label={t("Always show captions", "إظهار الترجمة دومًا")} desc={t("Captions on all videos by default.", "ترجمة افتراضية على كل الفيديوهات.")} defaultChecked />
            <Toggle label={t("Voice navigation", "تنقّل صوتي")} desc={t("Browse hands-free.", "تصفّح دون استخدام اليدين.")} />
          </Card>

          <Card id="notif" title={t("Notifications", "الإشعارات")}>
            <Toggle label={t("New sales", "مبيعات جديدة")} defaultChecked />
            <Toggle label={t("Workshop reminders", "تذكيرات الورش")} defaultChecked />
            <Toggle label={t("Community replies", "ردود المجتمع")} />
          </Card>

          <Card id="lang" title={t("Language", "اللغة")}>
            <div className="rounded-2xl bg-muted/40 p-4">
              <p className="mb-3 text-sm text-muted-foreground">{t("Choose your preferred language", "اختر لغتك المفضّلة")}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang("ar")}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${lang === "ar" ? "bg-gradient-cta text-primary-foreground" : "bg-card hover:bg-muted"}`}
                >
                  العربية {lang === "ar" && "✓"}
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${lang === "en" ? "bg-gradient-cta text-primary-foreground" : "bg-card hover:bg-muted"}`}
                >
                  English {lang === "en" && "✓"}
                </button>
              </div>
            </div>
          </Card>

          <Card id="pay" title={t("Payment methods", "وسائل الدفع")}>
            <div className="rounded-2xl bg-muted/60 p-4 text-sm">{t("Visa ending in 4422 — default", "فيزا تنتهي بـ 4422 — افتراضي")}</div>
            <Button variant="outline" className="mt-3 rounded-full border-2 border-primary text-primary">{t("Add payment method", "أضف وسيلة دفع")}</Button>
          </Card>

          <Card id="sec" title={t("Security & privacy", "الأمان والخصوصية")}>
            <Toggle label={t("Two-factor authentication", "التحقّق بخطوتين")} defaultChecked />
            <Toggle label={t("Show profile in search", "إظهار الملف في البحث")} defaultChecked />
            <Button variant="ghost" className="mt-2 text-destructive hover:bg-destructive/10">{t("Delete account", "حذف الحساب")}</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
      <h2 className="mb-5 font-display text-xl font-semibold">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  const id = label.replace(/\s+/g, "-");
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} defaultValue={defaultValue} className="mt-1.5 rounded-xl" />
    </div>
  );
}

function Toggle({ label, desc, defaultChecked }: { label: string; desc?: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-muted/40 p-4">
      <div>
        <p className="font-medium">{label}</p>
        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
