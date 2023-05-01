import React, { useEffect } from 'react';
import Banner from "./Banner"

import estilos from '../css/SignUp.module.css'

function SignUp() {

  useEffect(() => {
    const form = document.getElementById("signup-form");
    const submitButton = document.getElementById("submit-btn");
  
    // Función para validar el formulario
    function validarFormulario() {
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (nombre === "" || email === "" || password === "") {
        alert("Todos los campos son requeridos.");
        return false;
      }

      if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
      }

      return true;
    }

    // Agregar un evento "submit" al formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validarFormulario()) {
        // Aquí puedes enviar los datos del formulario al servidor
        alert("Registro exitoso.");
      }
    });

    // Remove the event listener on unmount
    return () => {
      form.removeEventListener("submit", validarFormulario);
    }

  }, []); // add empty dependency array to run effect only once

  return (
    <div>
      <Banner imagen="https://images.unsplash.com/photo-1591628996689-a20ea1ae1ad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" titulo="Registrate Aqui!"/>
      <form id="signup-form" className={estilos.signupform} >
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" id="submit-btn">Registrarse</button>
      </form>
    </div>
  );
}

export default SignUp;