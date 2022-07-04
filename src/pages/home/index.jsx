import React from "react";
import styled from "styled-components";
import About from "./components/sections/about";
import Connect from "./components/sections/connect";
import FeaturedWorks from "./components/sections/featuredWorks";

import Hero from "./components/sections/hero";
import Quote from "./components/sections/quote";

export default function Home() {
  return (
    <Wrapper>
      <Hero />

      <Quote
        text="The ones who are crazy enough to think they can change the world are the ones who end up changing it"
        author="Steve Jobs"
      />

      <About />

      <Quote
        text="Ideas without actions are worthless"
        author="Harvey Mackay"
      />

      <FeaturedWorks />

      <Quote
        text="Making your dream a reality could be just an action away"
        author="HupDev"
        darkVariant
      />

      <Connect />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  section {
    min-height: 100vh;
  }
`;
