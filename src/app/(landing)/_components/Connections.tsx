'use client'

import Link from 'next/link'
import React from 'react'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'

import { ConnectionsContainer } from './connections.styles'

export default function Connections() {
  const links = [
    {
      name: 'Email',
      link: 'mailto:meagan@meaganwaller.com',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/meaganewaller',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/meaganewaller',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/meaganwaller/',
    },
    {
      name: 'Polywork',
      link: 'https://www.polywork.com/meaganwaller',
    },
    {
      name: 'Dev.to',
      link: 'https://www.dev.to/meaganewaller',
    },
  ]

  const size = useWindowSize()

  if (!size.width || !size.height) return null

  const windowWidth = (width: number) => {
    if (width <= 768) {
      return 300
    }
    return 600
  }

  return (
    <Window
      title='lets-connect.txt'
      active={false}
      x={Number(size.width / 2 < 520 ? size.width / 7 : size.width / 1.75) + 100}
      y={Number(size.height / 1.5)}
      zIndex='8'
      width={`${windowWidth(size.width)}px`}
      id='connections-window'
      draggable={size.width > 767}
    >
      <ConnectionsContainer>
        {links.map((link) => (
          <Link key={link.name} className='button' href={link.link} target='_blank'>
            {link.name}
          </Link>
        ))}
      </ConnectionsContainer>
    </Window>
  )
}
