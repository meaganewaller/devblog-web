import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Buttons, Stats, Bio } from '@/components/views/meagan';

export default function AboutMeaganPage() {
  return (
    <div className="font-extra w-full text-center wrapper">
      <div className="w-[90%] max-w-[960px] text-left box-border mx-auto my-0 p-5">
        <div className="float-left relative w-[220px] border bg-background box-border mr-5 p-5 border-solid border-[#ddd] side-a">
        <div className="text-center">
          <Image
            src="/static/images/buttons/meaganwaller.gif"
            alt="meaganwaller.com animated graphic"
            width="150"
            height="20"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/acab.gif"
            alt="ACAB"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/bookmark.gif"
            alt="Bookmark this Page GIF"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/bestviewed.gif"
            alt="This Page Best Viewed on a Computer"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/madewithmac.gif"
            alt="This website was made with a Mac"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/online.gif"
            alt="Forever Online Animated GIF"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/trustme.gif"
            alt="Trust Me, I'm Good With Computer"
            width="129"
            height="38"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/antiNFT.gif"
            alt="This is an Anti-NFT"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/oldweb.png"
            alt="I love old web"
            width="99"
            height="55"
            className="inline-block hover:scale-150"
          />
          <Image
            src="/static/images/buttons/sucks.gif"
            alt="This website SUCKS!"
            width="88"
            height="31"
            className="inline-block hover:scale-150"
          />
        </div>
        <div className="text-center">
          <Image
            src="/static/images/buttons/www.gif"
            alt="World Wide Web Badge Graphic"
            width="91"
            height="100"
            className="inline-block hover:scale-150"
          />
        </div>

        </div>
        <div className="float-left relative w-[220px] border bg-background box-border mr-5 p-5 border-solid border-[#ddd] side-a stats-box">
        <div className="flex h-full p-5 place-content-center flex-col font-extra">
        <div className="bg-background wrapper max-w-[30em] border-accent shadow-[1em_1em_0_0_var(--color-accent-dark)] mt-[2em] mx-auto my-0 p-[1em] border-[0.25em] border-solid">
        <h2 className="text-center uppercase tracking-[0.5em] font-extra text-[1.5em] max-w-full overflow-hidden text-ellipsis">by the numbers</h2>
        <div className="label"><span>year</span></div>
        <div className="progress"><div className="year"></div></div>
        <div className="label"><span>month</span></div>
        <div className="progress"><div className="month"></div></div>
        <div className="label"><span>week</span></div>
        <div className="progress"><div className="week"></div></div>
        <div className="label"><span>day</span></div>
        <div className="progress"><div className="day"></div></div>
        <div className="label"><span>hour</span></div>
        <div className="progress"><div className="hour"></div></div>
        <div className="label"><span>minute</span></div>
        <div className="progress"><div className="minute"></div></div>
        </div>
        </div>
        </div>
        <div className="float-none w-auto overflow-hidden border bg-background box-border p-5 border-solid border-[#ddd] break-words main two-column">
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-10/12 flex flex-col justify-center font-extra">
            <h1 className="w-full font-light text-2xl lg:text-3xl font-venice leading-9 text-primary-400 pb-4 capitalize tracking-wide p-1 text-center before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
              about
            </h1>
            <ul className="list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-base text-tertiary-500">
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
                <Link href="https://testdouble.com" className="bg-tertiary-100 text-tertiary-700 p-1 hover:bg-tertiary-200 hover:text-tertiary-800" target="_blank">
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
          </div>
          </div>
          </div>
    // <aside className="bg-background col-[1_/_4] flex items-center justify-center sidebar-left">
    // </aside>
    // <article className="bg-background col-[1_/_4] flex items-center justify-center content">
    //   <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    //   <div className="flex flex-col lg:flex-row justify-between gap-8">
    //   <div className="w-full lg:w-10/12 flex flex-col justify-center font-extra">
    //   <h1 className="text-2xl lg:text-3xl font-venice leading-9 text-primary-400 pb-4 capitalize tracking-wide p-1 text-center before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
    //   About
    //   </h1>
    //   <ul className="list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-base text-tertiary-500">
    //   <li className="p-[2px]">
    //   <strong className="w-1/4 md:w-1/3 inline-block">
    //   name:
    //   </strong>
    //   meagan
    //   </li>
    //   <li className="p-[2px]">
    //   <strong className="w-1/4 md:w-1/3 inline-block">
    //   location:
    //   </strong>
    //   northeast florida
    //   </li>
    //   <li className="p-[2px]">
    //   <strong className="w-1/4 md:w-1/3 inline-block">
    //   title:
    //   </strong>
    //   senior dev consultant @{" "}
    //   <Link href="https://testdouble.com" className="bg-tertiary-100 text-tertiary-700 p-1 hover:bg-tertiary-200 hover:text-tertiary-800" target="_blank">
    //     test double
    //     </Link>
    //     </li>
    //     <li className="p-[2px]">
    //     <strong className="w-1/4 md:w-1/3 inline-block">
    //     sign:
    //     </strong>
    //     aries ☼ / aquarius ☽ / taurus ↑
    //     </li>
    //     <li className="p-[2px]">
    //     <strong className="w-1/4 md:w-1/3 inline-block">
    //     languages:
    //             </strong>
    //             ruby, typescript, lua
    //           </li>
    //           <li className="p-[2px]">
    //             <strong className="w-1/4 md:w-1/3 inline-block">
    //               contact:
    //             </strong>
    //             meagan [at] meaganwaller.com
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="w-full lg:w-8/12">
    //       <Image
    //       src="/static/images/avatar.svg"
    //       alt="Meagan Waller"
    //       width={250}
    //     height={250}
    //     className="w-full h-full"
    //     priority
    //     />
    //     </div>
    //     </div>
    //     <h1 className="text-lg font-extra text-center uppercase tracking-wide px-5 pb-1 pt-5 before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
    //     Quickly
    //     </h1>
    //     <p className="text-base text-justify p-5 pt-2">
    //     I&apos;m a software developer, hobby collector, and infrequent
    //     speaker from Jacksonville, FL 🍊. I&apos;m a millennial who has
    //     been building websites since 2004 and writing code professionally
    //     since 2013. I&apos;m usually writing Ruby (on Rails), JavaScript,
    //           and HTML & CSS. My day job is typically spent in the backend of
    //             the codebase. However, I&apos;ve been exploring the frontend
    //             during my free time and have been loving it. I write{" "}
    //     <Link href="/blog">blog posts</Link>,{" "}
    //     <Link href="/twitter">post tweets</Link>, and have some cool stuff
    //     in the works for the future.
    //     </p>
    //     <h1 className="font-extra text-lg uppercase tracking-wide px-5 pb-1 pt-5 text-center before:content-[url('/static/images/ui/leftsparkle.gif')] before:pr-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px]">
    //     A Bit More
    //     </h1>
    //     <p className="text-base text-justify p-5 pt-2">
    //     <strong>
    //     I wrote my first line of HTML on Microsoft Notepad in 2004 and
    //     fell head-over-heels for how magical it all felt
    //     </strong>
    //     . The problem I was solving in 2004? My Neopets shop page
    //     wasn&apos;t pretty enough. I was 12 years old.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     I spent a couple days working up the courage to convince my
    //     parents to put their credit card information into a form on a
    //     website and buy me a domain. They did. And my first website was
    //     born. I learned everything, HTML/CSS, creating graphics in Paint
    //     Shop Pro and Animation Shop, and getting my website live, by
    //     reading posts written by kids my age. Soon I started writing my
    //     own posts sharing my knowledge, my pitfalls, my cool experiments.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     <strong>
    //     I didn&apos;t jump straight into the tech industry
    //     </strong>
    //     . As school got more demanding and with the freedom that having my
    //     driver&apos;s license allowed me, I stopped updating my sites. I
    //     still always came back to it in some capacity. Running a MySpace
    //     layout page, creating a message board for a band I liked, running
    //     an eCommerce site with my friends to sell shirts we designed. I
    //     didn&apos;t know at the time that what I was doing could be a
    //     career. I entered into college to be an elementary school teacher
    //     but dropped out after failing a course titled College Success
    //     (twice). I&apos;ve{" "}
    //     <Link href="/talks">talked about that experience a lot</Link>.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     I bounced between retail and foodservice jobs for a while, still
    //     unsure of what I wanted to do. There was a software apprenticeship
    //     program looking for apprentices in Tampa near the city that I
    //     lived in. It felt like serendipity. I replied to the job posting
    //     and was invited to come into the office. After hearing more about
    //     the role, I asked how I could join the program. The application
    //     process was to build an unbeatable Tic-Tac-Toe game. Up until this
    //     point, I had written mostly HTML/CSS and a little bit of PHP.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     On the way home, I stopped at a bookstore. I bought{" "}
    //     <Link
    //     href="https://www.google.com/shopping/product/8474171075434410350?q=best+books+to+learn+python&prds=epd:10388856195847163316,prmr:3,eto:10388856195847163316_1,rto:1,tpim:CLi-yo_KrtzkTxD65b2x5pCKqw8YkODWCyIDVVNEKPD0if8FMNzrxEM"
    //     target="_blank"
    //     >
    //     Python Programming for the Absolute Beginner
    //     </Link>
    //     . I chose Python because it was the only language in the bookstore
    //     with a book geared towards beginners.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     I applied with{" "}
    //     <Link
    //     href="https://github.com/meaganewaller/tic-tac-toe"
    //     target="_blank"
    //     >
    //     this unbeatable Tic-Tac-Toe game
    //     </Link>
    //     . I was offered a spot in the program. I spent a little over a
    //     year as an apprentice, and it&apos;s an experience that truly
    //     changed my life.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     <strong>Sharing things on the web isn&apos;t new for me</strong>.
    //     I&apos;ve been sharing (and let&apos;s face it, oversharing)
    //     online for over 15 years. This blog is a continuation of that
    //     impulse, a little more professional, a little more focused, but at
    //     its roots is the seed planted by me as a preteen.
    //     </p>
    //     <p className="text-base text-justify p-5 pt-2">
    //     When I&apos;m not writing code, I&apos;m either at pilates,
    //          playing board games with friends, or doing a crossword puzzle.
    //            I&apos;m also obsessed with reality television shows like
    //            Survivor, Big Brother, and the Bachelor extended universe. I{" "}
    //     <Link
    //     href="https://www.goodreads.com/user/show/3168826-meagan-waller"
    //     target="_blank"
    //     >
    //     love to read
    //     </Link>
    //     , cook, and I want to say I&apos;m a plant lover, but I don&apos;t
    //     know if you&apos;re supposed to be continually bringing things to
    //     the brink of death if you love them.
    //     </p>
    //       <p className="text-base text-justify p-5 pt-2">
    //         I live in a historic neighborhood in Jacksonville, FL, with my
    //       fiance and our two dogs.
    //       </p>
    //     </div>
    //   </article>
    //   <aside className="bg-background col-[1_/_4] flex items-center justify-center sidebar-right">
    //     <div className="text-center">
    //       <Image
    //       src="/static/images/buttons/meaganwaller.gif"
    //       alt="meaganwaller.com animated graphic"
    //       width="150"
    //       height="20"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/acab.gif"
    //       alt="ACAB"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/bookmark.gif"
    //       alt="Bookmark this Page GIF"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/bestviewed.gif"
    //       alt="This Page Best Viewed on a Computer"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/madewithmac.gif"
    //       alt="This website was made with a Mac"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/online.gif"
    //       alt="Forever Online Animated GIF"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/trustme.gif"
    //       alt="Trust Me, I'm Good With Computer"
    //       width="129"
    //       height="38"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/antiNFT.gif"
    //       alt="This is an Anti-NFT"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/oldweb.png"
    //       alt="I love old web"
    //       width="99"
    //       height="55"
    //       className="inline-block hover:scale-150"
    //       />
    //       <Image
    //       src="/static/images/buttons/sucks.gif"
    //       alt="This website SUCKS!"
    //       width="88"
    //       height="31"
    //       className="inline-block hover:scale-150"
    //       />
    //     </div>
    //     <div className="text-center">
    //       <Image
    //       src="/static/images/buttons/www.gif"
    //       alt="World Wide Web Badge Graphic"
    //       width="91"
    //       height="100"
    //       className="inline-block hover:scale-150"
    //       />
    //     </div>
    //   </aside>
    // </div>
  )
}
