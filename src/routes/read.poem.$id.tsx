import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, Heart, Share2 } from "lucide-react";
import { findContent } from "@/lib/mock-data";

export const Route = createFileRoute("/read/poem/$id")({
  loader: ({ params }) => {
    const c = findContent(params.id);
    if (!c) throw notFound();
    return c;
  },
  component: PoemReader,
  notFoundComponent: () => <div className="p-10 text-center text-muted-foreground">Poem not found.</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center text-destructive">{error.message}</div>,
});

function PoemReader() {
  const c = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>
      <header className="mt-10 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.genre}</div>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{c.title}</h1>
        <div className="mt-3 text-sm italic text-muted-foreground">by {c.author}</div>
      </header>

      <article className="mx-auto mt-14 max-w-xl text-center">
        <pre className="whitespace-pre-wrap font-serif text-xl leading-[2.2] tracking-wide text-foreground">
{c.body}
        </pre>
      </article>

      <div className="mt-16 flex items-center justify-center gap-2">
        {[Heart, Bookmark, Share2].map((I, i) => (
          <button key={i} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground">
            <I className="h-4 w-4" />
          </button>
        ))}
      </div>
    </main>
  );
}