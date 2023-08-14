import type { NextPage } from 'next'
import Head from 'next/head'

import { getAbsoluteURL } from '@lib/utils/browser'
import { Navbar } from '@/components/Navbar';

interface Category {
  title: string;
  description: string;
  postsCount: number;
  slug: string;
}

type Props = {
  headerTitle?: string
  children: JSX.Element
  categories?: Category[]
}

const BlogLayout: NextPage<Props> = ({ headerTitle = 'Blog', children, categories = [] }: Props) => {
  return (
    <>
      <Head>
        <title>Meagan Waller</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Meagan Waller" />
        <meta property="og:title" content="Meagan Waller" />
        <meta property="og:description" content="Meagan Waller" />
        <meta property="og:url" content={`${getAbsoluteURL()}`} />
        <meta property="og:image" content={`${getAbsoluteURL()}/logo.png`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="apply h-full w-full bg-[center_center] shadow-[inset_1px_1px_0px_rgba(255,255,255,0.2),inset_-1px_-1px_0px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col rounded-lg bg-clouds dark:bg-nightsky">
        <Navbar />
        <main className="min-h-screen border-none bg-transparent">
          <div className="grid place-items-center font-extra">
            <div className="max-w-[90%] w-full bg-white dark:bg-primary-four flex justify-between items-center border-t-neutral-dark border-l-neutral-dark border-r-neutral-dark mt-[2em] px-[1em] py-[2em] border-t-2 border-x-2 border-solid flex-col md:flex-row">
              <h1 className="blog-header p-0 m-0 text-6xl font-normal text-center text-accent-first-two break-words font-venice hover:text-tertiary-two mb-10">
                {headerTitle}
              </h1>
              <ul className="grid grid-cols-[repeat(3,max-content)] xl:grid-cols-[repeat(4,max-content)] md:grid-cols-[repeat(2,max-content)] 2xl:grid-cols-[repeat(6,max-content)] gap-x-2">
                {categories.map((category: Category, i: number) => (
                  <li key={i} className="col-auto border border-black bg-tertiary-two overflow-hidden rounded-[10px] border-solid hover:bg-accent-third mb-2">
                    <Link href={`/blog/categories/${category.slug}`} className="block text-center border-l-white border-t-white font-bold text-black text-[0.8rem] uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid">
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {children}
          </div>
        </main>
      </div>
    </>
  )

}

export default BlogLayout
