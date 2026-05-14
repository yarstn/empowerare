import { useEffect, useState } from "react";
import { Accessibility, Moon, Sun, Type, Contrast, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AccessibilityBar() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(100);
  const [contrast, setContrast] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${size}%`;
  }, [size]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => {
    document.documentElement.style.filter = contrast ? "contrast(1.25)" : "";
  }, [contrast]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="w-64 rounded-2xl border border-border bg-card p-4 shadow-card" role="region" aria-label="Accessibility options">
          <p className="mb-3 font-display text-sm font-semibold text-foreground">Accessibility</p>
          <div className="space-y-3 text-sm">
            <button onClick={() => setSize((s) => Math.min(140, s + 10))} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Type className="h-4 w-4" /> Increase text ({size}%)
            </button>
            <button onClick={() => setSize(100)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Type className="h-4 w-4" /> Reset text size
            </button>
            <button onClick={() => setContrast((c) => !c)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              <Contrast className="h-4 w-4" /> {contrast ? "Disable" : "Enable"} high contrast
            </button>
            <button onClick={() => setDark((d) => !d)} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 hover:bg-muted">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} {dark ? "Light" : "Dark"} mode
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open accessibility options"
        aria-expanded={open}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-cta text-primary-foreground shadow-card transition-transform hover:scale-105"
      >
        <Accessibility className="h-6 w-6" />
      </button>
    </div>
  );
}
