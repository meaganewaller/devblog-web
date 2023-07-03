"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/tailwind";
import { Navbar } from "@components/Navbar";

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollTop(document.documentElement.scrollTop);

    const handleScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        headerRef.current && scrollTop > headerRef.current.clientHeight
          ? 'border-b border-b-slate-300 bg-slate-500/20 dark:border-b-slate-600'
          : 'bg-transparent',
        'flex flex-row items-center',
        'transition-[padding,background-color] duration-300 ease-in-out',
        'text-slate-700 backdrop-blur dark:text-rose-50',
      )}
    >
      <Navbar />
    </header>
  );
}
// import dynamic from "next/dynamic";
// import { HiSparkles } from "react-icons/hi";
// import Link from "next/link";
// import { cxm } from "@/lib/helpers/cxm";
// import { MouseEvent, useRef, useState } from "react";
// import { useWindowSize } from "react-use";
// import { useRouter } from "next/router";
// import menus from "@/data/pages";
//
// const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
// const SwitchThemeButton = dynamic(() => import("@ui/SwitchThemeButton"), {
//   ssr: false,
// });
//
// export default function Navbar() {
//   const confettiRef = useRef(null);
//
//   const { width, height } = useWindowSize();
//   const router = useRouter();
//
//   const [confetti, setConfetti] = useState(false);
//   const [mousePosX, setMousePosX] = useState(0);
//   const [mousePosY, setMousePosY] = useState(0);
//
//   function navClick(event: MouseEvent) {
//     if (window.scrollY <= 90 && router.route == "/") {
//       setMousePosX(event.clientX);
//       setMousePosY(event.clientY);
//
//       setConfetti(true);
//       setTimeout(() => setConfetti(false), 100);
//     } else {
//       router.push("/");
//     }
//   }
//
//   return (
//     <nav className="bg-primary-200 dark:bg-accent-first-darker-900 h-[32px] menubar border-b border-b-solid border-b-primary-300 dark:border-b-accent-first-800 rounded-t-[10px] py-0 px-[0.5em]">
//       <ul className="flex flex-row list-none m-0 p-0">
//         <li key="icon">
//           <HiSparkles
//             size="20"
//             aria-label="Home page"
//             className="h-[20px] mr-[8px]"
//             onClick={navClick}
//           />
//         </li>
//         {menus.map((item, index) => (
//           <li key={index} className="align-middle">
//             <Link href={item.href} className="duration-75">
//               {item.name}
//             </Link>
//             {item.children && (
//               <ul className="z-[2]">
//                 {item.children.map((child, index) => (
//                   <li key={`child-${index}`}>
//                     <Link href={child.href} className="duration-75">
//                       {child.name}
//                     </Link>
//                     {child.children && (
//                       <ul>
//                         {child.children.map((grandchild, index) => (
//                           <li key={`grandchild-${index}`}>
//                             <Link
//                               href={grandchild.href}
//                               className="duration-75"
//                             >
//                               {grandchild.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//         <li key="switch-theme" className="ml-auto mr-2 p-1">
//           <SwitchThemeButton />
//         </li>
//       </ul>
//       <Confetti
//         style={{ pointerEvents: "none" }}
//         numberOfPieces={confetti ? 200 : 0}
//         initialVelocityX={50}
//         initialVelocityY={-50}
//         ref={confettiRef}
//         gravity={0.05}
//         width={width}
//         height={height}
//         confettiSource={{
//           w: 0,
//           h: 0,
//           x: mousePosX,
//           y: mousePosY,
//         }}
//         recycle={confetti ? true : false}
//         tweenDuration={10}
//       />
//     </nav>
//   );
// }
