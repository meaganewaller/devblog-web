export interface SearchState {
  searchData: string
  category: string
}

export type SearchActionTypes =
  | "SET_SEARCH"
  | "RESET_SEARCH"
  | "SET_CATEGORY"
  | "RESET_CATEGORY"

export interface Action {
  type: SearchActionTypes
  payload?: Partial<SearchState>
}

export type Dispatch = (action: Action) => void

export interface SearchContextType {
  state: SearchState
  dispatch: Dispatch
}
