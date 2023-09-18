import { Dispatch } from 'react'

import { Action, ActionKind } from './reducer'

import { Post } from '@/types'

export const actions = (dispatch: Dispatch<Action>) => ({
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
