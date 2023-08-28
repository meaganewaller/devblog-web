'use client'

import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'

export function Intro() {
  const size = useWindowSize()
  if (!size.width) return null
  return (
    <Window
      title='about-meagan.txt'
      x={size.width / 2.45}
      y={size.height / 12}
      width={`${size.width * 0.55}px`}
      zIndex='2'
      active={true}
      id='intro-window'
    >
      <div className='flex flex-col p-10'>
        <div className='flex place-content-center p-8'>
          <HiSparkles size='3em' className='text-accent' />
          <HiSparkles size='3em' className='text-accent' />
          <HiSparkles size='3em' className='text-accent' />
        </div>
        <p className='px-8 py-2 font-extra text-md leading-relaxed text-primary-txt'>
          <span className='font-bold italic'>
            I wrote my first line of HTML on Microsoft Notepad in 2004{' '}
          </span>
          and fell head-over-heels for how magical it all felt. The problem I
          was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I
          was 12 years old.
        </p>
        <p className='text-secondary-400 px-8 py-2 font-extra text-md leading-relaxed'>
          I spent a couple days working up the courage to convince my parents to
          put their credit card information into form on a website and buy me a
          domain name. They did. And my first website was born. I learned
          everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation
          Shop, and getting my website live—by reading posts written by kids my
          age. Soon I started writing my own posts sharing my knowledge, my
          pitfalls, cool experiments.
        </p>
        <div className='pb-5 flex place-content-end px-8 font-venice text-lg'>
          <Link href='/meagan'>
            Read more{' '}
            <BsArrowRightShort size='1.5em' className='inline-block' />
          </Link>
        </div>
      </div>
    </Window>
  )
}
