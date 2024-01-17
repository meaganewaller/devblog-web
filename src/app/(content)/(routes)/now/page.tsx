'use client'

import Link from 'next/link'
import React from 'react'
import tw, { styled } from 'twin.macro'

import PageHeader from '@/components/page-header'

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
 w-[95%] max-w-[1300px] p-[50px] mx-auto font-extra mt-2 mb-10 bg-background relative
`

export default function NowPage() {
  return (
    <Section>
      <InnerSection>
        <PageHeader
          title='now'
          centered={true}
          description="a snapshot of what i'm up to right now, inspired by <a href='https://nownownow.com/about' class='text-raspberry-pink hover:text-purple' target='_blank' rel='noreferrer'>nownownow</a>. <br/> last updated: 2024-01-14"
        />
        <ul>
          <li>
            <strong>Location:</strong> Jacksonville, FL
          </li>
          <li>
            <strong>Work:</strong> Senior Dev Consultant @ <Link href='https://testdouble.com'>Test Double</Link>
          </li>
          <li>
            <strong>Interests:</strong> Personal Knowledge Management, Pilates, and Taylor Swift are occupying my brain.
          </li>
          <li>
            <strong>Family:</strong> Getting married in 2024!
          </li>
          <li>
            <strong>Reading:</strong> Not much right now. I'm in a bit of a reading slump.
          </li>
          <li>
            <strong>Watching:</strong> The Challenge: All Stars, RuPaul's Drag Race, and Survivor is about to start back
            up!
          </li>
          <li>
            <strong>Listening:</strong> Putting{' '}
            <Link href='https://music.apple.com/us/playlist/girlhood/pl.u-kv9lGZ5TX1DmAx'>this playlist</Link> on
            frequently.
          </li>
          <li>
            <strong>Personal Projects:</strong> Wedding planning, <Link href='/blog'>blogging</Link>, and not much else!
          </li>
        </ul>
      </InnerSection>
    </Section>
  )
}
