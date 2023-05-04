import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "../data/users";
import estilos from "../css/login.module.css";
import Banner from "./Banner";

function LogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      props.handleSetCurrentUser(user);
      if (storedUser.roll === "admin") {
        navigate("/new");
      } else {
        navigate("/posts");
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Banner
        imagen="https://plus.unsplash.com/premium_photo-1668181103252-352173f7ada7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80"
        titulo="Inicia Sesion"
      />
      <section className={estilos.todo}>
        <section className={estilos.loginbox}>
          <h1>Login Here</h1>
          <form onSubmit={handleLogin}>
            {/* USERNAME */}
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              placeholder="ENTER USERNAME"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* PASSWORD */}
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <input type="submit" value="login" />

            <a href="#">lost your password?</a>
            <br />
            <a href="#">Don't have an account?</a>
          </form>
        </section>
      </section>
    </>
  );
}

export default LogIn;
