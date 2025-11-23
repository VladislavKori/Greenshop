import React from 'react'
import './slide2.css'

// images
import productView1 from './images/product.png';

function slide2() {
  return (
    <div className='slide2'>
      <div className='slide2__content'>
        <h4 className='slide2__subtitle'>Welcome to GreenShop</h4>
        <h1 className='slide2__title'>Let’s Make a Better <span className='slide2__title_selection'>Planet</span></h1>
        <p className='slide2__description'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <a className='slide2__link' href="/" >SHOP NOW</a>
      </div>
      <div className='slide2__img-container'>
        <img className='slide2__img' src={productView1} />
      </div>
    </div>
  )
}

export default slide2