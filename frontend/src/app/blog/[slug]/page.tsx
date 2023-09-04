'use client'

import Link from 'next/link'
import React from 'react'
import tw, { styled } from 'twin.macro'

import Balancer from 'react-wrap-balancer'
import { formatDate } from '@/utils'
import { PostService } from '@/lib/api'
import { Suspense, useEffect, useState } from 'react'
import { IoLogoTwitter as Twitter, IoLogoGithub as Github } from 'react-icons/io'
import { PiArrowUpRightDuotone as Arrow } from 'react-icons/pi'
import ReactMarkdown from 'react-markdown'

const StyledSection = styled.div`
  &:before,
  &:after {
    content: '';
    height: 15px;
    display: block;
    width: 100%;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-size: 15px 15px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-position: 0 0;
    position: absolute;
  }

  &:before {
    left: 0;
    top: -7px;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &:after {
    bottom: -7px;
    left: 0;
  }
`

const InnerSection = styled.div`
&:before {
  left: -7px;
  top: 0;
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

&:after {
  right: -7px;
  top: 0;
}

&:before,
&:after {
  position: absolute;
  content: '';
  height: 100%;
  display: block;
  width: 15px;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
  background-size: 100%;
  background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-size: 15px 15px;
  background-repeat: repeat-y;
}
`

const Section = tw(StyledSection)`
  w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
`

const SectionParagraph = tw.p`
  my-5 bg-background w-full text-justify font-extra
`

const SectionTitle = tw.h2`
  w-full text-center bg-background my-5 text-xl font-venice font-light text-accent
`

const SectionList = tw.ul`
  list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-md text-accent
`

const LinkButton = tw(Link)`
  text-accent decoration-wavy hover:decoration-accent hover:underline hover:cursor-pointer hover:underline-offset-[3px]
`

interface Post {
  title: string
  published_date: string
  content: string
}

export default function BlogPost({ params }) {
  const [post, setPost] = useState<Post>({
    title: "",
    published_date: "",
    content: "",
  })

  useEffect(() => {
    async function fetchPost() {
      const post = await PostService.getById(params.slug)
      setPost(post)
    }

    fetchPost()
  }, [])

  return (
    <Section>
      <InnerSection>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <h1 className='w-full pt-[50px] text-center font-venice text-3xl font-light text-accent'>
              <Balancer>{post?.title}</Balancer>
            </h1>
            <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
              <div className="bg-background rounded-md px-2 py-1 tracking-tighter">
                {post?.published_date && formatDate(post.published_date)}
              </div>
              <div className="h-[0.2em] bg-background mx-2" />
            </div>
            <div className="prose prose-xl mb-10 z-[200]">
              <ReactMarkdown className="z-[1002]">{post?.content}</ReactMarkdown>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-2 mb-40">
              <LinkButton rel="noopener noreferrer" target="_blank" href="https://twitter.com/meaganewaller" className="flex w-full border border-[var(--color-electric-purple)] rounded-lg p-4 no-underline items-center text-accent hover:text-accent-dark transition-all justify-between bg-background">
                <div className="flex items-center">
                  <Twitter size={24} />
                  <div className="ml-3">Twitter</div>
                </div>
                <Arrow size={24} />
              </LinkButton>
              <LinkButton rel="noopener noreferrer" target="_blank" href="https://github.com/meaganewaller" className="flex w-full border border-[var(--color-electric-purple)] rounded-lg p-4 no-underline items-center text-accent hover:text-accent-dark transition-all justify-between bg-background">
                <div className="flex items-center">
                  <Github size={24} />
                  <div className="ml-3">GitHub</div>
                </div>
                <Arrow size={24} />
              </LinkButton>
            </div>
          </div>
        </Suspense>
      </InnerSection>
    </Section>
  )
}
