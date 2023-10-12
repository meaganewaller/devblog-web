import apiClient from "@/lib/api";
import { routeBuilder, Routes } from '@/lib/route-builder'

import { defineQuery } from '../index'

export const post = {
  bySlug: (slug: string) =>
    defineQuery({
      queryKey: ['post', slug],
      meta: {
        hydrationRoutePath: routeBuilder(Routes.Post, {
          slug,
        }),
      },
      queryFn: async ({ queryKey }) => {
        const [, slug] = queryKey

        const data = await apiClient.post.getPost(slug)
        return data.$serialized
      },
    }),
}
