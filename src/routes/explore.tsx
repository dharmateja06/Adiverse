import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getAllContent } from "@/lib/api/content.functions";
import { ContentCard } from "@/components/ContentCard";

export const Route = createFileRoute("/explore")({
  loader: () => getAllContent(),
  head: () => ({ meta: [{ title: "Explore — Adiverse" }, { name: "description", content: "Browse poems, short stories, and novels." }] }),
  component: Explore,
});

const genres = ["All", "Lyric", "Elegy", "Magical Realism", "Literary", "Historical Fiction", "Speculative"];

function Explore() {
  const content = Route.useLoaderData();
  const [genre, setGenre] = useState("All");
  const items = genre === "All" ? content : content.filter((c) => c.genre === genre);
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Explore</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">Curated like a magazine, not a marketplace.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              genre === g
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => <ContentCard key={c.id} c={c} />)}
      </div>
    </main>
  );
}