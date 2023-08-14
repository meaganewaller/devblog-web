import apiClient from '@/services/api';

const PostService = {
  getAll: async (category?: string) => {
    if (!category) {
      const response = await apiClient.get('/posts.json');
      return response.data;
    } else {
      const response = await apiClient.get(`/posts.json?category=${category}`);
      return response.data;
    }
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/posts/${id}.json`);
    return response.data;
  },
};

export default PostService;
