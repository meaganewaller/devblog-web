export interface Link {
  target?: string;
  title: string;
  url: string;
}

export type NavigationItem = {
  href: string;
  icon?: React.ComponentType;
  name: string;
};

export interface CategoryResponse {
  cover_image: string;
  description: string;
  id: string;
  notion_id?: string;
  slug: string;
  title: string;
}

export interface PostResponse {
  category: CategoryResponse;
  content: string;
  comment_count: string;
  cover_image: string;
  description: string;
  id: string;
  notion_updated_at: string;
  meta_description: string;
  meta_keywords: string;
  notion_id: string;
  published: boolean;
  published_date?: string;
  slug: string;
  tags: string[];
  title: string;
  views: string;
}

export interface GuestbookResponse {
  email: string;
  id: string;
  message: string;
  name: string;
  published_date: string;
}

export interface ProjectResponse {
  content: string;
  cover_image: string;
  creation_date: string;
  description: string;
  featured: boolean;
  homepage_url: string | undefined | null;
  id: string;
  last_update: string;
  slug: string;
  tags: string[];
  title: string;
}

export interface Repository {
  name: string;
  website: string;
}

export interface Project {
  content: string;
  coverImage: string | undefined | null;
  creationDate: string;
  description: string;
  featured: boolean;
  homepageUrl: string | undefined | null;
  lastUpdate: string;
  slug: string;
  tags: Tag[];
  title: string;
  external?: boolean;
}

export interface Category {
  count?: number;
  coverImage?: string;
  description?: string;
  href: string;
  id: string;
  notionId?: string;
  slug: string;
  title: string;
}

export interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export interface Post {
  allowComments?: boolean;
  category: Category;
  commentCount: number;
  content: string;
  coverImage: string;
  description: string;
  external?: boolean;
  href: string;
  id: string;
  isPublic: boolean;
  lastEdited: string;
  metaDescription?: string;
  notionId: string;
  published: boolean;
  publishedDate?: string;
  readingTime?: ReadingTime;
  repositories?: string[];
  slug: string;
  tags?: Tag[];
  title: string;
  views: number;
}

export interface Tag {
  name: string;
}

export interface Resource {
  category?: Category;
  coverImage?: string;
  description?: string;
  href: string;
  slug: string;
  title: string;
}

export interface Webmention {
  source_url: string;
  target_url: string;
}

interface Avatar {
  height?: number;
  url: string;
  width?: number;
}

export interface Author {
  avatar: Avatar;
  name: string;
  url?: string;
}

export type CommentType = "mention" | "comment" | "like" | "repost";
export interface Comment {
  author: Author;
  content: string;
  date: string;
  id: number;
  replies: Comment[];
  root: boolean;
  type: CommentType;
  webmention: Webmention;
}

export type Children = {
  children: React.ReactNode;
};

export interface View {
  slug: string;
  count: number;
}
