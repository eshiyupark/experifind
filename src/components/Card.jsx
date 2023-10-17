import React from 'react'
import Star from '/images/star.png'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`/images/${props.coverImg}`} className='card-img'></img>
      <div className='card-rating'>
        <img src={Star} className='card-star'/>
        <p className='card-star-rating'>{props.rating}</p>
        <p className='card-star-count'>({props.reviewCount}) - {props.location}</p>
      </div>
      <div className='card-title'>
        <p>{props.title}</p>
      </div>
      <div className='card-price'>
        <p>From ${props.price}</p>
      </div>
    </div>
  )
}
