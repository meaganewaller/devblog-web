"use client";

import Link from "next/link"
import { useWindowSize } from "@/hooks/useWindowSize"
import { cxm } from "@/lib/helpers/cxm"
import { convertToPostList } from "@/lib/utils/blog"
import Window from "@ui/Window"

import "@/styles/recent-posts.css"

export default function RecentPosts({ posts }) {
  const size = useWindowSize()
  return (
    <Window title="recent blog posts" x={size.width / 35} y={200} width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`} zIndex="3" active={true}>
      <div className="flex max-w-3xl flex-col dark:bg-viking-800 bg-purple-50">
        <ul className="pt-2">
          {posts.map((post: Blog) => (
            <li key={post.slug} className="px-2 wavy w-full">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-viking-400 dark:text-viking-100 lowercase font-mono hover:italic antialiased subpixel-antialiased break-normal">{post.title}</h2>
                <span className="italic font-mono lowercase text-purple-500 dark:text-purple-50">{post.published_date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Window>
  )
}
