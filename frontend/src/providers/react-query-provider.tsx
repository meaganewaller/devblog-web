'use client'

import React, { ReactNode, useMemo } from 'react'
import {
  QueryClient as ReactQueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

export function ReactQueryProvider({
  children,
}: {
    children: ReactNode
  }) {
  const queryClient = useMemo(() => {
    return new ReactQueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          retryDelay: (attemptIndex: number) => {
            return Math.min(1000 * 2 ** attemptIndex, 30000)
          },
        },
      }
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
      {children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
