import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@atoms/Button";

const FeedItem = dynamic(() => import("./FeedItem"))
export default function Feeds({ posts = [] }) {
  const titleText = "Recent Posts"
  const moreButtonText = "More Posts"

  return (
    <section className="mt-16 pt-3 pb-20 px-3 xl:px-0">
      <h4 className="text-3xl text-primary-900 font-bold text-title-1 md:mb-10">
        {titleText}
      </h4>
      <div className="w-full lg:columns-3 sm:columns-2 gap-12">
        {
          posts.length
            ? posts.map((item, index) => {
              return (
                <FeedItem
                  textColor={"text-primary-500"}
                  post={item}
                  index={index}
                  author={item?.attributes?.author?.data?.attributes}
                  key={`col1_${index}`}
                />
              );
            })
            : null}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Button variant="secondary" className="h-14 w-52 rounded-lg">
          <Link href="/topics">
            <>
              {moreButtonText}
            </>
          </Link>
        </Button>
      </div>
    </section>
  )
}
