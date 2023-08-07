import { convertToPostList, convertToCategoryList } from "@/lib/utils/blog";
import PostService from "@/services/PostService";
import CategoryService from "@/services/CategoryService";
import { GetStaticProps } from "next";
import Image from "next/image";
import { handlePostClicked } from "@/lib/handlePostClicked";
import Layout from '@/components/layout/Layout';
import type { Article } from '@/types';
import Link from 'next/link';

interface Category {
  title: string;
  description: string;
  postsCount: number;
  slug: string;
}

export default function Blog(props: { posts: Article[], tags: String[], categories: Category[] }): JSX.Element {
  return (
    <Layout>
      <div className="grid place-items-center font-extra">
        <div className="max-w-[90%] w-full bg-white dark:bg-primary-four flex justify-between items-center border-t-neutral-dark border-l-neutral-dark border-r-neutral-dark mt-[2em] px-[1em] py-[2em] border-t-2 border-x-2 border-solid flex-col md:flex-row">
          <h1 className="blog-header p-0 m-0 text-6xl font-normal text-center text-accent-first-two break-words font-venice hover:text-tertiary-two mb-10">
            The Web Log
          </h1>
          <ul className="grid grid-cols-[repeat(3,max-content)] xl:grid-cols-[repeat(4,max-content)] md:grid-cols-[repeat(2,max-content)] 2xl:grid-cols-[repeat(6,max-content)] gap-x-2">
            {props.categories.map((category: Category, i: number) => (
              <li key={i} className="col-auto border border-black bg-tertiary-two overflow-hidden rounded-[10px] border-solid hover:bg-accent-third mb-2">
                <Link href={`/blog/categories/${category.slug}`} className="block text-center border-l-white border-t-white font-bold text-black text-[0.8rem] uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`hidden md:grid banner h-[35px] w-[92%] bg-accent-first dark:bg-primary border-t-2 border-x-2 border-solid dark:border-primary-two border-accent-first-two relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 before:content-[""] before:absolute before:block before:w-5 before:h-5 dark:before:bg-neutral before:bg-accent-first-four before:-z-1 before:-left-0.5 before:-top-5 after:content-[""] after:absolute afer:block after:w-5 after:h-5 dark:after:bg-neutral after:bg-accent-first-four after:-z-1 after:-right-0.5 after:-top-5`}>
          <h4 className="uppercase text-[0.85rem] text-black">tags:</h4>
          <ul className={`w-full grid grid-cols-[repeat(5,max-content)] gap-x-[1em] list-none`}>
            {props.tags.map((tag: string, i: number) => (
              <li key={i} className="text-[0.9rem] font-normal text-black pb-0.5 hover:cursor-pointer hover:underline-offset-[3px]">
                {tag}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
            <input type="text" placeholder="search..." className="border border-black h-[23px] px-2 py-[3px] rounded-lg border-solid" />
            <button className="w-[30px] h-[22px] text-[0.85rem] uppercase border border-black bg-primary relative overflow-hidden cursor-pointer text-black grid place-items-center rounded-lg border-solid before:content-[''] before:absolute before:w-full before:h-full before:border-l-white before:border-t-white before:rounded-lg before:border-l before:border-solid before:border-t before:left-px before:top-px hover:bg-primary-two/80">go</button>
          </div>
        </div>
        <div className="max-w-[90%] w-full bg-white dark:bg-primary-four border-b-neutral-dark border-l-neutral-dark border-r-neutral-dark mb-[2em] p-[1em] border-b-2 border-x-2 border-solid">
          <div className="columns-[6_200px] gap-x-4">
            {props.posts.map((post: Article, i: number) => (
              <button key={i} onClick={() => handlePostClicked(post.slug)} className="mb-2 mt-2 card bg-white dark:bg-primary-two/50 border inline-block w-full w-[150px] ml-0 mt-0 relative transition-[0.3s] border-solid border-neutral-dark hover:border hover:shadow-[0.5rem_0.5rem] hover:shadow-primary hover:transition-[0.3s] hover:border-solid hover:border-neutral-dark-three">
                <div className="w-auto h-[150px] overflow-hidden">
                  <Image src={post.coverImage} alt={post.title} width={600} height={400} className="max-w-full h-auto rounded-tl-md rounded-tr-md" />
                </div>
                <h3 className="text-neutral-dark font-bold leading-tight tracking-[1px] mb-2.5 p-2 text-lg">
                  {post.title}
                </h3>
                <div className="card-content p-2 mb-10">
                  <p className="text-base text-start leading-normal mb-2.5 text-text break-words">
                    {post.description}
                  </p>
                </div>
                <div data-category={post.category} className="text-xs font-bold absolute text-center z-[2] px-[0.7rem] py-[0.4rem] right-0 bottom-0">
                  {post.category}
                </div>
                <div className="card-footer">
                  <div className="card-footer-item">
                  </div>
                </div>
              </button>
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
    let blogPosts = posts;
    let tagsSample = tags.sort(() => .5 - Math.random()).slice(0, 5)
    if (!preview || preview === undefined) {
      blogPosts = blogPosts.filter((post: Article) => post.status === 6)
    }
    let withPosts = categories.filter((category: Category) => category.postsCount > 0)

    return {
      props: {
        posts,
        tags: tagsSample,
        categories: withPosts,
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
