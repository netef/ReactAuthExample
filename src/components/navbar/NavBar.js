import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { NavLinksData } from "../../data/NavLinksData";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="menu-icon disableTouchHighlight" onClick={handleClick}>
          {click ? <CloseCircleOutlined /> : <MenuOutlined />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NavLinksData.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  className={`${item.className} disableTouchHighlight `}
                  onClick={closeMobileMenu}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
