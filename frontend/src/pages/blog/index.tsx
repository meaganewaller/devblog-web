import { convertToPostList } from "@/lib/utils/blog"
import PostService from "@/services/PostService"
import { GetStaticProps } from "next"
import Image from 'next/image'
import Link from "next/link"

export default function Blog({ featuredPost, posts, tags}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>My Blog</h1>
      <h1>Featured Post</h1>
      <span>{featuredPost.title}</span>
      {posts.map((post) => (
        <Link key={post.title} href={`/blog/{post.to_param}`} className="decoration-wavy">
          {post.title}
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PostService.getAll()
  const { posts, tags } = convertToPostList(data)

  let blogPosts = posts;
  const featuredPost = blogPosts.shift()

  return {
    props: {
      featuredPost,
      posts: blogPosts,
      tags
    },
    revalidate: 30
  }
}
