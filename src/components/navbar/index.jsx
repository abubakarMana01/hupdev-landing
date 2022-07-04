import React from "react";
import styled from "styled-components";
import { colors } from "constants";
import logo from "assets/images/logo-sm.svg";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  return (
    <Container>
      <Fade triggerOnce>
        <Logo>
          <img src={logo} alt="logo" />

          <span>
            Hup<span style={{ color: colors.primary }}>Dev</span>
          </span>
        </Logo>
      </Fade>

      <Navlinks>
        <Fade triggerOnce direction="down">
          <li>
            <a href="/work">Work</a>
          </li>
        </Fade>
        <Fade triggerOnce direction="down" delay={200}>
          <li>
            <a href="/about">About</a>
          </li>
        </Fade>
        <Fade triggerOnce direction="down" delay={400}>
          <li>
            <a href="/services">Services</a>
          </li>
        </Fade>
        <Blob>
          <li>
            <Fade triggerOnce direction="down" delay={600}>
              <a href="/contact">Contact us</a>
            </Fade>
          </li>
        </Blob>
      </Navlinks>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  color: ${colors.white};
  padding-block: 2.5rem;

  max-width: 1100px;
  width: 100%;
  margin-inline: auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
  }

  & > span {
    font-size: clamp(1.7rem, 5vw, 2rem);
    font-weight: 700;
    margin-left: 0.5rem;
  }
`;

const Navlinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin-left: 2rem;

  a {
    color: ${colors.white};
    font-weight: 500;
    font-size: 1rem;
    transition: color 100ms ease;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 678px) {
    display: none;
  }
`;

const Blob = styled.div`
  li {
    z-index: 1;
    position: relative;
  }
  li::after {
    position: absolute;
    left: -20px;
    top: -10px;
    z-index: -1;
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${colors.primary};
  }
`;
