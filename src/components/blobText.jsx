import { colors } from 'constants'
import React from 'react'
import styled from 'styled-components'

export default function BlobText({ text, variant = 'light' }) {
  return (
    <Container variant={variant}>
      <span />
      {text}
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: clamp(0.875rem, 5vw, 1rem);
  font-weight: 500;
  position: relative;
  padding: 0.7em;
  padding-left: 1.2em;
  z-index: 9;
  overflow: hidden;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ variant }) => (variant === 'dark' ? '#000' : '#fff')};

  span {
    position: absolute;
    left: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 40px;
    border-radius: 50%;
    background-color: ${colors.primary};
    z-index: -1;
    transform-origin: 10%;
    transition: transform 700ms ease;
  }

  &:hover span {
    transition: transform 900ms ease;
    transform: scale(5);
  }
`
