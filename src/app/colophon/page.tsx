'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tw, { styled } from 'twin.macro'

const resources = [
  {
    role: 'Backend Framework',
    name: 'Ruby on Rails',
    url: 'https://rubyonrails.org',
  },
  {
    role: 'Frontend Framework',
    name: 'Next.js',
    url: 'https://nextjs.org',
  },
  {
    role: 'Styling',
    name: 'TailwindCSS',
    url: 'https://tailwindcss.com',
  },
  {
    role: 'Content Management',
    name: 'Notion API',
    url: 'https://developers.notion.com/',
  },
  {
    role: 'Database',
    name: 'Postgres',
    url: 'https://postgresql.org/',
  },
  {
    role: 'Newsletter',
    name: 'Convertkit',
    url: 'https://convertkit.com/',
  },
  {
    role: 'Deployment',
    name: 'Vercel',
    url: 'https://vercel.com/',
  },
]

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  align-content: center;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  padding: 5px;
  padding-right: 3%;
  box-shadow: inset 0 0 10px #000;
  z-index: 10;
`

const Container = tw(StyledContainer)`
  desktop:flex-row
`

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateX(50%);
  font-family: 'Press Start 2P', cursive, serif;
  font-size: 0.5rem;
  margin: 2rem;
`

const Box = tw(StyledBox)`
  desktop:w-[15rem] desktop:h-[15rem] desktop:translate-x-[15%] desktop:text-md
`

const StyledColophonImage = styled(Image)`
  display: flex;
  width: 85%;
  height: 75%;
  cursor: url('https://i.postimg.cc/6338xsj2/oie-nr-M8-Ct-Mr-SPb-H.png'), auto;
`

const ColophonImage = tw(StyledColophonImage)`
  desktop:w-full desktop:h-full
`

const ColophonTitle = styled.div``

const ColophonText = styled.div``

export default function Colophon() {
  return (
    <section>
      <h1>A Peek Behind the (Digital) Curtain</h1>
      <p>
        Welcome, fellow wanderers of the digital wilderness. You've stumbled upon a vault of secrets, a backstage tour
        of this online haven. What's a colophon, you ask? Well, it's a fancy way of saying, "Hey, here's how this site
        came to be."
      </p>
      <h2>The Craftsmanship Behind the Pixels</h2>
      <p>
        Crafted and nurtured by none other than yours truly. I've painstakingly (lol) designed and assembled this
        digital realm with tons of open-source magic. Want to dive into the nitty-gritty? Feel free to explore the{' '}
        <Link href='https://github.com/meaganewaller/devblog' target='_blank'>
          GitHub repository.
        </Link>{' '}
        Frankly, it's a case of crafting a sledgehammer to tap nails, but playing with whatever the new web technology
        is at the time is half the fun. This cyberwonderland wouldn't exist without a concontion of the following:
      </p>
      <h3>Frontend</h3>
      <ul>
        <li>
          <strong>Ruby on Rails</strong>: The wizard behind the scences, orchestrating our backend ballet.
        </li>
        <li>
          <strong>Next.js</strong>: This is the magic that handles the heavy lifting, conjuring server-side rendering,
          image loading, and routing.
        </li>
        <li>
          <strong>TailwindCSS</strong>: The paintbrush that brings our aesthetic to life.
        </li>
        <li>
          <strong>NotionAPI</strong>: The content management system that allows me to write in Notion and publish to my
          site.
        </li>
      </ul>
      https://garrettdimon.com/colophon
    </section>
  )
}
