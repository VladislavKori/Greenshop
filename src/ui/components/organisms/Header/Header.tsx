import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import LogoIcon from '@ui/assets/logo.svg?react';
import SearchIcon from '@ui/assets/header-icons/search.svg?react';
import FilterIcon from '@ui/assets/header-icons/filter.svg?react';
import LogoutIcon from '@ui/assets/header-icons/logout.svg?react';
import BusketIcon from '@ui/assets/header-icons/busket.svg?react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { changeModalState } from '@application/state/authModalSlice';

const headerLinks = [
  { id: "1", label: "Home", path: "/" },
  { id: "2", label: "Shops", path: "/shops" },
  { id: "3", label: "Plant Care", path: "/plantcare" },
  { id: "4", label: "Blog", path: "/blog" },
]

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <div className="header__logo logo">
          <NavLink className="logo__link" to={'/'}>
            <LogoIcon className="logo__img" />
          </NavLink>
        </div>

        <div className="header__menu">
          <ul className="header__menu-list">
            {headerLinks.map(link => (
              <NavLink
                end
                to={link.path}
                key={`link-${link.id}`}
                className={({ isActive, isPending }) =>
                  clsx("header__menu-item", isPending ? "" : isActive ? "header__menu-item_active" : "")
                }
              >
                {link.label}
              </NavLink>
            ))}
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
                onClick={() => dispatch(changeModalState("login"))}
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
