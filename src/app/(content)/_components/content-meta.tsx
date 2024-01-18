"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import type { IReadTimeResults } from "reading-time";

import { Clock, Eye } from "@/components/icons";
import PageHeader from "@/components/page-header";
import { BackButton, Container } from "@/components/ui";

import { formatDate, formatDistance } from "@/utils/date";
import { tw } from "@/utils/tw";

import StickyTitle from "./sticky-title";

interface ContentMetaProps {
  title: string;
  description?: string;
  timestamp?: string;
  readingTime?: IReadTimeResults | null;
}

const ContentMeta = ({
  title,
  description,
  timestamp,
  readingTime,
}: ContentMetaProps) => {
  if (timestamp) {
    timestamp = new Date(timestamp).toISOString();
  }
  const publishedDate = timestamp ? formatDate(timestamp) : "";
  const readableDate = timestamp ? formatDistance(timestamp) : "";

  const pageHeaderRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const segments = pathname.split("/");

  return (
    <>
      <PageHeader title={title} description={description} ref={pageHeaderRef} />
      <StickyTitle title={title} elementRef={pageHeaderRef} />
      <Container className={tw("mb-8")}>
        <BackButton href={`/${segments[1]}`} />
        <div
          className={tw(
            "text-muted-foreground flex flex-col justify-between gap-2 text-sm font-medium sm:flex-row",
          )}
        >
          {publishedDate && readableDate && (
            <div>
              Published
              <time dateTime={publishedDate} className={tw("px-1")}>
                {readableDate}
              </time>
              ago
            </div>
          )}
          {readingTime && (
            <div className={tw("flex items-center gap-4")}>
              <div className={tw("flex items-center gap-1")}>
                <Clock />
                <span title="Estimated read time">{readingTime?.text}</span>
              </div>
              <div className={tw("flex items-center gap-1")}>
                <Eye />
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default ContentMeta;
