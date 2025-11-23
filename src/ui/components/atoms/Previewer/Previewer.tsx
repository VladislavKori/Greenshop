import {useState, useRef, useEffect} from 'react';

import './style.css'

import Lupa from '@ui/assets/productsShortDescription/lupa.svg?react'

import { product } from '@ui/configuration/product.config';

function Previewer() {

  const [curSlide, setCurSlide] = useState(0);
  const hoverOnElement = useRef(false)

  useEffect( () => {
      const interval = setInterval( () => {
        if(hoverOnElement.current) return false;
         curSlide >= product.images.length-1 ?
          setCurSlide(0)
          :
          setCurSlide(curSlide + 1)
      },  5000)

      return () => clearInterval(interval)
  })

  return (
    <div className="previewer" >

      <div className="previewer__bar">

        <ul className="previewer__list">
        {product.images.map( (item, index) => (
          <li
            className={ curSlide === index ?
               'previewer__item previewer__item_active'
               :
               'previewer__item'
             }
            key={index}
            onClick={ () => { setCurSlide(index) } }
          >
            <img className="previewer__img" src={item} alt="product1" />
          </li>
        ))}
        </ul>

      </div>

      <div
        className="previewer__fullimage"
        onMouseEnter={() => {hoverOnElement.current = true}}
        onMouseLeave={() => {hoverOnElement.current = false}}
      >
        <img
          className="previewer__main-img"
          src={product.images[curSlide]}
          alt="product2"
        />
        <div className="previewer__increase">
          <Lupa className="previewer__increase-icon" />
        </div>
      </div>
    </div>
  )
}

export default Previewer;
