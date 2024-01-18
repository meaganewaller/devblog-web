import Connections from './_components/Connections'
import Intro from './_components/Intro'
import RecentPosts from './_components/RecentPosts'

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
