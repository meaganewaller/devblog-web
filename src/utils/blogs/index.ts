import { CategoryResponse, PostResponse, Category } from '@/types'
import readingTime from 'reading-time'

export const convertToCategoryList = (tableData: CategoryResponse[]) => {
  const categories = tableData.map((category: CategoryResponse) => {
    return {
      id: category.id,
      title: category.title,
      description: category.description,
      slug: category.slug,
      coverImage: category.cover_image,
      href: `/blog/categories/${category.slug}`,
    }
  })

  return { categories }
}

export const convertToTagList = (stringTags: string[]) => {
  const tags = stringTags.map((tag: string) => {
    const slug = tag.toLowerCase().replace(/ /g, '-')
    return {
      title: tag,
      slug: slug,
      href: `/blog/tags/${slug}`,
    }
  })

  return tags
}

export const convertPost = (post: PostResponse, tags?: string[]) => {
  const tagList = tags || []
  return {
    category: {
      href: `/blog/categories/${post.category.slug}`,
      id: post.category.id,
      slug: post.category.slug,
      title: post.category.title,
    } as Category,
    content: post.content,
    commentCount: Number(post.comment_count),
    coverImage: post.cover_image || 'https://placekitten.com/800/600',
    description: post.description,
    external: false,
    href: `/blog/${post.slug}`,
    id: post.id,
    isPublic: post.published_date !== null,
    lastEdited: post.notion_updated_at,
    metaDescription: post.meta_description,
    metaKeywords: post.meta_keywords,
    notionId: post.notion_id,
    published: post.published,
    publishedDate: post.published_date,
    readingTime: readingTime(post.content),
    slug: post.slug,
    status: post.status,
    tags: post.tags.map((tag: string) => {
      if (!tagList.includes(tag)) {
        const newList = [...tagList, tag]
        tags = newList
      }
      return { name: tag }
    }),
    title: post.title,
    views: Number(post.views),
  }
}

export const convertToPostList = (tableData: PostResponse[]) => {
  let tags: string[] = []
  const posts = tableData.map((post: PostResponse) => {
    return convertPost(post, tags)
  })

  tags = Array.prototype.concat.apply([], tags)

  return { posts, tags }
}
