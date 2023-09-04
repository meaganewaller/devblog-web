export const convertToCategoryList = (tableData: any) => {
  const categories = tableData.map((category: any) => {
    return {
      id: category.id,
      title: category.title,
      description: category.description,
      slug: category.slug,
      coverImage: category.cover_image
    }
  })

  return { categories }
}

export const convertToPostList = (tableData: any) => {
  let tags: string[] = []
  const posts = tableData.map((post: any) => {
    return {
      category: {
        id: post.category.id,
        slug: post.category.slug,
        title: post.category.title,
        notionId: post.category.notion_id
      },
      content: post.content,
      coverImage: "https://placekitten.com/800/600",
      description: post.description,
      id: post.id,
      language: post.language,
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
        if (!tags.includes(tag)) {
          const newList = [...tags, tag]
          tags = newList
        }
        return { name: tag }
      }),
      title: post.title
    }
  })

  tags = Array.prototype.concat.apply([], tags)

  return { posts, tags }
}
