import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { A as History, E as ListMusic, M as Heart, U as Bookmark } from "../_libs/lucide-react.mjs";
import { t as ContentCard } from "./ContentCard-BBvWkpeT.mjs";
import { t as Route } from "./profile.reader-CWQ17W_s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile.reader-3epPxYf0.js
var import_jsx_runtime = require_jsx_runtime();
function ReaderProfile() {
	const content = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-6 rounded-3xl border border-border bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-20 w-20 place-items-center rounded-full bg-primary font-display text-2xl text-primary-foreground",
						children: "A"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold",
							children: "Avery Lin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "Reader · joined 2024 · 142 stories read"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile/writer",
						className: "rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-secondary",
						children: "Switch to writer view"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
				children: [
					{
						icon: History,
						label: "Reading history",
						value: "142"
					},
					{
						icon: Bookmark,
						label: "Bookmarks",
						value: "37"
					},
					{
						icon: Heart,
						label: "Likes",
						value: "284"
					},
					{
						icon: ListMusic,
						label: "Lists",
						value: "9"
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
				children: "Continue reading"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: content.slice(0, 3).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { c }, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl font-bold",
				children: "Your bookmarks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: content.slice(2, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { c }, c.id))
			})
		]
	});
}
//#endregion
export { ReaderProfile as component };
