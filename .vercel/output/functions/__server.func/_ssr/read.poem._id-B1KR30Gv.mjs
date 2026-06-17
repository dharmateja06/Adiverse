import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as loadContentById, t as ReaderPending } from "./ReaderPending-CsbA8P_m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read.poem._id-B1KR30Gv.js
var $$splitErrorComponentImporter = () => import("./read.poem._id-CJtbLGSd.mjs");
var $$splitNotFoundComponentImporter = () => import("./read.poem._id-iac8bnDS.mjs");
var $$splitComponentImporter = () => import("./read.poem._id-DIyfCAZn.mjs");
var Route = createFileRoute("/read/poem/$id")({
	loader: async ({ params, context: { queryClient } }) => loadContentById(queryClient, params.id, "poem"),
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Poem"} — Adiverse` }, {
		name: "description",
		content: loaderData?.excerpt ?? "Read a poem on Adiverse."
	}] }),
	pendingComponent: ReaderPending,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
