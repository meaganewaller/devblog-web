'use client'

import React from "react"
import { useSearchParams } from 'next/navigation'
import { PostsList } from "@/components/Blog/PostsList"
import { useQuery } from "@tanstack/react-query"
import apiClient from "@/lib/apiClient"

const usePosts = (limit, page, tag, category, search) => {
  return useQuery({
    queryKey: ['posts', limit, page, tag, category, search],
    queryFn: () => fetchPosts(limit, page, tag, category, search),
  })
}

const fetchPosts = async (limit = 10, page = 1, tag, category, search) => {
  let urlParams = `?page=${page}&count=${limit}`
  if (tag) { urlParams += `&tag=${tag}` }
  if (category) { urlParams += `&category=${category}` }
  if (search) { urlParams += `&query=${search}` }

  const response = await apiClient.get(`/posts${urlParams}`)
  return response.data
}

export default function BlogPage() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined
  const currentPage = parseInt(page as string, 10) || 1
  const category = searchParams.get('category') || undefined

  const {
    data,
    isPending,
    isFetching
  } = usePosts(10, currentPage, tag, category, search)

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

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
  <>
    {data?.posts && (
      <PostsList
        posts={data?.posts}
        url={postUrl}
        pagination={data.pagy.series}
        page={currentPage}
        previousPostUrl={previousPostUrl}
        totalPages={data.pagy.pages}
      />
      )
    }
    </>
  )
}
