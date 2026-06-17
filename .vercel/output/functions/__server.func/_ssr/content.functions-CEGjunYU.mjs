import { i as createServerFn, o as getServerFnById, t as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-CEGjunYU.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getAllContent = createServerFn({ method: "GET" }).handler(createSsrRpc("11a94b974f827c9f53f2dac114f97662835859630bb817ea5aacb013985cc940"));
var getContentById = createServerFn({ method: "GET" }).validator(objectType({ id: stringType().min(1) })).handler(createSsrRpc("46b6d15e4dce9b58d4267ebaf0e9251ba0e5786c390fc55363991cd82d54d0a0"));
//#endregion
export { getContentById as n, getAllContent as t };
