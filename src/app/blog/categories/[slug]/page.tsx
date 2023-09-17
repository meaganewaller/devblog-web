'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import tw from 'twin.macro'

import { CategoryService, PostService } from '@/lib/api'

import { Heading } from '@/components/core/heading'

import { convertToCategoryList, convertToPostList } from '@/utils/blogs'

import { Category, Post } from '@/types'

const CategorySlugContainer = tw.div`
`

const CategoryContainer = tw(motion.div)`
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

function CategoryPosts({ params }) {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState<Category>({
    count: 0,
    coverImage: '',
    description: '',
    href: '',
    id: '',
    notionId: '',
    slug: '',
    title: '',
  })
  const [posts, setPosts] = useState([])

  const onSearch = async (searchData: string) => {
    const data = await fetch(`/api/posts?q=${searchData}`)
    const postsData = await data.json()
    setPosts(postsData.results)
  }

  useEffect(() => {
    async function fetchCategory() {
      const category = await CategoryService.getById(params.slug)
      setCategory(category)
    }

    async function fetchPosts() {
      const data = await PostService.getAll(params.slug)
      setPosts(convertToPostList(data).posts)
      setSampledTags(
        convertToPostList(data)
          .tags.sort(() => 0.5 - Math.random())
          .slice(0, 4),
      )
    }

    async function fetchCategories() {
      const data = await CategoryService.getAll()
      setCategories(convertToCategoryList(data).categories)
    }

    fetchCategory()
    fetchPosts()
    fetchCategories()
  }, [])

  return (
    <CategorySlugContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Heading title={category.title} categories={categories} onSearch={onSearch} />
        <CategoryContainer>
          {posts.map((post: Post) => (
            <PostCard href={`/blog/${post.slug}`} key={post.slug}>
              <div className='card relative mb-2 mt-0 w-full border p-5 font-extra transition-[0.3s] hover:border hover:border-solid hover:border-[var(--color-deep-green)] hover:shadow-[0.25rem_0.25rem] hover:shadow-[var(--color-teal)] hover:transition-[0.3s]'>
                <div
                  data-category={post.category.title}
                  className='max-w-2/3 absolute bottom-0 right-0 z-[2] rounded-br-lg rounded-tl-lg px-2 py-1 text-right font-extra text-xs font-bold'
                >
                  <Link href={`/blog/category/${post.category.slug}`}>{post.category.title}</Link>
                </div>
                <div className='mt-2 md:mt-0'>
                  <div className='xs:hidden w-auto overflow-hidden sm:hidden'>
                    <PostImage src={post.coverImage} alt={post.title} width={600} height={400} />
                  </div>
                  <PostTitle
                  // className="font-venice text-left text-lg tablet:text-2xl tablet:text-center tablet:mx-auto tablet:w-full break-words leading-none"
                  >
                    {post.title}
                  </PostTitle>
                  <div className='mb-10 mt-2'>
                    <p className='mb-5 line-clamp-6 w-full leading-normal'>{post.description}</p>
                  </div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </PostCard>
          ))}
        </CategoryContainer>
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
        {/*           className="text-xs font-extra font-bold absolute text-right z-[2] px-[0.25rem] py-[0.25rem] right-0 bottom-0" */}
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
    </CategorySlugContainer>
  )
}

export default CategoryPosts

// import React from 'react'
// import tw, { styled } from 'twin.macro'
//
// import Balancer from 'react-wrap-balancer'
// import { CategoryService } from '@/lib/api'
// import { Suspense, useEffect, useState } from 'react'
// import { IoLogoTwitter as Twitter, IoLogoGithub as Github } from 'react-icons/io'
// import { PiArrowUpRightDuotone as Arrow } from 'react-icons/pi'
// import ReactMarkdown from 'react-markdown'
// import { Category } from '@/types'
//
// const StyledSection = styled.div`
//   &:before,
//   &:after {
//     content: '';
//     height: 15px;
//     display: block;
//     width: 100%;
//     background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
//     background-size: 100%;
//     background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//     background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//     background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//     background-size: 15px 15px;
//     background-size: 15px 15px;
//     background-repeat: repeat-x;
//     background-position: 0 0;
//     position: absolute;
//   }
//
//   &:before {
//     left: 0;
//     top: -7px;
//     -moz-transform: rotate(180deg);
//     -ms-transform: rotate(180deg);
//     -webkit-transform: rotate(180deg);
//     transform: rotate(180deg);
//   }
//
//   &:after {
//     bottom: -7px;
//     left: 0;
//   }
// `
//
// const InnerSection = styled.div`
// &:before {
//   left: -7px;
//   top: 0;
//   -moz-transform: rotate(180deg);
//   -ms-transform: rotate(180deg);
//   -webkit-transform: rotate(180deg);
//   transform: rotate(180deg);
// }
//
// &:after {
//   right: -7px;
//   top: 0;
// }
//
// &:before,
// &:after {
//   position: absolute;
//   content: '';
//   height: 100%;
//   display: block;
//   width: 15px;
//   background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
//   background-size: 100%;
//   background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//   background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//   background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
//   background-size: 15px 15px;
//   background-repeat: repeat-y;
// }
// `
//
// const Section = tw(StyledSection)`
//   w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
// `
//
// const SectionParagraph = tw.p`
//   my-5 bg-background w-full text-justify font-extra
// `
//
// const SectionTitle = tw.h2`
//   w-full text-center bg-background my-5 text-xl font-venice font-light text-accent
// `
//
// const SectionList = tw.ul`
//   list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-md text-accent
// `
//
// const LinkButton = tw(Link)`
//   text-accent decoration-wavy hover:decoration-accent hover:underline hover:cursor-pointer hover:underline-offset-[3px]
// `
//
// export default function CategoryPage({ params }) {
//   const [category, setCategory] = useState<Category>(null)
//
//   useEffect(() => {
//     async function fetchCategory() {
//       const categoryData = await CategoryService.getById(params.slug)
//       setCategory(categoryData.data)
//     }
//
//     fetchCategory()
//   }, [])
//
//   return (
//     <Section>
//       <InnerSection>
//         <Suspense fallback={<div>Loading...</div>}>
//           <div>
//             <h1 className='w-full pt-[50px] text-center font-venice text-3xl font-light text-accent'>
//               <Balancer>{category?.title}</Balancer>
//             </h1>
//             <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
//               <div className="bg-background rounded-md px-2 py-1 tracking-tighter">
//               </div>
//               <div className="h-[0.2em] bg-background mx-2" />
//             </div>
//             <div className="prose prose-xl mb-10 z-[200]">
//             </div>
//             <div className="flex flex-col gap-2 md:flex-row md:gap-2 mb-40">
//               <LinkButton rel="noopener noreferrer" target="_blank" href="https://twitter.com/meaganewaller" className="flex w-full border border-[var(--color-electric-purple)] rounded-lg p-4 no-underline items-center text-accent hover:text-accent-dark transition-all justify-between bg-background">
//                 <div className="flex items-center">
//                   <Twitter size={24} />
//                   <div className="ml-3">Twitter</div>
//                 </div>
//                 <Arrow size={24} />
//               </LinkButton>
//               <LinkButton rel="noopener noreferrer" target="_blank" href="https://github.com/meaganewaller" className="flex w-full border border-[var(--color-electric-purple)] rounded-lg p-4 no-underline items-center text-accent hover:text-accent-dark transition-all justify-between bg-background">
//                 <div className="flex items-center">
//                   <Github size={24} />
//                   <div className="ml-3">GitHub</div>
//                 </div>
//                 <Arrow size={24} />
//               </LinkButton>
//             </div>
//           </div>
//         </Suspense>
//       </InnerSection>
//     </Section>
//   )
// }
//
