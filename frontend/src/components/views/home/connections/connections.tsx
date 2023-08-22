'use client';

import { Window } from '@/components/core/window';
import { HiSparkles } from 'react-icons/hi';
import { useWindowSize } from '@/hooks/use-window-size';

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
      link: 'https://github.com/meaganwaller',
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
  <Window title="lets-connect.txt" active={false}
      x={size.width ? size.width / 2 : 0}
      y={size.height ? size.height / 1.65 : 0}
      zIndex="1"
      width="500px"
      height="250px"
      id="connections-window"
      >
      <div className="flex h-full flex-col place-content-center p-5">
      <div className="z-[5]">
      <ul className="grid grid-flow-col grid-rows-2 gap-x-2 gap-y-4">
      {links.map((link, i) => (
            <li key={i}>
            <button>
            {link.name}
            </button>
            </li>
            ))}
      </ul>
      </div>
      </div>
      </Window>

  )
}
