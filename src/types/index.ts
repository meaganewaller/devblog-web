export interface Link {
  url: string
  title: string
  target?: string
}

export interface CategoryResponse {
  id: string
  title: string
  description: string
  cover_image: string
  slug: string
  notion_id?: string
}

export interface PostResponse {
  category: CategoryResponse
  content: string
  cover_image: string
  description: string
  id: string
  slug: string
  last_edited: string
  meta_description: string
  meta_keywords: string
  notion_id: string
  published_date?: string
  published: boolean
  status: string
  tags: string[]
  title: string
}

export interface GuestbookResponse {
  id: string
  name: string
  email: string
  published_date: string
  message: string
}

export interface ProjectResponse {
  title: string
  description: string
  repository_url: string
  homepage_url: string
  tags: string[]
  contributors: string[]
  license: string
  creation_date: string
  last_update: string
  difficulty_level: string
  documentation_url: string
  demo_screenshot_urls: string[]
  featured: boolean
  status: string
  open_issues: number
  pull_requests: number
  language: string
  framework: string
  difficulty_evel: string
  documentation_rl: string
  slug: string
  id: string
  cover_image: string
}

export interface Project {
  title: string
  description: string
  repositoryUrl: string
  homepageUrl: string
  tags: string[]
  contributors: string[]
  license: string
  creationDate: string
  lastUpdate: string
  demoScreenshotUrls: string[]
  featured: boolean
  status: string
  openIssues: number
  pullRequests: number
  language: string
  framework: string
  difficultyLevel: string
  documentationUrl: string
  slug: string
  coverImage: string
}

export interface Category {
  id: string
  slug: string
  title: string
  description?: string
  coverImage: string
  count?: number
  notionId: string
  href: string
}

export interface Post {
  allowComments?: boolean
  category: Category
  content: string
  coverImage: string
  description: string
  href: string
  id: string
  isPublic: boolean
  language?: string
  lastEdited: string
  metaDescription: string
  metaKeywords: string[]
  notionId: string
  published: boolean
  publishedDate: string
  readingTime?: number
  slug: string
  status: string
  tags: Tag[]
  title: string
}

export interface Tag {
  name: string
}

export interface Resource {
  slug: string
  href: string
  description?: string
  title: string
  coverImage?: string
  category?: Category
}

export interface Webmention {
  source_url: string
  target_url: string
}

interface Avatar {
  url: string
  width?: number
  height?: number
}

export interface Author {
  url?: string
  name: string
  avatar: Avatar
}

export type CommentType = 'mention' | 'comment' | 'like' | 'repost'
export interface Comment {
  author: Author
  content: string
  id: number
  date: string
  type: CommentType
  webmention: Webmention
  root: boolean
  replies: Comment[]
}

export type Children = {
  children: React.ReactNode
}
