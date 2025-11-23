import { Fragment, useState } from 'react';
import './productsCardList.css';
import { productsList } from '@ui/configuration/withoutApi';
import { ProductCard, ProductsPagination } from '@ui/components/atoms';

function ProductsCardList() {
  const [currentSlde, setCurrentSlide] = useState(1);

  const amountCard = productsList.length;
  const maxCardsOnOneSlide = 9;
  const amountSlides = (() => {
    if (amountCard % maxCardsOnOneSlide === 0) {
      return Math.floor(amountCard / maxCardsOnOneSlide);
    }
    return Math.floor(amountCard / maxCardsOnOneSlide) + 1;
  })();
  const lastCard = currentSlde * maxCardsOnOneSlide;
  const firstCard = lastCard - maxCardsOnOneSlide;
  const cardsOnThisSlide = productsList.slice(firstCard, lastCard);

  return (
    <div className="productsList">
      <ul className="productsCL">
        {cardsOnThisSlide.map((item) => (
          <Fragment key={item.id}>
            <ProductCard {...item} />
          </Fragment>
        ))}
      </ul>
      <ProductsPagination
        amountSlides={amountSlides}
        changeSlide={(num) => {
          setCurrentSlide(num);
        }}
        currentSlide={currentSlde}
      />
    </div>
  );
}

export default ProductsCardList;
