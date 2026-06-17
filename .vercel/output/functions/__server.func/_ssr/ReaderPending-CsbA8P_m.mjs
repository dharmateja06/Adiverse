import { N as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as getContentById } from "./content.functions-CEGjunYU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ReaderPending-CsbA8P_m.js
var import_jsx_runtime = require_jsx_runtime();
var contentQueryKey = (id) => ["content", id];
async function loadContentById(queryClient, id, expectedType) {
	const content = await queryClient.ensureQueryData({
		queryKey: contentQueryKey(id),
		queryFn: () => getContentById({ data: { id } })
	});
	if (!content) throw notFound();
	if (expectedType && content.type !== expectedType) throw notFound();
	return content;
}
async function loadNovelById(queryClient, id) {
	const content = await loadContentById(queryClient, id, "novel");
	if (!content.chapters?.length) throw notFound();
	return content;
}
function ReaderPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-2xl animate-pulse px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-24 rounded bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-4 w-20 rounded bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-12 w-4/5 rounded bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-4 w-32 rounded bg-muted" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-full rounded bg-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-full rounded bg-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-5/6 rounded bg-muted" })
				]
			})
		]
	});
}
//#endregion
export { loadContentById as n, loadNovelById as r, ReaderPending as t };
