import apiClient from '@/lib/apiClient'

export const getPosts = async () => {
  apiClient.get('/posts')
}

export const getPost = async (id: string) => {
  apiClient.get(`/posts/${id}`)
}

export const getRecentPosts = async () => {
  const response = await apiClient.get('/posts?recent=true')
  return response.data
}
