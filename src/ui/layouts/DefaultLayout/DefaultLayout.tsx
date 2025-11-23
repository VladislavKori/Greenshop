import { Outlet } from 'react-router-dom';
import { Header, Footer, MobileMenu } from '@ui/components/organisms';

function DefaultLayout() {
    
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
      <MobileMenu />
    </div>
  );
}

export default DefaultLayout;
