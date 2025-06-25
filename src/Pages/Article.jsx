import React from "react";
import { useParams, Link } from "react-router-dom";
import articlesData from "../Articles.json";
import "./Article.scss";

const Article = () => {
  const { id } = useParams();
  const article = articlesData.find(a => String(a.id) === id);

  if (!article) {
    return (
      <div className="article-page">
        <p>Статтю не знайдено.</p>
        <Link to="/">Повернутись до новин</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <Link className="article-page__back" to="/">← До всіх новин</Link>
      <h1 className="article-page__title">{article.title}</h1>
      <p className="article-page__text">{article.text}</p>
      <div className="article-page__details">{article.details}</div>
    </div>
  );
};

export default Article;