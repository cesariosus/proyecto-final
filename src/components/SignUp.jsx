import React, { useEffect } from 'react';

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
      <form id="signup-form">
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