import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="dashboard-navbar">
      <ul className="navbar-list">
        <li><Link to="/dashboard">Beranda</Link></li>
        <li className="dropdown">
          <span className="dropdown-toggle">Materi</span>
          <ul className="dropdown-menu">
            <li><Link to="/teori-atom">Teori Atom</Link></li>
            <li><Link to="/tabel-periodik">Tabel Periodik Unsur</Link></li>
            <li><Link to="/stoikiometri">Stoikiometri</Link></li>
            <li><Link to="/ikatan-kimia">Ikatan Kimia</Link></li>
            <li><Link to="/reaksi-redoks">Reaksi Redoks</Link></li>
          </ul>
        </li>
        <li><Link to="/soal">Soal</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>

      <div className="navbar-logout">
        <button onClick={onLogout} className="btn logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
