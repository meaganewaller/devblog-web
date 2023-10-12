'use client'

import { getPosts } from "@/services/posts"
import { useQuery } from "@tanstack/react-query"
import { convertToPostList } from "@/utils/blogs"
import { Post } from "@/types"

async function
