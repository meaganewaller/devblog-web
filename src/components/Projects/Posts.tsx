import Image from 'next/image'
import Link from 'next/link'

const Posts = () => (
  <div>
    <p className='mb-4 font-venice text-4xl text-accent underline decoration-accent-dark underline-offset-4'>Posts</p>
    <div className='space-y-1'>
      <Link
        href='/projects/dev-blog'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/25.svg' width={40} height={40} alt='Computer' />
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Dev Blog</span>
          <span className='font-semibold text-accent group-hover:italic'>Powering this website right now.</span>
        </div>
      </Link>

      <Link
        href='/projects/dotfiles'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/1.svg' width={40} height={40} alt='Settings' />
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Dotfiles</span>
          <span className='font-semibold text-accent group-hover:italic'>Keeping my machine cute and productive.</span>
        </div>
      </Link>
      <Link
        href='/projects/webring'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/click.svg' width={40} height={40} alt='Rubber Duck' />
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Dev Blog Webring</span>
          <span className='font-semibold text-accent group-hover:italic'>Blogging like it's 1999.</span>
        </div>
      </Link>
    </div>
  </div>
)

export default Posts
