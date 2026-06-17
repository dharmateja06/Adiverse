import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { loadAllContent } from "@/lib/api/content.loaders";
import { ContentCard } from "@/components/ContentCard";
import { ReadingTimeFilter, type IntentFilter } from "@/components/ReadingTimeFilter";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) => loadAllContent(queryClient),
  head: () => ({
    meta: [
      { title: "Adiverse — Where every story finds a home" },
      { name: "description", content: "A premium literary sanctuary for poems, short stories, and novels." },
      { property: "og:title", content: "Adiverse" },
      { property: "og:description", content: "Where every story finds a home." },
    ],
  }),
  component: Index,
});

function Index() {
  const content = Route.useLoaderData();
  const [filter, setFilter] = useState<IntentFilter>("all");
  const items = useMemo(
    () => (filter === "all" ? content : content.filter((c) => c.type === filter)),
    [content, filter],
  );
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
      <section className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" /> A literary sanctuary
          </div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
            Where every story <br />
            <span className="italic text-primary">finds a home.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Distraction-free reading designed for poems, short stories, and novels — and a writer's studio that respects the page.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/explore" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Start reading <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/write" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-secondary">
              Open the studio
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="font-display text-2xl italic leading-relaxed">
              "I keep a small atlas of the hours between heartbeats — each island named for a thing I forgot to say."
            </div>
            <div className="mt-4 text-sm text-muted-foreground">— Imogen Vale, <em>Cartography of Stillness</em></div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">Choose your reading time</h2>
            <p className="text-sm text-muted-foreground">Pick an intent. We'll tune the feed to it.</p>
          </div>
        </div>
        <ReadingTimeFilter value={filter} onChange={setFilter} />
      </section>

      <section className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured && <ContentCard c={featured} featured />}
          {rest.map((c) => <ContentCard key={c.id} c={c} />)}
        </div>
      </section>
    </main>
  );
}
