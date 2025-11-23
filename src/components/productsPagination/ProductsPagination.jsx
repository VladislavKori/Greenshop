// Libs
import React from 'react';
import { Link } from 'react-scroll';

// Styles
import './productsPagination.css';

// Images or Icons
import ArrowRight from '../../assets/productsCLIcons/ArrowRight.svg?react';
import ArrowLeft from '../../assets/productsCLIcons/ArrowLeft.svg?react';

function ProductsPagination({ amountSlides, changeSlide, currentSlide }) {
  const pageNumbers = [];
  const paginationLimit = 5;
  let currentSlideIndex = 0;

  for (let i = 0; i <= amountSlides - 1; i++) {
    const pageNum = i + 1;

    if (i === currentSlide - 1) {
      currentSlideIndex = i;
      pageNumbers.push({ pageNum, currentSlide: true });
    } else {
      pageNumbers.push({ pageNum, currentSlide: false });
    }
  }

  const sortedPaginationNumbers = sortedNums(
    pageNumbers,
    currentSlideIndex,
    paginationLimit
  );

  return (
    <ul className="productsPagination">
      {currentSlideIndex !== pageNumbers[0].pageNum - 1 ? (
        <Link
          className="productsPagination__item"
          onClick={() => {
            changeSlide(currentSlide - 1);
          }}
          duration={1000}
          smooth="easeInOutQuint"
          to="productsCL-container"
        >
          <ArrowLeft />
        </Link>
      ) : null}

      {sortedPaginationNumbers.map((item, index) => {
        if (item.currentSlide === true) {
          return (
            <li
              className="productsPagination__item productsPagination__item_active"
              key={index}
            >
              {item.pageNum}
            </li>
          );
        }
        return (
          <Link
            className="productsPagination__item"
            key={index}
            onClick={() => changeSlide(item.pageNum)}
            duration={1000}
            smooth="easeInOutQuint"
            to="productsCL-container"
          >
            {item.pageNum}
          </Link>
        );
      })}

      {currentSlideIndex !== pageNumbers[pageNumbers.length - 1].pageNum - 1 ? (
        <Link
          className="productsPagination__item"
          onClick={() => changeSlide(currentSlideIndex + 2)}
          duration={1000}
          smooth="easeInOutQuint"
          to="productsCL-container"
        >
          <ArrowRight />
        </Link>
      ) : null}
    </ul>
  );
}

export default ProductsPagination;

function sortedNums(pageNumbers, currentSlideIndex, paginationLimit) {
  let newArrNums = [];

  if (currentSlideIndex === 1 || currentSlideIndex === 0) {
    newArrNums = pageNumbers.slice(0, paginationLimit);
  }

  if (
    currentSlideIndex === pageNumbers.length - 1 ||
    currentSlideIndex === pageNumbers.length - 2
  ) {
    newArrNums = pageNumbers.slice(
      pageNumbers.length - paginationLimit,
      pageNumbers.length
    );
  }

  if (
    pageNumbers[currentSlideIndex - 2] &&
    pageNumbers[currentSlideIndex - 1] &&
    pageNumbers[currentSlideIndex + 2] &&
    pageNumbers[currentSlideIndex + 1]
  ) {
    newArrNums = pageNumbers.slice(
      currentSlideIndex - 2,
      currentSlideIndex + 3
    );
  }

  return newArrNums;
}
