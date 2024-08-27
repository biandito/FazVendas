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
        <h2 className="auth-login">Registro</h2>
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
        <input className="auth-input"
          type="text"
          name="nome"
          value={data.nome}
          placeholder="Nome"
          onChange={changeHandler}
          
        />
        <button type="submit" className='auth-button'>Registrar</button>
        <p className="p-auth">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;