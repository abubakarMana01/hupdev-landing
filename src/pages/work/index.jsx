import React, { useState } from "react";
import styled from "styled-components";

import Hero from "components/hero";
import { ProjectWork } from "components";
import { colors } from "constants";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <Hero />

      <FilterWrapper>
        <Filters>
          <li
            style={{
              backgroundColor:
                activeFilter === "all" ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter("all")}
          >
            All
          </li>
          <li
            style={{
              backgroundColor:
                activeFilter === "development" ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter("development")}
          >
            Development
          </li>
          <li
            style={{
              backgroundColor:
                activeFilter === "design" ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </li>
        </Filters>
      </FilterWrapper>

      <Projects>
        <ProjectWork />
        <ProjectWork reverse />
        <ProjectWork />
        <ProjectWork reverse />
        <ProjectWork />
      </Projects>
    </>
  );
}

const Projects = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
`;

const FilterWrapper = styled.section`
  height: 100px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filters = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  li {
    padding: 0.7rem 1.05rem;
    background-color: ${colors.primary};
    border-radius: 1.5rem;
    cursor: pointer;
    color: ${colors.white};
    transition: opacity 200ms ease;
  }

  li:hover {
    opacity: 0.7;
  }
`;
