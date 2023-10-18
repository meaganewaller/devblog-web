import apiClient from '@/lib/apiClient'
import { useQuery } from "@tanstack/react-query"
import { convertPost } from '@/utils/blogs'

const getPost = async (slug: string) => {
  const response = await getPost(slug)
  return convertPost(response)
}

export const fetchPost = async (slug: string) => {
  return { data, isLoading } = useQuery({
    queryKey: ['detail-post', slug],
    queryFn: () => getPost(slug),
  })
}

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

// export const getPost = async (id: string) => {
//   const response = await apiClient.get(`/posts/${id}`)
//   return response.data
// }

export const getRecentPosts = async () => {
  const response = await apiClient.get('/posts?recent=true')
  return response.data.posts
}
