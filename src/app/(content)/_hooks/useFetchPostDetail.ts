import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/apiClient";

import { convertPost } from "@/utils/blogs";

import { PostResponse } from "@/types";

async function fetchPostDetail(slug: string) {
  const { data, status } = await apiClient.get<PostResponse>(`/posts/${slug}`);

  if (status !== 200) {
    throw new Error("Failed to fetch post detail");
  }

  const converted = await convertPost(data);

  return converted;
}

export function useFetchPostDetail(slug: string) {
  return useQuery(["postDetail", slug], () => fetchPostDetail(slug));
}
