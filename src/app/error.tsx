'use client'

import { useEffect } from 'react'

import tw from '@/utils/tw'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className={tw('flex items-center justify-center')}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default ErrorPage
