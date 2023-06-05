"use client";

import Link from "next/link"
import { cxm } from "@/lib/helpers/cxm"
import { Heading, Paragraph, UnderlineSpan } from "@ui/typography"
import Window from "@ui/Window"
import { useWindowSize } from "@/hooks/useWindowSize"
import { BsArrowRightShort } from 'react-icons/bs'
import { HiSparkles } from "react-icons/hi"

const socialMedia = [
  { id: 1, name: "Email", route: "mailto:meagan@meaganwaller.com" },
  { id: 2, name: "Twitter", route: "https://twitter.com/meaganewaller" },
  { id: 3, name: "LinkedIn", route: "https://linkedin.com/in/meaganewaller" },
  { id: 4, name: "CodePen", route: "https://codepen.io/meaganewaller" },
  { id: 5, name: "Dev", route: "https://dev.to/meaganewaller" },
  { id: 6, name: "GitHub", route: "https://github.com/meaganewaller" },
]

export default function About() {
  const size = useWindowSize()
  return (
    <Window
      active={false}
      title="about meagan"
      x={size.width / 2.45}
      y={size.height / 12}
      zIndex="2"
      width={`${size.width * .55}px`}>
      <div className="flex p-5 place-content-center flex-col">
        <div className="flex place-content-center pb-4">
          <HiSparkles size="3em" className="text-secondary-lighter" />
          <HiSparkles size="3em" className="text-secondary-lighter" />
          <HiSparkles size="3em" className="text-secondary-lighter" />
        </div>
        <p className="font-mono text-md text-pink-300 px-8 leading-relaxed py-2">
          <span className="font-bold italic">I wrote my first line of HTML on Microsoft Notepad in 2004 </span>
          and fell head-over-heels for how magical it all felt. The problem I was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I was 12 years old.
        </p>
        <p className="font-mono text-md text-pink-400 px-8 leading-relaxed py-2">
          I spent a couple days working up the courage to convince my parents to put their credit card information into a form on a website and buy me a domain name. They did. And my first website was born. I learned everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation Shop, and getting my website live—by reading posts written by kids my age. Soon I started writing my own posts sharing my knowledge, my pitfalls, my cool experiments.
        </p>

        <div className="flex place-content-end group wavy">
          <Link href="/about" className="text-pink-500">Read more <BsArrowRightShort size="1.5em" className="inline-block" /> </Link>
        </div>
      </div>
    </Window>
  )
}
