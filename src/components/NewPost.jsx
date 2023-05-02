import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/NewPost.module.css";

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
    <div className={styles.newPost}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setcontent(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tag">Tag:</label>
          <input
            type="text"
            id="tag"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewPost;
