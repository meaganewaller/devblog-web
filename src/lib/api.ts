import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export const PostService = {
  getBySlug: async (slug: string) => {
    const response = await apiClient.get(`/posts/${slug}`)
    return response.data
  },
  getAll: async ({
    count,
    page = 1,
    tag,
    category,
    search,
  }: {
      count: number
      page: number
      tag?: string
      category?: string
      offset?: number
      search?: string
    }) => {
    let urlParams = `?page=${page}&count=${count}`
    if (tag) { urlParams += `&tag=${tag}` }
    if (category) { urlParams += `&category=${category}` }
    if (search) { urlParams += `&query=${search}` }
    return await apiClient.get(`/posts${urlParams}`)
  },
}
export const ProjectService = {
  getBySlug: async (slug: string) => {
    const response = await apiClient.get(`/projects/${slug}`)
    return response.data
  },
  getAll: async ({
    count,
    page = 1,
    tag,
    category,
    search,
  }: {
    count: number
    page: number
    tag?: string
    category?: string
    offset?: number
    filterBy?: any
    sortBy?: any
    search?: string
  }) => {
    let urlParams = `?page=${page}&count=${count}`
    if (tag) { urlParams += `&tag=${tag}` }
    if (category) { urlParams += `&category=${category}` }
    if (search) { urlParams += `&query=${search}` }
    const results = await apiClient.get(`/projects${urlParams}`)
    return results.data
  },
}

export default apiClient
