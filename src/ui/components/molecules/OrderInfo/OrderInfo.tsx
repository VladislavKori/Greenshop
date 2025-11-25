import type { FC } from 'react';
import styles from './style.module.scss';
import { Typography } from '@ui/components/atoms';
import { orderInfoMockData } from './OrderInfo.mock';

export const OrderInfo: FC = () => {
  return (
    <article className={styles["order"]}>
      <Typography variant="h1" fontStyle="bold">Заказ</Typography>

      {orderInfoMockData.map((str, index) => (
        <Typography key={index} color='gray' variant="body">
          {str}
        </Typography>
      ))}
    </article>
  )
}