'use client';

import Link from 'next/link';
import { Window } from '@/components/core/window';
import { useWindowSize } from '@/hooks/use-window-size';

interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

type Props = {
  posts: Post[];
}

interface Post {
  id: string;
  title: string;
  category: Category;
  content: string;
  description: string;
  cover_image: string;
  tags: string[];
  published_date: string;
  to_param: string;
}

export function RecentPosts({posts}: Props) {
  const size = useWindowSize();
  if (!size.width) return null;

  return (
  <Window
  id="recent-posts-window"
  title="recent-posts.txt"
  x={size.width / 35}
  y={200}
      width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`}
      zIndex="3"
      active={true}
      >
      <div className="flex max-w-3xl flex-col">
        <ul className="py-2 px-6">
        {posts.map((post: Post, index: number) => (
          <li key={index} className="px-2 wavy w-full">
          <Link
          href={`/blog/${post.to_param}`}
          className="block outline-none no-underline hover:no-underline"
          >
          <h2 className="text-primary-400 lowercase font-extra hover:italic active:italic antialiased subpixel-antialiased break-normal">
          {post.title}
          </h2>
          <span className="text-xs tracking-wide font-extra lowercase text-info-500 font-bold">
          {post.published_date}
          </span>
          </Link>
          </li>
          ))}
        </ul>
      </div>
      </Window>
  )
}
