import React from 'react'
import "/images/shops.png"
import "/images/shoe_image.png"

const Hero = () => {
  return (
    <main className='hero container'>
    <div className='hero-content'>
      <h1>YOUR FEEET DESERVE THE BEST</h1>
      <p> YOUR FEEET DESERVE THE BEST.WE ARE HERE TO HELP YOU WITH YOUR COMFORT</p>
  <div className='hero-btn'>
    <button>Shop Now</button>
    <button className='second-btn'>Category</button>
  </div>
  <div className='Shop'>
    <p>Available</p>
    <div className='brand-icon'>
        <img src='/images/shops.png'></img>
    </div>
  </div>
      </div>
      <div className='hero-img'>
<img src='/images/shoe_image.png'/>
      </div>
      </main>
      
  )
}

export default Hero

