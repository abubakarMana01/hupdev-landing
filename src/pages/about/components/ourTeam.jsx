import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "constants";
import downArrow from "assets/images/down-arrow.svg";

const TEAMDATA = [
  {
    name: "John Doe",
    role: "Graphic Designer",
    image: require("assets/images/members/team-member-1.png"),
  },
  {
    name: "Ante Don",
    role: "UI/UX Designer",
    image: require("assets/images/members/team-member-2.png"),
  },
  {
    name: "John Abdul",
    role: "Web Developer",
    image: require("assets/images/members/team-member-3.png"),
  },
  {
    name: "Yuppie Olli",
    role: "Mobile Developer",
    image: require("assets/images/members/team-member-4.png"),
  },
  {
    name: "Ante Don",
    role: "Mobile Developer",
    image: require("assets/images/members/team-member-5.png"),
  },
  {
    name: "Yuppie Olli",
    role: "Data Analyst",
    image: require("assets/images/members/team-member-6.png"),
  },
  {
    name: "John Doe",
    role: "UI/UX Designer",
    image: require("assets/images/members/team-member-7.png"),
  },
  {
    name: "John Abdul",
    role: "Graphic Designer",
    image: require("assets/images/members/team-member-8.png"),
  },
];

export default function OurTeam() {
  return (
    <Wrapper>
      <Header>
        <h1>Meet our team</h1>
        <ArrowContainer>
          <img src={downArrow} alt="down-arrow" />
        </ArrowContainer>
      </Header>

      <Container>
        <TeamContainer>
          {TEAMDATA.map((member, index) => (
            <Member key={index}>
              <ImageContainer>
                <img src={member.image} alt="Member" />
              </ImageContainer>
              <MemberInfo>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </MemberInfo>
            </Member>
          ))}
        </TeamContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Header = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    text-align: center;
  }
`;

const scrollDown = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }

  40%, 70% {
    opacity: 1;

  }

  100% {
    transform: translate(0, 80%);
    opacity: 0;

  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${scrollDown} 2500ms linear infinite;
`;

const Container = styled.section`
  min-height: 100vh;
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  padding-block: 5rem;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1024px;
  margin-inline: auto;
  height: 100%;
`;

const Member = styled.article`
  color: ${colors.white};
  display: grid;
  place-items: center;
  gap: 1.5rem;
`;

const ImageContainer = styled.div`
  background-color: ${colors.grey};
  width: 200px;
  height: 200px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberInfo = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 0.25rem;
    font-weight: 600;
  }

  p {
    opacity: 0.7;
    font-size: clamp(0.875rem, 1.1vw, 1rem);
  }
`;
