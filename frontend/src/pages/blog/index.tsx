import { convertToPostList } from '@/lib/utils/blog';
import PostService from '@/services/PostService';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Window from '@/components/layout/Window';
import { useWindowSize } from '@/hooks/useWindowSize';

const categories = [
  { name: 'All categories', slug: '#' },
  { name: 'Guides', slug: 'guides' },
  { name: 'Productivity', slug: 'productivity' },
  { name: 'Tutorials', slug: 'tutorials' },
];

export default function Blog({ featuredPost, posts, tags }) {
  const size = useWindowSize();
  return (
    <Layout>
      <header className="flex relative justify-center items-center pt-20 pb-10 w-full">
        <span className="p-0 m-0 text-7xl text-center">
          <Link
            data-text="Meagan Waller"
            href="https://meaganwaller.com"
            className="p-0 m-0 cursor-pointer hover:text-accent-fourth-lightest-200 focus:text-accent-second-100 dark:text-accent-third-light-300 text-accent-fourth-light-200 focus:outline-none"
            style={{
              textDecoration: 'none',
              textShadow:
                'rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 0px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 0px 0px 1px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(246, 111, 239) 1px 0px 20px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 10px, rgb(240, 15, 228) 1px 0px 50px, rgb(240, 15, 228) 1px 0px 50px',
              fontFamily: 'Venice Classic, cursive',
            }}
          >
            the blog
          </Link>
        </span>
      </header>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap font-mono">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            className="dark:text-accent-first-100 text-primary-800 hover:text-primary-100 dark:hover:text-accent-first-100 border dark:border-accent-first-600 border-primary-600 bg-primary-100 dark:bg-accent-first-800 dark:hover:bg-accent-first-600 hover:bg-primary-600 focus:ring-4 focus:outline-none dark:focus:ring-accent-first-300 focus:ring-primary-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3"
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-extra">
        {posts.map((post) => (
          <div key={post.title} className="max-w-[300px] bg-primary-lightest-100 dark:bg-accent-first-dark-500 shadow-[10px_10px] shadow-primary-200 dark:shadow-accent-first-900 pb-4">
            <Image
              src="https://placekitten.com/600/300"
              width={600}
              height={300}
              alt={post.title}
            />
            <h2 className="dark:text-accent-first-light-300 text-primary-300 pt-4 px-4 font-bold">
              {post.title}
            </h2>
            <p className="dark:text-accent-first-light-200 text-primary-dark-400 px-4 line-clamp-3">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PostService.getAll();
  const { posts, tags } = convertToPostList(data);

  let blogPosts = posts;
  const featuredPost = blogPosts.shift();

  return {
    props: {
      featuredPost,
      posts: blogPosts,
      tags,
    },
    revalidate: 30,
  };
};
