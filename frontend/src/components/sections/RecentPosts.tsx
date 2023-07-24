'use client';

import Link from 'next/link';
import { useWindowSize } from '@/hooks/useWindowSize';
import { cxm } from '@/lib/helpers/cxm';
import { convertToPostList } from '@/lib/utils/blog';
import DraggableWindow from '@/components/layout/DraggableWindow';

export default function RecentPosts({ posts }) {
  const size = useWindowSize();
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
          {posts.map((post: Blog) => (
            <li key={post.to_param} className="px-2 wavy w-full">
              <Link
                href={`/blog/${post.to_param}`}
                className="block outline-none"
              >
                <h2 className="text-primary-400 dark:text-accent-first-300 lowercase font-extra hover:italic active:italic antialiased subpixel-antialiased break-normal">
                  {post.title}
                </h2>
                <span className="italic font-extra lowercase text-primary-500 dark:text-accent-first-lighter-100">
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
