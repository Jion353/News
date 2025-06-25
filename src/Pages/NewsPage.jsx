import React, { useEffect, useState } from "react";
import Header from "./Header";
import ArticleCard from "./ArticleCard";
import AddArticleModal from "./AddArticleModal";
import articlesData from "../Articles.json";
import "./NewsPage.scss";

const STORAGE_KEY = "news_articles";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setArticles(parsed);
      } else {
        setArticles(articlesData);
      }
    } else {
      setArticles(articlesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  const handleAddArticle = (article) => {
    setArticles((prev) => [
      {
        id: Date.now(),
        ...article,
      },
      ...prev,
    ]);
    setIsModalOpen(false);
  };

  const handleDeleteArticle = (id) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="news-actions">
        <button
          className="add-article-btn"
          onClick={() => setIsModalOpen(true)}
        >
          + Додати статтю
        </button>
      </div>
      <main className="news-list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            text={article.text}
            onDelete={handleDeleteArticle}
          />
        ))}
      </main>
      <AddArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddArticle}
      />
    </div>
  );
};

export default NewsPage;
