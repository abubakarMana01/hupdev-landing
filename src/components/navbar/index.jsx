import React from "react";
import styled from "styled-components";
import { colors } from "constants";
import logo from "assets/images/logo-sm.svg";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />

        <span>
          Hup<span style={{ color: colors.primary }}>Dev</span>
        </span>
      </Logo>

      <NavLinks>
        <Fade triggerOnce direction="down">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? colors.primary : colors.white,
              })}
            >
              Home
            </NavLink>
          </li>
        </Fade>
        <Fade triggerOnce direction="down">
          <li>
            <NavLink
              to="/work"
              style={({ isActive }) => ({
                color: isActive ? colors.primary : colors.white,
              })}
            >
              Work
            </NavLink>
          </li>
        </Fade>
        <Fade triggerOnce direction="down" delay={200}>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? colors.primary : colors.white,
              })}
            >
              About
            </NavLink>
          </li>
        </Fade>
        <Fade triggerOnce direction="down" delay={400}>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? colors.primary : colors.white,
              })}
            >
              Services
            </NavLink>
          </li>
        </Fade>
        <Blob>
          <Fade triggerOnce direction="down" delay={600}>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </Fade>
        </Blob>
      </NavLinks>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  color: ${colors.white};
  padding-block: 2.5rem;

  max-width: 1024px;
  width: 100%;
  margin-inline: auto;

  @media (max-width: 728px) {
    padding-inline: 1.5rem;
  }

  @media (max-width: 400px) {
    padding-inline: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;

  img {
    width: 50px;
  }

  & > span {
    font-size: clamp(1.7rem, 5vw, 2rem);
    font-weight: 700;
    margin-left: 0.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin-left: 2rem;
  z-index: 1;

  a {
    color: ${colors.white};
    font-weight: 500;
    font-size: 1rem;
    transition: color 100ms ease;

    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 700px) {
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
