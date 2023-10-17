import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img = "katie-zaferes.png"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Swimming lessons with Katie"
        price = {136}
      />
    </>
  )
}
