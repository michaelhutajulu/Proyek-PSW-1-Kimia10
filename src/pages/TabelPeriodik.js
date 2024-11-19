import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

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
      <div className="page-container">
        <h2>Tabel Periodik Unsur</h2>
        <p>Tabel periodik dan informasi unsur-unsur akan ditampilkan di sini.</p>
      </div>
    </div>
  );
};

export default TabelPeriodik;
