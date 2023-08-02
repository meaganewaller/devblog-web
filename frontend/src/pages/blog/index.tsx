import { convertToPostList } from '@/lib/utils/blog';
import PostService from '@/services/PostService';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Blog({ featuredPost, posts, tags, categories }) {
  return (
      <Layout>
  //     <div className="grid place-items-center mt-10">
  //     <div className="max-w-[1000px] w-full flex justify-between items-center bg-primary-lightest-100 border-t-accent-fourth-darkest-700 border-r-accent-fourth-darkest-700 border-l-accent-fourth-darkest-700 px-[1em] py-[2em] border-t-2 border-x-2 border-solid">
  //     <h1
  //     className="hover:text-accent-first-lightest-200 focus:text-accent-first-100 text-accent-fourth-light-200 focus:outline-none font-venice text-[3rem] capitalize"
  //     style={{textDecoration: "none", textShadow: "rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 50px, rgb(240, 15, 228) 1px 0px 50px"}}
  //     > the web log </h1>
  //     <ul className="grid grid-cols-[repeat(4,min-content)] gap-x-[1em]">
  //     {categories.map((category: string, index: number) => (
  //           <li
  //           key={index}
  //           className="border border-black bg-accent-first-300 overflow-hidden rounded-[10px] border-solid hover:bg-primary-300"><a className="block text-center border-l-white-500 border-t-white-500 font-bold text-black text-xs uppercase px-3 py-0.5 rounded-[10px] border-l-2 border-t-2 border-solid"
  //           >
  //           <Link href={`/blog/categories/${category}`}>
  //           {category}
  //           </Link>
  //           </li>
  //           ))}
  //     </ul>
  //     </div>
  //     <div className={`banner h-[35px] w-[1030px] bg-secondary-light-200 border-secondary-light-700 relative grid grid-cols-[70px_1fr_150px] items-center px-[2em] py-0 border-2 border-solid before:content-[""] before:absolute before:block before:w-5 before:h-5 before:bg-secondary-600 before:z-[1] before:-left-0.5 before:-top-5 after:content-[""] after:absolute after:block after:w-5 after:h-5 after:bg-secondary-600 after:z-[1] after:-right-0.5 after:-top-5`}>
  //     <h4 className="uppercase font-extra text-[0.95rem] text-black tracking-wider font-bold">topics</h4>
  //     <ul className="ml-2 w-full grid grid-cols-[repeat(var(--number-of-categories),max-content)] gap-x-[1em]">
  //     {tags.map((tag: string, index: number) => (
  //           <li key={index} className="font-extra text-[1rem] font-normal text-black pb-0.5 hover:cursor-pointer hover:underline-offset-[3px]">
  //           <Link href={`/blog/tags/${tag}`} className="text-secondary-dark-500 font-bold">{tag}</Link>
  //           </li>
  //           ))}
  //     </ul>
  //       <div className="grid grid-cols-[120px_1fr] gap-x-[5px] items-center">
  //   <input type="text" className="border border-black h-[23px] px-2 py-[3px] rounded-lg border-solid text-[0.9rem]" placeholder="Search topics..." />
  //   <button className="w-[30px] h-[22px] text-[0.75rem] uppercase border border-black bg-tertiary-400 relative overflow-hidden cursor-pointer text-black grid place-items-center rounded-lg border-solid before:content-[''] before:absolute before:w-full before:h-full before:border-l-white-500 before:border-t-white-500 before:rounded-lg before:border-l border:border-solid before:border-t before:left-px before:top-px leading-relaxed hover:bg-tertiary-200">Go</button>
  //   </div>
  //   </div>
  //   <div className="max-w-[1000px] w-full bg-white-200 border-b-black border-l-black border-r-black mb-[2em] p-[1em] border-b-2 border-x-2 border-solid">
  //   <div className="grid grid-cols-[repeat(6,1fr)] auto-rows-auto gap-[1em]">
  //   {posts.map((post: any, index: number) => (
  //         <div className="card" key={index}>
  //         <h2 className="text-black font-extra font-bold leading-[1.8rem] tracking-[1px] mb-2.5 px-0 py-[3px]">
  //         {post.title}
  //         </h2>
  //         <p className="text-base leading-[1.2rem] mb-2.5 font-extra">
  //         {post.description}
  //         </p>
  //         </div>
  //         ))}
  // </div>
  //   </div>
  //   </div>
    </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
  const postData = await PostService.getAll();

  const { posts, tags, categories } = convertToPostList(postData);

  let blogPosts = posts.slice(0, 4);
  const featuredPost = blogPosts.shift();

  return {
props: {
         featuredPost,
           posts: blogPosts,
           tags,
           categories,
       },
revalidate: 30,
  };
};
