import React from 'react'
import './slide3.css'

// images
import productView1 from './images/product.png';

function slide3() {
  return (
    <div className='slide3'>
      <div className='slide3__content'>
        <h4 className='slide3__subtitle'>Welcome to GreenShop</h4>
        <h1 className='slide3__title'>Let’s Make a Better <span className='slide3__title_selection'>Planet</span></h1>
        <p className='slide3__description'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <a className='slide3__link' href="/" >SHOP NOW</a>
      </div>
      <div className='slide3__img-container'>
        <img className='slide3__img' src={productView1} />
      </div>
    </div>
  )
}

export default slide3