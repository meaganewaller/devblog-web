import Link from 'next/link'

import { PostService } from '@/lib/api'

import BlogCallout from '@/components/Blog/BlogCallout'
import { PostsList } from '@/components/Blog/PostsList'

export interface PageProps {
  params: {
    page?: string
  }
}

const PER_PAGE = Number(process.env.NEXT_PUBLIC_POSTS_PER_PAGE)

export default async function BlogAllPage({ params: { page } }: PageProps) {
  const currentPage = page ? Number(page) : 1
  const { posts, totalPages } = await PostService.getAll({
    count: PER_PAGE,
    offset: (currentPage - 1) * PER_PAGE,
  })

  return (
    <>
      <p className='mb-2 flex flex-wrap items-baseline font-venice text-3xl text-accent md:text-4xl lg:text-6xl'>
        <span>
          <Link href='/blog' className='underline hover:decoration-wavy'>
            Blog
          </Link>
        </span>
        <span className='mx-2 text-2xl' />
        <span>Everything</span>
      </p>

      <BlogCallout />
      <PostsList
        posts={posts}
        page={currentPage}
        totalPages={totalPages}
        url='/blog/all'
      />
    </>
  )
}
