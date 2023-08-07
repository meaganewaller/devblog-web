'use client';

import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import DraggableWindow from '@/components/layout/DraggableWindow';
import type { Article } from '@/types';

interface Props {
  posts: Article[];
}

export default function RecentPosts({ posts }: Props) {
  const size = useWindowSize();
  if (!size.width) return null;
  return (
    <DraggableWindow
      title="recent blog posts"
      x={size.width / 35}
      y={200}
      width={`${size.width / 2 < 520 ? size.width / 2 : 520}px`}
      zIndex="3"
      active={true}
    >
      <div className="flex max-w-3xl flex-col">
        <ul className="py-2 px-6">
          {posts.map((post: Article) => (
            <li key={post.slug} className="px-2 wavy w-full">
              <Link
                href={`/blog/${post.slug}`}
                className="block outline-none"
              >
                <h2 className="text-purple-one lowercase font-extra hover:italic active:italic antialiased subpixel-antialiased break-normal">
                  {post.title}
                </h2>
                <span className="text-xs font-extra lowercase text-pink-three">
                  {post.published_date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DraggableWindow>
  );
}
