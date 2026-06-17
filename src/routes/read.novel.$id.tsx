import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, List, Minus, Plus, X, Bookmark, MessageCircle, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { loadNovelById } from "@/lib/api/content.loaders";
import { ReaderPending } from "@/components/ReaderPending";

export const Route = createFileRoute("/read/novel/$id")({
  loader: async ({ params, context: { queryClient } }) =>
    loadNovelById(queryClient, params.id),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Novel"} — Adiverse` },
      { name: "description", content: loaderData?.excerpt ?? "Read a novel on Adiverse." },
    ],
  }),
  pendingComponent: ReaderPending,
  component: NovelReader,
  notFoundComponent: () => <div className="p-10 text-center text-muted-foreground">Novel not found.</div>,
  errorComponent: ({ error }) => <div className="p-10 text-center text-destructive">{error.message}</div>,
});

function readSavedChapterIndex(storageKey: string, chapterCount: number) {
  if (typeof window === "undefined") return 0;
  const saved = Number(localStorage.getItem(storageKey));
  if (!Number.isNaN(saved) && saved >= 0 && saved < chapterCount) return saved;
  return 0;
}

function NovelReader() {
  const c = Route.useLoaderData();
  const chapters = c.chapters!;
  const storageKey = `adiverse-bookmark-${c.id}`;
  const [idx, setIdx] = useState(0);
  const [fontSize, setFontSize] = useState(18);
  const [tocOpen, setTocOpen] = useState(true);
  const [comments, setComments] = useState<Array<{ id: string; author: string; text: string; timestamp: string }>>([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    setIdx(readSavedChapterIndex(storageKey, chapters.length));
  }, [storageKey, chapters.length]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(idx));
    window.scrollTo({ top: 0 });
  }, [idx, storageKey]);

  const ch = chapters[idx]!;

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now().toString(),
        author: "You",
        text: commentText,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-24 pt-8 sm:px-6">
      <aside
        className={`sticky top-20 h-[calc(100vh-6rem)] shrink-0 overflow-hidden rounded-2xl border border-border bg-card transition-all ${
          tocOpen ? "w-72" : "w-14"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border p-3">
          {tocOpen && <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contents</div>}
          <button onClick={() => setTocOpen((o) => !o)} className="grid h-8 w-8 place-items-center rounded-md hover:bg-secondary">
            {tocOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </button>
        </div>
        {tocOpen && (
          <div className="h-[calc(100%-3rem)] overflow-y-auto p-2">
            {chapters.map((c2, i) => (
              <button
                key={c2.id}
                onClick={() => setIdx(i)}
                className={`mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  i === idx ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-70">Chapter {i + 1}</div>
                <div className="truncate font-medium">{c2.title.replace(/^Chapter \d+: /, "")}</div>
              </button>
            ))}
          </div>
        )}
      </aside>

      <main className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Library
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button onClick={() => setFontSize((s) => Math.max(14, s - 1))} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"><Minus className="h-3 w-3" /></button>
            <span className="px-2 text-xs text-muted-foreground">{fontSize}px</span>
            <button onClick={() => setFontSize((s) => Math.min(24, s + 1))} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"><Plus className="h-3 w-3" /></button>
          </div>
        </div>

        <article className="mx-auto mt-8 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{c.title}</div>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight">{ch.title}</h1>
          <div className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground"><Bookmark className="h-3 w-3" /> Auto-bookmarked</div>
          <div className="mt-8 space-y-6 font-serif leading-[1.9]" style={{ fontSize }}>
            {ch.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>

        <nav className="mx-auto mt-14 flex max-w-2xl items-center justify-between gap-3">
          <button
            disabled={idx === 0}
            onClick={() => setIdx((i) => i - 1)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:bg-secondary disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <div className="text-xs text-muted-foreground">{idx + 1} / {chapters.length}</div>
          <button
            disabled={idx === chapters.length - 1}
            onClick={() => setIdx((i) => i + 1)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            Next chapter <ChevronRight className="h-4 w-4" />
          </button>
        </nav>

        <div className="mx-auto mt-20 max-w-2xl">
          <div className="mb-6 flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Comments ({comments.length})</h2>
          </div>

          <div className="mb-6 rounded-lg border border-border bg-card p-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts about this chapter..."
              className="h-24 w-full rounded-md border border-border bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleAddComment}
                disabled={!commentText.trim()}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
              >
                <Send className="h-4 w-4" /> Comment
              </button>
            </div>
          </div>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground">{comment.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
          )}
        </div>
      </main>
    </div>
  );
}
