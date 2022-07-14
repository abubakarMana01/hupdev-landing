import React from "react";
import styled from "styled-components";
import { colors } from "constants";
import { ProjectWork } from "components";

export default function FeaturedWorks() {
  return (
    <>
      <Header style={{ minHeight: "50vh" }}>
        <Title>
          <TitleStroke>Featured</TitleStroke>
          <NormalTitle>Works</NormalTitle>
        </Title>

        <BottomFade />
      </Header>
      <ProjectsWrapper>
        <ProjectsContainer>
          <ProjectWork />
          <ProjectWork />
          <ProjectWork />
        </ProjectsContainer>

        <ProjectBottomOrangeLineDivider />
        <Divider />
      </ProjectsWrapper>
    </>
  );
}

const Header = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }
`;

const TitleStroke = styled.h1`
  color: ${colors.white};
  text-shadow: #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px,
    #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px;
  -webkit-font-smoothing: antialiased;
`;

const NormalTitle = styled.h1`
  transform: translateX(50%);
  color: ${colors.primary};

  @media (max-width: 400px) {
    transform: translateX(30%);
  }
`;

const BottomFade = styled.div`
  position: absolute;
  inset: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(${colors.white} 40%, rgba(0, 0, 0));
  z-index: -1;
`;

const ProjectsWrapper = styled.section`
  position: relative;
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const ProjectsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 1024px;
  margin-inline: auto;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectBottomOrangeLineDivider = styled.span`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 6px;
  width: 250px;
  background-color: ${colors.primary};

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Divider = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #333;
`;
