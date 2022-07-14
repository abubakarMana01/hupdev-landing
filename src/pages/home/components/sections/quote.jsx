import React from "react";
import styled from "styled-components";
import quotationMark from "assets/images/quotation-mark.svg";
import quotationMarkWhite from "assets/images/quotation-mark-white.svg";
import { Fade } from "react-awesome-reveal";
import { colors } from "constants";

export default function Quote({ author, text, darkVariant = false }) {
  return (
    <Wrapper darkVariant={darkVariant}>
      <Container>
        <Fade
          duration={1500}
          triggerOnce
          style={{ display: "grid", placeItems: "center" }}
        >
          <img
            src={darkVariant ? quotationMarkWhite : quotationMark}
            alt="quotes"
          />
        </Fade>
        <Fade triggerOnce direction="up" duration={1500}>
          <h2 style={{ color: darkVariant ? colors.white : colors.black }}>
            {text}
          </h2>
        </Fade>

        <Fade triggerOnce delay={500}>
          <p style={{ color: darkVariant ? colors.white : colors.black }}>
            - {author}
          </p>
        </Fade>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: ${({ darkVariant }) =>
    darkVariant ? colors.black : colors.white};
  display: flex;
  min-height: 100vh;
`;

const Container = styled.div`
  flex: 1;
  max-width: 700px;
  margin-inline: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    height: 45px;
  }

  h2 {
    font-size: clamp(1.875rem, 5vw, 2.25rem);
    font-weight: 600;
    text-align: center;
    margin-block: 3rem;
    font-style: italic;
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.5;
  }
`;
