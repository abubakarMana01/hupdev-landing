import React from "react";
import styled from "styled-components";
import { colors } from "constants";
import { Fade } from "react-awesome-reveal";
import logo from "assets/images/logo.svg";
import BlobText from "./blobText";

export default function About({ title, details, cta, reverse = false }) {
  return (
    <Wrapper>
      <Fade triggerOnce>
        <Container reverse={reverse}>
          <Image>
            <img src={logo} alt="logo" />
          </Image>

          <Details>
            {title && <h2>{title}</h2>}

            {details.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            {cta && (
              <BlobContainer>
                <BlobText text="Our services" />
              </BlobContainer>
            )}
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
  padding-block: 2rem;
  padding-inline: 3rem;
  min-height: 100vh;

  @media (max-width: 400px) {
    padding-inline: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
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
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    font-weight: 700;
    margin-bottom: 1.275rem;
  }

  p {
    font-size: 1rem;
    font-size: clamp(0.875rem, 5vw, 1rem);
    font-weight: 500;
    line-height: 1.4rem;
    margin-bottom: 0.875rem;
    width: 100%;
    max-width: 500px;
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

const BlobContainer = styled.div`
  flex: 1;
`;
