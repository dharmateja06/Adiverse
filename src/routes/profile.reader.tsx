import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, History, Heart, ListMusic } from "lucide-react";
import { CONTENT } from "@/lib/mock-data";
import { ContentCard } from "@/components/ContentCard";

export const Route = createFileRoute("/profile/reader")({
  head: () => ({ meta: [{ title: "Reader profile — Adiverse" }] }),
  component: ReaderProfile,
});

function ReaderProfile() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
      <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-card p-8">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">A</div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-3xl font-bold">Avery Lin</div>
          <div className="text-sm text-muted-foreground">Reader · joined 2024 · 142 stories read</div>
        </div>
        <Link to="/profile/writer" className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-secondary">Switch to writer view</Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: History, label: "Reading history", value: "142" },
          { icon: Bookmark, label: "Bookmarks", value: "37" },
          { icon: Heart, label: "Likes", value: "284" },
          { icon: ListMusic, label: "Lists", value: "9" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <s.icon className="h-4 w-4 text-muted-foreground" />
            <div className="mt-3 font-display text-3xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Continue reading</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CONTENT.slice(0, 3).map((c) => <ContentCard key={c.id} c={c} />)}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Your bookmarks</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CONTENT.slice(2, 5).map((c) => <ContentCard key={c.id} c={c} />)}
      </div>
    </main>
  );
}