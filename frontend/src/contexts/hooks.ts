import { Dispatch, useContext } from 'react'

import { Post } from '@/types'
import { Action, ActionKind } from './store'
import { PostsDispatchContext, PostsStateContext } from '.'

export function usePostsState() {
  return useContext(PostsStateContext)
}

export function usePostsActions() {
  const actions = (dispatch: Dispatch<Action>) => ({
    setQuery: (query: Record<string, any>) => {
      dispatch({
        type: ActionKind.SET_QUERY,
        payload: query,
      })
    },

    setPost: (post: Post) => {
    dispatch({
    type: ActionKind.SET_POST,
    payload: post,
    })
    },
  })

  return actions(useContext(PostsDispatchContext) as Dispatch<Action>)
}
