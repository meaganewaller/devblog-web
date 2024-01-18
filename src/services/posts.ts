import apiClient from '@/lib/apiClient'

export const getRecentPosts = async () => {
  const response = await apiClient.get('/posts?recent=true')
  return response.data.posts
}
