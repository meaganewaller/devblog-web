import apiClient from "@/lib/apiClient";
import { useQuery } from "@tanstack/react-query";
import { PostResponse } from "@/types"
import { convertPost } from "@/utils/blogs"

async function fetchPostDetail(slug: string) {
  const { data, status } = await apiClient.get<PostResponse>(`/posts/${slug}`)

  if (status !== 200) {
    throw new Error('Failed to fetch post detail')
  }

  return convertPost(data)
}

export function useFetchPostDetail(slug: string) {
  return useQuery(['postDetail', slug], () => fetchPostDetail(slug))
}
