import React from 'react';
import Contact from '@sections/Contact';
import RecentPosts from '@sections/RecentPosts';
import About from '@sections/About';
import Layout from '@/components/layout/Layout';
import { useWindowSize } from '@/hooks/useWindowSize';
import { GetStaticProps } from 'next';
import PostService from '@/services/PostService';

export default function Index({ posts }) {
  const size = useWindowSize();

  return (
    <Layout>
      <About />
      <RecentPosts posts={posts} />
      <Contact />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await PostService.getAll();
  return {
    props: {
      posts: data.slice(0, 4),
    },
    revalidate: 30,
  };
};
