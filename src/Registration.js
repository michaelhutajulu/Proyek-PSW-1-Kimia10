import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = ({ setUserData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    // Simpan data pengguna dan pindah ke halaman login
    setUserData({ name, email, password });
    navigate('/login');
  };

  return (
    <div className="registration-page">
      <header className="page-header">
        <img src="/logokimia.png" alt="Website Logo" className="header-logo" />
        <h1 className="header-title">Chem10thguide</h1>
      </header>

      <div className="registration-container">
        <div className="registration-header">Register</div>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Tampilkan pesan kesalahan */}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Register</button>
        </form>

        <div className="login-link">
          <p>Already have an account? <span onClick={() => navigate('/login')} className="link">Login here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
