import React from "react";
import Hero from "components/hero";
import styled from "styled-components";
import { colors } from "constants";
import quoteAuthorImg from "assets/images/members/team-member-1.png";
import ContactForm from "./components/contactForm";

export default function ContactUs() {
  return (
    <>
      <Hero />

      <PromoWrapper>
        <PromoContainer>
          <PromoImage>
            <ImageContainer>
              <img src={quoteAuthorImg} alt="author" />
            </ImageContainer>
          </PromoImage>
          <PromoDetails>
            <h3>
              “Providing creative digital experience to help brands reach their
              full potential. Providing creative digital experience to help
              brands reach their full potential.”
            </h3>
            <span>- John Doe</span>
          </PromoDetails>
        </PromoContainer>
      </PromoWrapper>

      <ContactForm />
    </>
  );
}

const PromoWrapper = styled.div`
  padding: 1.5rem;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};

  h3 {
    font-weight: 500;
    font-size: 1rem;
  }
`;

const PromoContainer = styled.article`
  width: 100%;
  max-width: 700px;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.grey};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PromoImage = styled.div``;

const PromoDetails = styled.div`
  h3 {
    font-weight: 400;
    font-size: 0.9rem;
    text-align: center;
  }

  span {
    display: block;
    font-size: 0.875rem;
    opacity: 0.7;
    text-align: center;
    margin-top: 0.7rem;
  }
`;
