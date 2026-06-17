import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as Link, K as Bold, L as Eye, N as Hash, P as FileText, R as Clock, T as ListOrdered, a as TextAlignStart, g as Quote, h as Save, j as Highlighter, k as Italic, l as Strikethrough, o as TextAlignEnd, r as Underline, s as TextAlignCenter, w as List, y as Palette } from "../_libs/lucide-react.mjs";
import { n as TextStyle, t as Color } from "../_libs/@tiptap/extension-color+[...].mjs";
import { t as index_default } from "../_libs/tiptap__extension-highlight.mjs";
import { n as index_default$1 } from "../_libs/@tiptap/extension-link+[...].mjs";
import { t as index_default$2 } from "../_libs/@tiptap/extension-placeholder+[...].mjs";
import { t as index_default$3 } from "../_libs/tiptap__extension-text-align.mjs";
import { n as index_default$4 } from "../_libs/tiptap__extension-underline.mjs";
import { n as useEditor, t as EditorContent } from "../_libs/fast-equals+tiptap__react.mjs";
import { t as index_default$5 } from "../_libs/tiptap__starter-kit.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/write-BVjn0wiL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FONTS = [
	{
		label: "Merriweather",
		value: "\"Merriweather\", Georgia, serif"
	},
	{
		label: "Playfair Display",
		value: "\"Playfair Display\", Georgia, serif"
	},
	{
		label: "Lora",
		value: "\"Lora\", Georgia, serif"
	},
	{
		label: "Inter",
		value: "\"Inter\", system-ui, sans-serif"
	}
];
var CANVASES = [
	{
		label: "Pure White",
		bg: "#ffffff",
		fg: "#1a1a2a"
	},
	{
		label: "Warm Sepia",
		bg: "#f4ecd8",
		fg: "#3a2e1f"
	},
	{
		label: "Soft Gray",
		bg: "#eceef1",
		fg: "#1f2330"
	},
	{
		label: "Night",
		bg: "#0f1320",
		fg: "#e9ecf5"
	}
];
var HIGHLIGHTS = [
	"transparent",
	"#fff59d",
	"#ffcc80",
	"#b2ebf2",
	"#c5e1a5",
	"#f48fb1"
];
var COLORS = [
	"inherit",
	"#1a1a2a",
	"#5b3a91",
	"#9a3412",
	"#1d4ed8",
	"#047857"
];
function Write() {
	const [title, setTitle] = (0, import_react.useState)("Untitled");
	const [type, setType] = (0, import_react.useState)("story");
	const [font, setFont] = (0, import_react.useState)(FONTS[0].value);
	const [fontSize, setFontSize] = (0, import_react.useState)(18);
	const [lineHeight, setLineHeight] = (0, import_react.useState)(1.8);
	const [canvas, setCanvas] = (0, import_react.useState)(CANVASES[0]);
	const [text, setText] = (0, import_react.useState)("");
	const editor = useEditor({
		extensions: [
			index_default$5,
			index_default$4,
			index_default$3.configure({ types: ["heading", "paragraph"] }),
			index_default.configure({ multicolor: true }),
			TextStyle,
			Color,
			index_default$1.configure({ openOnClick: false }),
			index_default$2.configure({ placeholder: "Begin where the silence ends…" })
		],
		content: "",
		onUpdate: ({ editor: ed }) => setText(ed.getText()),
		editorProps: { attributes: { class: "outline-none min-h-[40vh] [&_blockquote]:border-l-4 [&_blockquote]:border-current/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6" } }
	});
	const stats = (0, import_react.useMemo)(() => {
		const plain = text.replace(/\s+/g, " ").trim();
		const words = plain ? plain.split(" ").length : 0;
		return {
			words,
			chars: plain.length,
			minutes: Math.max(1, Math.round(words / 200))
		};
	}, [text]);
	const Btn = ({ onClick, children, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onMouseDown: (e) => e.preventDefault(),
		onClick,
		title,
		className: "grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition hover:bg-secondary hover:text-foreground",
		children
	});
	const Sep = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 h-6 w-px bg-border" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: title,
				onChange: (e) => setTitle(e.target.value),
				className: "w-full bg-transparent font-display text-4xl font-bold outline-none placeholder:text-muted-foreground/50 sm:text-5xl",
				placeholder: "Untitled"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex items-center gap-2 text-xs",
				children: [
					"poem",
					"story",
					"novel"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setType(t),
					className: `rounded-full border px-3 py-1 capitalize ${type === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
					children: t
				}, t))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-secondary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), " Preview"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), " Save draft"]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-1 border-b border-border bg-background/50 px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Bold",
							onClick: () => editor?.chain().focus().toggleBold().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Italic",
							onClick: () => editor?.chain().focus().toggleItalic().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Underline",
							onClick: () => editor?.chain().focus().toggleUnderline().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Underline, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Strikethrough",
							onClick: () => editor?.chain().focus().toggleStrike().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strikethrough, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Align left",
							onClick: () => editor?.chain().focus().setTextAlign("left").run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignStart, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Align center",
							onClick: () => editor?.chain().focus().setTextAlign("center").run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignCenter, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Align right",
							onClick: () => editor?.chain().focus().setTextAlign("right").run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAlignEnd, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Bulleted list",
							onClick: () => editor?.chain().focus().toggleBulletList().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Numbered list",
							onClick: () => editor?.chain().focus().toggleOrderedList().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Quote",
							onClick: () => editor?.chain().focus().toggleBlockquote().run(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							title: "Link",
							onClick: () => {
								const url = prompt("Link URL");
								if (!url) return;
								editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: font,
							onChange: (e) => setFont(e.target.value),
							className: "h-9 rounded-md border border-border bg-card px-2 text-sm outline-none",
							children: FONTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: f.value,
								children: f.label
							}, f.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: fontSize,
							onChange: (e) => setFontSize(Number(e.target.value)),
							className: "h-9 rounded-md border border-border bg-card px-2 text-sm",
							children: [
								14,
								16,
								18,
								20,
								22,
								24,
								28
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: s,
								children: [s, "px"]
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: lineHeight,
							onChange: (e) => setLineHeight(Number(e.target.value)),
							className: "h-9 rounded-md border border-border bg-card px-2 text-sm",
							children: [
								1.4,
								1.6,
								1.8,
								2,
								2.2
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: s,
								children: ["LH ", s]
							}, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "h-4 w-4 text-muted-foreground" }), HIGHLIGHTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onMouseDown: (e) => e.preventDefault(),
								onClick: () => {
									if (c === "transparent") editor?.chain().focus().unsetHighlight().run();
									else editor?.chain().focus().toggleHighlight({ color: c }).run();
								},
								className: "h-5 w-5 rounded border border-border",
								style: { background: c === "transparent" ? "repeating-linear-gradient(45deg,#0001,#0001 3px,transparent 3px,transparent 6px)" : c },
								title: c
							}, c))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sep, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-4 w-4 text-muted-foreground" }), COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onMouseDown: (e) => e.preventDefault(),
								onClick: () => {
									if (c === "inherit") editor?.chain().focus().unsetColor().run();
									else editor?.chain().focus().setColor(c).run();
								},
								className: "h-5 w-5 rounded-full border border-border",
								style: { background: c === "inherit" ? "conic-gradient(red,orange,yellow,green,blue,purple,red)" : c }
							}, c))]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-[60vh] p-10 transition-colors",
					style: {
						background: canvas.bg,
						color: canvas.fg
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-3xl write-editor",
						style: {
							fontFamily: font,
							fontSize,
							lineHeight
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorContent, { editor })
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Live analytics"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: FileText,
									label: "Words",
									value: stats.words
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Hash,
									label: "Characters",
									value: stats.chars
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Clock,
									label: "Reading time",
									value: `${stats.minutes} min`
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Canvas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2",
							children: CANVASES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCanvas(c),
								className: `flex items-center gap-2 rounded-lg border p-2 text-left text-xs transition ${canvas.label === c.label ? "border-primary" : "border-border hover:bg-secondary"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-7 w-7 rounded border border-border",
									style: { background: c.bg }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium",
									children: c.label
								}) })]
							}, c.label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-5 text-xs text-muted-foreground",
						children: [
							"Drafts sync to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: "profiles → standalone_posts / novels / chapters"
							}),
							" when connected to your backend."
						]
					})
				]
			})]
		})]
	});
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-2 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-bold",
			children: value
		})]
	});
}
//#endregion
export { Write as component };
