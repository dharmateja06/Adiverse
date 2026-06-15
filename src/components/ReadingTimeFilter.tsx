import { Feather, BookOpen, Library } from "lucide-react";

export type IntentFilter = "all" | "poem" | "story" | "novel";

const opts: { value: IntentFilter; label: string; sub: string; icon: typeof Feather }[] = [
  { value: "all", label: "All", sub: "Everything", icon: Library },
  { value: "poem", label: "Under 5 min", sub: "Poetry", icon: Feather },
  { value: "story", label: "5 – 20 min", sub: "Short stories", icon: BookOpen },
  { value: "novel", label: "20+ min", sub: "Novels", icon: Library },
];

export function ReadingTimeFilter({ value, onChange }: { value: IntentFilter; onChange: (v: IntentFilter) => void }) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-2">
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
        {opts.map((o) => {
          const Icon = o.icon;
          const active = value === o.value;
          return (
            <button
              key={o.value}
              onClick={() => onChange(o.value)}
              className={`group relative flex flex-col items-start gap-1 rounded-xl px-4 py-3 text-left transition ${
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <div>
                <div className="text-sm font-semibold">{o.label}</div>
                <div className={`text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground/80"}`}>{o.sub}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}