import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { tw } from "@/utils";

interface Params {
  page: number;
  totalPages: number;
  url: string;
  previousPostUrl: string;
  series: (string | number)[];
}

const Pagination = ({
  page,
  totalPages,
  url,
  previousPostUrl,
  series,
}: Params) => {
  if (totalPages === 1) {
    return <></>;
  }

  return (
    <nav className="mt-8 flex items-center justify-between border-t border-deep-sky-blue px-4 font-mono font-extrabold sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        {page > 1 && (
          <Link
            href={previousPostUrl}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-bold text-purple hover:border-purple hover:text-purple"
          >
            <FaChevronLeft size={24} className="mr-1 h-3 w-3 max-w-[24px]" />
            Previous
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {series.map((pageNumber) =>
          pageNumber.toString() === "gap" ? (
            <span
              key={pageNumber}
              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-bold text-deep-sky-blue"
            >
              ...{" "}
            </span>
          ) : (
            <Link
              key={`pagination-${pageNumber}`}
              href={url.replace(/page=\d+/g, `page=${pageNumber}`)}
              className={tw(
                "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-bold text-deep-sky-blue hover:border-deep-sky-blue hover:text-purple",
                pageNumber.toString() === page.toString()
                  ? "border-purple text-purple"
                  : "border-transparent text-deep-sky-blue hover:border-purple hover:text-purple",
              )}
            >
              {pageNumber}
            </Link>
          ),
        )}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {totalPages > page && (
          <Link
            href={`${url.replaceAll(`page=${page}`, `page=${page + 1}`)}`}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-bold text-deep-sky-blue hover:border-purple hover:text-purple"
          >
            Next
            <FaChevronRight size={24} className="ml-1 h-3 w-3 max-w-[24px]" />
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Pagination;
