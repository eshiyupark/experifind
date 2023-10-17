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
      coverImg = {item.coverImg}
      rating = {item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      location = {item.location}
      title = {item.title}
      price = {item.price}
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
