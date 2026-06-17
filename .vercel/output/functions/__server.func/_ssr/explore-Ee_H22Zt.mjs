import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAllContent } from "./content.functions-CEGjunYU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explore-Ee_H22Zt.js
var $$splitComponentImporter = () => import("./explore-DY8hjTqJ.mjs");
var Route = createFileRoute("/explore")({
	loader: () => getAllContent(),
	head: () => ({ meta: [{ title: "Explore — Adiverse" }, {
		name: "description",
		content: "Browse poems, short stories, and novels."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
