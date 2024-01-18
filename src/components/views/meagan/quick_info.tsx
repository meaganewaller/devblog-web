"use client";

import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";

const List = tw.ul`
 list-flower bg-lilac list-inside text-espresso my-0 md:mx-[15px] py-3 px-[5px] w-full
`;

const Item = tw.li`
  relative pl-[20px] leading-[1.5em] text-md md:w-2/3
`;

const ItemTitle = tw.strong`
  text-secondary-txt md:w-1/3 inline-block mr-[10px] md:mr-0
`;

export function QuickInfo() {
  return (
    <>
      <Image
        src="/static/images/avatar/meaganwaller.png"
        width={200}
        height={200}
        alt="Meagan Waller's avatar"
        className="tablet-sm:float-left tablet-sm:mr-32 mx-auto h-[200px] w-[200px] rounded-full border-4 border-lilac"
      />
      <div className="tablet-sm:text-justify text-center">
        <h1 className="text-center font-venice text-2xl capitalize tracking-wide text-raspberry-pink before:pr-[5px] before:content-[url('/static/images/ui/leftsparkle.gif')] after:pl-[5px] after:content-[url('/static/images/ui/leftsparkle.gif')] lg:text-3xl">
          About
        </h1>
      </div>
      <List>
        <Item>
          <ItemTitle>name:</ItemTitle>
          meagan
        </Item>
        <Item>
          <ItemTitle>location:</ItemTitle>
          northeast florida
        </Item>
        <Item>
          <ItemTitle>title:</ItemTitle>
          senior dev consultant @{" "}
          <Link
            href="https://testdouble.com"
            className="bg-purple p-1 text-off-white hover:bg-lavender hover:text-purple"
            target="_blank"
          >
            test double
          </Link>
        </Item>
        <Item>
          <ItemTitle>sign:</ItemTitle>
          aries ☼ / aquarius ☽ / taurus ↑
        </Item>
        <Item>
          <ItemTitle>languages:</ItemTitle>
          ruby, typescript, lua
        </Item>
        <Item>
          <ItemTitle>contact:</ItemTitle>
          meagan [at] meaganwaller.com
        </Item>
      </List>
    </>
  );
}
