import { convertToPostList } from '@/lib/utils/blog';
import Layout from '@/components/layout/Layout';
import React from 'react';
import type { Article } from '@/types';
import Link from 'next/link';
import PostService from '@/services/PostService';
import useSetCardDimensions from '@/hooks/useSetCardDimensions';

export default function Blog(props: { posts: Article[], featuredPost: Article, tags: String[], categories: String[] }): JSX.Element {

  return (
      <Layout>
      <div className="grid place-items-center font-extra">
      <div className="max-w-[1000px] w-full dark:bg-accent-first-dark-600 bg-accent-fourth-lighter-100 flex justify-between items-center bg-accent-fourth-lighter-100 border-t-accent-fourth-lighter-900 border-l-accent-fourth-lighter-900 border-r-accent-fourth-lighter-900 mt-[2em] px-[1em] py-[2em] border-t-2 border-x-2 border-solid">
      <h1
      className="text-5xl capitalize font-venice cursor-pointer p-0 m-0 hover:text-accent-third-lightest-400 focus:text-accent-second-300 text-accent-second-lighter-200 focus:outline-none"
      style={{textDecoration: "none", textShadow: "rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 50px, rgb(240, 15, 228) 1px 0px 50px", fontFamily: "Venice Classic, cursive" }}
      >
      The Web Log
      </h1>
      <ul className="grid grid-cols-[repeat(4,min-content)] gap-x-[1em]">
      {props.categories.map((category: string, i: number) => (
            <li key={i} className="border border-black bg-tertiary-100 overflow-hidden rounded-[10px] border-solid hover:bg-primary-300 mb-2">
            <Link href={`/blog/category/${category}`} className="block text-center border-l-white-500 border-t-white-500 font-bold text-black text-[0.8rem] uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid">
            {category}
            </Link>
            </li>
            ))}
      </ul>
      </div>
      <div className={`banner h-[35px] w-[1030px] bg-white border-t-2 border-x-2 border-solid border-secondary-400 relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-5 before:h-5 before:bg-secondary-400 before:-z-1 before:-left-0.5 before:-top-5 after:content-[""] after:absolute afer:block after:w-5 after:h-5 after:bg-secondary-400 after:-z-1 after:-right-0.5 after:-top-5`}>
      <h4 className="uppercase text-[0.85rem] text-black">tags:</h4>
      <ul className={`w-full grid grid-cols-[repeat(${props.tags.length},max-content)] gap-x-[1em]`}>
      {props.tags.map((tag: string, i: number) => (
            <li key={i} className="text-[0.9rem] font-normal text-black pb-0.5 hover:cursor-pointer hover:underline-offset-[3px]">
            {tag}
            </li>
            ))}
  </ul>
    <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
    <input type="text" placeholder="search..." className="border border-black h-[23px] px-2 py-[3px] rounded-lg border-solid" />
    <button className="w-[30px] h-[22px] text-[0.85rem] uppercase border border-black bg-tertiary-200 relative overflow-hidden cursor-pointer text-black grid place-items-center rounded-lg border-solid before:content-[''] before:absolute before:w-full before:h-full before:border-l-white-500 before:border-t-white-500 before:rounded-lg before:border-l before:border-solid before:border-t before:left-px before:top-px">go</button>
    </div>
    </div>
    <div className="max-w-[1000px] w-full bg-accent-fourth-lighter-100 border-b-accent-fourth-lighter-900 border-l-accent-fourth-lighter-900 border-r-accent-fourth-lighter-900 mb-[2em] p-[1em] border-b-2 border-x-2 border-solid">
    <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-4">
    {props.posts.map((post: Article, i: number) => (
          <div key={i} className="card">
          <h2 className="text-black font-bold leading-[1.8rem] tracking-[1px] mb-2.5 px-0 py-[3px]">
          {post.title}
          </h2>
          <p className="text-base leading-[1.2rem] mb-2.5">
          {post.description}
          </p>
          </div>
          ))}
  </div>
    </div>
    </div>
    </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PostService.getAll();
  const { posts, tags, categories } = convertToPostList(data);
  const featuredPost = posts.shift();

  return {
props: {
         featuredPost,
           posts: posts.slice(0, 5),
           tags,
           categories
       },
revalidate: 30,
  }
}
