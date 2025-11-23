import {useState} from 'react';

import stars from '@ui/assets/productsShortDescription/stars.png'
import Like from '@ui/assets/productsShortDescription/like.svg?react';

import Plus from '@ui/assets/productsShortDescription/plus.svg?react';
import Minus from '@ui/assets/productsShortDescription/minus.svg?react';

import facebook from '@ui/assets/productsShortDescription/Facebook.png';
import linkedin from '@ui/assets/productsShortDescription/Linkedin.png';
import message from '@ui/assets/productsShortDescription/Message.png';
import twitter from '@ui/assets/productsShortDescription/Twitter.png';

import './style.css'

function Manage() {

  const [countProduct, setCountProduct] = useState(1);

  return (
    <div className="manage">

      <div className="manage__header">

        <div className="manage__main-info">
          <h1 className="manage__title">Barberton Daisy</h1>
          <p className="manage__price">$119.00</p>
        </div>

        <div className="manage__reviews">
          <img className="manage__reviews-stars" src={stars} alt="reviews" />
          <p className="manage__reviews-text">19 Customer Review</p>
        </div>

      </div>

      <div className="manage__shortDescription">
        <h2 className="manage__min-title">Short Description:</h2>
        <p className="manage__descr-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
      </div>

      <div className="manage__size">
        <h2 className="manage__min-title">Size:</h2>
        <ul className="manage__size-list">
            <li className="manage__size-item manage__size-item_active">S</li>
            <li className="manage__size-item">M</li>
            <li className="manage__size-item">L</li>
            <li className="manage__size-item">XL</li>
        </ul>
      </div>

      <div className="manage__order">
        <div className="manage__quantity">
          <button
            type="button"
            className="manage__quantity-btn"
            onClick={() => setCountProduct(countProduct-1)}
          >
            <Minus />
          </button>

          <span className="manage__quantity-count">{countProduct}</span>

          <button
            type="button"
            className="manage__quantity-btn"
            onClick={() => setCountProduct(countProduct+1)}
          >
            <Plus />
          </button>

        </div>

        <button
          className="manage__button manage__button-buynow"
          type="button"
        >
        Buy Now
        </button>
        <button
          className="manage__button manage__button-addtocart"
          type="button"
        >
        Add to cart
        </button>
        <button
          className="manage__button manage__button-like"
          type="button"
        >
          <Like />
        </button>

      </div>

      <div className="manage__orderinfo">
        <p className="manage__orderinfo-text">
          <span className="manage__orderinfo-title" >SKU: </span>
          1995751877966
        </p>
        <p className="manage__orderinfo-text">
          <span className="manage__orderinfo-title" >Categories: </span>
          Potter Plants
        </p>
        <p className="manage__orderinfo-text">
          <span className="manage__orderinfo-title" >Tags: </span>
          Home, Garden, Plants
        </p>
      </div>

      <div className="manage__share">
        <p className="manage__min-title">Share this products: </p>
        <ul className="manage__share-list">
          <li className="manage__share-item">
            <a className="manage__share-link" href="/">
              <img className="manage__share-img" src={facebook} alt="facebook" />
            </a>
          </li>
          <li className="manage__share-item">
            <a className="manage__share-link" href="/">
              <img className="manage__share-img" src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className="manage__share-item">
            <a className="manage__share-link" href="/">
              <img className="manage__share-img" src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="manage__share-item">
            <a className="manage__share-link" href="/">
              <img className="manage__share-img" src={message} alt="message" />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Manage;
