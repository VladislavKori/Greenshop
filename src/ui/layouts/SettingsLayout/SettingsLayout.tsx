import { Outlet } from 'react-router-dom';
import {Header, MobileMenu, UserSettingsSidebar} from '@ui/components/organisms'

function SettingsLayout() {
  return (
    <div className="wrapper">
      <Header />
      <div style={{ display: 'flex', margin: '40px 0', columnGap: '30px'}} >
        <UserSettingsSidebar />
        <Outlet />
      </div>

      <MobileMenu />
    </div>
  )
}

export default SettingsLayout;
