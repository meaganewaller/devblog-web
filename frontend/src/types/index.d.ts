export interface PostDetail {
  id: string,
  title: string,
  content: string,
  category: string,
  publishedAt: Date,
  modifiedAt: Date,
  tags: Array<string>,
  // comments: Array<Comment>,
}

export interface PostList {
  id: string,
  title: string,
  content: string,
  category: string,
  publishedAt: Date,
}

export interface GroupedPostList {
  year: number,
  posts: Array<PostList>
}

export interface PostParam {
  pageSize: number,
  pageNumber: number,
  category?: string,
  tag?: string,
  keyword?: string,
  includeDeleted?: boolean
}

export interface UserInfo {
    user: string,
    email: string,
    role: string,
    avatar: string,
}

export interface MenuInfo {
    name: string,
    route: string,
    index: string,
}

export interface NavItem {
    level: string,
    id: string,
    title: string,
    children: Array<NavItem>,
    parent: NavItem|null,
}
