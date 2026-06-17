import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAllContent } from "./content.functions-CEGjunYU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile.reader-CWQ17W_s.js
var $$splitComponentImporter = () => import("./profile.reader-3epPxYf0.mjs");
var Route = createFileRoute("/profile/reader")({
	loader: () => getAllContent(),
	head: () => ({ meta: [{ title: "Reader profile — Adiverse" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
