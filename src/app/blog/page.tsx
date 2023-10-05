'use client';

import { useSearchParams } from 'next/navigation'
import { PostService } from '@/lib/api'
import { PostsList } from "@/components/Blog/PostsList"

import { Post } from '@/types'
import { convertToPostList } from '@/utils/blogs'

function parseTotalPages(postCount: number) {
  return Math.ceil(postCount / 10)
}

export default async function BlogPage() {
  const searchParams = useSearchParams()

  const page = searchParams.get('page')
  const tag = searchParams.get('tag') || undefined
  const search = searchParams.get('query') || undefined
  const category = searchParams.get('category') || undefined

  const currentPage = parseInt(page as string, 10) || 1

  const { posts, pagy } = await PostService.getAll({ count: 1000, page: currentPage, tag, search, category })
  const convertedPosts = convertToPostList(posts).posts

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
    <>
      <h1 className="font-venice text-6xl text-accent mb-2">the web log</h1>
      <PostsList
        posts={convertedPosts}
        url={postUrl}
        pagination={pagy.series}
        page={currentPage}
        previousPostUrl={previousPostUrl}
        totalPages={pagy.pages}
      />
    </>
  )
}
