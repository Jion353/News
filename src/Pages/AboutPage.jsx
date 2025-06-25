import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./AboutPage.scss";

const AboutPage = () => (
  <div>
    <Header />
    <main className="about-page">
      <Link to="/" className="about-back-btn">← До новин</Link>
      <h1>Про нас</h1>
      <p>
        Наш новинний ресурс створений для того, щоб оперативно та об’єктивно інформувати читачів про найважливіші події в Україні та світі. Ми прагнемо до прозорості, чесності та сучасного підходу до подачі новин.
      </p>
      <h2>Наша команда</h2>
      <ul>
        <li>Ілля Довгопол — головний редактор</li>
        <li>Ілля Довгопол — головний розробник</li>
        <li>Ілля Довгопол — журналіст</li>
        <li>Ілля Довгопол — аналітик</li>
      </ul>
      <h2>Контакти</h2>
      <p>Email: info@news-site.ua</p>
    </main>
  </div>
);

export default AboutPage;