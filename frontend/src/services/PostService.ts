import apiClient from "@/services/api"

const PostService = {
  getAll: async () => {
    const response = await apiClient.get("/posts")
    return response.data
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/posts/${id}`)
    return response.data
  },
}

export default PostService
