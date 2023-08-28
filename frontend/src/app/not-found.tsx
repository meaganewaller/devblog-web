import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404',
}

const NotFound = () => {
  return (
    <div className='mt-52 mb-40 flex flex-col items-center justify-center gap-12'>
      <h1 className='text-6xl text-center font-bold'>404 Not Found</h1>
      <Link
        href='/'
        className='rounded-lg border border-accent px-3 py-2 transition-colors duration-150 hover:bg-accent-dark'
      >
        Go to homepage
      </Link>
    </div>
  )
}

export default NotFound
