import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom';
const TabelPeriodik = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
      <div className="periodic-content">
        <h2 className="periodic-title">Tabel Periodik Unsur</h2>
        <img src="/tabel periodik.png" alt="Tabel Periodik" className="periodic-image" />
        <p className="periodic-description">
          Tabel periodik dan informasi unsur-unsur akan ditampilkan di sini.
        </p>
        <h3 className="periodic-section-title">Apa itu Tabel Periodik Unsur?</h3>
        <p className="periodic-text">
          Tabel periodik unsur adalah salah satu alat paling penting dalam ilmu kimia...
        </p>
        <Link to="/TabelPeriodik2" className="toggle-button">
          Lihat Penjelasan Lebih Lengkap
        </Link>
      </div>
    </div>
  );
};

export default TabelPeriodik;