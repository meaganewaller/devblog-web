import Link from "@/components/Link"
import Tag from "@/components/Tag"
import Image from "@/components/Image"
import { ComponentProps, useState } from "react"
import Pagination from "@/components/Pagination"
import formatDate from "@/lib/utils/formatDate"
import { Article } from "@/lib/types"

interface Props {
  posts: Article[]
  title: tring
  initialDisplayPosts?: Article[]
  pagination? ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredPosts = posts.filter((post: Article) => {
    const searchContent = post.title + post.description + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y dark:divide-gray-800">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-graay-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
      </div>
    </>
  )
}
