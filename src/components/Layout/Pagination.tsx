import compact from 'lodash/compact'
import uniq from 'lodash/uniq'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { tw } from '@/utils'

interface Params {
  page: number
  totalPages: number
  url: string
}

const Pagination = ({ page, totalPages, url }: Params) => {
  const pages: number[] =
    totalPages < 6
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : uniq(
          compact([1, 2, 3, page, totalPages - 2, totalPages - 1, totalPages]),
        ).sort((a, b) => (a > b ? 1 : -1))

  if (totalPages === 1) {
    return <></>
  }

  return (
    <nav className='border-yellow-200 mt-8 flex items-center justify-between border-t px-4 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        {page > 1 && (
          <Link
            href={page - 1 <= 1 ? url : `${url}/${page - 1}`}
            className='text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium'
          >
            <FaChevronLeft size={24} className='mr-1 h-3 w-3 max-w-[24px]' />
            Previous
          </Link>
        )}
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {pages.map((pageNumber) => (
          <Link
            key={`pagination-${pageNumber}`}
            href={`${url}/${pageNumber}`}
            className={tw(
              'text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium',
              pageNumber === page
                ? 'border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent',
            )}
          >
            {String(pageNumber)}
          </Link>
        ))}
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        {totalPages > page && (
          <Link
            href={`${url}/${page + 1}`}
            className='text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium'
          >
            Next
            <FaChevronRight size={24} className='ml-1 h-3 w-3 max-w-[24px]' />
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Pagination
