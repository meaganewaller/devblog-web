import { Post } from '@/types'

export enum ActionKind {
  SET_QUERY = "SET_QUERY",
  SET_POST = "SET_POST",
}

export interface Action {
  type: ActionKind;
  payload: any;
}

export interface State {
  query?: Record<string, unknown>;
  post: Post;
}

export const initialState: State = {
  query: undefined,
  post: {
    id: undefined,
    name: "",
  } as Post,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionKind.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case ActionKind.SET_POST:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
}
