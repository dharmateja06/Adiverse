import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as loadNovelById, t as ReaderPending } from "./ReaderPending-CsbA8P_m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.novel._id-DGqbai9A.js
var $$splitErrorComponentImporter = () => import("./read.novel._id-C2HP-K9J.mjs");
var $$splitNotFoundComponentImporter = () => import("./read.novel._id-Bgm2duCb.mjs");
var $$splitComponentImporter = () => import("./read.novel._id-Ccl2Zfis.mjs");
var Route = createFileRoute("/read/novel/$id")({
	loader: async ({ params, context: { queryClient } }) => loadNovelById(queryClient, params.id),
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Novel"} — Adiverse` }, {
		name: "description",
		content: loaderData?.excerpt ?? "Read a novel on Adiverse."
	}] }),
	pendingComponent: ReaderPending,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
