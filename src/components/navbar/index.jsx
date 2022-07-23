import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from 'constants'
import logo from 'assets/images/logo-sm.svg'
import { Fade } from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom'
import { BlobText } from 'components'

export default function Navbar() {
  const navRef = useRef()
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    window.pageYOffset
  )
  const [useBackground, setUseBackground] = useState(false)

  window.onscroll = () => {
    const currentScrollPosition = window.pageYOffset
    currentScrollPosition === 0
      ? setUseBackground(false)
      : setUseBackground(true)
    if (previousScrollPosition > currentScrollPosition) {
      setPreviousScrollPosition(currentScrollPosition)
    } else {
      setUseBackground(true)
      setPreviousScrollPosition(currentScrollPosition)
    }
  }

  return (
    <Wrapper useBackground={useBackground} ref={navRef}>
      <Container>
        <Logo>
          <img src={logo} alt='logo' />

          <span>
            Hup<span style={{ color: colors.primary }}>Dev</span>
          </span>
        </Logo>

        <NavLinks>
          <Fade triggerOnce direction='down'>
            <li>
              <NavLink
                to='/'
                style={({ isActive }) => ({
                  color: isActive ? colors.primary : colors.white,
                })}
              >
                Home
              </NavLink>
            </li>
          </Fade>
          <Fade triggerOnce direction='down'>
            <li>
              <NavLink
                to='/work'
                style={({ isActive }) => ({
                  color: isActive ? colors.primary : colors.white,
                })}
              >
                Work
              </NavLink>
            </li>
          </Fade>
          <Fade triggerOnce direction='down' delay={200}>
            <li>
              <NavLink
                to='/about'
                style={({ isActive }) => ({
                  color: isActive ? colors.primary : colors.white,
                })}
              >
                About
              </NavLink>
            </li>
          </Fade>
          <Fade triggerOnce direction='down' delay={400}>
            <li>
              <NavLink
                to='/services'
                style={({ isActive }) => ({
                  color: isActive ? colors.primary : colors.white,
                })}
              >
                Services
              </NavLink>
            </li>
          </Fade>
          <Fade triggerOnce direction='down' delay={600}>
            <li>
              <NavLink to='/contact'>
                <BlobText text='Contact us' />
              </NavLink>
            </li>
          </Fade>
        </NavLinks>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ useBackground }) =>
    useBackground ? 'rgba(0, 0, 0, 1)' : 'transparent'};
  box-shadow: ${({ useBackground }) =>
    useBackground ? '0 5px 16px -4px rgba(4, 4, 4, 0.75)' : 'none'};

  transition: box-shadow 300ms ease, background-color 300ms ease,
    transform 300ms ease;
`

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3rem;
  color: ${colors.white};
  padding-block: 1.5rem;

  max-width: 1024px;
  width: 100%;
  margin-inline: auto;

  @media (max-width: 728px) {
    padding-inline: 1.5rem;
  }

  @media (max-width: 400px) {
    padding-inline: 1rem;
  }
`

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
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: 2rem;
  z-index: 1;

  a {
    color: ${colors.white};
    font-weight: 500;
    font-size: 1rem;
    transition: color 100ms ease;

    &:hover {
      color: ${colors.primary} !important;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`
