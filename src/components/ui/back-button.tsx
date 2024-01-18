"use client";

import { useRouter } from "next/navigation";

import { tw } from "@/utils/tw";

import Link from "./link";
import { ArrowLeftCircle } from "../icons";

interface BackButtonProps {
  href?: string;
}

const BackButton = ({ href }: BackButtonProps) => {
  const router = useRouter();

  const className =
    "flex gap-2 w-max hover:gap-3 items-center mb-4 transition-all duration-200 font-medium cursor-pointer";

  return (
    <div className={tw("w-fit")}>
      {href ? (
        <Link
          href={href}
          passHref
          showExternalLinkIcon={false}
          className={tw(className)}
        >
          <ArrowLeftCircle />
          <span>Back</span>
        </Link>
      ) : (
        <button
          className={tw(className)}
          onClick={() => router.back()}
          onKeyDown={() => router.back()}
        >
          <ArrowLeftCircle />
          <span>Back</span>
        </button>
      )}
    </div>
  );
};

export default BackButton;
