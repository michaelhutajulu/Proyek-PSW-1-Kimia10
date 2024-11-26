import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Stoikiometri.css'; // Perbaiki cara impor CSS

const Stoikiometri = () => {
  return (
    <div className="stoikiometri-page">
      <header className="stoikiometri-header">
        <div className="stoikiometri-logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="stoikiometri-logo" />
          <h1 className="stoikiometri-website-name">Chem10thguide</h1>
        </div>
      </header>
      <nav className="stoikiometri-navbar">
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
      <div className="stoikiometri-content">
        <h2 className="stoikiometri-title"><b>Stoikiometri</b></h2>
        <div className="stoikiometri-image-container">
          <img 
            src="/Stoikiometri.jpg" 
            alt="Stoikiometri" 
            className="stoikiometri-main-image"
          />
        </div>
        <h3 className="stoikiometri-subtitle">Pengertian Stoikiometri</h3>
        <p className="stoikiometri-paragraph">
          Stoikometri, di dalam ilmu kimia ialah ilmu yang mempelajari hubungan kuantitatif antar reaktan 
          dan produk dalam reaksi kimia. Konsep stoikometri digunakan untuk menghitung massa, volume, dan 
          jumlah mol zat yang terlibat dalam suatu reaksi kimia. Stoikometri berasal dari kata "stoicheion" 
          dalam bahasa Yunani yang berarti mengukur.
        </p>
        <p className="stoikiometri-paragraph">
          Suatu reaksi kimia dapat dikatakan sebagai reaksi stoikometri apabila reaktan dalam reaksi habis seluruhnya.
        </p>
        <p className="stoikiometri-paragraph">
          Adapun rumus-rumus yang biasa digunakan dalam menyelesaikan materi Kimia Stoikiometri adalah sebagai berikut:
        </p>
        <div className="stoikiometri-image-container">
          <img 
            src="/Rumus-Stoikiometri-Kimia.png"  
            alt="Rumus Stoikiometri"
            className="stoikiometri-main-image"
          />
        </div>
        <p className="stoikiometri-paragraph">
          Angka 22,4 L merupakan volume gas ideal dalam keadaan STP (Standard Temperature and Pressure), 
          dengan tekanan gas (P) = 1 atm, dan suhu (T) = 273 K. Sementara angka 6,02 x 10<sup>23</sup> 
          merupakan besaran tetapan Avogadro. Jadi, 1 mol zat apa pun memiliki jumlah partikel yang sama 
          yaitu sebanyak 6,02 x 10<sup>23</sup> partikel.
        </p>
      </div>
    </div>
  );
};

export default Stoikiometri;
