import apiClient from '@/lib/apiClient'

export const getPosts = async ({
  count,
  page = 1,
  tag,
  category,
  search,
}: {
    count: number,
    page: number,
    tag?: string
    category?: string
    offset?: number
    search?: string
  }) => {
  let urlParams = `?page=${page}&count=${count}`
  if (tag) { urlParams += `&tag=${tag}` }
  if (category) { urlParams += `&category=${category}` }
  if (search) { urlParams += `&query=${search}` }
  return await apiClient.get(`/posts${urlParams}`)
}

export const getPost = async (id: string) => {
  apiClient.get(`/posts/${id}`)
}

export const getRecentPosts = async () => {
  const response = await apiClient.get('/posts?recent=true')
  return response.data.posts
}
