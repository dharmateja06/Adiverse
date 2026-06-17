import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { J as ArrowLeft, M as Heart, S as MessageCircle, U as Bookmark, d as Share2, p as Send } from "../_libs/lucide-react.mjs";
import { t as Route } from "./read.poem._id-B1KR30Gv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.poem._id-DIyfCAZn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PoemReader() {
	const c = Route.useLoaderData();
	const [comments, setComments] = (0, import_react.useState)([]);
	const [commentText, setCommentText] = (0, import_react.useState)("");
	const handleAddComment = () => {
		if (commentText.trim()) {
			const newComment = {
				id: Date.now().toString(),
				author: "You",
				text: commentText,
				timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
			};
			setComments([...comments, newComment]);
			setCommentText("");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl px-6 pb-24 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mt-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: c.genre
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-sm italic text-muted-foreground",
						children: ["by ", c.author]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "mx-auto mt-14 max-w-xl text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "whitespace-pre-wrap font-serif text-xl leading-[2.2] tracking-wide text-foreground",
					children: c.body ?? ""
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 flex items-center justify-center gap-2",
				children: [
					Heart,
					Bookmark,
					Share2
				].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border-t border-border pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-semibold",
							children: [
								"Comments (",
								comments.length,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 rounded-lg border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: commentText,
							onChange: (e) => setCommentText(e.target.value),
							placeholder: "Share your thoughts about this poem...",
							className: "h-24 w-full rounded-md border border-border bg-background p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleAddComment,
								disabled: !commentText.trim(),
								className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Comment"]
							})
						})]
					}),
					comments.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: comment.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: comment.timestamp
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-foreground",
								children: comment.text
							})]
						}, comment.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: "No comments yet. Be the first to share your thoughts!"
					})
				]
			})
		]
	});
}
//#endregion
export { PoemReader as component };
