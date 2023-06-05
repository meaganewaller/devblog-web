import React from 'react'
import { HiSparkles } from 'react-icons/hi'
import NextLink from 'next/link'
import Window from "@ui/Window"
import Contact from "@sections/Contact"
import NavBar from "@sections/NavBar"
import RecentPosts from "@sections/RecentPosts"
import About from "@sections/About"
import { useWindowSize } from "@/hooks/useWindowSize"
import { BsArrowRightShort } from 'react-icons/bs'
import { GetStaticProps } from "next"
import PostService from "@/services/PostService"

export default function Index({ posts }) {
  const size = useWindowSize()

  return (
    <div className="h-screen">
      <NavBar />
      <About />
      <RecentPosts posts={posts} />
      <Contact />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PostService.getAll()
  return {
    props: {
      posts: data.slice(0, 5)
    },
    revalidate: 30
  }
}
