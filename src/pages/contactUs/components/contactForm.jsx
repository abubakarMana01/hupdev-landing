import { colors } from 'constants'
import React from 'react'
import styled from 'styled-components'

export default function ContactForm() {
  return (
    <Wrapper>
      <Container>
        <h1>We reply quickly</h1>

        <FormContainer>
          <div>
            <label htmlFor='nameOrCompany'>Name or Company</label>
            <input type='text' placeholder='E.g, John Doe' />

            <label htmlFor='email'>Email address</label>
            <input type='text' placeholder='E.g, johndoe@company.com' />

            <label htmlFor='nameOrCompany'>Message</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Write your message here...'
            ></textarea>

            <SendButton>Send Message</SendButton>
          </div>

          <AboutProject>
            <h2>What category does your project belong to?</h2>

            <Categories>
              <CategoryContainer>
                <span>Website Development</span>
              </CategoryContainer>
              <CategoryContainer>
                <span>UI/UX Design</span>
              </CategoryContainer>
              <CategoryContainer>
                <span>Logo Design and Branding</span>
              </CategoryContainer>
              <br />
              <CategoryContainer>
                <span>Mobile Development</span>
              </CategoryContainer>
              <CategoryContainer>
                <span>3D Design</span>
              </CategoryContainer>
            </Categories>

            <BudgetContainer>
              <label htmlFor='budget'>
                What is your budget for the project?
              </label>
              <div>
                <span>$</span>
                <input type='number' id='budget' min={0} />
              </div>
            </BudgetContainer>
          </AboutProject>
        </FormContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
`

const Container = styled.div`
  min-height: 400px;
  width: 100%;
  max-width: 1024px;
  margin-block: 10rem;
  padding-inline: 3rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 28px;
  }

  input,
  textarea {
    margin-bottom: 1.5rem;
    border-radius: 8px;
    width: 100%;
    border: 1px solid ${colors.black};
    padding: 0.5em 0.75em;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 728px) {
    padding-inline: 1.5rem;
  }

  @media (max-width: 400px) {
    padding-inline: 1rem;
  }
`

const FormContainer = styled.form`
  margin: 2rem 0 2.5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  & > div {
    flex: 0.45;
  }

  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input {
    height: 35px;
    outline: none;
  }

  @media (max-width: 728px) {
    gap: 2rem;

    & > div {
      flex: 0.5;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }
`

const SendButton = styled.button`
  border: 0;
  background-color: ${colors.primary};
  padding: 0.85em 0.75em;
  border-radius: 25px;
  width: 100%;
  color: ${colors.white};
  font-weight: 700;
  cursor: pointer;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.9;
  }
`

const AboutProject = styled.div`
  h2 {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

const Categories = styled.div`
  margin-block: 1rem;
`

const CategoryContainer = styled.button`
  background-color: ${colors.grey};
  border: 0;
  cursor: pointer;
  padding: 0.875em 1rem;
  border-radius: 25px;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.7rem;
  transition: outline 200ms ease;

  &:hover {
    outline: 1.5px solid ${colors.primary};
  }

  &:focus {
    outline: 1.5px solid ${colors.primary};
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
`

const BudgetContainer = styled.form`
  input {
  }

  label {
    display: block;
  }

  div {
    position: relative;
  }

  div > span {
    position: absolute;
    right: 10px;
    top: 7.5px;
  }
`
