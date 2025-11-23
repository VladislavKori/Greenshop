import React from 'react'
import './slide1.css'

// images
import productView1 from './images/product.png';

function Slide1() {
  return (
    <div className='slide1'>
      <div className='slide1__content'>
        <h4 className='slide1__subtitle'>Welcome to GreenShop</h4>
        <h1 className='slide1__title'>Let’s Make a Better <span className='slide1__title_selection'>Planet</span></h1>
        <p className='slide1__description'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <a className='slide1__link' href="/" >SHOP NOW</a>
      </div>
      <div className='slide1__img-container'>
        <img className='slide1__img' src={productView1} />
      </div>
    </div>
  )
}

export default Slide1