import type { ReactionType } from "@/types"
import { useRef } from 'react'
import { useRequest } from '@/hooks/use-request'

type ReactionCounts = Record<ReactionType, number>

type ContentReactions = {
  reactions: ReactionCounts
  total: number
}

type UserReactionStats = {
  reactions: ReactionCounts
}

type ReactionData = {
  content: ContentReactions
  user: UserReactionStats
}

const initialValue: ReactionData = {
  content: {
    reactions: {
      LIKED: 0,
      LOVED: 0,
      LEARNED: 0,
      LAUGHED: 0,
      WOWED: 0,
      SPARKLED: 0,
    },
    total: 0,
  },
  user: {
    reactions: {
      LIKED: 0,
      LEARNED: 0,
      LOVED: 0,
      LAUGHED: 0,
      WOWED: 0,
      SPARKLED: 0,
    },
  },
}

export const useReactions = (slug: string) => {
  const timer = useRef<Record<ReactionType, NodeJS.Timeout | undefined>>({
    LIKED: undefined,
    LEARNED: undefined,
    LOVED: undefined,
    LAUGHED: undefined,
    WOWED: undefined,
    SPARKLED: undefined,
  })

  const count = useRef<Record<ReactionType, number>>({
    LIKED: 0,
    LEARNED: 0,
    LOVED: 0,
    LAUGHED: 0,
    WOWED: 0,
    SPARKLED: 0,
  })

  const { data, loading, mutate } = useRequest<ReactionData>(
    `/api/reactions/${slug}`,
    {
      fallbackData: initialValue,
    },
  )

  const addReaction = (type: ReactionType) => {
    mutate(
      {
        ...data,
        content: {
          reactions: {
            ...data?.content?.reactions,
            [type]: (data?.content?.reactions[type] ?? 0) + 1,
          },
          total: (data?.content?.total ?? 0) + 1,
        },
        user: {
          reactions: {
            ...data?.user.reactions,
            [type]: (data?.user.reactions[type] ?? 0) + 1,
          },
        },
      },
      false,
    )

    count.current[type] += 1

    clearTimeout(timer.current[type])
    timer.current[type] = setTimeout(() => {
      fetch(`/api/reactions/${slug}`, {
        method: 'POST',
        body: JSON.stringify({ type, count: count.current[type] }),
      }).finally(() => {
          count.current[type] = 0
        })
    }, 500)
  }

  return {
    reactions: data,
    addReaction,
    loading,
  }
}
