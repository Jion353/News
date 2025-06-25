import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <span>© {new Date().getFullYear()} Новини України. Всі права захищені.</span>
    </div>
  </footer>
);

export default Footer;