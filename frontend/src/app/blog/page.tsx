'use client'

import React, { Suspense, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from "@/components/core/heading"

import { CategoryService, PostService } from '@/lib/api'
import { convertToPostList, convertToCategoryList } from '@/utils/blogs'
import { Post } from "@/types"

import { motion } from "framer-motion"
import tw from "twin.macro"

const BlogIndexContainer = tw.div`
`

// bg-background grid grid-cols-[repeat(6,1fr)] auto-rows-auto gap-2
const PostContainer = tw(motion.div)`
  auto-rows-auto
  bg-background
  border-2
  border-accent
  border-t-0
  gap-2
  grid
  grid-cols-5
  lg:grid-cols-3
  md:grid-cols-3
  xl:grid-cols-4
  p-10
  rounded-b-md
  sm:p-2
  xs:p-2
  sm:grid-cols-2
  xs:grid-cols-1
  w-full
  mx-auto
  max-w-[96%]
  md:max-w-[95%]
`

// row-[span_1] rounded-md border-solid border-[var(--color-soft-green)]
const PostCard = tw(Link)`
`

const PostImage = tw(Image)`
  max-w-full
  object-contain
  rounded-t-md
`

const PostTitle = tw.h3`
  font-venice
  leading-tight
  mb-2.5
  p-2
  text-lg
  tracking-[1px]
`

function Blog() {
  const [posts, setPosts] = useState([])
  const [sampledTags, setSampledTags] = useState<string[]>([])
  const [categories, setCategories] = useState([])

  const onSearch = async (searchData: string) => {
    const data = await fetch(`/api/posts?q=${searchData}`)
    const postsData = await data.json()
    setPosts(postsData.results)
  }

  useEffect(() => {
    PostService.getAll().then((data: any) => {
      setPosts(convertToPostList(data).posts)
      setSampledTags(convertToPostList(data).tags.sort(() => .5 - Math.random()).slice(0, 4))
    })
    CategoryService.getAll().then((data: any) => {
      setCategories(convertToCategoryList(data).categories)
    })
  }, [])
              {/* <div key={post.slug}
className="mb-2 mt-2 card border inline-block w-full
w-[150px] ml-0 mt-0 relative transition-[0.3s]
hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)]
hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)]
font-extra"> */}
  return (
    <BlogIndexContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Heading title={`The Web Log`} categories={categories} tags={sampledTags} onSearch={onSearch} />
        <PostContainer>
          {posts.map((post: Post) => (
            <PostCard
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div
                className="mb-2 mt-0 w-full relative p-5 transition-[0.3s] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] card border font-extra hover:border hover:shadow-[0.25rem_0.25rem] hover:shadow-[var(--color-teal)]"
              >
                <div
                  data-category={post.category.title}
                  className="rounded-br-lg rounded-tl-lg text-3xs font-extra font-bold absolute text-right z-[2] px-2 py-1 right-0 bottom-0 max-w-2/3"
                >
                  <Link href={`/blog/category/${post.category.slug}`}>
                    {post.category.title}
                  </Link>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="xs:hidden sm:hidden w-auto overflow-hidden">
                    <PostImage
                      src={post.coverImage}
                      alt={post.title}
                      width={600}
                      height={400}
                    />
                  </div>
                  <PostTitle
                    // className="font-venice text-left text-lg tablet:text-2xl tablet:text-center tablet:mx-auto tablet:w-full break-words leading-none"
                  >
                    {post.title}
                  </PostTitle>
                  <div className="mt-2 mb-10">
                    <p className="line-clamp-6 leading-normal mb-5 w-full">
                      {post.description}
                    </p>
                  </div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </PostCard>
          ))}
        </PostContainer>
        {/* <div className="mx-auto max-w-[97%] min-h-screen bg-background mb-[2em] p-[1em] border-2 border-solid border-accent border-t-0 pt-[3em] rounded-b-lg"> */}
        {/*   <div className="columns-[6_200px] gap-x-4"> */}
        {/*     {posts.map((post: Post) => ( */}
        {/*       <div key={post.slug} className="mb-2 mt-2 card border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s] hover:border-solid hover:border-[var(--color-deep-green)] font-extra"> */}
        {/*         <Link */}
        {/*           href={`/blog/${post.slug}`} */}
        {/*           className="w-auto h-[150px] overflow-hidden" */}
        {/*         > */}
        {/*           <Image */}
        {/*             src={post.coverImage} */}
        {/*             alt={post.title} */}
        {/*             width={600} */}
        {/*             height={400} */}
        {/*             className="max-w-full h-auto rounded-tl-md rounded-tr-md" */}
        {/*           /> */}
        {/*         </Link> */}
        {/*         <Link href={`/blog/${post.slug}`}> */}
        {/*           <h3 className="font-bold font-venice font-light leading-tight tracking-[1px] mb-2.5 px-2 text-left text-lg"> */}
        {/*             {post.title} */}
        {/*           </h3> */}
        {/*         </Link> */}
        {/*         <div className="card-content p-2 mb-10 break-words overflow-auto"> */}
        {/*           <p className="text-base text-start leading-normal text-center mb-2.5"> */}
        {/*             {post.description} */}
        {/*           </p> */}
        {/*         </div> */}
        {/*         <div */}
        {/*           data-category={post.category.title} */}
        {/*           className="text-3xs font-extra font-bold absolute text-right z-[2] px-[0.25rem] py-[0.25rem] right-0 bottom-0" */}
        {/*         > */}
        {/*           <Link href={`/blog/category/${post.category.slug}`}> */}
        {/*             {post.category.title} */}
        {/*           </Link> */}
        {/*         </div> */}
        {/*         <div className="card-footer"> */}
        {/*           <div className="card-footer-item"></div> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     ))} */}
        {/*   </div> */}
        {/* </div> */}
      </Suspense>
    </BlogIndexContainer>
  )
}

export default Blog
