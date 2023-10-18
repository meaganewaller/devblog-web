'use client'
import { useFetchPostDetail } from '../../../_hooks/useFetchPostDetail'
import { useDetailStore } from "@/store/post.store"
import PostDetail from "./PostDetail"
import { useEffect } from "react"

interface PostDetailProps {
  params: {
    slug: string
  }
}

export default function PostDetailPage({ params }: PostDetailProps) {
  const { slug } = params
  const { data, isLoading } = useFetchPostDetail(slug)
  const { setPost } = useDetailStore()
  useEffect(() => {
    setPost(data)
  }, [setPost, data])

  return (
    <div className="my-4 text-center">
      {isLoading ? <p>Client side fetching..</p> : <PostDetail />}
    </div>
  )
}
