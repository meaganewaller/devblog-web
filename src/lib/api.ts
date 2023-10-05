import axios from 'axios'
import { PostResponse } from '@/types'

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
      filterBy?: any
      sortBy?: any
      search?: string
    }) => {
    let urlParams = `?page=${page}&count=${count}`
    if (tag) { urlParams += `&tag=${tag}` }
    if (category) { urlParams += `&category=${category}` }
    if (search) { urlParams += `&query=${search}` }
    const results = await apiClient.get(`/posts${urlParams}`)
    return results.data
  },
}

export default apiClient
// import { PostResponse, Post, CategoryResponse, Category } from '@/types'
//
// type PostParamsProps = {
//   page?: number
//   per_page?: number
// }
//
// export const getPostData = async ({
//   page = 1,
//   per_pge = 6
// }: PostParamsProps): Promise<{ status: number; data: any }> => {
//   const params =
// }
//
// axios.default.validateStatus = (status: number) => {
//   return (status >= 200 && status < 300) || status === 304
// }
//
// const CONTENT_TYPE_JSON = {
//   'Content-Type': 'application/json',
// }
//
// export const
//
//
// // import { Post } from '@/types'
// //
// // const apiClient = axios.create({
// //   baseURL: 'http://localhost:5000/api/v1',
// //   timeout: 20000,
// // })
// //
// // export const sortByDateDesc = (p1: Post, p2: Post) => {
// //   const p1d = new Date(p1.publishedDate).getTime()
// //   const p2d = new Date(p2.publishedDate).getTime()
// //
// //   if (p1d === p2d) {
// //     return 0
// //   }
// //
// //   return p1d < p2d ? 1 : -1
// // }
// //
// // export const PostService = {
// //
// //
// //   getRecent: async () => {
// //     const response = await apiClient.get('/posts?recent=true')
// //     return response.data
// //   },
// // }
// //
// // // import axios from 'axios'
// // // import { Post, Category } from '@/types'
// // // import omitBy from 'lodash/omitBy'
// // // import { Md5 } from 'ts-md5'
// // // import { convertToCategoryList, convertToPostList } from '@/utils/blogs'
// // //
// // //
// // //
// // // const CategoryService = {
// // //   getAll: async () => {
// // //     const response = await apiClient.get('/categories?published_only=true')
// // //     return response.data
// // //   },
// // //
// // //   getById: async (id: typeof String) => {
// // //     const response = await apiClient.get(`/categories/${id}`)
// // //     return response.data
// // //   },
// // // }
// // //
// // // const TagService = {
// // //   getAll: async () => {
// // //     const response = await apiClient.get('/tags')
// // //     return response.data
// // //   },
// // // }
// // //
// // // const PostService = {
// // //   getAll: async ({
// // //     count,
// // //     offset = 0,
// // //     sortBy = sortByDateDesc,
// // //     filterBy = (p: Post) => a,
// // //   }: {
// // //     count: number
// // //     offset?: number
// // //     filterBy?: any
// // //     sortBy?: any
// // //   }) => {
// // //     const results = await apiClient.get('/posts')
// // //
// // //     const allPosts = results.map((notionPosts: NotionPost[]) =>
// // //       notionPosts.map((post: NotionPost) => parsePost(post)),
// // //     )
// // //
// // //     const flatPosts = flatten(allPosts).filter(filterBy).sort(sortBy)
// // //     const posts = [...flatPosts.slice(offset, offset + count)]
// // //
// // //     return {
// // //       postsCount: flatPosts.length,
// // //       posts,
// // //       totalPages: Math.ceil(flatPosts.length / count),
// // //     }
// // //   },
// // //
// // //   getById: async (id: string) => {
// // //     const response = await apiClient.get(`/posts/${id}`)
// // //     return response.data
// // //   },
// // //
// // //   getRecent: async () => {
// // //     const response = await apiClient.get('/posts?recent=true')
// // //     return response.data
// // //   },
// // // }
// // //
// // // const ProjectService = {
// // //   getAll: async (category?: typeof String) => {
// // //     if (!category) {
// // //       const response = await apiClient.get('/projects')
// // //       return response.data
// // //     } else {
// // //       const response = await apiClient.get(`/projects?category=${category}`)
// // //       return response.data
// // //     }
// // //   },
// // //
// // //   getById: async (id: typeof String) => {
// // //     const response = await apiClient.get(`/projects/${id}`)
// // //     return response.data
// // //   },
// // // }
// // //
// // // const GuestbookService = {
// // //   getAll: async () => {
// // //     const response = await apiClient.get('/guestbook_entries')
// // //     return response.data
// // //   },
// // // }
// // //
// // // export {
// // //   apiClient,
// // //   CategoryService,
// // //   GuestbookService,
// // //   PostService,
// // //   ProjectService,
// // //   TagService,
// // // }
