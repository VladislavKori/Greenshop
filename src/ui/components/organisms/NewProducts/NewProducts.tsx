import { CSSProperties } from 'react';
import './newProducts.css';
import {
  ArrowRightIcon,
  NewProductIcon1,
  NewProductIcon2,
  LinesIcon,
} from '@ui/assets/newproducts/imports';

function NewProducts({ style }: { style: CSSProperties }) {
  const linestyle = {
    background: `url('${LinesIcon}'), #fbfbfb`,
    backgroundPosition: 'bottom -100px left -100px',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="newproducts" style={style}>
      <ul className="newproducts__list">
        {/* <!-- item --> */}
        <li className="newproducts__item" style={linestyle}>
          <div className="newproducts__image-container">
            <img
              className="newproducts__img"
              src={NewProductIcon1}
              alt="Какой-то цветок"
            />
          </div>

          <div className="newproducts__info">
            <h1 className="newproducts__title">Summer cactus & succulents</h1>
            <p className="newproducts__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <a className="newproducts__link" href="/">
              <p className="newproducts__link-text">Find More</p>
              <img
                className="newproducts__link-icon"
                src={ArrowRightIcon}
                alt="стрелка"
              />
            </a>
          </div>
        </li>
        {/* <!-- end item --> */}

        {/* <!-- item --> */}
        <li className="newproducts__item" style={linestyle}>
          <div className="newproducts__image-container">
            <img
              className="newproducts__img"
              src={NewProductIcon2}
              alt="Какой-то цветок"
            />
          </div>

          <div className="newproducts__info">
            <h1 className="newproducts__title">Summer cactus & succulents</h1>
            <p className="newproducts__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <a className="newproducts__link" href="/">
              <p className="newproducts__link-text">Find More</p>
              <img
                className="newproducts__link-icon"
                src={ArrowRightIcon}
                alt="стрелка"
              />
            </a>
          </div>
        </li>
        {/* <!-- end item --> */}
      </ul>
    </div>
  );
}

export default NewProducts;
