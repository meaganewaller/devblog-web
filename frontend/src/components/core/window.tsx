'use client';
import React, { useCallback } from 'react';
import tw from 'tailwind-styled-components';
import { motion } from "framer-motion";
import Link from 'next/link';

const WindowContainer = tw(motion.div)`
  w-full h-screen flex items-center justify-center box-border
`;

const WindowInner = tw.div`
  bg-[#ddd] shadow-[-2px_-2px_0px_0px_#999,2px_2px_0px_0px_#fff,inset_2px_2px_0px_0px_#fff,inset_-2px_-2px_0px_0px_#999] h-[200px] bg-[white] mt-1 mb-2 mx-2 border-2 border-solid border-[#111];
`;

const TopbarContainer = tw.div`
  p-0.5 border-[3px] border-[#d8d6d5]
`;

const ControlBox = tw.div`
  flex justify-center items-center h-[22px] w-[25px] bg-[#222222] shadow-[inset_-1px_-1px_0px_0px_#ffffff,inset_1px_1px_0px_0px_#888888] p-px
`;

const ControlBoxInner = tw.span`
  z-[5] block h-6 w-6 bg-[linear-gradient(to_bottom_right,#777777,#888888,#999999,#bbbbbb,#dddddd,#eeeeee,#ffffff)] shadow-[inset_2px_2px_0px_0px_#cccccc,inset_-2px_-2px_0px_0px_#888888] indent-[-99999em] border-2 border-solid border-[#222222] active:shadow-none
`;

const Draggable = tw.div`
  inline-block grow pt-0 pb-0.5 px-2
`;

const Line = tw.span`
  bg-[#ffffff] h-0.5 shadow-[2px_2px_0_#6c6c6c] block w-auto mt-0.5
`;

const Title = tw.h2`
  h-[22px] text-center leading-[1.4rem] text-[1.6rem] font-mono m-0;
`;

const WindowShadeBoxInner = tw.div`
  h-1.5 mt-[7px] border-y-2 border-y-black border-solid;
`;

export function Window({ children, heading }) {
  return (
    <WindowContainer>
      <TopbarContainer className="main-window" id="playlists">
        <div className="window-title-bar">
          <p>{heading}</p>
        </div>
      </TopbarContainer>
      <div className="inner-window">
        <div className="content-window">
          {children}
        </div>
      </div>
    </WindowContainer>
  );
};
