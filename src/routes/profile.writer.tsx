import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Bookmark, TrendingUp, PenLine, FileEdit } from "lucide-react";
import { CONTENT } from "@/lib/mock-data";
import { ContentCard } from "@/components/ContentCard";

export const Route = createFileRoute("/profile/writer")({
  head: () => ({ meta: [{ title: "Writer portfolio — Adiverse" }] }),
  component: WriterProfile,
});

function WriterProfile() {
  const published = CONTENT.slice(0, 4);
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
      <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-card p-8">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground">I</div>
        <div className="flex-1 min-w-0">
          <div className="font-display text-3xl font-bold">Imogen Vale</div>
          <div className="text-sm italic text-muted-foreground">"Cartographer of small, quiet things."</div>
        </div>
        <Link to="/write" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
          <PenLine className="h-4 w-4" /> New piece
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: Eye, label: "Total views", value: "204k" },
          { icon: Bookmark, label: "Bookmarks", value: "12.4k" },
          { icon: TrendingUp, label: "Followers", value: "3,210" },
          { icon: FileEdit, label: "Drafts", value: "6" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <s.icon className="h-4 w-4 text-muted-foreground" />
            <div className="mt-3 font-display text-3xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Published</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {published.map((c) => <ContentCard key={c.id} c={c} />)}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Drafts</h2>
      <div className="mt-4 space-y-3">
        {["Untitled novel — chapter 3", "Notes on a winter market", "Poem: between rooms"].map((t) => (
          <div key={t} className="flex items-center justify-between rounded-2xl border border-border bg-card p-5">
            <div>
              <div className="font-medium">{t}</div>
              <div className="text-xs text-muted-foreground">Edited 2 days ago · 1,240 words</div>
            </div>
            <Link to="/write" className="rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary">Continue writing</Link>
          </div>
        ))}
      </div>
    </main>
  );
}