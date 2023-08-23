import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 20000,
})

const PostService = {
  getAll: async (category?: typeof String) => {
    if (!category) {
      return await apiClient.get('/posts.json')
    } else {
      return await apiClient.get(`/posts.json?category=${category}`);
    }
  },

  getById: async (id: typeof String) => {
    const response = await apiClient.get(`/posts/${id}.json`);
    return response.data;
  }
}

export { PostService, apiClient };
