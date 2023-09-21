'use client'

import Link from 'next/link'
import React from 'react'
import tw, { styled } from 'twin.macro'

const StyledSection = styled.div`
  &:before,
  &:after {
    content: '';
    height: 15px;
    display: block;
    width: 100%;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: -webkit-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-size: 15px 15px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-position: 0 0;
    position: absolute;
  }

  &:before {
    left: 0;
    top: -7px;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &:after {
    bottom: -7px;
    left: 0;
  }
`

const InnerSection = styled.div`
  &:before {
    left: -7px;
    top: 0;
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  &:after {
    right: -7px;
    top: 0;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    display: block;
    width: 15px;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2NjY2NjYyIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjY2NjY2NjIi8+PHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
    background-size: 100%;
    background-image: -moz-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: -webkit-radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-image: radial-gradient(
      var(--color-background),
      var(--color-background) 65%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0)
    );
    background-size: 15px 15px;
    background-repeat: repeat-y;
  }
`

const Section = tw(StyledSection)`
  w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra my-[4em] bg-background relative
`

const SectionParagraph = tw.p`
  my-5 bg-background w-full text-justify font-extra
`

const SectionTitle = tw.h2`
  w-full text-center bg-background my-5 text-xl font-venice font-light text-accent
`

const SectionList = tw.ul`
  list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-md text-accent
`

const LinkButton = tw(Link)`
  text-accent decoration-wavy hover:decoration-accent hover:underline hover:cursor-pointer hover:underline-offset-[3px]
`

export default function NewsletterPage() {
  return (
    <Section>
      <InnerSection>
        <h1 className='w-full pt-[50px] text-center font-venice text-3xl font-light text-accent'>
          Welcome to Meagan's Digital Hideout
        </h1>
        <SectionParagraph>
          Well, well, well, looks like you've stumbled into the digital rabbit
          hole I call home. I'm Meagan, your digital co-conspirator. Buckle up,
          because you're in for a mildly entertaining ride through the realms of
          coding and all things pixelated.
        </SectionParagraph>
      </InnerSection>
    </Section>
  )
}
