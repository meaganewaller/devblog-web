import { CategoryResponse, PostResponse } from '@/types'

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
      coverImage: 'https://placekitten.com/800/600',
      id: post.category.id,
      slug: post.category.slug,
      title: post.category.title,
      notionId: post.category.notion_id,
      href: `/blog/categories/${post.category.slug}`,
    },
    content: post.content,
    coverImage: 'https://placekitten.com/800/600',
    description: post.description,
    id: post.id,
    href: `/blog/${post.slug}`,
    lastEdited: post.last_edited,
    metaDescription: post.meta_description,
    metaKeywords: post.meta_keywords,
    notionId: post.notion_id,
    isPublic: post.published_date !== null,
    published: post.published,
    publishedDate: post.published_date,
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
