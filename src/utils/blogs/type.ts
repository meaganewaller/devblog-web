// import { type ReadTimeResults } from 'reading-time'
export type PostTag = string
export type PostFrontMatter = {
  slug: string
  title: string
  description: string
  publishedAt: string
  tags: PostTag[]
  metaKeywords: string[]
  metaDescription: string
  // recommendations?: string[]
  // est_read?: ReadTimeResults
}

export type PostFrontMatterWithViews = PostFrontMatter & {
  views: number
}

export type Category = {
  id: string
  title: string
  description: string
  slug: string
  coverImage: string
}
