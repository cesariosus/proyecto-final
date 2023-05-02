import { useState, useEffect } from "react";
import styles from "../css/Comments.module.css";

const Comments = ({ }) => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([]);

  // Cargar los comentarios desde el localStorage cuando el componente se monte
  
useEffect(() => {
  const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
  setComments(storedComments);
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
}, []);


  // Guardar los comentarios en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "" && author.trim() !== "") {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      if (storedUser && storedUser.roll === "usuario") {
        const newComment = {
          author: author.trim(),
          date: new Date().toLocaleDateString(),
          content: comment.trim(),
        };
        setComments([...comments, newComment]);
        setComment("");
        setAuthor("");
      } else {
        alert("Solo los usuarios pueden comentar");
      }
    }
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
