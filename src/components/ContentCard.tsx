import { Link } from "@tanstack/react-router";
import { Eye, Bookmark, Clock } from "lucide-react";
import type { Content } from "@/lib/content.types";

const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n));

const typeRoute = (c: Content) =>
  c.type === "poem" ? "/read/poem/$id" : c.type === "story" ? "/read/story/$id" : "/read/novel/$id";

export function ContentCard({ c, featured = false }: { c: Content; featured?: boolean }) {
  return (
    <Link
      to={typeRoute(c)}
      params={{ id: c.id }}
      className={`group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-xl ${
        featured ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "h-72" : "h-44"}`}
        style={{ background: c.cover }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur">
          {c.type}
        </span>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-xs opacity-80">{c.genre}</div>
          <h3 className={`font-display font-bold leading-tight ${featured ? "text-3xl" : "text-xl"}`}>{c.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="line-clamp-2 text-sm text-muted-foreground">{c.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{c.author}</span>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.readTime}m</span>
            <span className="inline-flex items-center gap-1"><Eye className="h-3 w-3" /> {fmt(c.views)}</span>
            <span className="inline-flex items-center gap-1"><Bookmark className="h-3 w-3" /> {fmt(c.bookmarks)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}