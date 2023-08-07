import LinkComponent, { LinkSize, LinkVariant } from '@/components/atoms/Link';
import DraggableWindow from '@/components/layout/DraggableWindow';
import { useWindowSize } from '@/hooks/useWindowSize';
import { BsArrowRightShort } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';
import React from 'react';

export function About() {
  const size = useWindowSize();
  if (!size || !size.width || !size.height) return (<></>);
  return (
    size.width &&
    size.height && (
      <DraggableWindow
        active={false}
        title="about meagan"
        x={size.width / 2.45}
        y={size.height / 12}
        zIndex="2"
        width={`${size.width * 0.55}px`}
      >
        <div className="flex place-content-center p-8">
          <HiSparkles size="3em" className="text-purple-one" />
          <HiSparkles size="3em" className="text-purple-one" />
          <HiSparkles size="3em" className="text-purple-one" />
        </div>
        <p className="text-md px-8 py-2 leading-relaxed text-pink-eight">
          <span className="font-bold italic">
            I wrote my first line of HTML on Microsoft Notepad in 2004{' '}
          </span>
          and fell head-over-heels for how magical it all felt. The problem I
          was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I
          was 12 years old.
        </p>
        <p className="text-md px-8 py-2 leading-relaxed text-pink-eight">
          I spent a couple days working up the courage to convince my parents to
          put their credit card information into form on a website and buy me a
          domain name. They did. And my first website was born. I learned
          everything—HTML/CSS, creating graphics in Paint Shop Pro and Animation
          Shop, and getting my website live—by reading posts written by kids my
          age. Soon I started writing my own posts sharing my knowledge, my
          pitfalls, cool experiments.
        </p>

        <div className="flex place-content-end px-8 pb-5">
          <LinkComponent
              className="text-pink-one"
              variant={LinkVariant.underlined}
              size={LinkSize.small}
              href="/about"
            >
            Read more{' '}
            <BsArrowRightShort size="1.5em" className="inline-block" />
          </LinkComponent>
        </div>
      </DraggableWindow>
    )
  );
}
