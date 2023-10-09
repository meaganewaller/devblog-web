import Link from 'next/link'
import { Tag } from "@/types"

const TagLink = ({ tag }: { tag: Tag }) => (
  <Link href={`/blog?tag=${tag.name.toLowerCase()}`} className="text-deep-sky-blue text-xs font-extra lowercase mr-2 p-1 hover:italic bg-light-sky-blue rounded-lg hover:bg-light-sky-blue/60" >
    #{tag.name}
  </Link >
)

const Tags = ({ tags }: { tags: Tag[] }) => (
  <div className="max-w-3xl flex flex-wrap sm:justify-center mx-auto">
    {tags.map((t: Tag) => (
      <TagLink tag={t} />
    ))}
  </div>
)

export default Tags
