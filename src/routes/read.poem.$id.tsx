import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Bookmark, Heart, Share2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
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
  const [comments, setComments] = useState<Array<{ id: string; author: string; text: string; timestamp: string }>>([]);
  const [commentText, setCommentText] = useState("");

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
            placeholder="Share your thoughts about this poem..."
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
  );
}