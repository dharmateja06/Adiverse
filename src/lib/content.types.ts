export type ContentType = "poem" | "story" | "novel";

export interface Content {
  id: string;
  type: ContentType;
  title: string;
  author: string;
  excerpt: string;
  genre: string;
  readTime: number;
  views: number;
  bookmarks: number;
  tags: string[];
  cover: string;
  body?: string;
  chapters?: { id: string; title: string; body: string }[];
}
