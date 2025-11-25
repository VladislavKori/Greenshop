import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import {Header, MobileMenu, UserSettingsSidebar} from '@ui/components/organisms'
import styles from "./style.module.scss";

export const SettingsLayout: FC = () => {
  return (
    <div className={styles["layout"]}>
      <Header />
      <div style={{ display: 'flex', margin: '40px 0', columnGap: '30px'}} >
        <UserSettingsSidebar />
        <Outlet />
      </div>

      <MobileMenu />
    </div>
  )
}