import { Metadata } from 'next'

import { DEFAULT_META } from '@/constants/metadata'

import Connections from './_components/Connections'
import Intro from './_components/Intro'
import RecentPosts from './_components/RecentPosts'

export const metadata: Metadata = {
  ...DEFAULT_META,
}

const Page = async () => {
  return (
    <>
      <RecentPosts />
      <Intro />
      <Connections />
    </>
  )
}

export default Page
