import readingTime from "reading-time";

import { transformMarkdown } from "./markdown-to-html";

import { Category, CategoryResponse, Post, PostResponse } from "@/types";

export const convertToCategoryList = (tableData: CategoryResponse[]) => {
  const categories = tableData.map((category: CategoryResponse) => {
    return {
      id: category.id,
      title: category.title,
      description: category.description,
      slug: category.slug,
      coverImage: category.cover_image,
      href: `/blog/categories/${category.slug}`,
    };
  });

  return { categories };
};

export const convertToTagList = (stringTags: string[]) => {
  const tags = stringTags.map((tag: string) => {
    const queryParamTag = tag.toLowerCase();
    return {
      name: tag,
      href: `/blog?tag=${queryParamTag}`,
    };
  });

  return tags;
};

export const convertPost = async (post: PostResponse) => {
  const content = await transformMarkdown(post.content);

  const category = {
    href: `/blog/categories/${post.category.slug}`,
    id: post.category.id,
    slug: post.category.slug,
    title: post.category.title,
  } as Category;

  const tagList = post.tags || [];
  return {
    category,
    commentCount: Number(post.comment_count),
    content,
    coverImage: post.cover_image || "https://placekitten.com/800/600",
    description: post.description,
    external: false,
    href: `/blog/${post.slug}`,
    id: post.id,
    isPublic: post.published_date !== null,
    lastEdited: post.notion_updated_at,
    metaDescription: post.meta_description,
    notionId: post.notion_id,
    published: post.published,
    publishedDate: post.published_date,
    readingTime: readingTime(content),
    repositories: [],
    slug: post.slug,
    tags: convertToTagList(tagList),
    title: post.title,
    views: Number(post.views),
  } as Post;
};

export const convertPostList = async (posts: PostResponse[]) => {
  const postList = await Promise.all(
    posts.map(async (post: PostResponse) => {
      return await convertPost(post);
    }),
  );

  return postList;
};
