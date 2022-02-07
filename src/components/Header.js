import React, { useEffect } from "react";
import Link from "next/link";
import LogoNike from "../public/logo-nike.png";

const Header = () => {
  return (
    <header className="header__main">
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
          <li className="nav__item">
            <Link href="/shop">
              <a className="nav__link">Shop</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
