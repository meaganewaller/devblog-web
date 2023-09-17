import { Card } from '@/components/views/blog'

type Blog = {
  title: string
  slug: string
}

interface BlogPostsProps {
  posts: Array<{
    year: number
    posts: Array<Blog>
  }>
}

export const BlogPosts = (props: BlogPostsProps) => {
  const { posts } = props
  return (
    <ul className={'flex list-none flex-col gap-16'}>
      {posts.map((post, index) => {
        return (
          <li
            key={
              post.slug ||
              `${post.title.toLowerCase().split(' ').join('-')}-${index}`
            }
          >
            <Card post={post} />
          </li>
        )
      })}
    </ul>
  )
}
// import { Card } from "@/components/views/blog";
// import type { PostFrontMatter } from "@/utils/blogs";
//
// import { tw } from "@/utils/tw"
//
// export const BlogPosts = (props: { posts: PostFrontMatter[] }) => (
//   <div className={tw('divide-y divide-base-200 dark:divide-base-800 mt-4 mb-8')}>
//     {props.posts.map((post) => {
//       return <Card key={post.slug} headingLevel='h2' {...post} />
//     })}
//   </div>
// )
//
