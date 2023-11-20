export const enum Routes {
  Home = '',

  Posts = '/posts',
  Post = '/posts/',

  Projects = '/projects',
  Project = '/projects/',

  Workspaces = '/uses',
  Workspace = '/uses/',

  Talks = '/talks',
  Talk = '/talks/',

  Categories = '/categories',
  Category = '/categories/',

  Guestbook = '/guestbook',
  GuestbookEntry = '/guestbook/',

  Snippets = '/snippets',
  Snippet = '/snippets/',
}

type Noop = never
type Pagination = {
  size?: number
  page?: number
}

type WithSlug = {
  slug: string
}

type WithId = {
  id: string | number
}

type HomeParams = Noop

export type PostsParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}

type PostParams = WithSlug
type ProjectsParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}
type ProjectParams = WithSlug
type WorkspacesParams = Noop
type WorkspaceParams = WithSlug
type SnippetsParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}
type SnippetParams = WithSlug
type GuestbookParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}
type GuestbookEntryParams = WithSlug
type TalksParams = Pagination & {
  sortBy?: string
  orderBy?: 'desc' | 'asc'
}
type TalkParams = WithSlug

export type RouteParams<T extends Routes> = T extends Routes.Home
  ? HomeParams
  : T extends Routes.Talk
  ? TalkParams
  : T extends Routes.Talks
  ? TalksParams
  : T extends Routes.Posts
  ? PostsParams
  : T extends Routes
