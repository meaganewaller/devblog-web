import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RingsAndLinks from "@components/sections/RingsAndLinks";
import Layout from "@components/layout/Layout";
import Stats from "@components/sections/Stats";
import Window from "@components/layout/Window";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function About() {
  const size = useWindowSize();
  return (
    <Layout>
      <div className="flex w-11/12 mx-auto mt-20">
        <RingsAndLinks />
        <Stats />
        <Window
          title="about meagan"
          x={size.width / 20 + 310}
          y={size.height / 10}
          zIndex="1"
          width={`${size.width / 1.15 - 300}px`}
        >
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full lg:w-10/12 flex flex-col justify-center">
                <h1 className="text-2xl lg:text-3xl font-extra leading-9 text-primary-dark-400 dark:text-accent-first-light-300 pb-4 uppercase tracking-wide p-1 text-center before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
                  About
                </h1>
                <ul className="list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-base">
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      name:
                    </strong>
                    meagan
                  </li>
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      location:
                    </strong>
                    northeast florida
                  </li>
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      title:
                    </strong>
                    senior dev consultant @{" "}
                    <Link href="https://testdouble.com" target="_blank">
                      test double
                    </Link>
                  </li>
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      sign:
                    </strong>
                    aries ☼ / aquarius ☽ / taurus ↑
                  </li>
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      languages:
                    </strong>
                    ruby, typescript, lua
                  </li>
                  <li className="p-[2px]">
                    <strong className="w-1/4 md:w-1/3 inline-block">
                      contact:
                    </strong>
                    meagan [at] meaganwaller.com
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-8/12">
                <Image
                  src="/static/images/avatar.svg"
                  alt="Meagan Waller"
                  width={250}
                  height={250}
                  className="w-full h-full"
                  priority
                />
              </div>
            </div>
            <h1 className="text-lg font-extra text-center uppercase tracking-wide px-5 pb-1 pt-5 before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
              Quickly
            </h1>
            <p className="text-base text-justify p-5 pt-2">
              I&apos;m a software developer, hobby collector, and infrequent
              speaker from Jacksonville, FL 🍊. I&apos;m a millennial who has
              been building websites since 2004 and writing code professionally
              since 2013. I&apos;m usually writing Ruby (on Rails), JavaScript,
              and HTML & CSS. My day job is typically spent in the backend of
              the codebase. However, I&apos;ve been exploring the frontend
              during my free time and have been loving it. I write{" "}
              <Link href="/blog">blog posts</Link>,{" "}
              <Link href="/twitter">post tweets</Link>, and have some cool stuff
              in the works for the future.
            </p>
            <h1 className="font-extra text-lg uppercase tracking-wide px-5 pb-1 pt-5 text-center before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
              A Bit More
            </h1>
            <p className="text-base text-justify p-5 pt-2">
              <strong>
                I wrote my first line of HTML on Microsoft Notepad in 2004 and
                fell head-over-heels for how magical it all felt
              </strong>
              . The problem I was solving in 2004? My Neopets shop page
              wasn&apos;t pretty enough. I was 12 years old.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              I spent a couple days working up the courage to convince my
              parents to put their credit card information into a form on a
              website and buy me a domain. They did. And my first website was
              born. I learned everything, HTML/CSS, creating graphics in Paint
              Shop Pro and Animation Shop, and getting my website live, by
              reading posts written by kids my age. Soon I started writing my
              own posts sharing my knowledge, my pitfalls, my cool experiments.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              <strong>
                I didn&apos;t jump straight into the tech industry
              </strong>
              . As school got more demanding and with the freedom that having my
              driver&apos;s license allowed me, I stopped updating my sites. I
              still always came back to it in some capacity. Running a MySpace
              layout page, creating a message board for a band I liked, running
              an eCommerce site with my friends to sell shirts we designed. I
              didn&apos;t know at the time that what I was doing could be a
              career. I entered into college to be an elementary school teacher
              but dropped out after failing a course titled College Success
              (twice). I&apos;ve{" "}
              <Link href="/talks">talked about that experience a lot</Link>.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              I bounced between retail and foodservice jobs for a while, still
              unsure of what I wanted to do. There was a software apprenticeship
              program looking for apprentices in Tampa near the city that I
              lived in. It felt like serendipity. I replied to the job posting
              and was invited to come into the office. After hearing more about
              the role, I asked how I could join the program. The application
              process was to build an unbeatable Tic-Tac-Toe game. Up until this
              point, I had written mostly HTML/CSS and a little bit of PHP.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              On the way home, I stopped at a bookstore. I bought{" "}
              <Link
                href="https://www.google.com/shopping/product/8474171075434410350?q=best+books+to+learn+python&prds=epd:10388856195847163316,prmr:3,eto:10388856195847163316_1,rto:1,tpim:CLi-yo_KrtzkTxD65b2x5pCKqw8YkODWCyIDVVNEKPD0if8FMNzrxEM"
                target="_blank"
              >
                Python Programming for the Absolute Beginner
              </Link>
              . I chose Python because it was the only language in the bookstore
              with a book geared towards beginners.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              I applied with{" "}
              <Link
                href="https://github.com/meaganewaller/tic-tac-toe"
                target="_blank"
              >
                this unbeatable Tic-Tac-Toe game
              </Link>
              . I was offered a spot in the program. I spent a little over a
              year as an apprentice, and it&apos;s an experience that truly
              changed my life.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              <strong>Sharing things on the web isn&apos;t new for me</strong>.
              I&apos;ve been sharing (and let&apos;s face it, oversharing)
              online for over 15 years. This blog is a continuation of that
              impulse, a little more professional, a little more focused, but at
              its roots is the seed planted by me as a preteen.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              When I&apos;m not writing code, I&apos;m either at pilates,
              playing board games with friends, or doing a crossword puzzle.
              I&apos;m also obsessed with reality television shows like
              Survivor, Big Brother, and the Bachelor extended universe. I{" "}
              <Link
                href="https://www.goodreads.com/user/show/3168826-meagan-waller"
                target="_blank"
              >
                love to read
              </Link>
              , cook, and I want to say I&apos;m a plant lover, but I don&apos;t
              know if you&apos;re supposed to be continually bringing things to
              the brink of death if you love them.
            </p>
            <p className="text-base text-justify p-5 pt-2">
              I live in a historic neighborhood in Jacksonville, FL, with my
              fiance and our two dogs.
            </p>
          </div>
        </Window>
      </div>
    </Layout>
  );
}
