'use client'
import { getPosts } from "@/services/posts"
import { useQuery } from "@tanstack/react-query"
import { convertToPostList } from "@/utils/blogs"
import { useSearchParams } from 'next/navigation'
import { PostsList } from "@/components/Blog/PostsList"

export default function BlogPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined
  const currentPage = parseInt(page as string, 10) || 1
  const category = searchParams.get('category') || undefined

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
  } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: async () => {
      const data = await getPosts({ count: 1000, page: currentPage, tag, category, search })
      return data.data
    },
    keepPreviousData: true
  })

  let postUrl = `/blog?page=${currentPage}`
  let previousPostUrl = `/blog?page=${currentPage - 1}`

  if (tag) {
    postUrl += `&tag=${tag}`
  }

  if (search) {
    postUrl += `&query=${search}`
  }

  if (category) {
    postUrl += `&category=${category}`
  }

  return (
    <div>
      <h1 className="font-venice text-6xl text-accent mb-2">the web log</h1>
      {(isLoading || isFetching) ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <PostsList
            posts={convertToPostList(data.posts).posts}
            url={postUrl}
            pagination={data.pagy.series}
            page={currentPage}
            previousPostUrl={previousPostUrl}
            totalPages={data.pagy.pages}
          />
        </>
      )}
    </div>
  )
}
