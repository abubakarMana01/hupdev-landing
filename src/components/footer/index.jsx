import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";
import footerBg from "../../assets/images/logo-sm.svg";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <h2>Let's build something great together</h2>

        <LetsGoContainer>
          <div />
          <p>Let's go</p>
        </LetsGoContainer>

        <BottomContainer>
          <LeftContainer>
            <p>Drop us a line and we'll get in touch</p>
            <EmailAndContact href="mailto:hello@hupdev.com">
              hello@hupdev.com
            </EmailAndContact>

            <MadebyContainer>
              Made with from <span>HupDev</span>
            </MadebyContainer>
          </LeftContainer>

          <RightContainer>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
            </ul>
          </RightContainer>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${colors.black};
  min-height: 300px;
  color: ${colors.white};
  padding-block: 3rem;
  background-image: url(${footerBg});
  background-repeat: no-repeat;
  background-position: bottom right;
`;

const Container = styled.div`
  max-width: 1024px;
  margin-inline: auto;
  padding-inline: 3rem;

  h2 {
    font-weight: 600;
    font-size: clamp(1.25rem, 4vw, 1.5rem);
  }

  @media (max-width: 728px) {
    padding-inline: 1.5rem;
  }

  @media (max-width: 400px) {
    padding-inline: 1rem;
  }
`;

const LetsGoContainer = styled.div`
  margin-block: 3rem;
  display: flex;
  align-items: center;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.primary};
  }

  p {
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: -15px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 2rem;

  @media (max-width: 520px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const LeftContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.875rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: space-between;
  gap: 1.5rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }

  a {
    display: block;
    font-size: 0.875rem;
    color: ${colors.white};
    transition: color 200ms ease;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 520px) {
    justify-content: flex-start;
    gap: 3.5rem;

    ul {
      gap: 1rem;
    }
  }
`;

const EmailAndContact = styled.a`
  display: block;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${colors.primary};
`;

const MadebyContainer = styled.p`
  margin-top: auto;

  span {
    color: ${colors.primary};
  }

  @media (max-width: 520px) {
    margin-top: 1rem;
  }
`;
