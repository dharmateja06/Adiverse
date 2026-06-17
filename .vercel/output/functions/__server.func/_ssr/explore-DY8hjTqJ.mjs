import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Route } from "./explore-Ee_H22Zt.mjs";
import { t as ContentCard } from "./ContentCard-BBvWkpeT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explore-DY8hjTqJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var genres = [
	"All",
	"Lyric",
	"Elegy",
	"Magical Realism",
	"Literary",
	"Historical Fiction",
	"Speculative"
];
function Explore() {
	const content = Route.useLoaderData();
	const [genre, setGenre] = (0, import_react.useState)("All");
	const items = genre === "All" ? content : content.filter((c) => c.genre === genre);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-bold sm:text-5xl",
				children: "Explore"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-muted-foreground",
				children: "Curated like a magazine, not a marketplace."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: genres.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setGenre(g),
					className: `rounded-full border px-4 py-1.5 text-sm transition ${genre === g ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
					children: g
				}, g))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentCard, { c }, c.id))
			})
		]
	});
}
//#endregion
export { Explore as component };
