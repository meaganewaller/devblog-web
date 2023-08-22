import { Intro } from '@/components/views/home/intro';
import { Connections } from '@/components/views/home/connections';
import { RecentPosts } from '@/components/views/home/recent-posts';


export default function Home() {
  return (
    <>
      <Intro />
      <Connections />
      <RecentPosts />
    </>
  )
}
