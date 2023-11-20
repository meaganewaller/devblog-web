'use client'

import React, { useState } from 'react'

import PageHeader from '@/components/page-header'

const allUses = [
  {
    name: 'Apple Magic Trackpad',
    description: "It's just so smooth",
    filters: ['Gadget'],
  },
  {
    name: 'iPhone 13, Pink',
    description: "I'm fully bought into the Apple ecosystem",
    filters: ['Gadget'],
  },
  {
    name: 'Neovim',
    description: 'this is the description',
    filters: ['Dev tool'],
  },
  {
    name: 'Kitty',
    description: 'this is the description',
    filters: ['Dev tool'],
  },
  {
    name: 'Hardhacker',
    description: "There's just something about this colorscheme.",
    filters: ['Dev tool'],
  },
  {
    name: 'Fira Code Nerd Font',
    description: 'Makes everything sharp',
    filters: ['Dev tool'],
  },
  {
    name: 'Blex Mono Nerd Font',
    description: 'Really just for the italics',
    filters: ['Dev tool'],
  },
  {
    name: 'Brave Browser',
    description: 'this is the description',
    filters: ['Other software'],
  },
  {
    name: 'Notion',
    description: 'This is the description',
    filters: ['Other software', 'Productivity', 'API'],
  },
  {
    name: 'Tables Plus',
    description: 'My GUI for Postgresql',
    filters: ['Dev tool', 'Other software'],
  },
  {
    name: 'Raycast',
    description: 'If spotlight was actually powerful',
    filters: ['Other software', 'Productivity'],
  },
  {
    name: '1Password',
    description: "I don't care which password manager you use, just USE ONE!",
    filters: ['Productivity', 'Other software', 'Subscriptions'],
  },
  {
    name: 'Canary Mail',
    description: 'This is the description',
    filters: ['Productivity', 'Other software'],
  },
  {
    name: 'Raindrop.io',
    description: 'Makes my bookmarks functional',
    filters: ['Web service', 'Other software'],
  },
  {
    name: 'Vercel',
    description: 'Application host for my frontend applications',
    filters: ['Web service'],
  },
  {
    name: 'Sennheister HD 450BT',
    description: 'The only headphones I can wear for hours at a time',
    filters: ['Gadget'],
  },
  {
    name: 'Next.js',
    description: 'I just really love this framework',
    filters: ['Framework'],
  },
  {
    name: 'MacBook Pro (16", 2019)',
    description: 'Probably due for an upgrade',
    filters: ['Gadget'],
  },
  {
    name: 'Ruby on Rails',
    description: 'How I keep the lights on',
    filters: ['Framework'],
  },
  {
    name: 'Render',
    description: 'Hosting my Ruby powered applications',
    filters: ['Web service', 'Subscriptions'],
  },
]

export default function UsesPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  // Filter the uses based on the selected filter
  const filteredUses =
    selectedFilter === 'All' ? allUses : allUses.filter((use) => use.filters.includes(selectedFilter))

  const filters = Array.from(new Set(allUses.flatMap((use) => use.filters)))
  filters.unshift('All')

  return (
    <div className='mx-auto max-w-full'>
      <PageHeader title='How I Work' centered={true} />
      <div className='my-4 flex flex-wrap justify-center gap-3 px-4 md:my-8 md:px-8'>
        {filters.map((filter) => (
          <a
            key={filter}
            href='#'
            className={`relative select-none rounded-lg px-2 py-1 text-accent-dark hover:shadow hover:shadow-bubblegum hover:outline hover:outline-bubblegum md:text-lg ${
              selectedFilter === filter
                ? 'bg-soft-rose/50 shadow shadow-bubblegum outline outline-bubblegum'
                : 'bg-off-white/50'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </a>
        ))}
      </div>

      <div className='grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4'>
        {filteredUses.map((use) => (
          <div
            className='relative mx-auto mt-4 block max-w-sm rounded-lg border border-accent bg-off-white p-6'
            key={use.name}
          >
            <span className='rounded-rb absolute inset-x-0 bottom-0 h-2 rounded-bl-lg rounded-br-lg bg-gradient-to-r from-vibrant-green via-sky-blue to-raspberry-pink'></span>
            <p>{use.name}</p>
            <p>{use.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
