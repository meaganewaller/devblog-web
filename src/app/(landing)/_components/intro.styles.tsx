import Link from "next/link";
import { HiSparkles } from "react-icons/hi";
import tw from "twin.macro";

export const IntroContainer = tw.div`
  flex flex-col p-10
`;

export const IntroSparkles = tw.div`
  flex place-content-center p-8
`;

export const IntroSparkle = tw(HiSparkles)`
  text-accent
`;

export const IntroParagraph = tw.p`
  px-8 py-2 font-extra text-md leading-relaxed text-primary-txt
`;

export const IntroReadMore = tw(Link)`
  font-venice text-lg text-accent hover:text-accent-dark hover:underline decoration-wavy decoration-lilac
`;
