import React from 'react'
import SwimmerPhoto from '../assets/katie-zaferes.png'
import Star from '../assets/star.png'

export default function Card() {
  return (
    <div className='card-container'>
      <div className='card'>
        <img src={SwimmerPhoto} className='card-img'></img>
        <div className='card-rating'>
          <img src={Star} className='card-star'/>
          <p className='card-star-rating'>5.0</p>
          <p className='card-star-count'>(6) - USA</p>
        </div>
        <div className='card-title'>
          <p>Swimming lessons with Katie</p>
        </div>
        <div className='card-price'>
          <p>From $136</p>
        </div>
      </div>
    </div>
  )
}
