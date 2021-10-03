import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dNavbar.css";
import Dropdown from "./Dropdown";
import { MenuItems } from "./menuItems";
import { BiShoppingBag } from "react-icons/bi";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          LBDR
          <BiShoppingBag className="fa-shopping-bag" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        
        {MenuItems.map((item, index) => {
          return (
            <>
              <Link
                to={item.url}
                key={index}
                className={item.cName}
                data-tooltip={item.tooltip}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </>
          );
        })}

        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="" className="nav-links" onClick={closeMobileMenu}></Link>
          {dropdown && <Dropdown />}
        </li>
      </nav>
    </>
  );
}

export default Navbar;
