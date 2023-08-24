'use client';

import { Window } from '@/components/core/window';
import { useWindowSize } from '@/hooks/use-window-size';
import Link from 'next/link';

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
  const size = useWindowSize();
  return (
    <Window
      title="lets-connect.txt"
      active={false}
      x={size.width ? size.width / 2 : 0}
      y={size.height ? size.height / 1.65 : 0}
      zIndex="1"
      width="500px"
      height="250px"
      id="connections-window"
      >
        <div className="grid grid-cols-3 justify-items-center p-5">
          {links.map((link, i) => (
            <Link 
              key={i} 
              className="button"
              href={link.link}
              target="_blank"
            >
              {link.name}
            </Link>
          ))}
      </div>
    </Window>
  )
}
