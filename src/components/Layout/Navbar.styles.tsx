import { motion } from "framer-motion";
import Link from "next/link";
import tw from "twin.macro";

export const Nav = tw(motion.nav)`
  h-[100vh] overflow-y-auto w-[100vw] bg-sky-blue z-[2] flex items-center justify-evenly fixed top-0 flex-col
`;

export const NavItem = tw(motion.li)`
  text-deep-sky-blue mb-[1.25em] text-xl font-mono
`;

export const NavLink = tw(Link)`
  text-deep-sky-blue hover:text-purple
`;

export const SvgBox = tw(motion.div)`
  sm:hidden
`;
