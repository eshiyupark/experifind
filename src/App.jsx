import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from './data.js'

export default function App() {
  const cardElements = data.map((item) =>
    <Card
      key = {item.id}
      item = {item}
    />
  )

  return (
    <>
      <Navbar />
      <Hero />
      <div className='card-container'>
        {cardElements}
      </div>
    </>
  )
}
