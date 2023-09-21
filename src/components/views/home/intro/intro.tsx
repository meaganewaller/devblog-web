'use client'

import { BsArrowRightShort } from 'react-icons/bs'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'

import {
  IntroContainer,
  IntroParagraph,
  IntroReadMore,
  IntroSparkle,
  IntroSparkles,
} from './intro.styles'

export function Intro() {
  const size = useWindowSize()
  if (!size.width) return null
  return (
    <Window
      title='about-meagan.txt'
      x={size.width / 2.45}
      y={size.height / 100}
      width={`${size.width * 0.55}px`}
      zIndex='2'
      active={true}
      id='intro-window'
      draggable={size.width > 897}
    >
      <IntroContainer>
        <IntroSparkles>
          <IntroSparkle size='3em' />
          <IntroSparkle size='3em' />
          <IntroSparkle size='3em' />
        </IntroSparkles>
        <IntroParagraph>
          <span className='font-bold italic'>
            I wrote my first line of HTML on Microsoft Notepad in 2004{' '}
          </span>
          and fell head-over-heels for how magical it all felt. The problem I
          was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I
          was 12 years old.
        </IntroParagraph>
        <IntroParagraph>
          I spent a couple days working up the courage to convince my parents to
          put their credit card information into form on a website and buy me a
          domain name. They did. And my first website was born. I learned
          everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation
          Shop, and getting my website live—by reading posts written by kids my
          age. Soon I started writing my own posts sharing my knowledge, my
          pitfalls, cool experiments.
        </IntroParagraph>
        <div className='flex place-content-end px-8 pb-5 font-venice text-lg'>
          <IntroReadMore href='/meagan'>
            Read more{' '}
            <BsArrowRightShort size='1.5em' className='inline-block' />
          </IntroReadMore>
        </div>
      </IntroContainer>
    </Window>
  )
}
