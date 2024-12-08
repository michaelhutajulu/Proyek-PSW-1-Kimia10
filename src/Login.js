import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ userData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State untuk pesan kesalahan
  const navigate = useNavigate();

  // Fungsi validasi email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format email dasar
    if (!emailRegex.test(email)) {
      return false; // Format email salah
    }

    const domain = email.split('@')[1]; // Ambil bagian setelah '@'
    return domain === 'gmail.com'; // Pastikan domain adalah 'gmail.com'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi email
    if (!isValidEmail(email)) {
      setErrorMessage('Email tidak valid. Gunakan email dengan domain gmail.com');
      return;
    }

    setErrorMessage(''); // Reset pesan kesalahan jika validasi berhasil

    // Periksa kecocokan data login
    if (userData && email === userData.email && password === userData.password) {
      setMessage('Login berhasil...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      setMessage('Email atau Password salah! Silahkan coba lagi.');
    }
  };

  return (
    <div className="login-page">
      <header className="page-header">
        <img src="/logokimia.png" alt="Website Logo" className="header-logo" />
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
            {errorMessage && <p className="error-message">{errorMessage}</p>} 
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

        <div className="register-link">
        Don't have an account?{' '}
          <span onClick={() => navigate('/registration')} className="link">Register here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
