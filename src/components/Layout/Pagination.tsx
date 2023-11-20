import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { tw } from '@/utils'

interface Params {
  page: number
  totalPages: number
  url: string
  previousPostUrl: string
  series: (string | number)[]
}

const Pagination = ({ page, totalPages, url, previousPostUrl, series }: Params) => {
  if (totalPages === 1) {
    return <></>
  }

  return (
    <nav className='mt-8 flex items-center justify-between border-t border-accent px-4 sm:px-0'>
      <div className='-mt-px flex w-0 flex-1'>
        {page > 1 && (
          <Link
            href={previousPostUrl}
            className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-accent-dark hover:border-accent hover:text-accent'
          >
            <FaChevronLeft size={24} className='mr-1 h-3 w-3 max-w-[24px]' />
            Previous
          </Link>
        )}
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {series.map((pageNumber) =>
          pageNumber.toString() === 'gap' ? (
            <span className='inline-flex items-center border-t-2 border-transparent border-transparent px-4 pt-4 text-sm font-medium text-accent-dark'>
              ...{' '}
            </span>
          ) : (
            <Link
              key={`pagination-${pageNumber}`}
              href={url.replace(/page=\d+/g, `page=${pageNumber}`)}
              className={tw(
                'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-accent-dark hover:border-accent-dark hover:text-accent',
                pageNumber.toString() === page.toString()
                  ? 'border-accent text-accent'
                  : 'border-transparent text-accent-dark hover:border-accent hover:text-accent',
              )}
            >
              {pageNumber}
            </Link>
          ),
        )}
      </div>
      <div className='-mt-px flex w-0 flex-1 justify-end'>
        {totalPages > page && (
          <Link
            href={`${url.replaceAll(`page=${page}`, `page=${page + 1}`)}`}
            className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-accent-dark hover:border-accent hover:text-accent'
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
