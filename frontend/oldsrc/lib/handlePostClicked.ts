import router from 'next/router';

export function handlePostClicked(slug: string) {
  router.push(`/blog/${slug}`)
}
