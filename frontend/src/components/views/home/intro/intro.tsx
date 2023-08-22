'use client';

import { BsArrowRightShort } from 'react-icons/bs';
import { useWindowSize } from '@/hooks/use-window-size';
import { Window } from '@/components/core/window';
import { HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

export function Intro() {
  const size = useWindowSize();
  if (!size.width) return null;
  return (
    <Window title="about-meagan.txt" x={size.width / 2.45} y={size.height / 12} width={`${size.width * 0.55}px`} zIndex="2" active={true} id="intro-window">
    <div className="flex flex-col p-10">
    <div className="flex place-content-center p-8">
    <HiSparkles size="3em" className="text-accent" />
    <HiSparkles size="3em" className="text-accent" />
    <HiSparkles size="3em" className="text-accent" />
    </div>
    <p className="text-md px-8 py-2 leading-relaxed text-primary-txt">
      <span className="font-bold italic">
      I wrote my first line of HTML on Microsoft Notepad in 2004{' '}
      </span>
          and fell head-over-heels for how magical it all felt. The problem I
          was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I
          was 12 years old.

      </p>
      <p className="text-md px-8 py-2 leading-relaxed text-secondary-400">
      I spent a couple days working up the courage to convince my parents to
      put their credit card information into form on a website and buy me a
      domain name. They did. And my first website was born. I learned
      everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation
      Shop, and getting my website live—by reading posts written by kids my
      age. Soon I started writing my own posts sharing my knowledge, my
      pitfalls, cool experiments.
      </p>
      <div className="flex place-content-end px-8 pb-5">
      <Link href="/meagan">Read more{' '}
  <BsArrowRightShort size="1.5em" className="inline-block" />
    </Link>
    </div>
      </div>
      </Window>
  )
}
// import Icon from '@mdi/react';
// import { cx } from 'classix';
//
// import { Heading } from '@/components/core/heading';
// import { ButtonLink, Link } from '@/components/core/link';
// import { mdiAccountCircleOutline } from '@/components/icons';
// import { SocialLinks } from '@/components/molecules/social-links';
//
// import {
//   IntroSection,
//   TextsContainer,
//   TitlesContainer,
//   IntroParagraph,
//   PhotoContainer,
//   Photo,
// } from './intro.styles';
// import { WavingHello } from './waving-hello';
//
// export const Intro = () => {
//   return (
//     <IntroSection id={'intro'}>
//       <TextsContainer>
//         <TitlesContainer>
//           <Heading
//             shadow={'blue'}
//             // look like h2
//             className={'text-2xl'}
//           >
//             I am&nbsp;
//             <Heading
//               $as={'span'}
//               shadow={'blue'}
//               from={'brand'}
//               to={'blue'}
//               className={'[&>span]:w-[unset]'}
//             >
//               Meagan Waller
//             </Heading>
//           </Heading>
//           <WavingHello />
//         </TitlesContainer>
//         <IntroParagraph>
//           Passionate and creative full-stack software engineer from{' '}
//           <Link
//             title={'Jacksonville on Google Maps'}
//             href={'https://www.google.com/maps/place/Colombia/@4,-72z/'}
//           >
//             Jacksonville, FL
//           </Link>
//         </IntroParagraph>
//         <div className={'flex items-center gap-16 flex-wrap'}>
//           <ButtonLink title={'About page'} href={'/about'}>
//             <Icon path={mdiAccountCircleOutline} size={1} />
//             More about me
//           </ButtonLink>
//           <div
//             className={cx(
//               'flex items-center transition-colors',
//               'border border-divider rounded-6',
//               'py-4 pl-12 pr-8 min-h-[2.625rem]',
//               'hover:border-accent-dark',
//             )}
//           >
//             <SocialLinks />
//           </div>
//         </div>
//       </TextsContainer>
//       <PhotoContainer>
//         <Photo
//           src={'/static/images/avatar/meaganwaller.jpeg'}
//           alt={"Meagan's Photo"}
//           size={168}
//           priority
//         />
//       </PhotoContainer>
//     </IntroSection>
//   );
// };
//
