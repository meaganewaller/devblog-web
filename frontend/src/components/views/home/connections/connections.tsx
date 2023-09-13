'use client'

import Link from 'next/link'

import { useWindowSize } from '@/hooks/use-window-size'

import { Window } from '@/components/core/window'

export function Connections() {
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
    if (width <= 897) {
      return 300
    }
    return 650
  }
     {/* <div className='md:p-5 p-2 grid md:grid-cols-3 justify-items-center mb-12'> */}
  return (
    <Window
      title='lets-connect.txt'
      active={false}
      x={size.width / 10 }
      y={size.height / 1.65 }
      zIndex='1'
      width={`${windowWidth(size.width)}px`}
      id='connections-window'
    >

      <div className="p-2 grid xs:grid-cols-1 sm:grid-cols-1 mb-12 grid-cols-3">
        {links.map((link, i) => (
          <Link key={i} className='button' href={link.link} target='_blank'>
            {link.name}
          </Link>
        ))}
      </div>
    </Window>
  )
}
