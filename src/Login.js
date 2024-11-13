import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ userData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData && email === userData.email && password === userData.password) {
      setMessage('Login berhasil....');
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 2000);
    } else {
      setMessage('Email atau Password salah! Silahkan coba lagi.');
    }
  };

  return (
    <div>
      <header className="page-header">
        <img src="/logo192.png" alt="Website Logo" className="header-logo" />
        <h1 className="header-title">Chem10thguide</h1>
      </header>
      
      <div className="login-container">
        <div className="login-header">Login</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </div>
    </div>
  );
};

export default Login;
