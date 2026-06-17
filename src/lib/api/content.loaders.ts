import type { QueryClient } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";

import type { Content, ContentType } from "../content.types";
import { getContentById } from "./content.functions";

export const contentQueryKey = (id: string) => ["content", id] as const;

export async function loadContentById(
  queryClient: QueryClient,
  id: string,
  expectedType?: ContentType,
): Promise<Content> {
  const content = await queryClient.ensureQueryData({
    queryKey: contentQueryKey(id),
    queryFn: () => getContentById({ data: { id } }),
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
