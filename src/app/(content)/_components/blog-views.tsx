'use client'

import ViewsCounter from "./views-counter"
import { useEffect } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface BlogViewProps {
  slug: string
}

const BlogViews = ({ slug }: BlogViewProps) => {
  const queryClient = useQueryClient()
  const queryKey = ["views", slug]
  const mutation = useMutation({
    mutationFn: () =>
      fetch(`/api/views/${slug}`, { method: "POST" }).then(async (res) => {
        const data = await res.json()

        if (!res.ok) {
          throw new Error("Error incrementing views")
        }

        return data
      }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey })
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data)
    },
    onError: async () => {
      await queryClient.invalidateQueries({ queryKey })
    },
  })

  useEffect(() => {
    mutation.mutate()
  }, [])

  return (
    <p className="text-accent">
      <ViewsCounter slug={slug} />
      {` views`}
    </p>
  )
}

export default BlogViews
