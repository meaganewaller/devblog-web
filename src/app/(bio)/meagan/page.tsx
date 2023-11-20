'use client'

import React from 'react'
import PageHeader from '@/components/page-header'
import { Bio, Buttons, QuickInfo } from '@/components/views/meagan'

export default function MeaganPage() {
  return (
    <div className="w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] relative">
      <PageHeader title="Hi! I'm Meagan" centered={true} />
      <QuickInfo />
      <Buttons />
      <Bio />
    </div>
  )
}

//import tw, { styled } from 'twin.macro'
//
//import { Bio, Buttons, QuickInfo } from '@/components/views/meagan'
//
//const StyledSection = styled.div`
//  &:before,
//  &:after {
//    content: '';
//    height: 15px;
//    display: block;
//    width: 100%;
//    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
//    background-size: 100%;
//    background-image: -moz-radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-image: -webkit-radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-image: radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-size: 15px 15px;
//    background-size: 15px 15px;
//    background-repeat: repeat-x;
//    background-position: 0 0;
//    position: absolute;
//  }
//
//  &:before {
//    left: 0;
//    top: -7px;
//    -moz-transform: rotate(180deg);
//    -ms-transform: rotate(180deg);
//    -webkit-transform: rotate(180deg);
//    transform: rotate(180deg);
//  }
//
//  &:after {
//    bottom: -7px;
//    left: 0;
//  }
//`
//
//const InnerSection = styled.div`
//  &:before {
//    left: -7px;
//    top: 0;
//    -moz-transform: rotate(180deg);
//    -ms-transform: rotate(180deg);
//    -webkit-transform: rotate(180deg);
//    transform: rotate(180deg);
//  }
//
//  &:after {
//    right: -7px;
//    top: 0;
//  }
//
//  &:before,
//  &:after {
//    position: absolute;
//    content: '';
//    height: 100%;
//    display: block;
//    width: 15px;
//    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
//    background-size: 100%;
//    background-image: -moz-radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-image: -webkit-radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-image: radial-gradient(
//      var(--color-background),
//      var(--color-background) 65%,
//      rgba(0, 0, 0, 0) 70%,
//      rgba(0, 0, 0, 0)
//    );
//    background-size: 15px 15px;
//    background-repeat: repeat-y;
//  }
//`
//
//const Section = tw(StyledSection)`
//  w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
//`
//
//const MeaganPage = () => {
//  return (
//    <Section>
//      <InnerSection>
//        <QuickInfo />
//        <Buttons />
//        <Bio />
//      </InnerSection>
//    </Section>
//  )
//}
//
//export default MeaganPage
//
