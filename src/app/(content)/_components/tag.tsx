import { Link } from '@/components/ui'

import { tw } from '@/utils/tw'

import { Tag } from '@/types'

const TagLink = ({ tag }: { tag: Tag }) => {
  return (
    <Link
      href={`/blog?tag=${tag.name.toLowerCase()}`}
      className={tw('bg-deep-purple text-ivory inline-flex h-6 gap-1 rounded-full px-2 text-xs font-medium leading-6 hover:bg-lilac hover:text-deep-purple')}
    >
      #{tag.name}
    </Link>
  )
}

export default TagLink
