"use client";

import Link from "next/link"
import { cxm } from "@/lib/helpers/cxm"
import { Heading, Paragraph, UnderlineSpan } from "@ui/typography"
import Window from "@ui/Window"
import { useWindowSize } from "@/hooks/useWindowSize"
import { BsArrowRightShort } from 'react-icons/bs'
import { HiSparkles } from "react-icons/hi"

export default function Contact() {
  const size = useWindowSize()
  return (
    <Window title="Let&apos;s Connect" active={false} x={size.width / 2} y={size.height / 1.65} zIndex="1" width="500px" height="250px">
      <ul className="content">
        <li className="content__item">
          <button className="button button--kari">
            <span>Twitter</span>
            <div className="marquee" aria-hidden={true}>
              <div
                className="marquee__inner"
              >
                <span>Follow me</span>
                <span>Follow me</span>
                <span>Follow me</span>
                <span>Follow me</span>
              </div>
            </div>
          </button>
        </li>
        <li className="content__item">
          <button className="button button--hati"><span>LinkedIn</span></button>
        </li>
        <li className="content__item">
          <button className="button button--hyperion"><span>GitHub</span></button>
        </li>

        <li className="content__item">
          <button className="button button--narvi"><span><span>Email</span></span></button>
        </li>

        <li className="content__item">
          <button className="button button--pandora"><span>Dev.to</span></button>
        </li>

        <li className="content__item">
          <button className="button button--pallene">
            Polywork
          </button>
        </li>
      </ul>
    </Window>
  )
}

