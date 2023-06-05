"use client";

import dynamic from "next/dynamic";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";
import { cxm } from "@/lib/helpers/cxm";

const SwitchThemeButton = dynamic(() => import("@ui/SwitchThemeButton"), { ssr: false });
const Menu = dynamic(() => import("@ui/Menu"), { ssr: false });

export default function Navbar() {
  return (
    <nav className="menubar antialiased subpixel-antialiased">
      <ul>
        <li>
          <Link href="/" key="home">
            <HiSparkles size="16" aria-label="Home page" />
          </Link>
        </li>
        <li>
          <Link href="#" className="font-semibold">
            Site
          </Link>
          <ul>
            <li>
              <Link href="/subscribe">Join the Newsletter</Link>
            </li>
            <li>
              <Link href="/colophon">Colophon</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">Meagan</Link>
          <ul>
            {/* <li> */}
            {/*   <Link href="/about">About</Link> */}
            {/* </li> */}
            <li>
              <Link href="/cv">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Let&apos;s Chat</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
          <ul>
            <li>
              <Link href="/blog/categories">Categories</Link>
              <ul>
                <li>
                  <Link href="/blog/categories/tutorials">Tutorials</Link>
                </li>
                <li>
                  <Link href="/blog/categories/guides">Guides</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
          <ul>
            <li>
              <Link href="/projects/XXX">First Project</Link>
            </li>
            <li>
              <Link href="/projects/XXX">Second Project</Link>
            </li>
            <li>
              <Link href="/projects/XXX">Third Project</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#snippets">Snippets</Link>
          <ul>
            <li>
              <Link href="/snippets/ruby">Ruby</Link>
            </li>
            <li>
              <Link href="/snippets/javascript">JavaScript</Link>
            </li>
            <li>
              <Link href="/snippets/tailwind">Tailwind CSS</Link>
            </li>
            <li>
              <Link href="/snippets/lua">Lua</Link>
            </li>
            <li>
              <Link href="/snippets/applescript">Applescript</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#workspace">Workspace</Link>
          <ul>
            <li>
              <Link href="/workspace/macos">Mac Setup</Link>
            </li>
            <li>
              <Link href="/workspace/linux">Linux Setup</Link>
            </li>
            <li>
              <Link href="/workspace/home-office">Home Office</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/guestbook">Guestbook</Link>
        </li>
      </ul>
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <div></div>
        <div className="flex items-center justify-center space-x-6">
          <SwitchThemeButton />
        </div>
      </div>
    </nav>

  )
}
