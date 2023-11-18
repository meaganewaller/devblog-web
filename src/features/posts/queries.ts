type Post = {
  slug: string
}

type Posts = ReadonlyArray<Post>

const fetchPosts = async () Promise<Posts> => {
  const response = await axios.get(`/posts`)
  return response.data
}

export const usePostsQuery = () =>
  useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })
