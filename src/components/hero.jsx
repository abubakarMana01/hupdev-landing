import React from 'react'
import styled, { keyframes } from 'styled-components'
import { BlobText } from 'components'
import homeBackgroundImg from 'assets/images/home-bg.png'
import workBackgroundImg from 'assets/images/work-bg.png'
import { colors } from 'constants'
import { Fade } from 'react-awesome-reveal'
import { useLocation } from 'react-router-dom'
import quotationMarkWhite from 'assets/images/quotation-mark-white.svg'
import servicesBackgroundImg from 'assets/images/services-bg.svg'

export default function HeroSection() {
  const { pathname } = useLocation()

  return (
    <Background pathname={pathname}>
      <Hero pathname={pathname}>
        <HomeAndWorkSpotlight pathname={pathname}>
          {pathname === '/' && (
            <>
              <Fade triggerOnce duration={1500} delay={800}>
                <h1>Building the Future</h1>
              </Fade>
              <Fade triggerOnce duration={1500} delay={1000}>
                <Subtitle>
                  Providing creative digital experience to help brands reach
                  their full potential.
                </Subtitle>
              </Fade>
            </>
          )}

          {pathname === '/work' && (
            <>
              <Fade triggerOnce duration={1500} delay={800}>
                <img
                  style={{ marginBottom: '1rem' }}
                  src={quotationMarkWhite}
                  alt='quotes'
                />
              </Fade>
              <Fade triggerOnce duration={1500} delay={800}>
                <h1>
                  The best preparation for good work tomorrow is to do good work
                  today
                </h1>
              </Fade>
              <Fade triggerOnce duration={1500} delay={1000}>
                <QuoteAuthor>- Elbert Hubbard</QuoteAuthor>
              </Fade>
            </>
          )}

          {pathname === '/about' && (
            <AboutandServicesSpotlight>
              <div>
                <Fade triggerOnce duration={1500} delay={800}>
                  <h1>Building the future</h1>
                  <p>
                    Providing creative digital experience to help brands reach
                    their full potential. Providing creative digital experience
                    to help brands reach their full potential.
                  </p>
                  <Blob>
                    <BlobText text='Play video' variant='light' />
                  </Blob>
                </Fade>
              </div>
            </AboutandServicesSpotlight>
          )}

          {(pathname === '/services' || pathname === '/contact') && (
            <AboutandServicesSpotlight>
              <div style={{ flex: 0.5 }}>
                <Fade triggerOnce duration={1500} delay={800}>
                  <h1>
                    Build with <span>HupDev</span>
                  </h1>
                  <p>
                    Providing creative digital experience to help brands reach
                    their full potential. Providing creative digital experience
                    to help brands reach their full potential. Providing
                    creative digital experience to help brands reach their full
                    potential.
                  </p>
                </Fade>
              </div>

              <ServicesHeroBg>
                <Fade triggerOnce duration={1500} delay={800}>
                  <ServicesBackground>
                    <img src={servicesBackgroundImg} alt='hero' />
                  </ServicesBackground>
                </Fade>
              </ServicesHeroBg>
            </AboutandServicesSpotlight>
          )}
        </HomeAndWorkSpotlight>
      </Hero>

      <Fade
        triggerOnce
        duration={1500}
        delay={1200}
        style={{
          position: 'absolute',
          zIndex: 3,
          left: '50%',
          transform: 'tranlateX(-50%)',
          bottom: window.innerWidth > 400 ? 30 : 70,
        }}
      >
        <BottomScroll>
          <div />
        </BottomScroll>
      </Fade>
    </Background>
  )
}
const Background = styled.section`
  position: relative;
  background-image: ${({ pathname }) =>
    pathname === '/' || pathname === '/about'
      ? `url(${homeBackgroundImg})`
      : pathname === '/work'
      ? `url(${workBackgroundImg})`
      : 'none'};
  background-color: ${colors.black};
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ pathname }) =>
      pathname === '/work' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0)'};
    z-index: 0;
  }
`

const Hero = styled.div`
  position: relative;
  max-width: 1024px;
  margin-inline: auto;
  height: 100vh;
  display: flex;
  justify-content: ${({ pathname }) =>
    pathname === '/about'
      ? 'flex-start'
      : pathname === '/services'
      ? 'space-between'
      : 'center'};
  align-items: center;

  @media (max-width: 728px) {
    margin-inline: 3rem;
  }

  @media (max-width: 400px) {
    margin-inline: 1rem;
  }
`

const HomeAndWorkSpotlight = styled.div`
  color: ${colors.white};
  text-align: center;
  position: relative;
  /* top: ${({ pathname }) =>
    pathname === '/about' || pathname === '/services' || pathname === '/contact'
      ? '0'
      : '-50px'}; */
  z-index: 1;
  width: 100%;

  h1 {
    font-size: clamp(1.7rem, 6vw, 3.5rem);

    span {
      color: ${colors.primary};
    }
  }

  p {
    max-width: 400px;
    margin-inline: auto;
    line-height: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 728px) {
    margin-inline: auto;
  }
`

const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 1.1rem);
`

const scroll = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0
  }

  40%, 70% {
    opacity: 1
  }

  100% {
    transform: translate(0, 120%);
    opacity: 0
  }
`

const BottomScroll = styled.div`
  width: 20px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${colors.white};
  display: flex;
  justify-content: center;
  padding-block: 4px;
  z-index: 2;

  div {
    width: 8px;
    height: 8px;
    background-color: ${colors.white};
    border-radius: 50%;
    animation: ${scroll} 1500ms linear infinite;
  }
`

const QuoteAuthor = styled.p`
  opacity: 0.7;
  font-size: clamp(0.875rem, 2.5vw, 1.1rem);
`

const AboutandServicesSpotlight = styled.article`
  text-align: left;
  position: relative;
  margin-inline: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: clamp(1.75rem, 4vw, 3rem);
  }
  p {
    width: 100%;
    max-width: 400px;
    margin-top: 2rem;
    margin-inline: 0;
  }

  @media (max-width: 728px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-inline: 1.5rem;

    p {
      margin-inline: auto;
      margin-top: 1rem;
    }
  }

  @media (max-width: 400px) {
    margin-inline: 1rem;
  }
`

const Blob = styled.div`
  margin-top: 2rem;
  width: fit-content;

  @media (max-width: 728px) {
    margin-inline: auto;
  }
`

const ServicesHeroBg = styled.section`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ServicesBackground = styled.div`
  width: 90%;
  margin-left: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 728px) {
    img {
      height: 200px;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 150px;
    }
  }

  @media (max-width: 300px) {
    img {
      display: none;
    }
  }
`
