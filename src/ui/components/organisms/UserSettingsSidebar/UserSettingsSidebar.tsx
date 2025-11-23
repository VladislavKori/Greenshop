import React from 'react';

import './style.css'

import UserIcon from '@ui/assets/sidebarsettings/user.svg?react';
import AddressIcon from '@ui/assets/sidebarsettings/location.svg?react';
import OrdersIcon from '@ui/assets/sidebarsettings/shopping.svg?react';
import WishlistIcon from '@ui/assets/sidebarsettings/heart.svg?react';
import DownloadIcon from '@ui/assets/sidebarsettings/download.svg?react';
import SupportIcon from '@ui/assets/sidebarsettings/support.svg?react';
import ReportsIcon from '@ui/assets/sidebarsettings/activity.svg?react';
import LoguotIcon from '@ui/assets/sidebarsettings/logout.svg?react'

function UserSettingsSidebar() {
  return (
    <aside className="settSidebar">
      <h1 className="settSidebar__title">My Account</h1>
      <ul className="settSidebar__list">
        <li className="settSidebar__item">
          <UserIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Account Details</h2>
        </li>

        <li className="settSidebar__item">
          <AddressIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Address</h2>
        </li>

        <li className="settSidebar__item settSidebar__item_active">
          <OrdersIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Orders</h2>
        </li>

        <li className="settSidebar__item">
          <WishlistIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Wishlist</h2>
        </li>

        <li className="settSidebar__item">
          <ReportsIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Reports</h2>
        </li>

        <li className="settSidebar__item">
          <DownloadIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Downloads</h2>
        </li>

        <li className="settSidebar__item">
          <SupportIcon className="settSidebar__item-icon" />
          <h2 className="settSidebar__item-text">Support</h2>
        </li>

      </ul>

      <button className="settSidebar__loguot">
        <LoguotIcon className="settSidebar__loguot-icon" />
        <h2 className="settSidebar__loguot-text">Loguot</h2>
      </button>
    </aside>
  )
}

export default UserSettingsSidebar;
