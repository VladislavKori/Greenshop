import { FC } from 'react';
import styles from "./style.module.scss";
import { PlantCareItem } from '@ui/components/molecules';
import { plantCareMockList } from './PlantCareList.mock';

export const PlantCareList: FC = () => {
  return (
    <ul className={styles["list"]}>
      {plantCareMockList.map(item => (
        <PlantCareItem key={item.id} {...item}/>
      ))}
    </ul>
  )
}
