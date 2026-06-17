import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAllContent } from "./content.functions-CEGjunYU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile.writer-DM7SPpsp.js
var $$splitComponentImporter = () => import("./profile.writer-BidI5bS3.mjs");
var Route = createFileRoute("/profile/writer")({
	loader: () => getAllContent(),
	head: () => ({ meta: [{ title: "Writer portfolio — Adiverse" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
