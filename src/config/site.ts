import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  logo: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
  twitter: string
  twitterId: string
}

export const site: Site = {
  url: process.env.NODE_ENV === 'production' ? 'https://meaganwaller.com' : 'http://localhost:5100',
  logo: 'https://meaganwaller/images/avatar.png',
  title: 'Meagan Waller',
  name: 'Meagan Waller',
  keywords: [
    'Meagan Waller',
    'meaganwaller.com',
    'Next.js',
    'React',
    'TypeScript',
    'Ruby on Rails',
    'Lua',
    'Tailwind CSS',
    'Neovim',
  ],
  titleTemplate: '- Meagan Waller',
  twitter: 'meaganewaller',
  twitterId: 'meaganewaller',
  description: 'Meagan Waller',
  githubUsername: 'meaganewaller',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
  ],
}
