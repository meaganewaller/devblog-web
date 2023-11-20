'use client'

import { QueryClient, QueryClientProvider as OriginalQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'
import React, { ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retryDelay: (attemptIndex: number) => {
        return Math.min(1000 * 2 ** attemptIndex, 30000)
      },
    },
  },
})

type QueryClientProviderProps = { children: ReactNode }

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <OriginalQueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </OriginalQueryClientProvider>
  )
}
