import apiClient from "@/lib/apiClient"
import { useQuery } from "@tanstack/react-query"
import { ReactionResponse } from "@/types"

async function fetchReactionDetail(slug: string) {
  const res = await apiClient.get<ReactionResponse[]>(`/posts/${slug}/reactions`)

  return res.data
}

export function useReactionDetail(slug: string) {
  return useQuery(["reactionDetail", slug], () => fetchReactionDetail(slug))
}
