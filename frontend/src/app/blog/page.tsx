'use client';

import { Suspense } from 'react';
import { Section } from '@/components/core/section';
import React, { useEffect, useState } from 'react';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { BlogPosts } from '@/components/views/blog/posts';

import Loading from '../loading';
import Header from './header';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/posts.json');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  return <BlogPosts posts={posts} />
}

function Blog() {
  return (
    <Section id={'blog'}>
      <Header />
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </Section>
  );
}

export default Blog;
