export const convertToCategoryList = (tableData: any) => {
  const categories = tableData.map((category: any) => {
    return {
      id: category.id,
      title: category.title,
      description: category.description,
      slug: category.slug,
    }
  })

  return { categories };
}

export const convertToPostList = (tableData: any) => {
  let tags: string[] = [];
  const posts = tableData.map((post: any) => {
    debugger
    return {
      title: post.title,
      tags: post.tags.map((tag: string) => {
        if (!tags.includes(tag)) {
          const newList = [...tags, tag];
          tags = newList;
        }
        return { name: tag };
      }),
      category: post.category,
      coverImage: 'https://via.placeholder.com/600x400.png',
      publishedDate: post.published_date,
      description: post.description,
      slug: post.to_param,
      isPublic: post.published_date !== null,
    };
  });

  tags = Array.prototype.concat.apply([], tags);

  return { posts, tags };
};
