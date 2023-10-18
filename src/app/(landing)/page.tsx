import RecentPosts from "./_components/RecentPosts"
import Connections from "./_components/Connections"
import Intro from "./_components/Intro"

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
