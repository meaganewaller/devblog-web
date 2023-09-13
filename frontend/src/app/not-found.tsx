'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useWindowSize } from '@/hooks/use-window-size'
import { Window } from '@/components/core/window'
import { Metadata } from 'next/types'

import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const metadata: Metadata = { title: '404 - Page not found' }

function NotFound() {
  const size = useWindowSize()
  if (!size.width || !size.height) return null
  return (
    <>
      <Window
        title='not-found.txt'
        active={true}
        x={size.width / 2.45}
        y={size.height / 12 }
        zIndex='2'
        width={`${size.width * 0.55}px`}
        height='500px'
        id='not-found-window'
      >
        <div className="text-center w-full mt-5">
          <Image
            className="w-[250px] m-auto block"
            src={`/static/images/ui/sadcomputer.svg`}
            width={500}
            height={500}
            alt="Sad computer"
          />
          <div className="text-center">
            <h1 className="font-venice text-5xl text-primary-txt mt-5">error 404</h1>
            <p className="w-full font-extra text-md leading-relaxed text-primary-txt">
              page not found.{' '}
              <br />
              <Link
                className="text-accent hover:decoration-wavy hover:underline"
                href="/">go back home</Link>
            </p>
          </div>
        </div>
      </Window>
    </>
  )
}

export default NotFound
