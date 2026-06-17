import { createIsomorphicFn } from "@tanstack/react-start";
import type { QueryClient } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";

import type { Content, ContentType } from "../content.types";
import { CONTENT, findContent } from "../mock-data.server";
import { getAllContent, getContentById } from "./content.functions";

const fetchAllContent = createIsomorphicFn()
  .server(() => CONTENT)
  .client(() => getAllContent());

const fetchContentById = createIsomorphicFn()
  .server((id: string) => findContent(id) ?? null)
  .client((id: string) => getContentById({ data: { id } }));

export const contentQueryKey = (id: string) => ["content", id] as const;
export const allContentQueryKey = ["content", "all"] as const;

export async function loadAllContent(queryClient: QueryClient) {
  return queryClient.ensureQueryData({
    queryKey: allContentQueryKey,
    queryFn: () => fetchAllContent(),
  });
}

export async function loadContentById(
  queryClient: QueryClient,
  id: string,
  expectedType?: ContentType,
): Promise<Content> {
  const content = await queryClient.ensureQueryData({
    queryKey: contentQueryKey(id),
    queryFn: () => fetchContentById(id),
  });

  if (!content) throw notFound();
  if (expectedType && content.type !== expectedType) throw notFound();

  return content;
}

export async function loadNovelById(queryClient: QueryClient, id: string): Promise<Content> {
  const content = await loadContentById(queryClient, id, "novel");
  if (!content.chapters?.length) throw notFound();
  return content;
}
