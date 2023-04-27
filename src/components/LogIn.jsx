<<<<<<< HEAD
import estilos from "../css/login.module.css"

function LogIn() {
  return (
    <div className={estilos.loginbox} >
    <img className={estilos.avatar} src="img/turismo-e1552499811477.jpg" alt="logo de fazt" />
    <h1>Login Here</h1>
    <form>
        {/* USERNAME */}
        <label htmlFor="username">USERNAME</label>
        <input type="text" placeholder="ENTER USERNAME" />
        {/* PASSWORD */}
    <label htmlFor="password">PASSWORD</label>
    <input type="password" placeholder="Enter password" />

    <input type="submit" value="login" />

    <a href="#">lost your password?</a><br />
    <a href="#">Don't have an account?</a>
</form>
</div>
=======
 

function LogIn() {
  return (
    <h1>hola</h1>
>>>>>>> ae75048a7874673cc535017e78057bbe0eaddfaa
  )
  
}
export default LogIn