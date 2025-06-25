import React, { useState } from "react";
import "./AddArticleModal.scss";

const AddArticleModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text && details) {
      onAdd({ title, text, details });
      setTitle("");
      setText("");
      setDetails("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        <h2>Додати нову статтю</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Короткий текст"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <textarea
            placeholder="Детальний опис"
            value={details}
            onChange={e => setDetails(e.target.value)}
            required
          />
          <button type="submit" className="modal__submit">Додати</button>
        </form>
      </div>
    </div>
  );
};

export default AddArticleModal;
