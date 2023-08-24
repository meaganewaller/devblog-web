'use client';

import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const StyledContainer = styled.div`
  border-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><circle fill="white" cx="50" cy="50" r="50"/><circle fill="white" cx="125" cy="50" r="50"/><circle fill="white" cx="200" cy="50" r="50"/><circle fill="white" cx="50" cy="125" r="50"/><circle fill="white" cx="200" cy="125" r="50"/><circle fill="white" cx="50" cy="200" r="50"/><circle fill="white" cx="125" cy="200" r="50"/><circle fill="white" cx="200" cy="200" r="50"/><rect fill="white" x="20" y="20" width="210" height="210"/></svg>') 35% fill / auto round;
`;

const Container = tw(StyledContainer)`
  w-full p-[50px] m-auto bg-transparent border-[50px] border-solid font-extra;
`;

const SectionParagraph = tw.p`
  my-20 bg-[#fff] w-full text-justify font-extra
`;

const SectionTitle = tw.h2`
  w-full text-center bg-[#fff] my-20 text-2xl font-venice font-light text-accent
`;

const SectionList = tw.ul`
  list-flower w-full list-inside py-0 px-[5px] my-0 mx-[15px] text-base text-accent
`;


export default function StartPage() {
  return (
      <Container>
        <h1 className="pt-[50px] text-center w-full font-venice font-light text-accent">Welcome to Meagan's Digital Hideout</h1>
        <SectionParagraph>Well, well, well, looks like you've stumbled into the digital rabbit hole I call home. I'm Meagan, your digital co-conspirator. Buckle up, because you're in for a mildly entertaining ride through the realms of coding and all things pixelated.</SectionParagraph>

        <SectionTitle>"Techsplainer" 101</SectionTitle>
        <SectionParagraph>Brace yourself for a riveting crash course in tech babble. I've generously compiled a cheat sheet for those cryptic terms that keep coming up in your coding journey. Think of it as your secret decoder ring for tech talk. Take a peek over here.</SectionParagraph>

        <SectionTitle>Meet the Dev Guru (Not Really)</SectionTitle>
        <SectionParagraph>Curious who's orchestrating this virtual parade? That'd be yours truly, Meagan. Wondering why I decided to take on the noble role of a digital sage? Wonder no more--check out my tale.</SectionParagraph>

        <SectionTitle>Home Sweet (Digital) Home</SectionTitle>
        <SectionParagraph>Welcome to the place where bugs and bytes mingle. This cozy corner is your portal to:
        <SectionList>
        <li>Discover coding tricks that might raise an eyebrow or two</li>
        <li>Join discussions that are practically a virtual bonfire (no marshmallows required)</li>
        <li>Connect with fellow pixel enthusiasts (you know, the kind who occassionally see error messages in their dreams)</li>
        </SectionList>
        </SectionParagraph>

        <SectionTitle>Served on a Silver Platter</SectionTitle>
        <SectionParagraph>Feeling peckish for some code bytes? Here's a taste of what's on the menu:

        <SectionList>
        <li>Decoding APIs: Not as Fun as Decoding Emojis</li>
        <li>JavaScript: Where the Magic Happens (No, Seriously)</li>
        <li>Detecting and Fixing Bugs: A Guide to Digital Pest Control</li>
        </SectionList>
        </SectionParagraph>

        <SectionTitle>The Not-So-Secret Society</SectionTitle>
        <SectionParagraph>Join our merry band of digital misfits! For a regular dose of tomfoolery, hit that follow button on Twitter and Instagram. Memes, musing, and the occassional code snippet--you're in for a treat.</SectionParagraph>

        <SectionTitle>Secure Your Digital Decoder Ring</SectionTitle>
        <SectionParagraph>Wanna be in the know? Sign up for the The Insider Crew and receive mind-boggling insights, unfiltered thoughts, and other digital confetti in your inbox. It's like having a backstage pass to a concert you're not sure you even want to attend.</SectionParagraph>

        <SectionTitle>Buckle Up for the Digital Adventure</SectionTitle>
        <SectionParagraph>Whether you're laughing or crying at your code (probably both, tbh), you've found yourself in the domain of Meagan--a realm where bits, pixels, and code reign supreme. So, strap in, dear coder, and let's navigate the digital constellations together. Get ready to kick back, relax, and embrace the chaos!</SectionParagraph>
        </Container>
        )
}
