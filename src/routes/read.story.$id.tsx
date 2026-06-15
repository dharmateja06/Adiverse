import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { findContent } from "@/lib/mock-data";

export const Route = createFileRoute("/read/story/$id")({
  loader: ({ params }) => {
    const c = findContent(params.id);
    if (!c) throw notFound();
    return c;
  },
  component: StoryReader,
  notFoundComponent: () => <div className="p-10 text-center text-muted-foreground">Story not found.</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center text-destructive">{error.message}</div>,
});

function StoryReader() {
  const c = Route.useLoaderData();
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const total = el.scrollHeight - window.innerHeight;
      const p = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref}>
      <div className="fixed left-0 right-0 top-16 z-40 h-0.5 bg-border">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <main className="mx-auto max-w-2xl px-6 pb-32 pt-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <header className="mt-8">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.genre}</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] sm:text-5xl">{c.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span>by <span className="text-foreground">{c.author}</span></span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.readTime} min read</span>
          </div>
        </header>
        <article className="prose-reading mt-10 space-y-6">
          {c.body?.split("\n\n").map((p: string, i: number) => <p key={i}>{p}</p>)}
        </article>
      </main>
    </div>
  );
}