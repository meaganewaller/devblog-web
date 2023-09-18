import Link from 'next/link'

const Featuring = () => (
  <div>
    <p className='mb-4 font-venice text-4xl text-accent underline decoration-accent-dark underline-offset-4'>
      Featuring
    </p>

    <div className='space-y-1'>
      <Link
        href='/blog/tags/highlights'
        className='flex flex-row items-center space-x-4 rounded p-2 hover:bg-accent'
      >
        {/* <Image src="/static/images/ui/highlights.gif" width={24} height={24} alt="Highlights" /> */}
      </Link>
    </div>
  </div>
)

export default Featuring
