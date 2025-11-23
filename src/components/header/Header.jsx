// Libs
import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// components

import {AuthModal} from '../imports'
// Styles
import './header.css';

// Icons
import LogoIcon from '../../assets/logo.svg?react';
import SearchIcon from '../../assets/header-icons/search.svg?react';
import FilterIcon from '../../assets/header-icons/filter.svg?react';
import LogoutIcon from '../../assets/header-icons/logout.svg?react';
import BusketIcon from '../../assets/header-icons/busket.svg?react';

function Header() {

  const [authIsOpen, setAuthIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
    {authIsOpen ?
      (<AuthModal closeFunc={ () => setAuthIsOpen(false) } />)
      :
      null}
    <header className="header">
      <div className="header__logo logo">
        <NavLink className="logo__link" to={'/'}>
          <LogoIcon className="logo__img" />
        </NavLink>
      </div>

      <div className="header__menu">
        <ul className="header__menu-list">
          <NavLink
              exact
              className="header__menu-item"
              to={"/"}
              activeClassName="header__menu-item_active"
          >
              Home
          </NavLink>
          <NavLink
              className="header__menu-item"
              to={"/shops"}
              activeClassName="header__menu-item_active"
          >
              Shops
          </NavLink>
          <NavLink
              className="header__menu-item"
              to={"/plantcare"}
              activeClassName="header__menu-item_active"
          >
              Plant Care
          </NavLink>
          <NavLink
              className="header__menu-item"
              to={"/blog"}
              activeClassName="header__menu-item_active"
          >
              Blogs
          </NavLink>
        </ul>
      </div>

      <div className="header__user">
        <ul className="header__user-list">
          {/* Search */}
          <li className="header__user-item">
            <button className="header__user-btn" type="button">
              <SearchIcon
                className="header__user-svg header__user-search-icon"
                width="20px"
                height="20px"
              />
            </button>
          </li>
          {/* Basket */}
          <Link className="header__user-item" to="/basket">
            <button className="header__user-btn" type="button">
              <BusketIcon
                className="header__user-svg header__user-busket-icon"
                width="25px"
                height="25px"
              />
              <div className="header__busket-point">
                <span className="header__busket-point-text">9+</span>
              </div>
            </button>
          </Link>
          {/* Login */}
          <li className="header__user-item">
            <button
              className="header__login-btn header__user-btn"
              type="button"
              onClick={ () => { setAuthIsOpen(true) } }
            >
              <LogoutIcon
                className="header__login-btn_icon"
                width="18px"
                height="18px"
              />
              <span className="header__login-btn_text">Login</span>
            </button>
          </li>
        </ul>
      </div>

      {/* For mobile */}
      <div className="header__search">
        <div className="header__search-input-container">
          <SearchIcon
            className="header__search-icon"
            width="20px"
            height="20px"
          />
          <input
            className="header__search-input"
            type="text"
            placeholder="Find your plants"
          />
        </div>
        <button className="header__search-settings-btn" type="button">
          <FilterIcon
            className="header__search-settings-icon"
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </header>
    </>
  );
}

export default Header;
