import apiClient from "@/lib/apiClient"

interface ViewParams {
  slug: string
  sessionId: string
}

interface CreateViewParams extends ViewParams {}
interface CountUserViewsParams extends ViewParams {}
type CountContentViewsParams = Pick<ViewParams, 'slug'>

export const createView = async ({
  slug,
  sessionId,
}: CreateViewParams): Promise<void> => {
  await apiClient.post(`/views`, {
    views: {
      session_id: sessionId,
      viewable_type: "Post",
      viewable_slug: slug
    }
  })
}

export const countUserViews = async ({
  slug,
  sessionId
}: CountUserViewsParams): Promise<number> => {
  const resp = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}&session_id=${sessionId}`)
  const count = resp.data.length

  return count ?? 0
}

export const countContentViews = async ({
  slug,
}: CountContentViewsParams): Promise<number> => {
  const resp = await apiClient.get(`/views?viewable_type=Post&viewable_slug=${slug}`)
  const count = resp.data.length

  return count ?? 0
}

export const countAllViews = async (): Promise<number> => {
  const resp = await apiClient.get(`/views?viewable_type=Post`)
  const count = resp.data.length

  return count ?? 0
}
// import {
//   createView,
//   fetchUserContentViews,
//   fetchContentViews,
//   fetchAllViews
// } from "@/services/views"
//
// interface ViewParams {
//   slug: string
//   sessionId: string
// }
//
// interface CreateViewParams extends ViewParams {}
// interface CountUserViewsParams extends ViewParams {}
// type CountContentViewsParams = Pick<ViewParams, 'slug'>
//
// export const createContentView = async ({
//   slug,
//   sessionId,
// }: CreateViewParams): Promise<void> => {
//   await createView(slug, sessionId)
// }
//
// export const countUserContentViews = async ({
//   slug,
//   sessionId,
// }: CountUserViewsParams): Promise<number> => {
//   const data = await fetchUserContentViews(slug, sessionId)
//   const count = data.count
//
//   return count ?? 0
// }
//
// export const countContentViews = async ({
//   slug,
// }: CountContentViewsParams): Promise<number> => {
//   const data = await fetchContentViews(slug)
//   const count = data.views.length
//
//   return count ?? 0
// }
//
// export const countAllViews = async () : Promise<number> => {
//   return await fetchAllViews().then((resp) => resp.count)
// }
