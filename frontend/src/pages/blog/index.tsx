import { convertToPostList } from "@/lib/utils/blog"
import PostService from "@/services/PostService"
import { GetStaticProps } from "next"
import Image from 'next/image'

export default function Blog({ featuredPost, posts, tags}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>My Blog</h1>
      <h1>Featured Post</h1>
      <span>{featuredPost.title}</span>
      {posts.map((post) => (
      <span key={post.title}>{post.title}</span>
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
