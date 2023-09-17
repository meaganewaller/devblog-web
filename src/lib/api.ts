import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 20000,
})

const CategoryService = {
  getAll: async () => {
    const response = await apiClient.get('/categories?published_only=true')
    return response.data
  },

  getById: async (id: typeof String) => {
    const response = await apiClient.get(`/categories/${id}`)
    return response.data
  },
}

const TagService = {
  getAll: async () => {
    const response = await apiClient.get('/tags')
    return response.data
  }
}

const PostService = {
  getAll: async ({
    count,
    offset = 0,
    sortBy = sortByDateDesc,
    filterBy = (p: Post) => a,
  }: {
      count: number
      offset?: number
      filterBy?: any
      sortBy?: any
  }) => {
    const results = await apiClient.get('/posts')

    const allPosts = results.map((notionPosts: NotionPost[]) =>
      notionPosts.map((post: NotionPost) => parsePost(post))
    )

    const flatPosts = flatten(allPosts).filter(filterBy).sort(sortBy)
    const posts = [...flatPosts.slice(offset, offset + count)]

    return {
      postsCount: flatPosts.length,
      posts,
      totalPages: Math.ceil(flatPosts.length / count)
    }
  },

  getById: async (id: String) => {
    const response = await apiClient.get(`/posts/${id}`)
    return response.data
  },

  getRecent: async () => {
    const response = await apiClient.get(`/posts?recent=true`)
    return response.data
  },
}

const ProjectService = {
  getAll: async (category?: typeof String) => {
    if (!category) {
      const response = await apiClient.get('/projects')
      return response.data
    } else {
      const response = await apiClient.get(`/projects?category=${category}`)
      return response.data
    }
  },

  getById: async (id: typeof String) => {
    const response = await apiClient.get(`/projects/${id}`)
    return response.data
  },
}

const GuestbookService = {
  getAll: async () => {
    const response = await apiClient.get('/guestbook_entries')
    return response.data
  },
}

export { apiClient, GuestbookService, PostService, CategoryService, ProjectService, TagService }