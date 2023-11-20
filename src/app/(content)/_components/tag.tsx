import { Link } from '@/components/ui'
import { tw } from '@/utils/tw'
import { Tag } from "@/types"

const TagLink = ({ tag }: { tag: Tag }) => {
  return (
    <Link
      href={`/blog?tag=${tag.name.toLowerCase()}`}
      className={tw(
        'inline-flex h-6 gap-1 px-2 text-xs font-medium rounded-full leading-6 bg-primary/10 text-primary',
      )}
    >
      #{tag.name}
    </Link>
  )
}

export default TagLink
