import { MetadataRoute } from 'next'

// import { allPublishedBlogs } from '@/utils/blog'
// const allBlogs = allPublishedBlogs.filter((it) => !it.link)

export default function sitemap(): MetadataRoute.Sitemap {
  // const blogs = allBlogs.map((post) => ({
  //   url: `https://meaganwaller.com/blog/${post.slug}`,
  //   lastModified: post.date.split('T')[0],
  //   priority: 0.6,
  // }))
  //
  // const routes = [
  //   '',
  //   'about',
  //   'blog',
  //   'dashboard',
  //   'donate',
  //   'projects',
  //   'uses',
  //   'newsletter',
  //   'colophon',
  //   'contact',
  //   'privacy',
  //   'terms',
  // ].map((route) => ({
  //   url: `https://meaganwaller.com/${route}`,
  //   lastModified: new Date().toISOString().split('T')[0],
  //   priority: route ? 0.8 : 1,
  // }))
  //
  // return [...routes, ...blogs].sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
