import { Element } from 'react-scroll';
import './productsListSorting.css';
import ArrowDownIcon from '@ui/assets/productsListSorting-icons/Arrow-Down.svg?react';

function ProductsListSorting() {
  return (
    <Element name="productsCL-container">
      <section className="products-sorting">
        <ul className="products-sorting__list">
          <li className="products-sorting__item">
            <a
              className="products-sorting__link products-sorting__link_active"
              href="/"
            >
              All Plants
            </a>
          </li>
          <li className="products-sorting__item">
            <a className="products-sorting__link" href="/">
              New Arrivals
            </a>
          </li>
          <li className="products-sorting__item">
            <a className="products-sorting__link" href="/">
              Sale
            </a>
          </li>
        </ul>

        <div className="products-sorting__sort-by">
          <p className="products-sorting__sort-by-title">Short by:</p>
          <div className="products-sorting__sort-by-select">
            <label
              htmlFor="select-1"
              className="products-sorting__select-arrow"
              style={{ background: `url('${ArrowDownIcon}')` }}
            />
            <select id="select-1">
              <option className="products-sorting__sort-by-option">
                Default sorting
              </option>
              <option className="products-sorting__sort-by-option">
                Ascending prices
              </option>
              <option className="products-sorting__sort-by-option">
                In descending order
              </option>
              <option className="products-sorting__sort-by-option">
                popular
              </option>
            </select>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ProductsListSorting;
