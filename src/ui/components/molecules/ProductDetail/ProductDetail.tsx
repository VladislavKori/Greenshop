import { CSSProperties, useState } from 'react';
import './style.css';

import { ProductDescription } from '@ui/components/atoms'
import { markdown } from '@ui/configuration/detail.config.js'

function ProductDetail({ style }: { style: CSSProperties }) {
  return (
    <div className="productdetail" style={style}>

      <div className="productdetail__navbar">
        <ul className="productdetail__list" >
          <li className="productdetail__item productdetail__item_active">Product Description</li>
          <li className="productdetail__item">Reviews (19)</li>
        </ul>
      </div>

      <div className="productdetail__content">
        <ProductDescription data={markdown} />
      </div>

    </div>
  )
}

export default ProductDetail;
