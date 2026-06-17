import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { L as Eye, R as Clock, U as Bookmark } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContentCard-BBvWkpeT.js
var import_jsx_runtime = require_jsx_runtime();
var fmt = (n) => n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n);
var typeRoute = (c) => c.type === "poem" ? "/read/poem/$id" : c.type === "story" ? "/read/story/$id" : "/read/novel/$id";
function ContentCard({ c, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: typeRoute(c),
		params: { id: c.id },
		className: `group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-xl ${featured ? "sm:col-span-2 sm:row-span-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden ${featured ? "h-72" : "h-44"}`,
			style: { background: c.cover },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur",
					children: c.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 left-4 right-4 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs opacity-80",
						children: c.genre
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: `font-display font-bold leading-tight ${featured ? "text-3xl" : "text-xl"}`,
						children: c.title
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-2 text-sm text-muted-foreground",
				children: c.excerpt
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: c.author
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
								" ",
								c.readTime,
								"m"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }),
								" ",
								fmt(c.views)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3 w-3" }),
								" ",
								fmt(c.bookmarks)
							]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
export { ContentCard as t };
