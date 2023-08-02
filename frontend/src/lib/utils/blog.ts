import PostService from '@/services/PostService';

export const convertToPostList = (tableData: any) => {
  let tags: string[] = [];
  let categories: string[] = [];
  const posts = tableData.map((post: any) => {
    if (!categories.includes(post.category)) {
      const newList = [...categories, post.category];
      categories = newList;
    }
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
      isPublic: post.published_date !== null,
    };
  });

  return { posts, tags, categories };
};
