import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
import IkatanKovalen from './pages/IkatanKovalen';
import IkatanLogam from './pages/IkatanLogam';
import IkatanIon from './pages/IkatanIon';
import Kuis from './pages/Kuis';
import QuisAtom from './pages/QuisAtom';
import KuisTabelPeriodik from './pages/KuisTabelPeriodik';
import KuisStoikiometri from './pages/KuisStoikiometri';

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
          <Route path="/ikatan-kovalen" element={<IkatanKovalen />} />
          <Route path="/ikatan-ion" element={<IkatanIon />} />
          <Route path="/ikatan-logam" element={<IkatanLogam />} />
          <Route path="/quis-atom" element={<QuisAtom />} />
          <Route path="/reaksi-redoks" element={<ReaksiRedoks />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/soal" element={<Soal />} />
          <Route path="/kuis" element={<Kuis />} />
          <Route path="/kuis-tabel-periodik" element={<KuisTabelPeriodik />} />
          <Route path="/kuis-stoikiometri" element={<KuisStoikiometri />} />
        </Routes>
              {/* Footer */}
              <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Chem10thGuide. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;