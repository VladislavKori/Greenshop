import { FC } from 'react';
import styles from './style.module.scss';
import { filterConfig } from '@ui/configuration/filter.config';
import { Button, ProductsPriceRange, Typography } from '@ui/components/atoms';

export const ProductsListFilter: FC = () => {
  return (
    <div className={styles["filter"]}>
      {/* Categories */}
      <section className={styles["filter-section"]}>
        <Typography variant="h3" fontStyle="bold">
          {filterConfig.categories.name}
        </Typography>

        <ul className={styles["filter-list"]}>
          {filterConfig.categories.points.map((item, index) => (
            <li className={styles["filter-item"]} key={index}>
              <button
                className={styles["filter-button"]}
                onClick={() => null}
              >
                <Typography variant='body'>
                  {item.name}
                </Typography>
                <Typography variant='body'>
                  {item.quantity}
                </Typography>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Price Range */}
      <section className={styles["filter-section"]}>
        <Typography variant="h3" fontStyle="bold">
          Price Range
        </Typography>
        <ProductsPriceRange />
        <Button>Filter</Button>
      </section>
    </div>
  );
}