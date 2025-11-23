import { NavLink } from "react-router-dom";
import "./mobilemenu.css";

import HomeIcon from "@ui/assets/mobilemenu/home.svg?react";
import HeartIcon from "@ui/assets/mobilemenu/heart.svg?react";
import BasketIcon from "@ui/assets/mobilemenu/basket.svg?react";
import UserIcon from "@ui/assets/mobilemenu/user.svg?react";
import clsx from "clsx";

const mobileMenuLinks = [
  { id: "1", icon: <HomeIcon className="mobilemenu__icon" />, path: "/" },
  { id: "2", icon: <HeartIcon className="mobilemenu__icon" />, path: "/shops" },
  { id: "3", icon: <BasketIcon className="mobilemenu__icon" />, path: "/basket" },
  { id: "4", icon: <UserIcon className="mobilemenu__icon" />, path: "/user/settings/accountdetail" },
]

function MobileMenu() {
  return (
    <div className="mobilemenu">
      <ul className="mobilemenu__list">
        {mobileMenuLinks.map(link => (
          <NavLink
            end
            to={link.path}
            key={`link-${link.id}`}
            className={({ isActive, isPending }) =>
              clsx("mobilemenu__item-item", isPending ? "" : isActive ? "mobilemenu__item_active" : "")
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
