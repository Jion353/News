import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewsPage from "./Pages/NewsPage";
import Article from "./Pages/Article";
import Footer from "./Pages/Footer";
import AboutPage from "./Pages/AboutPage";
import "./App.scss";

function App() {
  return (
    <div className="app-root">
      <main className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;