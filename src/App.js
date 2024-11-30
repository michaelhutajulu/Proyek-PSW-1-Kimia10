import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';

import TeoriAtom from './pages/TeoriAtom';
import TabelPeriodik from './pages/TabelPeriodik';
import Stoikiometri from './pages/Stoikiometri';
import IkatanKimia from './pages/IkatanKimia';
import ReaksiRedoks from './pages/ReaksiRedoks';
import Kontak from './pages/Kontak';
import Soal from './pages/Soal'; // Import untuk halaman Soal
import JenisStoikometri from './pages/JenisStoikometri';

function App() {
  const [userData, setUserData] = useState(null); // State untuk menyimpan data user saat registrasi

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    setUserData(null); // Menghapus data user saat logout
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route 
            path="/login" 
            element={<Login userData={userData} />} 
          />
          <Route 
            path="/registration" 
            element={<Registration setUserData={setUserData} />} 
          />
          <Route 
            path="/dashboard" 
            element={userData ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} 
          />

          <Route path="/teori-atom" element={<TeoriAtom />} />
          <Route path="/tabel-periodik" element={<TabelPeriodik />} />
          <Route path="/stoikiometri" element={<Stoikiometri />} />
          <Route path="/ikatan-kimia" element={<IkatanKimia />} />
          <Route path="/reaksi-redoks" element={<ReaksiRedoks />} />
          <Route path="/jenis-stoikometri" element={<JenisStoikometri />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/soal" element={<Soal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
