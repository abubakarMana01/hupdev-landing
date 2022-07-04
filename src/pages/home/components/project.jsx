import React from "react";
import styled from "styled-components";
import { colors } from "constants";

export default function Project() {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="project"
        />
      </ImageContainer>

      <Details>
        <h3>UI/UX Design, Mobile and Web Development</h3>
        <h2>Nigerian B2C E-commerce Brand</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          est magnam facilis ad sit atque consectetur nesciunt et praesentium
          reiciendis, doloremque quibusdam iste quidem vero consequuntur
          corrupti. Eveniet accusamus excepturi rerum voluptates saepe beatae
          repellat eligendi reprehenderit, nam, aspernatur alias dolore
          repellendus deserunt vero! Debitis, iste? Illum nisi veniam ad vel
          sequi ut ullam fugit rem, tempora, enim aspernatur dolorum iusto, quae
          eos rerum nihil repellat suscipit harum. Ipsa nostrum atque sunt
          porro, animi in architecto quasi et obcaecati ducimus sit.
        </p>
        <a href="/">View full project</a>
      </Details>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex: 1;
  margin-block: auto;
  max-height: 450px;
  width: 736px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: fit-content;
  }
`;

const ImageContainer = styled.div`
  flex: 0.45;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

const Details = styled.div`
  flex: 0.5;
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
      margin-block: 2rem;
    }

    h3 {
      margin-top: 1.5rem;
    }
  }
`;
