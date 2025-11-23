import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './productsPriceRange.css';

function ProductsPriceRange() {
  const [values, setValues] = useState([25, 75]);

  const min = 0;
  const max = 199;
  const step = 1;

  return (
    <div className="productsPriceRange">
      <h1 className="productsLF__filter-title">Price Range</h1>
      <Range
        draggableTrack
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              marginLeft: '10px',
              display: 'flex',
              width: '90%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '4px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#D7E9DA', '#46A358', '#D7E9DA'],
                  min,
                  max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '15px',
              width: '15px',
              borderRadius: '50%',
              backgroundColor: '#46A358',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '3px solid #FFFFFF',
            }}
          />
        )}
      />

      <span className="productsPR__price-num">
        Price
{' '}
        <span className="productsPR__nums">
          $ 
{' '}
{values[0]}
          -$
          {values[1]}
        </span>
      </span>

      <button className="productsPR__btn" type="button">
        Filter
      </button>
    </div>
  );
}

export default ProductsPriceRange;
