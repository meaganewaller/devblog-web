import apiClient from "@/lib/apiClient"

export const createView = async <T>(slug: string, sessionId: string) => {
  return (
    await apiClient.post(`/views`, {
      view: {
        viewable_type: "Post",
        viewable_slug: slug,
        session_id: sessionId
      }
    })
  ).data as T
}

export const fetchUserContentViews = async (slug: string, sessionId: string) => {
  return (
    await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}&session_id=${sessionId}`)
  ).data
}

export const fetchContentViews = async (slug: string) => {
  return (
    await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)
  ).data
}

export const fetchAllViews = async () => {
  return (
    await apiClient.get(`/views?viewable_type=Post`)
  ).data
}
