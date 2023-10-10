'use client'

import { useEffect } from 'react'
import tw from '@/utils/tw'

interface ErrorProps {
  error: Error
  reset: () => void
}

const ErrorPage = ({ error, reset: _reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Error:", error)
  }, [error])

  return (
    <div className={tw('flex items-center justify-center')}>
      <p>Oh no!!</p>
    </div>
  )
}

export default ErrorPage
