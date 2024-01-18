import Link from 'next/link'

import Logo from '@/components/ui/Logo'

import Subscribe from './Subscribe'

export const Footer = () => (
  <>
    <svg
      viewBox='0 -20 700 110'
      width='100%'
      height='110'
      preserveAspectRatio='none'
      className='align-middle leading-6 text-electric-purple'
    >
      <path d='M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z' fill='currentColor'></path>
    </svg>

    <footer className='bg-electric-purple'>
      <div className='text-gray-800 mx-auto max-w-screen-2xl justify-around px-4 py-10 sm:flex sm:px-6'>
        <div className='mx-auto p-5 text-center sm:w-full'>
          <Logo />
          <div className='flex justify-center text-sm uppercase' aria-label='Footer'>
            <Link
              className='mr-2 cursor-pointer text-vanilla hover:underline hover:decoration-vanilla hover:decoration-wavy'
              href='/about'
            >
              About
            </Link>
            <Link
              className='mr-2 cursor-pointer text-vanilla hover:underline hover:decoration-vanilla hover:decoration-wavy'
              href='/blog'
            >
              Blog
            </Link>
            <Link
              className='mr-2 cursor-pointer text-vanilla hover:underline hover:decoration-vanilla hover:decoration-wavy'
              href='/now'
            >
              Now
            </Link>
            <Link
              className='mr-2 cursor-pointer text-vanilla hover:underline hover:decoration-vanilla hover:decoration-wavy'
              href='/chat'
            >
              Let's Chat
            </Link>
          </div>
        </div>
        <div className='p-5 sm:w-full'>
          <Subscribe />
        </div>
      </div>
    </footer>
  </>
)
