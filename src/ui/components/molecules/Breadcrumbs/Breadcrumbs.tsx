import { FC, Fragment } from 'react';
import styles from './style.module.scss'
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { Typography } from '@ui/components/atoms/Typography/Typography';

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles["breadcrumbs"]} aria-label="breadcrumb">
      <Typography fontStyle="bold" color='black' variant='body'>
        Home
      </Typography>
      {items.map((breadcrumb, index) => (
        <Fragment key={index}>
          <Typography variant='body' color='gray'>/</Typography>
          <Typography variant='body' color='gray'>{breadcrumb}</Typography>
        </Fragment>
      ))}
    </nav>
  );
}