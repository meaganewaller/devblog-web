import Image from 'next/image'
import Link from 'next/link'

export const FeaturingMini = () => (
  <div className='mt-8 sm:hidden'>
    <p>
      Currently showing <span className='text-xl font-bold text-accent'>Highlights</span>
      <div></div>
    </p>
    <p></p>
  </div>
)

const Featuring = () => (
  <div>
    <p className='mb-4 font-venice text-4xl text-accent underline decoration-accent-dark underline-offset-4'>
      Featuring
    </p>

    <div className='space-y-1'>
      <Link
        href='/blog?tag=highlights'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/29.svg' width={40} height={40} alt='Highlights' />
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Gems</span>
          <span className='font-semibold text-accent group-hover:italic'>The crème de la crème of the content.</span>
        </div>
      </Link>

      <Link
        href='/blog?tag=popular'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 font-mono hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/fire.svg' width={40} height={40} alt='Hot'></Image>
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Hot</span>
          <span className='font-semibold text-accent group-hover:italic'>People are talkin' about these.</span>
        </div>
      </Link>

      <Link
        href='/blog'
        className='group flex flex-row items-center space-x-4 rounded-md p-2 font-mono hover:bg-baby-pink'
      >
        <Image src='/static/images/ui/notepad.svg' width={40} height={40} alt='Archive'></Image>
        <div className='flex flex-col'>
          <span className='text-xl font-bold text-accent-dark group-hover:italic'>Archive</span>
          <span className='font-semibold text-accent group-hover:italic'>Something for everyone.</span>
        </div>
      </Link>
    </div>
  </div>
)

export default Featuring
