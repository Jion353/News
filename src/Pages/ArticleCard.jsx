import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCard.scss";

const ArticleCard = ({ id, title, text, onDelete }) => (
  <div className="article-card">
    <h2 className="article-card__title">{title}</h2>
    <p className="article-card__text">{text}</p>
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Link className="article-card__more" to={`/article/${id}`}>Детальніше</Link>
      {onDelete && (
        <button className="article-card__delete" onClick={() => onDelete(id)}>
          Видалити
        </button>
      )}
    </div>
  </div>
);

export default ArticleCard;