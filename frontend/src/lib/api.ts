import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 20000,
})

const PostService = {
  getAll: async (category?: typeof String) => {
    if (!category) {
      const response = await apiClient.get('/posts.json')
      return response.data;
    } else {
      const response = await apiClient.get(`/posts.json?category=${category}`);
      return response.data;
    }
  },

  getByIdL: async (id: typeof String) => {
    const response = await apiClient.get(`/posts/${id}.json`);
    return response.data;
  }
}

export { PostService, apiClient };
