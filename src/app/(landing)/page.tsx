import { createMetadata } from '@/utils/create-metadata'
import RecentPosts from "./_components/RecentPosts"
import Connections from "./_components/Connections"
import Intro from "./_components/Intro"

export const metadata = createMetadata({
  title: 'welcome to my digital home',
  description:
    'Meagan Waller is a software engineer and web developer based in northeast Florida',
  keywords: [
    'software',
    'engineer',
    'developer',
    'javascript',
    'react',
    'typescript',
    'node',
    'nextjs',
    'gatsby',
    'florida',
    'remote',
    'work',
    'hire',
    'meagan',
    'waller',
  ],
  canonical: '',
  openGraph: {
    images: [
      {
        url: '/static/images/og.png',
      },
    ],
    url: 'https://meaganwaller.com',
    title: 'Meagan Waller',
    type: 'website',
    siteName: 'meaganwaller.com',
    description:
      'Meagan Waller is a software engineer and web developer based in northeast Florida',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Meagan Waller is a software engineer and web developer based in northeast Florida',
    site: 'https://meaganwaller.com',
    creator: '@meaganewaller',
    creatorId: '',
    siteId: '',
    title: 'Meagan Waller',
    images: [
      {
        url: '/static/images/og.png',
      },
    ],
  },
})

const Page = async () => {
  return (
    <>
      <RecentPosts />
      <Intro />
      <Connections />
    </>
  )
}

//
// const Page = async () => {
//   const postsData = await getRecentPosts()
//   const { posts } = convertToPostList(postsData)
//
//   return (
//     <>
//       <Suspense>
//         <RecentPosts
//           posts={posts.slice(0, 5)}
//         />
//       </Suspense>
//       <Intro />
//       <Connections />
//     </>
//   )
// }
//
export default Page
