import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitHandler}>
        <h2 className="auth-login">Login</h2>
        <input className="auth-input"
          type="text"
          name="email"
          value={data.email}
          placeholder="E-mail"
          onChange={changeHandler}
          required
        />
        <input className="auth-input"
          type="password"
          name="password"
          value={data.password}
          placeholder="Senha"
          onChange={changeHandler}
          required
        />
        <button type="submit" className='auth-button'>Entrar</button>
        <p className="p-auth">
          Não tem uma conta? <Link to="/register">Registre-se</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;