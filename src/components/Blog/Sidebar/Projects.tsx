import Link from 'next/link'
import Image from 'next/image'

const Projects = () => (
  <div>
    <p className='mb-4 font-venice text-4xl text-accent underline decoration-accent-dark underline-offset-4'>
      Projects
    </p>
    <div className="space-y-1">
      <Link
        href="/projects/dev-blog"
        className="flex flex-row items-center hover:bg-baby-pink group rounded-md space-x-4 p-2"
      >
        <Image src="/static/images/ui/25.svg" width={40} height={40} alt="Computer" />
        <div className="flex flex-col">
          <span className="font-bold text-xl text-accent-dark group-hover:italic">Dev Blog</span>
          <span className="text-accent font-semibold group-hover:italic">Powering this website right now.</span>
        </div>
      </Link>

      <Link
        href="/projects/dotfiles"
        className="flex flex-row items-center hover:bg-baby-pink group rounded-md space-x-4 p-2"
      >
        <Image src="/static/images/ui/1.svg" width={40} height={40} alt="Settings" />
        <div className="flex flex-col">
          <span className="font-bold text-xl text-accent-dark group-hover:italic">Dotfiles</span>
          <span className="text-accent font-semibold group-hover:italic">Keeping my machine cute and productive.</span>
        </div>
      </Link>
      <Link
        href="/projects/webring"
        className="flex flex-row items-center hover:bg-baby-pink group rounded-md space-x-4 p-2"
      >
        <Image src="/static/images/ui/click.svg" width={40} height={40} alt="Rubber Duck" />
        <div className="flex flex-col">
          <span className="font-bold text-xl text-accent-dark group-hover:italic">Dev Blog Webring</span>
          <span className="text-accent font-semibold group-hover:italic">Blogging like it's 1999.</span>
        </div>
      </Link>
    </div>
  </div>
)

export default Projects
