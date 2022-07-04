import React from "react";
import styled from "styled-components";
import { colors } from "constants";

export default function Connect() {
  return (
    <Container>
      <h1>Connect with us</h1>
      <button>Connect</button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
    text-align: center;
  }

  button {
    border: 1.5px solid ${colors.primary};
    background-color: transparent;
    padding: 0.5em 1.2em;
    border-radius: 6px;
    font-size: 1.175rem;
    font-weight: 500;
    color: ${colors.primary};
    margin-top: 1.5rem;
    cursor: pointer;
    transition: background-color 200ms ease;
  }

  button:hover {
    background-color: ${colors.black};
    border-color: ${colors.black};
  }
`;
