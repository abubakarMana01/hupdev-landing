import { colors } from "constants";
import React from "react";
import styled from "styled-components";

export default function BlobText({ text }) {
  return (
    <Container>
      <div />
      <span>{text}</span>
    </Container>
  );
}

const Container = styled.span`
  display: flex;
  align-items: center;

  div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.primary};
  }

  span {
    display: block;
    font-size: clamp(0.875rem, 5vw, 1rem);
    font-weight: 500;
    margin-left: -18px;
  }
`;
