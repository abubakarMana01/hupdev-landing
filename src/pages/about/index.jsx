import React from "react";
import Hero from "components/hero";
import { AboutSection } from "components";
import Quote from "pages/home/components/sections/quote";
import OurTeam from "./components/ourTeam";

export default function About() {
  return (
    <>
      <Hero />

      <AboutSection
        details={[
          "We are a remote-based creative digital agency with a zeal to build up cool and meaningful ideas, brands, systems, companies from ground up to success.",
          "Nothing changes without creation and innovation. We are here to build.",
          "Our passion is to make your desired vision a reality. With exceptional skills, sympathetic design, and a creative mindset, we can take on any challenge.",
        ]}
      />

      <AboutSection
        details={[
          "We are a remote-based creative digital agency with a zeal to build up cool and meaningful ideas, brands, systems, companies from ground up to success.",
          "Nothing changes without creation and innovation. We are here to build.",
          "Our passion is to make your desired vision a reality. With exceptional skills, sympathetic design, and a creative mindset, we can take on any challenge.",
        ]}
        cta="Our services"
        reverse
      />

      <OurTeam />

      <Quote
        darkVariant
        text="Making your dream a reality could be just an action away"
        author="Fernand, CEO of Tor"
      />
    </>
  );
}
