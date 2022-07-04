import React from "react";
import styled from "styled-components";
import { colors } from "constants";
import { Fade } from "react-awesome-reveal";
import logo from "assets/images/logo.svg";

export default function About() {
  return (
    <Wrapper>
      <Fade triggerOnce>
        <Container>
          <Image>
            <img src={logo} alt="logo" />
          </Image>

          <Details>
            <h2>We are HupDev.</h2>
            <p>
              We are a remote-based creative digital agency with a zeal to build
              up cool and meaningful ideas, brands, systems, companies from
              ground up to success.
              <br />
              <br />
              Nothing changes without creation and innovation. We are here to
              build.
              <br />
              <br />
              Our passion is to make your desired vision a reality. With
              exceptional skills, sympathetic design, and a creative mindset, we
              can take on any challenge.
            </p>

            <div>
              <div />
              <p>Our services</p>
            </div>
          </Details>
        </Container>
      </Fade>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.05);
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1100px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 678px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 450px;
  }

  @media (max-width: 678px) {
    margin-bottom: 2rem;

    img {
      max-width: 250px;
    }
  }
`;

const Details = styled.div`
  flex: 0.5;

  h2 {
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    font-size: clamp(0.875rem, 5vw, 1rem);
    font-weight: 500;
  }

  & > div {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    p {
      margin-left: -20px;
      font-weight: 500;
    }

    div {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${colors.primary};
    }
  }

  @media (max-width: 678px) {
    text-align: center;

    & > div {
      justify-content: center;
    }
  }
`;
