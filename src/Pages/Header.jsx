import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title">Головні новини дня</h1>
    <Link to="/about" className="header__link">Про нас</Link>
  </header>
);

export default Header;