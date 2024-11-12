// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

// Import Halaman-Halaman dari folder pages
import TeoriAtom from './pages/TeoriAtom';
import TabelPeriodik from './pages/TabelPeriodik';
import Stoikiometri from './pages/Stoikiometri';
import IkatanKimia from './pages/IkatanKimia';
import ReaksiRedoks from './pages/ReaksiRedoks';
import Kontak from './pages/Kontak';
import Developer from './pages/Developer';

function App() {
  const [userData, setUserData] = useState(null); // State untuk menyimpan data user saat registrasi

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Registration setUserData={setUserData} />} />
          <Route path="/login" element={<Login userData={userData} />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Tambahkan Routes untuk setiap halaman dari folder pages */}
          <Route path="/teori-atom" element={<TeoriAtom />} />
          <Route path="/tabel-periodik" element={<TabelPeriodik />} />
          <Route path="/stoikiometri" element={<Stoikiometri />} />
          <Route path="/ikatan-kimia" element={<IkatanKimia />} />
          <Route path="/reaksi-redoks" element={<ReaksiRedoks />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
