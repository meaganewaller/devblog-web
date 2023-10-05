import Link from 'next/link'
import Image from 'next/image'

export const FeaturingMini = () => (
  <div className="sm:hidden mt-8">
    <p>
      Currently showing <span className="font-bold text-xl text-accent">Highlights</span>
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
        className='flex flex-row items-center group hover:bg-baby-pink rounded-md space-x-4 p-2'
      >
        <Image src="/static/images/ui/29.svg" width={40} height={40} alt="Highlights" />
        <div className="flex flex-col">
          <span className="font-bold text-xl text-accent-dark group-hover:italic">Gems</span>
          <span className="text-accent font-semibold group-hover:italic">The crème de la crème of the content.</span>
        </div>
      </Link>

      <Link
        href="/blog?tag=popular"
        className="flex flex-row items-center group hover:bg-baby-pink rounded-md space-x-4 p-2 font-mono"
      >
        <Image src="/static/images/ui/fire.svg" width={40} height={40} alt="Hot"></Image>
        <div className="flex flex-col">
          <span className="font-bold text-xl text-accent-dark group-hover:italic">Hot</span>
          <span className="text-accent font-semibold group-hover:italic">People are talkin' about these.</span>
        </div>
      </Link>
    </div>
  </div >
)

export default Featuring
