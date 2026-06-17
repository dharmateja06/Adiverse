import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { B as ChevronRight, J as ArrowLeft, S as MessageCircle, U as Bookmark, V as ChevronLeft, _ as Plus, p as Send, t as X, w as List, x as Minus } from "../_libs/lucide-react.mjs";
import { t as Route } from "./read.novel._id-DGqbai9A.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.novel._id-Ccl2Zfis.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function readSavedChapterIndex(storageKey, chapterCount) {
	if (typeof window === "undefined") return 0;
	const saved = Number(localStorage.getItem(storageKey));
	if (!Number.isNaN(saved) && saved >= 0 && saved < chapterCount) return saved;
	return 0;
}
function NovelReader() {
	const c = Route.useLoaderData();
	const chapters = c.chapters;
	const storageKey = `adiverse-bookmark-${c.id}`;
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [fontSize, setFontSize] = (0, import_react.useState)(18);
	const [tocOpen, setTocOpen] = (0, import_react.useState)(true);
	const [comments, setComments] = (0, import_react.useState)([]);
	const [commentText, setCommentText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setIdx(readSavedChapterIndex(storageKey, chapters.length));
	}, [storageKey, chapters.length]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem(storageKey, String(idx));
		window.scrollTo({ top: 0 });
	}, [idx, storageKey]);
	const ch = chapters[idx];
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-7xl gap-6 px-4 pb-24 pt-8 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: `sticky top-20 h-[calc(100vh-6rem)] shrink-0 overflow-hidden rounded-2xl border border-border bg-card transition-all ${tocOpen ? "w-72" : "w-14"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border p-3",
				children: [tocOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTocOpen((o) => !o),
					className: "grid h-8 w-8 place-items-center rounded-md hover:bg-secondary",
					children: tocOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" })
				})]
			}), tocOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-[calc(100%-3rem)] overflow-y-auto p-2",
				children: chapters.map((c2, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setIdx(i),
					className: `mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm transition ${i === idx ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] uppercase tracking-wider opacity-70",
						children: ["Chapter ", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate font-medium",
						children: c2.title.replace(/^Chapter \d+: /, "")
					})]
				}, c2.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Library"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 rounded-full border border-border bg-card p-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFontSize((s) => Math.max(14, s - 1)),
								className: "grid h-8 w-8 place-items-center rounded-full hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "px-2 text-xs text-muted-foreground",
								children: [fontSize, "px"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFontSize((s) => Math.min(24, s + 1)),
								className: "grid h-8 w-8 place-items-center rounded-full hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mx-auto mt-8 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold leading-tight",
							children: ch.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3 w-3" }), " Auto-bookmarked"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-6 font-serif leading-[1.9]",
							style: { fontSize },
							children: ch.body.split("\n\n").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto mt-14 flex max-w-2xl items-center justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: idx === 0,
							onClick: () => setIdx((i) => i - 1),
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:bg-secondary disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Previous"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								idx + 1,
								" / ",
								chapters.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: idx === chapters.length - 1,
							onClick: () => setIdx((i) => i + 1),
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition hover:opacity-90 disabled:opacity-40",
							children: ["Next chapter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-20 max-w-2xl",
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
								placeholder: "Share your thoughts about this chapter...",
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
		})]
	});
}
//#endregion
export { NovelReader as component };
