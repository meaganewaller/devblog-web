import { convertToPostList, convertToCategoryList } from "@/lib/utils/blog";
import PostService from "@/services/PostService";
import CategoryService from "@/services/CategoryService";
import { GetStaticProps } from "next";
import Image from "next/image";
import { handlePostClicked } from "@/lib/handlePostClicked";
import Layout from '@/components/layout/Layout';
import type { Article } from '@/types';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

interface Category {
  title: string;
  description: string;
  postsCount: number;
  slug: string;
}

interface FilteredPostProps {
  category?: string;
}

export default function Blog(props: { posts: Article[], tags: String[], categories: Category[] }): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto p-2 sm:p-4 md:p-8 lg:p-10 bg-primary-50 my-5 sm:my-12 rounded-lg border-2 border-solid border-primary-200">
        <div className="max-w-[95%] w-full flex justify-between items-center flex-col lg:flex-row">
          <h1 className="blog-header p-0 m-0 text-6xl font-normal text-center text-secondary-300 break-words font-venice hover:text-tertiary-300 mb-10">
            The Web Log
          </h1>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px, 1fr))] xl:grid-cols-[repeat(5,max-content)] lg:grid-cols-[repeat(3,max-content)] md:grid-cols-[repeat(4,max-content)] 2xl:grid-cols-[repeat(6,max-content)] gap-x-2">
            {props.categories.map((category: Category, i: number) => (
              <li key={i} className="col-auto border border-black bg-tertiary-200 overflow-hidden rounded-[10px] border-solid hover:bg-tertiary-300 mb-2">
                <Link href={`/blog/categories/${category.slug}`} className="block text-center border-l-white border-t-white font-bold text-black text-[0.8rem] uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`hidden md:grid banner h-[35px] w-full bg-secondary-200 mx-auto border-t-2 border-x-2 border-solid border-secondary-300 relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-5 before:h-5 before:bg-secondary-200 before:-z-1 before:-left-0.5 before:-top-5 after:content-[""] after:absolute afer:block after:w-5 after:h-5 after:bg-primary-200 after:-z-1 after:-right-0.5 after:-top-5`}>
          <h4 className="uppercase text-[0.85rem] text-black">tags:</h4>
          <ul className={`font-extra w-full grid grid-cols-[repeat(5,max-content)] gap-x-[1em] list-none`}>
            {props.tags.map((tag: string, i: number) => (
              <li key={i} className="text-[0.9rem] font-normal text-black pb-0.5 hover:cursor-pointer hover:underline-offset-[3px]">
                {tag}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
            <input type="text" placeholder="search..." className="border border-black h-[23px] px-2 py-[3px] rounded-lg border-solid" />
            <button className="w-[30px] h-[22px] text-[0.85rem] uppercase border border-black bg-tertiary-300 relative overflow-hidden cursor-pointer text-black grid place-items-center rounded-lg border-solid before:content-[''] before:absolute before:w-full before:h-full before:border-l-white before:border-t-white before:rounded-lg before:border-l before:border-solid before:border-t before:left-px before:top-px hover:bg-white/50">go</button>
          </div>
        </div>
        <div className="w-full bg-primary-50 mb-[2em] p-[1em]">
          <div className="columns-[6_200px] gap-x-4">
            {props.posts.map((post: Article, i: number) => (
              <BlogCard key={i} post={post} category={post.category} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const postsData = await PostService.getAll();
    const categoriesData = await CategoryService.getAll();
    const { posts, tags } = convertToPostList(postsData);
    const { categories } = convertToCategoryList(categoriesData);
    let tagsSample = tags.sort(() => .5 - Math.random()).slice(0, 5)

    return {
      props: {
        posts,
        tags: tagsSample,
        categories,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      props: {
        posts: [],
        tags: [],
        categories: [],
      }
    }
  }
}
