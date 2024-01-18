"use client";
import Image from "next/image";
import tw from "twin.macro";

const ImageContainer = tw(Image)`
 hover:scale-150
`;

const Marquee = tw.div`
  flex flex-row whitespace-nowrap py-12 w-full h-full
`;

const FirstMarquee = tw(Marquee)`
  animate-marquee
`;

const SecondMarquee = tw(Marquee)`
  absolute top-0 animate-marquee2
`;

export function Buttons() {
  return (
    <div className="relative mt-[2rem] flex overflow-x-hidden before:absolute before:left-0 before:z-10 before:h-full before:w-[15vw] motion-reduce:overflow-x-auto motion-reduce:before:hidden motion-reduce:after:hidden">
      <FirstMarquee>
        <ImageContainer
          src="/static/images/buttons/meaganwaller.gif"
          alt="meaganwaller.com animated graphic"
          priority={true}
          width="150"
          height="20"
        />
        <ImageContainer
          src="/static/images/buttons/acab.gif"
          priority={true}
          alt="ACAB"
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/bookmark.gif"
          priority={true}
          alt="Bookmark this Page GIF"
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/bestviewed.gif"
          alt="This Page Best Viewed on a Computer"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/madewithmac.gif"
          alt="This website was made with a Mac"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/online.gif"
          alt="Forever Online Animated GIF"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/trustme.gif"
          alt="Trust Me, I'm Good With Computer"
          priority={true}
          width="129"
          height="38"
        />
        <ImageContainer
          src="/static/images/buttons/antiNFT.gif"
          alt="This is an Anti-NFT"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/oldweb.png"
          alt="I love old web"
          priority={true}
          width="99"
          height="55"
        />
        <ImageContainer
          src="/static/images/buttons/sucks.gif"
          alt="This website SUCKS!"
          priority={true}
          width="76"
          height="31"
        />
      </FirstMarquee>
      <SecondMarquee>
        <ImageContainer
          src="/static/images/buttons/meaganwaller.gif"
          alt="meaganwaller.com animated graphic"
          priority={true}
          width="150"
          height="20"
        />
        <ImageContainer
          src="/static/images/buttons/acab.gif"
          priority={true}
          alt="ACAB"
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/bookmark.gif"
          priority={true}
          alt="Bookmark this Page GIF"
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/bestviewed.gif"
          alt="This Page Best Viewed on a Computer"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/madewithmac.gif"
          alt="This website was made with a Mac"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/online.gif"
          alt="Forever Online Animated GIF"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/trustme.gif"
          alt="Trust Me, I'm Good With Computer"
          priority={true}
          width="129"
          height="38"
        />
        <ImageContainer
          src="/static/images/buttons/antiNFT.gif"
          alt="This is an Anti-NFT"
          priority={true}
          width="88"
          height="31"
        />
        <ImageContainer
          src="/static/images/buttons/oldweb.png"
          alt="I love old web"
          priority={true}
          width="99"
          height="55"
        />
        <ImageContainer
          src="/static/images/buttons/sucks.gif"
          alt="This website SUCKS!"
          priority={true}
          width="76"
          height="31"
        />
      </SecondMarquee>
    </div>
  );
}
