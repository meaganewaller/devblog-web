'use client'
import { useEffect } from 'react'

import { useDetailStore } from '@/store/post.store'

import PostDetail from './PostDetail'
import { useFetchPostDetail } from '../../../_hooks/useFetchPostDetail'

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

  return <div className='mx-auto max-w-4xl'>{isLoading ? <p>Client side fetching..</p> : <PostDetail />}</div>
}
