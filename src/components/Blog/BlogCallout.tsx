'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaChevronDown,
  FaChevronRight,
  FaLeaf,
  FaRss,
  FaStar,
} from 'react-icons/fa'

import { tw } from '@/utils'

const ExpandedKey = 'blog-about-expanded'

const getExpandedFromLocalStorage = (): string | null => {
  return typeof localStorage !== 'undefined'
    ? localStorage.getItem(ExpandedKey)
    : '1'
}

const BlogCallout = () => {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(ExpandedKey, !expanded ? '1' : '0')
    }
    setExpanded((e) => {
      return !e
    })
  }

  useEffect(() => {
    const e = getExpandedFromLocalStorage()
    setExpanded(e === null || e == '1')
  }, [])

  return (
    <div className='bg-yellow-200 rounded leading-5'>
      <button
        type='button'
        className={tw(
          'text-ablue-700 hover:bg-yellow-400 bg-yellow-300 flex w-full items-center justify-between space-x-2 rounded p-2 text-xl font-bold',
          expanded ? 'border-yellow-400 rounded-b-none border-b' : '',
        )}
        onClick={toggleExpanded}
      >
        <span>About this blog</span>
        {expanded ? (
          <FaChevronDown className='max-w-[23px]' size={23} />
        ) : (
          <FaChevronRight size={23} className='max-w-[23px]' />
        )}
      </button>
      <div
        className={tw(
          'flex flex-row items-center p-4 md:space-x-4',
          expanded ? '' : 'hidden',
        )}
      >
        <FaRss className='text-ablue-700 hidden w-[48px] md:block' size='3x' />
        <div className='text-ablue-500'>
          <p className='mb-4'>
            Welcome to my blog! Since 2001 I've written
            <Link
              href='/blog/all'
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-800 mx-1 space-x-2 rounded px-1 py-0.5'
            >
              <FaLeaf className='text-blue-800 inline h-4 w-4' size='1x' />
              <span>1,000+ posts</span>
            </Link>
            about software/personal development, technology, minimalism, FIRE,
            movies, startups and my life. These span <b>three separate blogs</b>
            , with all articles linked from here.
          </p>
          <p className='mb-4'>
            <Link
              href='/blog/projects/adamfortuna'
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-800 mx-1 rounded px-1 py-0.5'
            >
              <span>This blog</span>
            </Link>{' '}
            Focuses on exploring the intersection of minimalism, mindfulness and
            technology + my journal.
          </p>
          <p className='mb-4'>
            <Link
              href='/blog/projects/minafi'
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-800 mx-1 rounded px-1 py-0.5'
            >
              <span>Minafi</span>
            </Link>{' '}
            Financial indepenence, investing and my journy to retire early (36
            ✔️).
          </p>
          <p className='mb-4'>
            <Link
              href='/blog/projects/hardcover'
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-800 mx-1 rounded px-1 py-0.5'
            >
              <span>Hardcover</span>
            </Link>{' '}
            Building Hardcover in public.
          </p>
          <p>
            Check out some
            <Link
              href='/blog/tags/highlights'
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-800 mx-1 space-x-2 rounded px-1 py-0.5'
            >
              <FaStar className='text-blue-800 inline h-4 w-4' size='1x' />
              <span>highlights</span>
            </Link>
            and stay in touch by following me on{' '}
            <a
              href='https://ruby.social/@adam'
              className='link--blue'
              target='_blank'
              rel='noreferrer'
            >
              Mastodon
            </a>
            , subscribing to my{' '}
            <Link href='/newsletter' className='link--blue'>
              newsletter
            </Link>{' '}
            or subscribing to my{' '}
            <a href='/api/feed' target='_blank' className='link--blue'>
              RSS feed
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCallout
