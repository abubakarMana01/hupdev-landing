import React from 'react'
import styled from 'styled-components'
import { AboutSection } from 'components'
import Connect from './components/sections/connect'
import FeaturedWorks from './components/sections/featuredWorks'

import Hero from 'components/hero'
import Quote from './components/sections/quote'

export default function Home() {
  return (
    <Wrapper>
      <Hero />

      <Quote
        text='The ones who are crazy enough to think they can change the world are the ones who end up changing it'
        author='Steve Jobs'
      />

      <AboutSection
        title='We are HupDev.'
        details={[
          'We are a remote-based creative digital agency with a zeal to build up cool and meaningful ideas, brands, systems, companies from ground up to success.',
          'Nothing changes without creation and innovation. We are here to build.',
          'Our passion is to make your desired vision a reality. With exceptional skills, sympathetic design, and a creative mindset, we can take on any challenge.',
        ]}
        cta='Our services'
      />

      <Quote
        text='Ideas without actions are worthless'
        author='Harvey Mackay'
      />

      <FeaturedWorks />

      <Quote
        text='Making your dream a reality could be just an action away'
        author='HupDev'
        darkVariant
      />

      <Connect />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  section {
    min-height: 100vh;
  }
`
