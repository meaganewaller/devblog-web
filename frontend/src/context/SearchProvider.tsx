import React from 'react'
import type { PropsWithChildren } from 'react'
import { createContext } from 'react'

export interface SearchProviderContextValue {
  term: string
  isLoading: boolean
  terms: Array<{ value: string }>
  posts: {}[]
  onSearchSelection?: (term: string, path: string) => void
}

export const SearchContext = createContext<SearchProviderContextValue | null>(
  null
)

function SearchProvider({
  onSearchSelection,
  children,
  term,
  terms,
  posts,
  isLoading,
}: PropsWithChildren<SearchProviderContextValue>) {
  return (
    <SearchContext.Provider value={{ onSearchSelection, term, terms, posts, isLoading }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
