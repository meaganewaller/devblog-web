import apiClient from '@/services/api';

const CategoryService = {
  getAll: async () => {
    const response = await apiClient.get('/categories');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  },
};

export default CategoryService;
