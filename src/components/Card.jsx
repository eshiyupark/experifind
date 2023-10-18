import React from 'react'
import Star from '/images/star.png'

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`/images/${props.item.coverImg}`} className='card-img'></img>
      <div className='card-rating'>
        <img src={Star} className='card-star'/>
        <p className='card-star-rating'>{props.item.stats.rating}</p>
        <p className='card-star-count'>({props.item.stats.reviewCount}) - {props.item.location}</p>
      </div>
      <div className='card-title'>
        <p>{props.item.title}</p>
      </div>
      <div className='card-price'>
        <p>From ${props.item.price}</p>
      </div>
    </div>
  )
}
