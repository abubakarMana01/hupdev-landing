import React from "react";
import styled, { keyframes } from "styled-components";
import { Navbar } from "components";
import backgroundImg from "assets/images/home-bg.png";
import { colors } from "constants";
import { Fade } from "react-awesome-reveal";

export default function hero() {
  return (
    <Background>
      <Navbar />
      <Hero>
        <Spotlight>
          <Fade triggerOnce duration={1500} delay={800}>
            <h1>Building the Future</h1>
          </Fade>
          <Fade triggerOnce duration={1500} delay={1000}>
            <p>
              Providing creative digital experience to help brands reach their
              full potential.
            </p>
          </Fade>
        </Spotlight>
      </Hero>

      <Fade delay={1700}>
        <BottomScroll>
          <div />
        </BottomScroll>
      </Fade>
    </Background>
  );
}
const Background = styled.section`
  position: relative;
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const Hero = styled.div`
  position: relative;
  max-width: 1100px;
  margin-inline: auto;
  justify-content: center;
  height: calc(100vh - 120px);
  display: grid;
  place-items: center;
`;

const Spotlight = styled.div`
  color: ${colors.white};
  text-align: center;
  position: relative;
  top: -50px;
  margin-inline: 0.5rem;

  h1 {
    font-size: clamp(2.7rem, 7vw, 3.5rem);
  }

  p {
    max-width: 400px;
    font-size: clamp(1rem, 4vw, 1.1rem);
    margin-inline: auto;
    margin-top: 2rem;
  }
`;

const scroll = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0
  }

  20%, 70% {
    opacity: 1
  }

  100% {
    transform: translate(0, 120%);
    opacity: 0
  }
`;

const BottomScroll = styled.div`
  position: absolute;
  left: 50%;
  transform: tranlateX(-50%);
  bottom: 70px;
  width: 20px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${colors.white};
  display: flex;
  justify-content: center;
  padding-block: 4px;

  div {
    width: 8px;
    height: 8px;
    background-color: ${colors.white};
    border-radius: 50%;
    animation: ${scroll} 1500ms linear infinite;
  }
`;
