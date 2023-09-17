import { PostService } from '@/lib/api'

import { PostsList } from '@/components/Blog/PostsList'

import { convertToPostList } from '@/utils/blogs'

async function getPosts() {
  const res = await PostService.getAll({ count: 1000 })
  const posts = convertToPostList(res).posts
  return posts
}

function parseTotalPages(postCount: number) {
  return Math.ceil(postCount / 10)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return <PostsList posts={posts} url='/blog' page={1} totalPages={parseTotalPages(posts.length)} />
}

// export default async function BlogPage() {
//   const postsData  = await PostService.getAll()
//   const posts = convertToPostList(postsData).posts
//   const totalPages = Math.ceil(posts.length / 10)
//
//   return (
//     <>
//       <h1 className="font-venice text-6xl text-accent mb-2">the web log</h1>
//       <BlogCallout />
//       <PostsList posts={posts} url="/blog" page={1} totalPages={totalPages} />
//     </>
//   )
// }
// import { PostService, CategoryService } from '@/lib/api'
// import React, { Suspense } from 'react'
//
// import ResourceIndex from "@/layouts/ResourceIndex"
// import { convertToPostList, convertToCategoryList } from '@/utils/blogs'
//
// import { createMetadata } from "@/utils/create-metadata"
//
// export const metadata = createMetadata({
//   title: 'the web log',
//   description: 'My software development blog',
//   keywords: ['software', 'engineer', 'developer', 'javascript', 'react', 'typescript', 'node', 'nextjs', 'gatsby', 'florida', 'remote', 'work', 'hire', 'meagan', 'waller', 'blog', 'web', 'development'],
//   canonical: 'https://meaganwaller.com/blog',
//   openGraph: {
//     images: [
//       {
//         url: '/static/images/blog-og.png',
//       },
//     ],
//     url: 'https://meaganwaller.com/blog',
//     title: 'The Web Log',
//     type: 'website',
//     siteName: 'meaganwaller.com',
//     description: 'My software development blog',
//   }
// })
//
// async function Posts() {
//   const postsData = await PostService.getAll()
//   const { posts } = convertToPostList(postsData)
//
//   return posts
// }
//
// async function Categories() {
//   const categoriesData = await CategoryService.getAll()
//   const categories = convertToCategoryList(categoriesData).categories
//
//   return categories
// }
//
// export default async function Page() {
//   const posts = await Posts()
//   const categories = await Categories()
//
//   return (
//     <>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ResourceIndex
//           headingTitle={`The Web Log`}
//           categories={categories}
//           resources={posts}
//         />
//       </Suspense>
//     </>
//   )
// }
