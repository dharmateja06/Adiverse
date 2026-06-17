import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as loadContentById, t as ReaderPending } from "./ReaderPending-CsbA8P_m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.story._id-BmuV-FZr.js
var $$splitErrorComponentImporter = () => import("./read.story._id-NckRqZXt.mjs");
var $$splitNotFoundComponentImporter = () => import("./read.story._id-COx-pf4i.mjs");
var $$splitComponentImporter = () => import("./read.story._id-B7gg5Nwu.mjs");
var Route = createFileRoute("/read/story/$id")({
	loader: async ({ params, context: { queryClient } }) => loadContentById(queryClient, params.id, "story"),
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Story"} — Adiverse` }, {
		name: "description",
		content: loaderData?.excerpt ?? "Read a short story on Adiverse."
	}] }),
	pendingComponent: ReaderPending,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
