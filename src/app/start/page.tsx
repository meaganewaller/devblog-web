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
    background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
    background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
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
  background-image: -moz-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: -webkit-radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
  background-image: radial-gradient(var(--color-background), var(--color-background) 65%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0));
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

export default function StartPage() {
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

      <SectionTitle>"Techsplainer" 101</SectionTitle>
      <SectionParagraph>
        Brace yourself for a riveting crash course in tech babble. I've
        generously compiled a cheat sheet for those cryptic terms that keep
        coming up in your coding journey. Think of it as your secret decoder
        ring for tech talk. Take a peek{' '}
        <LinkButton href='#'>over here.</LinkButton>
      </SectionParagraph>

      <SectionTitle>Meet the Dev Guru (Not Really)</SectionTitle>
      <SectionParagraph>
        Curious who's orchestrating this virtual parade? That'd be yours truly,
        Meagan. Wondering why I decided to take on the noble role of a digital
        sage? Wonder no more--
        <LinkButton href='/meagan'>check out my tale.</LinkButton>
      </SectionParagraph>

      <SectionTitle>Home Sweet (Digital) Home</SectionTitle>
      <SectionParagraph>
        Welcome to the place where bugs and bytes mingle. This cozy corner is
        your portal to:
      </SectionParagraph>
      <SectionList>
        <li>Discover coding tricks that might raise an eyebrow or two</li>
        <li>
          Join discussions that are practically a virtual bonfire (no
          marshmallows required)
        </li>
        <li>
          Connect with fellow pixel enthusiasts (you know, the kind who
          occassionally see error messages in their dreams)
        </li>
      </SectionList>

      <SectionTitle>Served on a Silver Platter</SectionTitle>
      <SectionParagraph>
        Feeling peckish for some code bytes? Here's a taste of what's on the
        menu:
        <SectionList>
          <li>
            <LinkButton href='#'>
              Decoding APIs: Not as Fun as Decoding Emojis
            </LinkButton>
          </li>
          <li>
            <LinkButton href='#'>
              JavaScript: Where the Magic Happens (No, Seriously)
            </LinkButton>
          </li>
          <li>
            <LinkButton href='#'>
              Detecting and Fixing Bugs: A Guide to Digital Pest Control
            </LinkButton>
          </li>
        </SectionList>
      </SectionParagraph>

      <SectionTitle>The Not-So-Secret Society</SectionTitle>
      <SectionParagraph>
        Join our merry band of digital misfits! For a regular dose of
        tomfoolery, hit that follow button on{' '}
        <LinkButton href='https://twitter.com/meaganewaller' target='_blank'>
          Twitter
        </LinkButton>{' '}
        and <LinkButton href='#'>Instagram</LinkButton>. Memes, musing, and the
        occassional code snippet--what more could you ask for?
      </SectionParagraph>

      <SectionTitle>Secure Your Digital Decoder Ring</SectionTitle>
      <SectionParagraph>
        Wanna be in the know? Sign up for the{' '}
        <LinkButton href='/newsletter'>The Insider Crew</LinkButton> and receive
        mind-boggling insights, unfiltered thoughts, and other digital confetti
        in your inbox. It's like having a backstage pass to a concert you're not
        sure you even want to attend.
      </SectionParagraph>

      <SectionTitle>The Digital Adventure Awaits</SectionTitle>
      <SectionParagraph>
        Whether you're laughing or crying at your code (probably both, tbh),
        you've found yourself in the right place--a realm where bits, pixels,
        and code reign supreme. So, strap in, dear coder, and let's navigate the
        digital constellations together. Get ready to kick back, relax, and
        embrace the chaos!
      </SectionParagraph>
      </InnerSection>
    </Section>
  )
}
