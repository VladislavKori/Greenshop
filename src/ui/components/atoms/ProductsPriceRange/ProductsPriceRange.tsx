import { FC, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import styles from "./style.module.scss";
import { Typography } from '../Typography/Typography';

export const ProductsPriceRange: FC = () => {
  const [values, setValues] = useState([25, 75]);

  const min = 0;
  const max = 199;
  const step = 1;

  return (
    <div className={styles["price"]}>
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

      <Typography className={styles["range-price"]} variant='p' color="black">
        Price:
        <Typography variant='p' color='primary' fontStyle='bold'>
          {`$${values[0]} - ${values[1]}`}
        </Typography>
      </Typography>
    </div>
  );
}

export default ProductsPriceRange;
