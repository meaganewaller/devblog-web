import { useQuery } from '@tanstack/react-query'
import apiClient from '@/lib/api'

async function fetchPosts(page = 0) {
  const { data } = await apiClient.get(`/posts?page=${page}`)
  return data
}

