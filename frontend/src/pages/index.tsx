import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import RecentPosts from '@/components/sections/RecentPosts'
import PostService from '@/services/PostService'

import Layout from '@/components/layout/Layout'
import type { Article } from '@/types'

type Props = {
  posts: Article[]
}

const HomePage = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Meagan Waller" />
        <meta property="og:title" content="Meagan Waller" />
        <meta property="og:description" content="Meagan Waller" />
        <meta name="description" content="Meagan Waller" />
      </Head>
      <About />
      <Contact />
      <RecentPosts posts={posts} />
    </>
    )
}

HomePage.getLayout = function getLayout(page: NextPage) {
  return (
    <Layout hideNavbar={false} hideFooter={true}>
      {page}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await PostService.getAll();
  return {
    props: {
      posts: data.slice(0, 4)
    },
    revalidate: 30,
  }
}

export default HomePage;
