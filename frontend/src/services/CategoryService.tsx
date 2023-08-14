import apiClient from '@/services/api';

const CategoryService = {
  getAll: async (publishedOnly = true) => {
    let response;
    if (publishedOnly) {
      response = await apiClient.get('/categories.json?published_only=true');
    } else {
      response = await apiClient.get('/categories.json');
    }
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/categories/${id}.json`);
    return response.data;
  },
};

export default CategoryService;
