'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import {
  BiCopy,
  BiEnvelope,
  BiGlobe,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from 'react-icons/bi'
import tw from 'twin.macro'

import { PostService } from '@/lib/api'
import { useWindowEvent } from '@/hooks/useWindowEvent'

import Comment from '@/components/Comment'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'

import { convertPost } from '@/utils/blogs'
import { formatReadableDate } from '@/utils/date'

import { PostSEO } from './PostSEO'

import { Post } from '@/types'

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

    giscusData &&
      setTotalCommentCount(
        giscusData.totalCommentCount + giscusData.totalReplyCount,
      )
  })

  if (!post) return <></>

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PostSEO post={post} />
        <Section>
          <Article>
            <PostHeader>
              <div className='relative z-[2] mb-[25px] mt-0'>
                <div className='relative overflow-hidden rounded-md'>
                  <Image
                    className='block h-auto w-full max-w-full'
                    src={'https://placekitten.com/950/500'}
                    width={950}
                    height={500}
                    alt={post?.title}
                  />
                  <div className='absolute left-[30px] right-0 top-[30px] z-10 block w-full'>
                    <CategoryLink
                      href={`/blog/category/${post?.category?.slug}`}
                    >
                      {post?.category?.title}
                    </CategoryLink>
                  </div>
                </div>
              </div>
              <PostMeta>
                <Link
                  href='/meagan'
                  title='Meagan Waller'
                  className='mr-5 align-middle'
                >
                  <span className='mr-2 block inline-block h-[20px] w-[20px] overflow-hidden rounded-full bg-[url(/static/images/avatar/meaganwaller.png)] bg-cover bg-center align-middle shadow-sm shadow-accent' />
                  <span className='inline-block align-middle font-mono text-xs'>
                    Meagan Waller
                  </span>
                </Link>
                <time className='mb-0 mr-5 inline-block align-middle text-xs capitalize'>
                  <Image
                    src={'/static/images/ui/calendar.gif'}
                    width={20}
                    height={20}
                    alt='Clock icon'
                    className='mr-2 inline-block'
                  />
                  {post?.publishedDate && (
                    <span className='align-middle'>
                      {formatReadableDate(post?.publishedDate)}
                    </span>
                  )}
                </time>
                <span className='mr-5 inline-block text-xs' title='Views'>
                  <Image
                    src={'/static/images/emojis/fire.gif'}
                    width={20}
                    height={20}
                    alt='Fire'
                    className='mr-2 inline-block'
                  />
                  <span className='align-middle text-xs'>33542</span>
                </span>
                <Link href='#comments' className='pointer mr-5'>
                  <Image
                    src={'/static/images/ui/comment.gif'}
                    width={20}
                    height={20}
                    alt='Comment icon'
                    className='mr-2 inline-block'
                  />
                  <span className='align-middle text-xs'>
                    {formatCommentCount(totalCommentCount)}
                  </span>
                </Link>
                <h1 className='mb-7 mt-5 text-3xl font-bold leading-tight'>
                  {post?.title}
                </h1>
              </PostMeta>
            </PostHeader>
            <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
            <section>
              <div className='prose prose-lg mb-10 leading-loose'>
                <MarkdownRenderer
                  children={post?.content}
                  className='z-[1002] mt-8'
                />
              </div>
              <div className='mt-[50px] border-b border-t border-solid border-accent pb-[50px] pt-[50px] text-center'>
                <h5 className='mr-[15px] inline-block font-bold'>
                  Share this post:
                </h5>
                <div className='inline-block'>
                  <Link
                    href='#'
                    className='mb-2 ml-2 mr-2 mt-0 h-[25px] w-[25px] rounded-[50%] bg-[#135CB6] p-3 text-center leading-loose text-on-accent'
                  >
                    <BiLogoFacebook
                      className='m-0 inline-block align-middle text-[18px]'
                      size={18}
                    />
                  </Link>
                  <Link
                    href='#'
                    className='mb-2 ml-2 mr-2 mt-0 h-[25px] w-[25px] rounded-[50%] bg-[#00ACED] p-3 text-center leading-loose text-on-accent'
                  >
                    <BiLogoTwitter
                      className='m-0 inline-block align-middle text-[18px]'
                      size={18}
                    />
                  </Link>
                  <Link
                    href='#'
                    className='mb-2 ml-2 mr-2 mt-0 h-[25px] w-[25px] rounded-[50%] bg-accent p-3 text-center leading-loose text-on-accent'
                  >
                    <BiEnvelope
                      className='m-0 inline-block align-middle text-[18px]'
                      size={18}
                    />
                  </Link>
                  <Link
                    href='#'
                    className='mb-2 ml-2 mr-2 mt-0 h-[25px] w-[25px] rounded-[50%] bg-[#1FB381] p-3 text-center leading-loose text-on-accent'
                  >
                    <BiLogoWhatsapp
                      className='m-0 inline-block align-middle text-[18px]'
                      size={18}
                    />
                  </Link>
                </div>
                <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
                <div className='relative z-1 mt-5 inline-block max-w-full'>
                  <input
                    type='text'
                    name='shortlink'
                    value={`https://meaganwaller.com/blog/${post?.slug}`}
                    className='m-0 block h-[45px] w-auto rounded-3xl border-accent pr-[60px] text-center'
                  />
                  <span className='absolute right-[20px] top-[8px] h-[20px] w-[20px] cursor-pointer text-sm text-accent'>
                    <BiCopy className='inline-block' size={20} />
                  </span>
                </div>
              </div>
            </section>
          </Article>
          <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
          <section className='relative z-1 mt-[70px] rounded-lg bg-toolbar pb-[20px] pl-[20px] pr-[20px] pt-[30px] text-center text-on-accent'>
            <div className='absolute left-[50%] top-0 z-2 -ml-[44px] -mt-[44px] mb-0 mr-0 h-[88px] w-[88px] rounded-[50%] bg-accent'>
              <Link
                href='/meagan'
                className='relative z-1 block min-h-[80px] cursor-pointer overflow-hidden rounded-full border-4 border-solid border-accent'
              >
                <span className='absolute left-0 top-0 z-1 block h-auto h-full w-[101%] rounded-full bg-[url(/static/images/avatar/meaganwaller.png)] bg-cover bg-center' />
              </Link>
            </div>
            <div className='mx-auto my-0 text-sm'>
              <h4 className='mb-[20px] mt-[35px] text-lg leading-loose text-on-accent'>
                Meagan Waller
              </h4>
              <p className='mb-[20px] leading-loose'>
                I wrote my first line of HTML on Microsoft Notepad in 2004 and
                fell head-over-heels for how magical it all felt. The problem I
                was solving in 2004? My Neopets shop page wasn&apos;t pretty
                enough. I was 12 years old.
              </p>
              <div className='mt-[15px]'>
                <Link
                  href='#'
                  className='mx-3 my-0 inline-block text-lg text-on-accent'
                >
                  <BiGlobe className='inline-block align-middle' size={20} />
                </Link>
                <Link
                  href='#'
                  className='mx-3 my-0 inline-block text-lg text-on-accent'
                >
                  <BiLogoTwitter
                    className='inline-block align-middle'
                    size={20}
                  />
                </Link>
                <Link
                  href='#'
                  className='mx-3 my-0 inline-block text-lg text-on-accent'
                >
                  <BiLogoLinkedin
                    className='inline-block align-middle'
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </section>
          <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
          <section className='mt-12 rounded-md bg-on-accent p-10 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] md:p-3'>
            <h3 className='p-1 font-semibold'>Discussion</h3>
            <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
            <Comment />
          </section>
          <div className='clear-both block hidden h-0 w-0 overflow-hidden' />
        </Section>
      </Suspense>
    </>
  )
}
