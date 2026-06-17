import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { CONTENT, findContent } from "../mock-data.server";

export const getAllContent = createServerFn({ method: "GET" }).handler(async () => CONTENT);

export const getContentById = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string().min(1) }))
  .handler(async ({ data }) => findContent(data.id) ?? null);
