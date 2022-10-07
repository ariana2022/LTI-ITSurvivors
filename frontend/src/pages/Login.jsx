import React, { useRef } from "react";
import "../styles/Login.css";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <>
      <div className="Login">
        <div className="Login-container">
          <h1 className="title">Ingrese a su cuenta</h1>8
          <form className="form" action="/" ref={form}>
            <label htmlFor="email" className="label">
              Correo
            </label>
            <input
              type="text"
              name="email"
              placeholder="ejemplo@ejemplo.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <button
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
            <a href="/">Olvide mi contraseña</a>
          </form>
          <button className="secondary-button signup-button">
            Crear cuenta
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
