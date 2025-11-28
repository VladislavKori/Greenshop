import { Link } from 'react-scroll';
import ArrowRight from '@ui/assets/productsCLIcons/ArrowRight.svg?react';
import ArrowLeft from '@ui/assets/productsCLIcons/ArrowLeft.svg?react';
import { FC } from 'react';
import { IProductsPaginationProps } from './ProductsPagination.types';
import styles from "./style.module.scss";
import clsx from 'clsx';

interface IPageNumberItem {
  pageNum: number;
  currentSlide: boolean;
}

export const ProductsPagination: FC<IProductsPaginationProps> = (props) => {
  const { amountSlides, changeSlide, currentSlide } = props;

  const pageNumbers: IPageNumberItem[] = [];
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

  const sortedPaginationNumbers = sortedNums({
    pageNumbers,
    currentSlideIndex,
    paginationLimit
  });

  return (
    <ul className={styles["pagination"]}>
      {currentSlideIndex !== pageNumbers[0].pageNum - 1 ? (
        <Link
          className={styles["pagination-item"]}
          onClick={() => {
            changeSlide(currentSlide - 1);
          }}
          duration={1000}
          offset={-100}
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
              className={clsx(
                styles["pagination-item"],
                styles["active"]
              )}
              key={index}
            >
              {item.pageNum}
            </li>
          );
        }
        return (
          <Link
            className={styles["pagination-item"]}
            key={index}
            onClick={() => changeSlide(item.pageNum)}
            duration={1000}
            smooth="easeInOutQuint"
            offset={-100}
            to="productsCL-container"
          >
            {item.pageNum}
          </Link>
        );
      })}

      {currentSlideIndex !== pageNumbers[pageNumbers.length - 1].pageNum - 1 ? (
        <Link
          className={styles["pagination-item"]}
          onClick={() => changeSlide(currentSlideIndex + 2)}
          duration={1000}
          smooth="easeInOutQuint"
          offset={-100}
          to="productsCL-container"
        >
          <ArrowRight />
        </Link>
      ) : null}
    </ul>
  );
}

export default ProductsPagination;

interface SortedNumsProps {
  pageNumbers: IPageNumberItem[];
  currentSlideIndex: number;
  paginationLimit: number;
}

function sortedNums(props: SortedNumsProps): IPageNumberItem[] {
  const { pageNumbers, currentSlideIndex, paginationLimit } = props;
  let newArrNums: IPageNumberItem[] = [];

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
