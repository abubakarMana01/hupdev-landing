import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Hero from 'components/hero'
import { ProjectWork } from 'components'
import { colors } from 'constants'

const WORKS_DATA = [
  {
    id: '2',
    title: 'Nigerian B2C E-commerce 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nobis nesciunt reiciendis doloribus fuga harum laboriosam deserunt sit cupiditate mollitia quam suscipit dolorum quos dolorem cumque officia temporibus. Reiciendis, error?',
    work: 'Mobile and Web Development',
    category: ['development'],
    image: '/',
    link: '/',
  },
  {
    id: '3',
    title: 'Nigerian B2C E-commerce Brand 3',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate est magnam facilis ad sit atque consectetur nesciunt et praesentium reiciendis, doloremque quibusdam iste quidem vero consequuntur corrupti. Eveniet accusamus excepturi rerum voluptates saepe beatae repellat eligendi reprehenderit, nam, aspernatur alias dolore repellendus deserunt vero! Debitis.',
    work: 'UI/UX Design',
    category: ['design'],
    image: '/',
    link: '/',
  },
  {
    id: '1',
    title: 'Nigerian B2C E-commerce Brand 1',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate est magnam facilis ad sit atque consectetur nesciunt et praesentium reiciendis, doloremque quibusdam iste quidem vero consequuntur corrupti. Eveniet accusamus excepturi rerum voluptates saepe beatae repellat eligendi reprehenderit, nam, aspernatur alias dolore repellendus deserunt vero! Debitis.',
    work: 'UI/UX Design, Mobile and Web Development',
    category: ['development', 'design'],
    image: '/',
    link: '/',
  },
  {
    id: '4',
    title: 'Nigerian B2C E-commerce Brand 4',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate est magnam facilis ad sit atque consectetur nesciunt et praesentium reiciendis, doloremque quibusdam iste quidem vero consequuntur corrupti. Eveniet accusamus excepturi rerum voluptates saepe beatae repellat eligendi reprehenderit, nam, aspernatur alias dolore repellendus deserunt vero! Debitis.',
    work: 'UI/UX Design, Mobile and Web Development',
    category: ['development', 'design'],
    image: '/',
    link: '/',
  },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredWorks, setFilteredWorks] = useState([])

  useEffect(() => {}, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredWorks([...WORKS_DATA])
    } else {
      const filter = WORKS_DATA.filter((work) =>
        work.category.includes(activeFilter)
      )
      setFilteredWorks(filter)
    }
  }, [activeFilter])

  return (
    <>
      <Hero />

      <FilterWrapper>
        <Filters>
          <li
            style={{
              backgroundColor:
                activeFilter === 'all' ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter('all')}
          >
            All
          </li>
          <li
            style={{
              backgroundColor:
                activeFilter === 'development' ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter('development')}
          >
            Development
          </li>
          <li
            style={{
              backgroundColor:
                activeFilter === 'design' ? colors.primary : colors.black,
            }}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </li>
        </Filters>
      </FilterWrapper>

      <Projects>
        {filteredWorks.map((work, i) => (
          <ProjectWork key={work.id} data={work} reverse={i % 2 !== 0} />
        ))}
      </Projects>
    </>
  )
}

const Projects = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
`

const FilterWrapper = styled.section`
  height: 100px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
`
