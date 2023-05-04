import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/NewPost.module.css";
import Banner from "./Banner";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tag, setTag] = useState("");
  const { posts, setPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      imageUrl,
      tag,
    };
    setPosts([...posts, newPost]);
    navigate("/posts");
  };

  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        titulo="Crea un nuevo Post"
      />
      <section className={styles.newPost}>
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <section className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Inserta Titulo del post "
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              placeholder="Inserta aqui el contenido del post "
              value={content}
              onChange={(event) => setcontent(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              placeholder="inserta el url de la imagen "
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </section>
          <section className={styles.formGroup}>
            <label htmlFor="tag">Tag:</label>
            <input
              type="text"
              id="tag"
              placeholder="Separa con coma "
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            />
          </section>
          <button type="submit">Create</button>
        </form>
      </section>
    </>
  );
};

export default NewPost;
