import Link from 'next/link'

export const Links = () => (
  <div className='-mx-3 flex flex-wrap justify-center lg:-mx-6'>
    <div className='w-full p-3 md:w-auto md:px-6'>
      <Link href='/about' className='inline-block text-lg font-medium text-espresso hover:text-caramel'>
        About
      </Link>
    </div>
    <div className='w-full p-3 md:w-auto md:px-6'>
      <Link href='/blog' className='inline-block text-lg font-medium text-espresso hover:text-caramel'>
        Blog
      </Link>
    </div>
    <div className='w-full p-3 md:w-auto md:px-6'>
      <Link href='/now' className='inline-block text-lg font-medium text-espresso hover:text-caramel'>
        Now
      </Link>
    </div>
    <div className='w-full p-3 md:w-auto md:px-6'>
      <Link href='/chat' className='inline-block text-lg font-medium text-espresso hover:text-caramel'>
        Let's chat
      </Link>
    </div>
  </div>
)
