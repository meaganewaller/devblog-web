import { useRouter } from 'next/navigation'
import { createContext, Dispatch, useEffect, useReducer, useRef } from 'react'

import { Action, actions, initialState, reducer, State } from './store'

export const PostsStateContext = createContext<State>(initialState)
export const PostsDispatchContext = createContext<Dispatch<Action> | null>(null)

interface PostsProviderProps {
  children: React.ReactNode
  value: { fallback?: any; fallbackState?: any }
}

export const PostsProvider = ({ children, value }: PostsProviderProps) => {
  const { fallbackState } = value
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...fallbackState,
  })

  const { post } = state
  const prevPost = useRef(post)

  useEffect(() => {
    const handle = (url: string) => {
      const isRoot = router.pathname === url

      if (isRoot) {
        prevPost.current = initialState.post
        actions(dispatch).setPost(initialState.post)
      }
    }
  }, [])

  useEffect(() => {
    if (post.slug === prevPost.current.slug) return

    prevPost.current = post

    if (post.slug) {
      router.push(`/blog/${post.slug}`)
    } else {
      router.replace('/blog')
    }
  }, [post.slug])

  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={dispatch}>{children}</PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  )
}
