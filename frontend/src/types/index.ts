export interface Link {
  url: string
  title: string
  target?: string
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
  description: string
  coverImage: string
  count?: number
  notionId: string
}

export interface Post {
  id: string
  language?: string
  lastEdited: string
  slug: string
  title: string
  description: string
  coverImage: string
  readingTime?: number
  allowComments?: boolean
  commentCount: number
  content: string
  status: string
  tags: Tag[]
  metaDescription: string
  metaKeywords: string[]
  category: Category
  publishedDate: string
  isPublic: boolean
  notionId: string
}

export interface Tag {
  name: string
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
