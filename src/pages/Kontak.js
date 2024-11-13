import React from 'react';
import { Link } from 'react-router-dom';
import '../web.css';

const Kontak = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <nav className="dashboard-navbar">
        <ul>
        <li><Link to="/dashboard">Beranda</Link></li>
        <li><Link to="/teori-atom">Teori Atom</Link></li>
          <li><Link to="/tabel-periodik">Tabel Periodik Unsur</Link></li>
          <li><Link to="/stoikiometri">Stoikiometri</Link></li>
          <li><Link to="/ikatan-kimia">Ikatan Kimia</Link></li>
          <li><Link to="/reaksi-redoks">Reaksi Redoks</Link></li>
          <li><Link to="/kontak">Kontak</Link></li>
          <li><Link to="/developer">Developer</Link></li>
        </ul>
      </nav>
    <div className="page-container">
      <h2>Kontak</h2>
      <p>Informasi kontak dan form untuk menghubungi akan ditampilkan di sini.</p>
    </div>
    </div>
  );
};

export default Kontak;
