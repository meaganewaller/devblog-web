import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='px-4 py-10'>
      <hr className='border-zinc-300 dark:border-zinc-700 h-1 border-t border-dashed py-4' />

      <div className='sm:flex-row sm:items-center flex flex-col justify-between gap-4'>
        <Link
          href='https://github.com/destroymayor'
          className='dark:text-zinc-400 dark:hover:text-zinc-100 flex items-center gap-2 text-sm transition duration-300 ease-in-out'
        >
          <span>
            Meagan Waller
            <span className='text-zinc-400 dark:text-zinc-500'>,</span>
          </span>
          <span className='text-xl'>©</span>
          <span>{new Date().getFullYear()}</span>
        </Link>
      </div>
    </footer>
  )
}
