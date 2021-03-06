import React, { useEffect } from 'react'
import Hero from 'components/hero'
import Quote from 'pages/home/components/sections/quote'
import OfferedService from './components/offeredService'

export default function Services() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Hero />

      <OfferedService />

      <Quote
        text='The best preparation for good work tomorrow is to do good work today'
        author='Elbert Hubbard'
        darkVariant
      />
    </>
  )
}
