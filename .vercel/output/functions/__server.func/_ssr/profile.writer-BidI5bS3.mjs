import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { F as FilePen, L as Eye, U as Bookmark, i as TrendingUp, v as PenLine } from "../_libs/lucide-react.mjs";
import { t as ContentCard } from "./ContentCard-BBvWkpeT.mjs";
import { t as Route } from "./profile.writer-DM7SPpsp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile.writer-BidI5bS3.js
var import_jsx_runtime = require_jsx_runtime();
function WriterProfile() {
	const published = Route.useLoaderData().slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-20 w-20 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground",
						children: "I"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold",
							children: "Imogen Vale"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm italic text-muted-foreground",
							children: "\"Cartographer of small, quiet things.\""
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/write",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "h-4 w-4" }), " New piece"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
				children: [
					{
						icon: Eye,
						label: "Total views",
						value: "204k"
					},
					{
						icon: Bookmark,
						label: "Bookmarks",
						value: "12.4k"
					},
					{
						icon: TrendingUp,
						label: "Followers",
						value: "3,210"
					},
					{
						icon: FilePen,
						label: "Drafts",
						value: "6"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-3xl font-bold",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl font-bold",
				children: "Published"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: published.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { c }, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl font-bold",
				children: "Drafts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: [
					"Untitled novel — chapter 3",
					"Notes on a winter market",
					"Poem: between rooms"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Edited 2 days ago · 1,240 words"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/write",
						className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:bg-secondary",
						children: "Continue writing"
					})]
				}, t))
			})
		]
	});
}
//#endregion
export { WriterProfile as component };
