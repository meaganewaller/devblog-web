'use client';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Box = styled.div`
  background-color: rgba(255, 123, 222, 0.76);
  text-align: center;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
`

const Broken = styled.div`
background-color: rgb(0, 217, 255);
display: flex;
justify-content: center;
align-items: center;
padding: 0.5em;
margin: 0.5em;
grid-row: 3 / span 1;

@media(min-width: 700px) {
  grid-column: 1/2;
  grid-row: 2/3;
}

@media(min-width: 1000px) {
  grid-column: 3/4;
  grid-row: 1 / -1;
}
`;

const Infinite = styled.div`
background-color: yellow;
display: flex;
justify-content: center;
align-items: center;
padding: 0.5em;
margin: 0.5em;
grid-row: 6 / span 1;

@media(min-width: 700px) {
  grid-column: 2/3;
  grid-row: 3/4;
}

@media(min-width: 1000px) {
  grid-column: 4/6;
  grid-row: 2/4;
}
`;

const Paragraph = styled.p`
`;

export default function AboutMeaganPage() {
  return (
  <Section>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Box>
  <Paragraph>THE FUTURE FEELS LIKE HOME</Paragraph>
  </Box>
  <Broken>
  <Paragraph>THE FUTURE IS BROKEN</Paragraph>
  </Broken>
  <Infinite>
  <Paragraph>THE CLOUD IS INFINITY</Paragraph>
  </Infinite>
  </Section>
  )
}
