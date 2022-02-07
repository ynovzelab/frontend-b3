import React, { useEffect } from "react";
import Link from "next/link";
import LogoNike from "../public/logo-nike.png";

const Header = () => {
  console.log(LogoNike);

  return (
    <div className="header__main">
      <div className="header__logo">
        <img src={LogoNike.src} alt="nike" />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/about">
              <a className="nav__link">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
