import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getAllContent } from "./content.functions-CEGjunYU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-GriU-o1n.js
var $$splitComponentImporter = () => import("./routes-7PnDnGF0.mjs");
var Route = createFileRoute("/")({
	loader: () => getAllContent(),
	head: () => ({ meta: [
		{ title: "Adiverse — Where every story finds a home" },
		{
			name: "description",
			content: "A premium literary sanctuary for poems, short stories, and novels."
		},
		{
			property: "og:title",
			content: "Adiverse"
		},
		{
			property: "og:description",
			content: "Where every story finds a home."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
