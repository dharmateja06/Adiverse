import { i as createServerFn, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-D5pgUihP.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var lorem = `The night unfurled like ink across parchment, and in its quiet she heard the small voice of the world remembering itself. She wrote until the candle bowed, until the words felt less like decisions and more like weather — arriving, departing, leaving the page slightly changed.\n\nMorning came with the discipline of light. There was tea, and the soft architecture of habit. The story, she realized, had been waiting for her to stop performing it.`;
var longBody = Array.from({ length: 8 }, () => lorem).join("\n\n");
var CONTENT = [
	{
		id: "p1",
		type: "poem",
		title: "Cartography of Stillness",
		author: "Imogen Vale",
		excerpt: "A small atlas of the hours between heartbeats…",
		genre: "Lyric",
		readTime: 2,
		views: 12400,
		bookmarks: 980,
		tags: ["solitude", "dawn"],
		cover: "linear-gradient(135deg,#2a2f5a,#1a1d3a)",
		body: `I keep a small atlas of the hours\nbetween heartbeats —\neach island named\nfor a thing I forgot to say.\n\nThere is a country called Almost,\nand a river called If.\nI sail there at night\nwith a lantern of breath.`
	},
	{
		id: "p2",
		type: "poem",
		title: "Letters to the Sea",
		author: "Noor Kazemi",
		excerpt: "Salt-soft addresses to a horizon that never answers.",
		genre: "Elegy",
		readTime: 3,
		views: 8900,
		bookmarks: 612,
		tags: ["ocean", "longing"],
		cover: "linear-gradient(135deg,#3a5570,#1a2a3a)",
		body: `Dear sea,\nI am learning to keep nothing.\nThe gulls translate badly\nbut they translate.`
	},
	{
		id: "s1",
		type: "story",
		title: "The Lamplighter's Apprentice",
		author: "Theo Aldwin",
		excerpt: "On the night the city forgot how to sleep, a girl carried the only ember.",
		genre: "Magical Realism",
		readTime: 12,
		views: 24300,
		bookmarks: 2104,
		tags: ["wonder", "city"],
		cover: "linear-gradient(135deg,#5a4a2a,#2a1f10)",
		body: longBody
	},
	{
		id: "s2",
		type: "story",
		title: "A Brief History of Snow",
		author: "Mira Hollings",
		excerpt: "Three winters, one window, and the woman who counted them.",
		genre: "Literary",
		readTime: 9,
		views: 18700,
		bookmarks: 1540,
		tags: ["memory", "winter"],
		cover: "linear-gradient(135deg,#4a5a6a,#1a2530)",
		body: longBody
	},
	{
		id: "n1",
		type: "novel",
		title: "The Cartographer of Lost Cities",
		author: "Eliana Voss",
		excerpt: "Some maps are drawn in grief; some grief is drawn in maps.",
		genre: "Historical Fiction",
		readTime: 480,
		views: 102500,
		bookmarks: 9870,
		tags: [
			"epic",
			"mystery",
			"history"
		],
		cover: "linear-gradient(135deg,#2a2f5a,#0f1230)",
		chapters: Array.from({ length: 12 }, (_, i) => ({
			id: `c${i + 1}`,
			title: `Chapter ${i + 1}: ${[
				"The Atlas",
				"The Letter",
				"The City of Salt",
				"Northbound",
				"The Cartographer's Daughter",
				"Compass Rose",
				"The Sea-Margin",
				"Names of Rivers",
				"The Mountain Pass",
				"Snowfall",
				"The Returning",
				"An Atlas of Almost"
			][i]}`,
			body: longBody
		}))
	},
	{
		id: "n2",
		type: "novel",
		title: "Orchards of the Unseen",
		author: "Bram Ostler",
		excerpt: "A botanist returns to a country that no longer exists on any map.",
		genre: "Speculative",
		readTime: 360,
		views: 56200,
		bookmarks: 4320,
		tags: ["nature", "memory"],
		cover: "linear-gradient(135deg,#2f4a3a,#10201a)",
		chapters: Array.from({ length: 8 }, (_, i) => ({
			id: `c${i + 1}`,
			title: `Chapter ${i + 1}: The Returning, part ${i + 1}`,
			body: longBody
		}))
	}
];
function findContent(id) {
	return CONTENT.find((c) => c.id === id);
}
var getAllContent_createServerFn_handler = createServerRpc({
	id: "11a94b974f827c9f53f2dac114f97662835859630bb817ea5aacb013985cc940",
	name: "getAllContent",
	filename: "src/lib/api/content.functions.ts"
}, (opts) => getAllContent.__executeServer(opts));
var getAllContent = createServerFn({ method: "GET" }).handler(getAllContent_createServerFn_handler, async () => CONTENT);
var getContentById_createServerFn_handler = createServerRpc({
	id: "46b6d15e4dce9b58d4267ebaf0e9251ba0e5786c390fc55363991cd82d54d0a0",
	name: "getContentById",
	filename: "src/lib/api/content.functions.ts"
}, (opts) => getContentById.__executeServer(opts));
var getContentById = createServerFn({ method: "GET" }).validator(objectType({ id: stringType().min(1) })).handler(getContentById_createServerFn_handler, async ({ data }) => findContent(data.id) ?? null);
//#endregion
export { getAllContent_createServerFn_handler, getContentById_createServerFn_handler };
