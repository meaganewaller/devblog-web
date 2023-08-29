import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 20000,
})

const CategoryService = {
  getAll: async () => {
    const response = await apiClient.get('/categories.json?published_only=true')
    console.log(response.data)
    return response.data
  },

  getById: async (id: typeof String) => {
    const response = await apiClient.get(`/categories/${id}.json`)
    return response.data
  },
}

const PostService = {
  getAll: async (category?: typeof String) => {
    if (!category) {
      const response = await apiClient.get('/posts.json')
      return response.data
    } else {
      const response = await apiClient.get(`/posts.json?category=${category}`)
      return response.data
    }
  },

  getById: async (id: typeof String) => {
    const response = await apiClient.get(`/posts/${id}.json`)
    return response.data
  },
}

export { apiClient, PostService, CategoryService }
