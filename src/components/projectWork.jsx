import React from 'react'
import styled from 'styled-components'
import { colors } from 'constants'
import projectImg from 'assets/images/projects/project-img1.svg'
import { motion } from 'framer-motion'

export default function ProjectWork({ data, reverse = false }) {
  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'tween' }}
      layout
    >
      <Container reverse={reverse}>
        <ImageContainer>
          <img src={projectImg} alt='project' />
        </ImageContainer>

        <Details>
          <h3>{data.work}</h3>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <a href={data.link || '/'}>View full project</a>
        </Details>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`
  max-width: 1024px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 3rem;
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
  }

  @media (max-width: 500px) {
    padding-inline: 1rem;
  }
`

const Container = styled.article`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  flex: 1;
  max-height: 500px;
  width: 736px;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: fit-content;
    width: 100%;
    gap: 1.5rem;
  }
`

const ImageContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      height: 250px;
    }
  }
`

const Details = styled.div`
  flex: 0.55;
  display: flex;
  flex-direction: column;

  h3,
  p,
  a {
    font-size: 0.875rem;
    font-weight: 500;
    font-weight: 400;
    line-height: 1.3rem;
  }

  h3 {
    color: ${colors.primary};
  }

  h2 {
    font-weight: 700;
    font-size: 1.375rem;
    margin: 1.5rem 0;
  }

  p {
    margin-bottom: 1rem;
    max-width: 460px;
    line-height: 1.5rem;
  }

  a {
    display: block;
    margin-top: auto;

    padding: 0.7em 1em;
    width: fit-content;
    border: 1px solid ${colors.primary};
    border-radius: 4px;
    transition: all 200ms ease;

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }

  @media (max-width: 768px) {
    a {
      margin-top: 1rem;
    }

    h2 {
      margin-block: 1rem;
    }

    h3 {
    }
  }
`
