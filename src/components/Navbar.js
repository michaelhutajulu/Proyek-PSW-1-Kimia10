import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Tambahkan CSS untuk navbar

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
