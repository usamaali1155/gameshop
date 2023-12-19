import React from 'react'

function CarouselItem({ item }) {
  return (
    <div className='carousel-item'>
        <a href={item.link}>
            <img className='carousel-img' src={item.image} alt='carousel-img'/>
        </a>
    </div>
  )
}

export default CarouselItem