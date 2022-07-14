import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "assets/images/services-bg.svg";
import { Fade } from "react-awesome-reveal";
import { colors } from "constants";
import roundEllipse from "assets/images/round-ellipse.svg";

const servicesOffered = [
  {
    title: "Web Development",
    details:
      "Web Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential.",
  },
  {
    title: "Artificial Intelligence",
    details:
      "Artificial Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential.",
  },
  {
    title: "Branding",
    details:
      "Branding Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential. Providing creative digital experience to help brands reach their full potential.",
  },
];

export default function OfferedService() {
  const [currentTab, setCurrentTab] = useState(0);
  const [nextTab, setNextTab] = useState(1);

  const handleTabChange = () => {
    setCurrentTab((prev) => {
      if (prev === servicesOffered.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
    setNextTab((prev) => {
      if (prev === servicesOffered.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        <>
          <h1>{servicesOffered[currentTab].title}</h1>
          <h2 onClick={handleTabChange}>{servicesOffered[nextTab].title}</h2>
          <img src={roundEllipse} alt="ellipse" />
        </>
      </Header>

      <Container>
        <LeftContainer>
          <Fade triggerOnce duration={1500} delay={800}>
            <ImageContainer>
              <img src={bgImage} alt="hero" />
            </ImageContainer>
          </Fade>
        </LeftContainer>

        <DetailsContainer>
          <Fade triggerOnce duration={1500} delay={800}>
            <p>{servicesOffered[currentTab].details}</p>
          </Fade>
        </DetailsContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding-inline: 3rem;

  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`;

const Container = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1024px;
  margin-inline: auto;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
  p {
    width: 100%;
    max-width: 400px;
    margin-top: 2rem;
    margin-inline: 0;
    line-height: 1.4rem;
  }

  @media (max-width: 728px) {
    flex-direction: column;
    text-align: center;

    p {
      margin-inline: auto;
      margin-top: 1rem;
    }
  }
`;

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  gap: 1.5rem;
  min-height: 50px;

  h1 {
    white-space: nowrap;
    font-size: clamp(1.3rem, 4vw, 2rem);
    font-weight: 700;
  }
  h2 {
    white-space: nowrap;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-left: auto;
    font-weight: 500;
    opacity: 0.75;
    cursor: pointer;
    margin-right: 10%;
    z-index: 1;
  }

  img {
    width: 45px;
    height: 45px;
    position: absolute;
    right: 0;
    z-index: 0;
  }

  @media (max-width: 470px) {
    overflow-x: scroll;

    img {
      opacity: 0.4;
    }
    h2 {
      margin-right: 0;
    }
  }
`;

const LeftContainer = styled.section`
  flex: 0.5;
  display: flex;
  align-items: center;

  @media (max-width: 728px) {
    flex: 1;
  }
`;

const ImageContainer = styled.div`
  width: 90%;
  margin-left: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 728px) {
    width: 100%;

    img {
      height: 200px;
    }
  }

  @media (max-width: 400px) {
    img {
      height: 170px;
    }
  }
`;

const DetailsContainer = styled.div`
  flex: 0.5;

  p {
    line-height: 1.5rem;
  }

  @media (max-width: 728px) {
    flex: 1;
  }
`;
