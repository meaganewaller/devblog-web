'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';

const resources = [
  {
    role: "Backend Framework",
    name: "Ruby on Rails",
    url: "https://rubyonrails.org",
  },
  {
    role: "Frontend Framework",
    name: "Next.js",
    url: "https://nextjs.org",
  },
  {
    role: "Styling",
    name: "TailwindCSS",
    url: "https://tailwindcss.com",
  },
  {
    role: "Content Management",
    name: "Notion API",
    url: "https://developers.notion.com/",
  },
  {
    role: "Database",
    name: "Postgres",
    url: "https://postgresql.org/",
  },
  {
    role: "Newsletter",
    name: "Convertkit",
    url: "https://convertkit.com/",
  },
  {
    role: "Deployment",
    name: "Vercel",
    url: "https://vercel.com/",
  },
];

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  align-content: center;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  padding: 5px;
  padding-right: 3%;
  box-shadow: inset 0 0 10px #000;
  z-index: 10;
`;

const Container = tw(StyledContainer)`
  desktop:flex-row
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateX(50%);
  font-family: 'Press Start 2P', cursive, serif;
  font-size: .5rem;
  margin: 2rem;
`;

const Box = tw(StyledBox)`
  desktop:w-[15rem] desktop:h-[15rem] desktop:translate-x-[15%] desktop:text-[.75rem];
`;

const StyledColophonImage = styled(Image)`
  display: flex;
  width: 85%;
  height: 75%;
  cursor: url('https://i.postimg.cc/6338xsj2/oie-nr-M8-Ct-Mr-SPb-H.png'), auto;
`

const ColophonImage = tw(StyledColophonImage)`
  desktop:w-full desktop:h-full
`;

const ColophonTitle = styled.div`
`;

const ColophonText = styled.div`
`;

export default function Colophon() {
  return (
      <section>
      <h1>A Peek Behind the (Digital) Curtain</h1>
      <p>Greetings, fellow travelers of the digital expanse! Prepare to be both impressed and mildly bemused as we pull back the virtual curtains and introduce you to the backstage shenanigans that power this realm. Behold, the Colophon--where thee magic happens!</p>
      <h2>Framework Enchantments</h2>
      <p>This cyberwonderland wouldn't exist without a concontion of the following:</p>
      <ul>
      <li><strong>Ruby on Rails Backend</strong>: The wizard behind the scences, orchestrating our backend ballet.</li>
      <li><strong>Next.js Framework</strong>: The elusive maestro conducting the orchestra of our frontend enigma.</li>
      <li><strong>TypeScript</strong>: The chosen dialect of our digital séance – words for the modern wizard.</li>
      <li><strong>TailwindCSS</strong>: The spellbinding attire for our virtual masquerade.</li>
      </ul>
      <h2>Concoting the Aesthetic</h2>
      <p>The tapestry of our realm is carefully woven with pixels and code. The following are the tools of our trade:</p>
      <ul>
      <li><strong>Pixel Piazza Palette</strong>: A nod to the pixelated chaos that shapes our digital canvas.</li>
      <li><strong>Typefaces with Character</strong>: </li>
      </ul>


      </section>
  )
}
