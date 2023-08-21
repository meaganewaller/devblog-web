import tw from "tailwind-styled-components";
import * as ContainerListItem from "@/components/ListItem/styles";
import * as ContainerList from "@/components/List/styles";
export const Nav = tw.nav`
    hidden
    lg:flex
    items-center
    justify-between
    `;
export const NavItem = tw.ul`
    flex
    gap-4
`;

export const NavItemLink = tw.li`
    text-md
    transition-colors
    duration-300
    ease-in-out
    hover:text-link
`;


export const Content = tw.div`
    z-50
    flex
    transition-colors
    duration-300
    hover:text-link
    lg:hidden
`;

export const ContainerMobile = tw.div`
fixed left-0 top-0 z-30 min-h-screen w-full bg-primary/80 lg:hidden pt-[4rem]
`;

export const NavMobile = tw.nav`
    mx-auto
    flex
    max-w-[80%]
    items-center
    justify-center
    rounded-2xl
    border
    border-gray-600
    bg-secondary
    py-3
    shadow-2xl
`;

export const NavMobileItem = tw(ContainerList.Container)`
    w-full
    flex-col
    px-4
`;

export const NavMobileItemLink = tw(ContainerListItem.Container)`
    border-b
    border-gray-600
    py-3
`;



/* eslint-disable max-len */
// import tw from 'tailwind-styled-components';
//
// export const Header = tw.header`
//   [--toolbarHeight:56px]
//   [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))]
//   [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))]
//   h-[var(--baseActualHeight)]
//   z-[3]
//   fixed
//   top-0
//   left-[calc(50%+calc(calc(100vw-100%)/2))]
//   transition-[height]
//   duration-[0.25s]
//   transform
//   -translate-x-1/2
//   desktop:pt-0
//   pt-[var(--floatingMargin)]
//   rounded-t-[10px]
//   border-b
//   border-b-solid
//   border-accent-dark/[0.12]
//   px-[0.5em]
//
//   w-full
//   tablet-sm:h-[calc(var(--baseActualHeight)_+_4px)]
//   [&[data-expanded="true"]]:h-[calc(100%-var(--floatingMargin))]
//   [&[data-expanded="true"]]:tablet-sm:h-[calc(var(--baseActualHeight)_+_4px)]
//
//   before:z-[1]
//   before:content-['']
//   before:absolute
//   before:block
//   before:top-0
//   before:h-[calc(var(--floatingMargin)_+_10px)]
//   before:w-full
//   before:left-1/2
//   before:transform
//   before:-translate-x-1/2
//   before:bg-gradient-to-t
//   before:from-background
//   before:to-transparent
//   before:backdrop-blur-md
//   before:backdrop-saturate-150
// `;
//
// export const Nav = tw.nav<{ $elevated?: boolean }>`
//   [--spaceDivider:1.25]
//   z-[3]
//   toolbar
//   relative
//   grid
//   items-start
//   h-full
//   backdrop-blur-[10px]
//   ${(p) =>
//     p.$elevated
//       ? '[box-shadow:0_0_6px_1px_rgba(var(--color-accent-dark)/0.16)]'
//       : ''}
//   p-[calc(var(--floatingMargin)/var(--spaceDivider))]
//   mx-[var(--floatingMargin)]
//   transition
//   duration-200
//   gap-[calc(calc(var(--floatingMargin)/var(--spaceDivider))*1.5)]
//   grid-rows-1
//   [grid-template-columns:auto_1fr]
//
//   tablet-sm:[--spaceDivider:1.5]
//   tablet-sm:[grid-template-columns:auto_1fr_auto]
//   tablet-sm:gap-[calc(var(--floatingMargin)/var(--spaceDivider))]
//
//   tablet-md:mx-0
//   [[data-expanded="true"]>&]:[grid-template-rows:auto_1fr]
//   [[data-expanded="true"]>&]:tablet-sm:[grid-template-rows:minmax(0px,_1fr)]
// `;
