import apiClient from '@/services/api';

interface PostProps {
  id: string;
  title: string;
  tags: string[];
  category: string;
  coverImage: string;
  publishedDate: string;
  summary: string;
  isPublic: boolean;
}

const PostService = {
  getAll: async () => {
    const response = await apiClient.get('/posts');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/posts/${id}`);
    return response.data;
  },
};

export default PostService;
