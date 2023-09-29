import React from 'react'
import PhotoGrid from '../assets/photo-grid.png'

export default function Hero() {
  return (
    <div className='hero-content'>
      <img src={PhotoGrid} className='hero-img'></img>
      <div className='hero-text'>
        <h2>Discover Experiences</h2>
        <p>Find and dive into unique experiences led by one of a kind hosts, wherever you are.</p>
      </div>
    </div>
  )
}
