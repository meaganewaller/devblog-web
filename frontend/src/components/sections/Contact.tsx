"use client";

import Link from "next/link"
import Image from 'next/image'
import { cxm } from "@/lib/helpers/cxm"
import { Heading, Paragraph, UnderlineSpan } from "@ui/typography"
import Window from "@ui/Window"
import { useWindowSize } from "@/hooks/useWindowSize"
import { BsArrowRightShort } from 'react-icons/bs'
import { HiSparkles } from "react-icons/hi"
import "@/styles/contact.css"

export default function Contact() {
  const links = [
    {
      name: "Email",
      link: "mailto:meagan@meaganwaller.com"
    },
    {
      name: "Twitter",
      link: "https://twitter.com/meaganewaller"
    },
    {
      name: "GitHub",
      link: "https://github.com/meaganwaller"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/meaganwaller/"
    },
    {
      name: "Polywork",
      link: "https://www.polywork.com/meaganwaller"
    },
  ]
  const size = useWindowSize()
  return (
    <Window
      title="let&apos;s connect"
      active={false}
      x={size.width / 2}
      y={size.height / 1.65}
      zIndex="1"
      width="500px"
      height="250px"
    >
      <div className="flex p-5 h-full place-content-center flex-col bg-purple-50 dark:bg-purple-800">
        <div className="test">
          <button className="pixel">GitHub</button>
          <button className="pixel">Twitter</button>
          <button className="pixel">LinkedIn</button>
          <button className="pixel">Email</button>
        </div>
      </div>
    </Window>
  )
}

