'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Suspense } from 'react'

import Image from 'next/image'
import Comment from '@/components/Comment'
import { MarkdownRenderer } from "@/components/MarkdownRenderer"
import { BiLogoFacebook, BiLogoTwitter, BiLogoWhatsapp, BiEnvelope, BiCopy, BiGlobe, BiLogoLinkedin } from 'react-icons/bi'

import { useWindowEvent } from '@/hooks/useWindowEvent'

import { Post } from "@/types"

import tw from 'twin.macro'
import { PostSEO } from './PostSEO'
import { formatReadableDate } from '@/utils/date'

import { PostService } from '@/lib/api'
import { convertPost } from "@/utils/blogs"

function formatCommentCount(count: number) {
  if (count === 0) return 'No comments'
  if (count === 1) return '1 comment'

  return `${count} comments`
}

const Section = tw.section`
block clear-both overflow-hidden px-16 pt-0 pb-12 m-0 tracking-wide align-baseline break-words border-l-0 lg:border-r border-solid border-y-0 border-accent text-primary-txt lg:float-left lg:w-2/3
`

const Article = tw.article`
`

const PostHeader = tw.header`
block
`

const PostMeta = tw.div`
`

const CategoryLink = tw(Link)`
inline-block py-1 px-6 mt-0 mr-1 mb-1 ml-0 font-sans text-sm font-semibold tracking-wide leading-7 text-left text-on-accent align-top break-words bg-accent border-0 cursor-pointer hover:bg-accent-dark rounded-lg
`

async function getPost(slug: string) {
  const post = await PostService.getById(slug)
  return post
}

export default function PostDetail({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post>()
  const [totalCommentCount, setTotalCommentCount] = useState<number>(0)

  useEffect(() => {
    getPost(slug).then((postData) => {
      if (!postData) return

      const converted = convertPost(postData)
      setPost(convertPost(converted))
    })
  })

  useWindowEvent('message', (event) => {
    if (event.origin !== 'https://giscus.app') return
    if (!(typeof event.data === 'object' && event.data.giscus)) return

    const giscusData = event.data.giscus.discussion

    giscusData && setTotalCommentCount(giscusData.totalCommentCount + giscusData.totalReplyCount)
  })

  if (!post) return <></>

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostSEO post={post} />
        <Section>
          <Article>
            <PostHeader>
              <div className="mb-[25px] relative mt-0 z-[2]">
                <div className="rounded-md overflow-hidden relative">
                  <Image
                    className="block w-full max-w-full h-auto"
                    src={`https://placekitten.com/950/500`}
                    width={950}
                    height={500}
                    alt={post?.title}
                  />
                  <div className="block absolute right-0 z-10 w-full left-[30px] top-[30px]">
                    <CategoryLink
                      href={`/blog/category/${post?.category?.slug}`}
                    >
                      {post?.category?.title}
                    </CategoryLink>
                  </div>
                </div>
              </div>
              <PostMeta>
                <Link href="/meagan" title="Meagan Waller" className="mr-5 align-middle">
                  <span className="bg-[url(/static/images/avatar/meaganwaller.png)] mr-2 bg-cover bg-center block w-[20px] h-[20px] rounded-full overflow-hidden shadow-sm shadow-accent inline-block align-middle" />
                  <span className="text-xs inline-block font-mono align-middle">Meagan Waller</span>
                </Link>
                <time
                  className="mr-5 text-xs mb-0 inline-block capitalize align-middle"
                >
                  <Image
                    src={`/static/images/ui/calendar.gif`}
                    width={20}
                    height={20}
                    alt="Clock icon"
                    className="inline-block mr-2"
                  />
                  {post?.publishedDate && (
                    <span className="align-middle">{formatReadableDate(post?.publishedDate)}</span>
                  )}
                </time>
                <span className="mr-5 text-xs inline-block" title="Views">
                  <Image
                    src={`/static/images/emojis/fire.gif`}
                    width={20}
                    height={20}
                    alt="Fire"
                    className="inline-block mr-2" />
                  <span className="align-middle text-xs">33542</span>
                </span>
                <Link href="#comments" className="pointer mr-5">
                  <Image
                    src={`/static/images/ui/comment.gif`}
                    width={20}
                    height={20}
                    alt="Comment icon"
                    className="inline-block mr-2" />
                  <span className="text-xs align-middle">{formatCommentCount(totalCommentCount)}</span>
                </Link>
                <h1 className="mt-5 mb-7 text-3xl font-bold leading-tight">
                  {post?.title}
                </h1>
              </PostMeta>
            </PostHeader>
            <div className="clear-both block overflow-hidden hidden w-0 h-0" />
            <section>
              <div className="prose prose-lg leading-loose mb-10">
                <MarkdownRenderer children={post?.content} className="mt-8 z-[1002]" />
              </div>
              <div className="text-center border-solid border-t border-accent border-b mt-[50px] pt-[50px] pb-[50px]">
                <h5 className="inline-block font-bold mr-[15px]">Share this post:</h5>
                <div className="inline-block">
                  <Link href="#" className="bg-[#135CB6] mt-0 mr-2 mb-2 ml-2 p-3 w-[25px] h-[25px] rounded-[50%] text-center leading-loose text-on-accent">
                    <BiLogoFacebook className="inline-block text-[18px] align-middle m-0" size={18}/>
                  </Link>
                  <Link href="#" className="bg-[#00ACED] mt-0 mr-2 mb-2 ml-2 p-3 w-[25px] h-[25px] rounded-[50%] text-center leading-loose text-on-accent">
                    <BiLogoTwitter className="inline-block text-[18px] align-middle m-0" size={18}/>
                  </Link>
                  <Link href="#" className="bg-accent mt-0 mr-2 mb-2 ml-2 p-3 w-[25px] h-[25px] rounded-[50%] text-center leading-loose text-on-accent">
                    <BiEnvelope className="inline-block text-[18px] align-middle m-0" size={18}/>
                  </Link>
                  <Link href="#" className="bg-[#1FB381] mt-0 mr-2 mb-2 ml-2 p-3 w-[25px] h-[25px] rounded-[50%] text-center leading-loose text-on-accent">
                    <BiLogoWhatsapp className="inline-block text-[18px] align-middle m-0" size={18}/>
                  </Link>
                </div>
                <div className="clear-both block overflow-hidden hidden w-0 h-0" />
                <div className="relative z-1 inline-block mt-5 max-w-full">
                  <input
                    type="text"
                    name="shortlink"
                    value={`https://meaganwaller.com/blog/${post?.slug}`}
                    className="text-center pr-[60px] m-0 block w-auto h-[45px] rounded-3xl border-accent"
                  />
                  <span className="absolute right-[20px] top-[8px] text-accent text-sm w-[20px] h-[20px] cursor-pointer">
                    <BiCopy className="inline-block" size={20}/>
                  </span>
                </div>
              </div>
            </section>
          </Article>
          <div className="clear-both block overflow-hidden hidden w-0 h-0" />
          <section className="mt-[70px] pt-[30px] pr-[20px] pb-[20px] pl-[20px] relative z-1 text-center bg-toolbar text-on-accent rounded-lg">
            <div className="absolute left-[50%] top-0 z-2 w-[88px] -mt-[44px] mr-0 mb-0 -ml-[44px] h-[88px] rounded-[50%] bg-accent">
              <Link
                href="/meagan"
                className="block rounded-full overflow-hidden border-accent border-4 border-solid z-1 min-h-[80px] cursor-pointer relative"
              >
                <span className="bg-[url(/static/images/avatar/meaganwaller.png)] block w-[101%] h-auto bg-cover bg-center absolute left-0 top-0 h-full z-1 rounded-full" />
              </Link>
            </div>
            <div className="text-sm mx-auto my-0">
              <h4 className="text-on-accent mt-[35px] mb-[20px] leading-loose text-lg">Meagan Waller</h4>
              <p className="mb-[20px] leading-loose">
                I wrote my first line of HTML on Microsoft Notepad in 2004 and fell head-over-heels for how magical it all felt.
                The problem I was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I was 12 years old.
              </p>
              <div className="mt-[15px]">
                <Link href="#" className="inline-block my-0 mx-3 text-on-accent text-lg">
                  <BiGlobe className="inline-block align-middle" size={20}/>
                </Link>
                <Link href="#" className="inline-block my-0 mx-3 text-on-accent text-lg">
                  <BiLogoTwitter className="inline-block align-middle" size={20}/>
                </Link>
                <Link href="#" className="inline-block my-0 mx-3 text-on-accent text-lg">
                  <BiLogoLinkedin className="inline-block align-middle" size={20}/>
                </Link>
              </div>
            </div>
          </section>
          <div className="clear-both block overflow-hidden hidden w-0 h-0" />
          <section className="bg-on-accent mt-12 rounded-md p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] md:p-3">
            <h3 className="font-semibold p-1">Discussion</h3>
            <div className="clear-both block overflow-hidden hidden w-0 h-0" />
            <Comment />
          </section>
          <div className="clear-both block overflow-hidden hidden w-0 h-0" />
        </Section>
      </Suspense>
    </>
  )
}
