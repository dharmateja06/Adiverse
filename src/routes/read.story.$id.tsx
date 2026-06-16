import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MessageCircle, Send } from "lucide-react";
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
  const [comments, setComments] = useState<Array<{ id: string; author: string; text: string; timestamp: string }>>([]);
  const [commentText, setCommentText] = useState("");

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

        {/* Comments Section */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Comments ({comments.length})</h2>
          </div>

          <div className="mb-6 rounded-lg border border-border bg-card p-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts about this story..."
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