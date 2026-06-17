import { createFileRoute } from "@tanstack/react-router";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo, useState } from "react";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered, Quote, Link as LinkIcon,
  Highlighter, Palette, Save, Eye, FileText, Clock, Hash,
} from "lucide-react";

export const Route = createFileRoute("/write")({
  head: () => ({ meta: [{ title: "Studio — Adiverse" }, { name: "description", content: "A writer's notepad designed for the page." }] }),
  component: Write,
});

const FONTS = [
  { label: "Merriweather", value: '"Merriweather", Georgia, serif' },
  { label: "Playfair Display", value: '"Playfair Display", Georgia, serif' },
  { label: "Lora", value: '"Lora", Georgia, serif' },
  { label: "Inter", value: '"Inter", system-ui, sans-serif' },
];

const CANVASES = [
  { label: "Pure White", bg: "#ffffff", fg: "#1a1a2a" },
  { label: "Warm Sepia", bg: "#f4ecd8", fg: "#3a2e1f" },
  { label: "Soft Gray", bg: "#eceef1", fg: "#1f2330" },
  { label: "Night", bg: "#0f1320", fg: "#e9ecf5" },
];

const HIGHLIGHTS = ["transparent", "#fff59d", "#ffcc80", "#b2ebf2", "#c5e1a5", "#f48fb1"];
const COLORS = ["inherit", "#1a1a2a", "#5b3a91", "#9a3412", "#1d4ed8", "#047857"];

function Write() {
  const [title, setTitle] = useState("Untitled");
  const [type, setType] = useState<"poem" | "story" | "novel">("story");
  const [font, setFont] = useState(FONTS[0].value);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [canvas, setCanvas] = useState(CANVASES[0]);
  const [text, setText] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Begin where the silence ends…" }),
    ],
    content: "",
    onUpdate: ({ editor: ed }) => setText(ed.getText()),
    editorProps: {
      attributes: {
        class:
          "outline-none min-h-[40vh] [&_blockquote]:border-l-4 [&_blockquote]:border-current/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6",
      },
    },
  });

  const stats = useMemo(() => {
    const plain = text.replace(/\s+/g, " ").trim();
    const words = plain ? plain.split(" ").length : 0;
    const chars = plain.length;
    const minutes = Math.max(1, Math.round(words / 200));
    return { words, chars, minutes };
  }, [text]);

  const Btn = ({ onClick, children, title }: { onClick: () => void; children: React.ReactNode; title: string }) => (
    <button
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      title={title}
      className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition hover:bg-secondary hover:text-foreground"
    >
      {children}
    </button>
  );

  const Sep = () => <div className="mx-1 h-6 w-px bg-border" />;

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-transparent font-display text-4xl font-bold outline-none placeholder:text-muted-foreground/50 sm:text-5xl"
            placeholder="Untitled"
          />
          <div className="mt-2 flex items-center gap-2 text-xs">
            {(["poem", "story", "novel"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-full border px-3 py-1 capitalize ${
                  type === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-secondary">
            <Eye className="h-4 w-4" /> Preview
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
            <Save className="h-4 w-4" /> Save draft
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-1 border-b border-border bg-background/50 px-3 py-2">
            <Btn title="Bold" onClick={() => editor?.chain().focus().toggleBold().run()}><Bold className="h-4 w-4" /></Btn>
            <Btn title="Italic" onClick={() => editor?.chain().focus().toggleItalic().run()}><Italic className="h-4 w-4" /></Btn>
            <Btn title="Underline" onClick={() => editor?.chain().focus().toggleUnderline().run()}><UnderlineIcon className="h-4 w-4" /></Btn>
            <Btn title="Strikethrough" onClick={() => editor?.chain().focus().toggleStrike().run()}><Strikethrough className="h-4 w-4" /></Btn>
            <Sep />
            <Btn title="Align left" onClick={() => editor?.chain().focus().setTextAlign("left").run()}><AlignLeft className="h-4 w-4" /></Btn>
            <Btn title="Align center" onClick={() => editor?.chain().focus().setTextAlign("center").run()}><AlignCenter className="h-4 w-4" /></Btn>
            <Btn title="Align right" onClick={() => editor?.chain().focus().setTextAlign("right").run()}><AlignRight className="h-4 w-4" /></Btn>
            <Sep />
            <Btn title="Bulleted list" onClick={() => editor?.chain().focus().toggleBulletList().run()}><List className="h-4 w-4" /></Btn>
            <Btn title="Numbered list" onClick={() => editor?.chain().focus().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Btn>
            <Btn title="Quote" onClick={() => editor?.chain().focus().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Btn>
            <Btn
              title="Link"
              onClick={() => {
                const url = prompt("Link URL");
                if (!url) return;
                editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
              }}
            >
              <LinkIcon className="h-4 w-4" />
            </Btn>
            <Sep />
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="h-9 rounded-md border border-border bg-card px-2 text-sm outline-none"
            >
              {FONTS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
            </select>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="h-9 rounded-md border border-border bg-card px-2 text-sm"
            >
              {[14, 16, 18, 20, 22, 24, 28].map((s) => <option key={s} value={s}>{s}px</option>)}
            </select>
            <select
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="h-9 rounded-md border border-border bg-card px-2 text-sm"
            >
              {[1.4, 1.6, 1.8, 2, 2.2].map((s) => <option key={s} value={s}>LH {s}</option>)}
            </select>
            <Sep />
            <div className="flex items-center gap-1">
              <Highlighter className="h-4 w-4 text-muted-foreground" />
              {HIGHLIGHTS.map((c) => (
                <button
                  key={c}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    if (c === "transparent") {
                      editor?.chain().focus().unsetHighlight().run();
                    } else {
                      editor?.chain().focus().toggleHighlight({ color: c }).run();
                    }
                  }}
                  className="h-5 w-5 rounded border border-border"
                  style={{ background: c === "transparent" ? "repeating-linear-gradient(45deg,#0001,#0001 3px,transparent 3px,transparent 6px)" : c }}
                  title={c}
                />
              ))}
            </div>
            <Sep />
            <div className="flex items-center gap-1">
              <Palette className="h-4 w-4 text-muted-foreground" />
              {COLORS.map((c) => (
                <button
                  key={c}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    if (c === "inherit") {
                      editor?.chain().focus().unsetColor().run();
                    } else {
                      editor?.chain().focus().setColor(c).run();
                    }
                  }}
                  className="h-5 w-5 rounded-full border border-border"
                  style={{ background: c === "inherit" ? "conic-gradient(red,orange,yellow,green,blue,purple,red)" : c }}
                />
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div
            className="min-h-[60vh] p-10 transition-colors"
            style={{ background: canvas.bg, color: canvas.fg }}
          >
            <div
              className="mx-auto max-w-3xl write-editor"
              style={{ fontFamily: font, fontSize, lineHeight }}
            >
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        {/* Right panel */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live analytics</div>
            <div className="space-y-3">
              <Stat icon={FileText} label="Words" value={stats.words} />
              <Stat icon={Hash} label="Characters" value={stats.chars} />
              <Stat icon={Clock} label="Reading time" value={`${stats.minutes} min`} />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Canvas</div>
            <div className="grid grid-cols-2 gap-2">
              {CANVASES.map((c) => (
                <button
                  key={c.label}
                  onClick={() => setCanvas(c)}
                  className={`flex items-center gap-2 rounded-lg border p-2 text-left text-xs transition ${
                    canvas.label === c.label ? "border-primary" : "border-border hover:bg-secondary"
                  }`}
                >
                  <div className="h-7 w-7 rounded border border-border" style={{ background: c.bg }} />
                  <div>
                    <div className="font-medium">{c.label}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 text-xs text-muted-foreground">
            Drafts sync to <span className="text-foreground">profiles → standalone_posts / novels / chapters</span> when connected to your backend.
          </div>
        </aside>
      </div>
    </main>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof FileText; label: string; value: string | number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Icon className="h-4 w-4" /> {label}</span>
      <span className="font-display text-xl font-bold">{value}</span>
    </div>
  );
}
