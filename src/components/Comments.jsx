import React, { useState, useEffect } from "react";
import styles from "../css/Comments.module.css";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([
    { author: "John Doe", date: "01/01/2022", content: "Este es un comentario predeterminado" },
  ]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || comments;
    setComments(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "" && author.trim() !== "") {
      const newComment = {
        author: author.trim(),
        date: new Date().toLocaleDateString(),
        content: comment.trim(),
      };
      setComments([...comments, newComment]);
      setComment("");
      setAuthor("");
    }
  };

  const handleDelete = (index) => {
    const newComments = comments.filter((comment, i) => i !== index);
    setComments(newComments);
  };

  return (
    <div className={styles.comments}>
      <h3>Comentarios:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.content}</p>
            <div className={styles.commentInfo}>
              <span>{comment.author}</span>
              <span>{comment.date}</span>
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input
          type="text"
          placeholder="Añade un comentario..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">Subir Comentario</button>
      </form>
    </div>
  );
};

export default Comments;
