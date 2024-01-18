"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

import apiClient from "@/lib/apiClient";

import { PostsList } from "@/components/Blog/PostsList";

const usePosts = (
  limit: number,
  page: number,
  tag?: string,
  category?: string,
  search?: string,
) => {
  return useQuery({
    queryKey: ["posts", limit, page, tag, category, search],
    queryFn: () => fetchPosts(limit, page, tag, category, search),
  });
};

const fetchPosts = async (
  limit = 10,
  page = 1,
  tag?: string,
  category?: string,
  search?: string,
) => {
  let urlParams = `?page=${page}&count=${limit}`;
  if (tag) {
    urlParams += `&tag=${tag}`;
  }
  if (category) {
    urlParams += `&category=${category}`;
  }
  if (search) {
    urlParams += `&query=${search}`;
  }

  const response = await apiClient.get(`/posts${urlParams}`);
  return response.data;
};

export default function BlogPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const tag = searchParams.get("tag") || undefined;
  const search = searchParams.get("query") || undefined;
  const currentPage = parseInt(page as string, 10) || 1;
  const category = searchParams.get("category") || undefined;

  const { data, isFetching } = usePosts(10, currentPage, tag, category, search);

  let postUrl = `/blog?page=${currentPage}`;
  const previousPostUrl = `/blog?page=${currentPage - 1}`;

  if (tag) {
    postUrl += `&tag=${tag}`;
  }

  if (search) {
    postUrl += `&query=${search}`;
  }

  if (category) {
    postUrl += `&category=${category}`;
  }

  return (
    <div>
      <h1 className="mb-2 font-venice text-6xl text-robins-egg-blue">
        the web blog
      </h1>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <PostsList
          posts={data?.posts}
          url={postUrl}
          pagination={data.pagy.series}
          page={currentPage}
          previousPostUrl={previousPostUrl}
          totalPages={data.pagy.pages}
        />
      )}
    </div>
  );
}
