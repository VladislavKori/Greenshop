import { Outlet } from 'react-router-dom';
import { Header, Footer, MobileMenu } from '@ui/components/organisms';
import styles from "./style.module.scss";
import { FC } from 'react';

export const DefaultLayout: FC = () => {
  return (
    <div className={styles["layout"]}>
      <Header />
      <div className={styles["layout-content"]}>
        <Outlet />
      </div>
      <Footer />
      <MobileMenu />
    </div>
  );
}