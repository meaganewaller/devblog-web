import { Suspense } from 'react'

import { PostService } from '@/lib/api'

import PostDetail from '@/components/Blog/PostDetail'

import { extendSEO } from '@/config/seo'

type PageParam = {
  params: { slug: string }
}

export default async function PostPage(props: PageParam) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostDetail slug={props.params.slug} />
      </Suspense>
    </>
  )
}

export async function generateMetadata({ params }: PageParam) {
  const post = await PostService.getBySlug(params.slug)

  return extendSEO({
    title: post.title,
    description: post.meta_description,
    image: post.cover_image,
    url: `/blog/${post.slug}`,
  })
}
