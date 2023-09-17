import Link from 'next/link'
import Image from 'next/image'

const Featuring = () => (
  <div>
    <p className="font-venice text-4xl text-accent mb-4 underline underline-offset-4 decoration-accent-dark">
      Featuring
    </p>

    <div className="space-y-1">
      <Link
        href="/blog/tags/highlights"
        className="flex flex-row items-center hover:bg-accent rounded space-x-4 p-2"
      >
        {/* <Image src="/static/images/ui/highlights.gif" width={24} height={24} alt="Highlights" /> */}
      </Link>
    </div>
  </div>
)

export default Featuring
