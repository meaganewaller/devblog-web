import LinkComponent, { LinkSize, LinkVariant } from '@/components/atoms/Link';
import DraggableWindow from '@/components/layout/DraggableWindow';
import { useWindowSize } from '@/hooks/useWindowSize';
import { BsArrowRightShort } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';

// const socialMedia = [
//   { id: 1, name: "Email", route: "mailto:meagan@meaganwaller.com" },
//   { id: 2, name: "Twitter", route: "https://twitter.com/meaganewaller" },
//   { id: 3, name: "LinkedIn", route: "https://linkedin.com/in/meaganewaller" },
//   { id: 4, name: "CodePen", route: "https://codepen.io/meaganewaller" },
//   { id: 5, name: "Dev", route: "https://dev.to/meaganewaller" },
//   { id: 6, name: "GitHub", route: "https://github.com/meaganewaller" },
// ];

const About = () => {
  const size = useWindowSize();
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
          <HiSparkles
            size="3em"
            className="text-primary-500 dark:text-accent-first-300"
          />
          <HiSparkles
            size="3em"
            className="text-primary-500 dark:text-accent-first-300"
          />
          <HiSparkles
            size="3em"
            className="text-primary-500 dark:text-accent-first-300"
          />
        </div>
        <p className="text-md px-8 py-2 leading-relaxed text-primary-400 dark:text-accent-first-100">
          <span className="font-bold italic">
            I wrote my first line of HTML on Microsoft Notepad in 2004{' '}
          </span>
          and fell head-over-heels for how magical it all felt. The problem I
          was solving in 2004? My Neopets shop page wasn&apos;t pretty enough. I
          was 12 years old.
        </p>
        <p className="text-md px-8 py-2 leading-relaxed text-primary-500 dark:text-accent-first-200">
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
            variant={LinkVariant.underlined}
            size={LinkSize.small}
            href="/about"
          // className="text-md text-accent-first-400 hover:italic hover:text-accent-third-600 dark:text-primary-100 dark:hover:text-accent-fourth-200"
          >
            Read more{' '}
            <BsArrowRightShort size="1.5em" className="inline-block" />
          </LinkComponent>
        </div>
      </DraggableWindow>
    )
  );
}
export default About;
