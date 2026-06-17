import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { I as Feather, O as Library, W as BookOpen, q as ArrowRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as ContentCard } from "./ContentCard-BBvWkpeT.mjs";
import { t as Route } from "./routes-GriU-o1n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-7PnDnGF0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var opts = [
	{
		value: "all",
		label: "All",
		sub: "Everything",
		icon: Library
	},
	{
		value: "poem",
		label: "Under 5 min",
		sub: "Poetry",
		icon: Feather
	},
	{
		value: "story",
		label: "5 – 20 min",
		sub: "Short stories",
		icon: BookOpen
	},
	{
		value: "novel",
		label: "20+ min",
		sub: "Novels",
		icon: Library
	}
];
function ReadingTimeFilter({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl border border-border bg-card/70 p-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-1 sm:grid-cols-4",
			children: opts.map((o) => {
				const Icon = o.icon;
				const active = value === o.value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onChange(o.value),
					className: `group relative flex flex-col items-start gap-1 rounded-xl px-4 py-3 text-left transition ${active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: o.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `text-xs ${active ? "text-primary-foreground/70" : "text-muted-foreground/80"}`,
						children: o.sub
					})] })]
				}, o.value);
			})
		})
	});
}
function Index() {
	const content = Route.useLoaderData();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const items = (0, import_react.useMemo)(() => filter === "all" ? content : content.filter((c) => c.type === filter), [content, filter]);
	const featured = items[0];
	const rest = items.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " A literary sanctuary"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl",
						children: [
							"Where every story ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "finds a home."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: "Distraction-free reading designed for poems, short stories, and novels — and a writer's studio that respects the page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/explore",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90",
							children: ["Start reading ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/write",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition hover:bg-secondary",
							children: "Open the studio"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/30 to-transparent blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-3xl border border-border bg-card p-8 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl italic leading-relaxed",
							children: "\"I keep a small atlas of the hours between heartbeats — each island named for a thing I forgot to say.\""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-sm text-muted-foreground",
							children: ["— Imogen Vale, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Cartography of Stillness" })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 flex items-end justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Choose your reading time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Pick an intent. We'll tune the feed to it."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingTimeFilter, {
					value: filter,
					onChange: setFilter
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: [featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, {
						c: featured,
						featured: true
					}), rest.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { c }, c.id))]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
