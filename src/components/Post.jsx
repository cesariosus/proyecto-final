import { useContext } from "react";
import { useParams } from "react-router-dom";
import PostsContext from "../context/PostsContext";
import styles from "../css/Post.module.css";
import Comments from "./Comments";
import Banner from "./Banner";

function Post() {
  const { id } = useParams();
  const { posts } = useContext(PostsContext);

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>No se encontró el post.</p>;
  }

  return (
    <>
      <Banner
        imagen="https://images.unsplash.com/photo-1668615590640-43ce356c1446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        titulo={post.title}
      />
      <section className={styles.post}>
        <section className={styles.postContent}>
          <img src={post.imageUrl} alt={post.title} />
          <p>{post.content}</p>
        </section>
        <h3>{post.tags}</h3>
        <Comments comments={post.comments} postId={post.id} />
      </section>
    </>
  );
}

export default Post;
