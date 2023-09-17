import { api } from "@/services"
import { useQuery  } from "@tanstack/react-query"

export interface Post {
  slug: string
  title: string
}

export const findAll = async (query?: Record<string, any>) => {
  const response = await api.get<Post[]>("posts", { params: query })

  return response.data
}

export const findBySlug = async (slug: string) => {
  const response = await api.get<Post>(`posts/${slug}`)

  return response.data
}

export function usePosts(query?: Record<string, any>) {
  const {
    data,
    isFetching,
    refetch: getAllPosts,
  } = useQuery(["posts"], async () => await findAll(query))

  return {
    posts: data,
    isLoading: isFetching,
    getAllPosts,
  }
}

export function usePost(post: Post) {
  const {
    data,
    isFetching: isLoadingPost,
    refetch: getPost,
  } = useQuery(
    ["posts", post.slug],
    async () => await findBySlug(post.slug),
    { enabled: !!post.slug }
  )

  return {
    post: data,
    isLoading: !!post.slug && isLoadingPost,
    getPost,
  }
}
