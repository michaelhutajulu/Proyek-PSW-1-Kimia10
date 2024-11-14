import React from 'react';
import { Link } from 'react-router-dom';
import '../web.css';

const TeoriAtom = () => {
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
      <h2>Teori Atom</h2>
      <p>Penjelasan mendalam tentang teori atom akan ditampilkan di sini.</p>
    </div>
    <div className="col-md-9">
      <h2>Teori Atom John Dalton</h2>
      <div className="alert alert-info">
        <strong>Halo, Sobat pintar!</strong> Kali ini kita akan belajar tentang <strong>Perkembangan Teori Atom</strong>. Ada <strong>Teori Atom Dalton</strong> sebagai pembuka nih, Sobat!
      </div>
      <p>
        Struktur atom adalah susunan partikel dasar dalam atom. Atom sebagai partikel penyusun materi dapat menentukan sifat materi. 
        <strong> Atom </strong> berasal dari Bahasa Yunani yaitu <i>atomos</i> yang berarti partikel terkecil yang tidak dapat dibagi lagi.
        Atom memang tidak dapat dilihat dengan kasat mata, namun kita dapat melihat visualisasi atom dalam
        <strong> perkembangan model atom </strong> berdasarkan hasil eksperimen dari para ilmuwan. Kebenaran suatu model atau teori atom
        tidak mutlak. Dalam perkembangannya model atau teori atom terus mengalami perbaikan dan penyempurnaan.
      </p>

      <h3>Teori atom John Dalton</h3>
      <img src="John Dalton.jpg" alt="Model Atom Dalton" className="img-fluid mb-3" />

      <p>Dalton mengemukakan tentang atom sebagai berikut:</p>
      <ul>
        <li>Atom adalah bola pejal yang tidak bermuatan.</li>
        <li>Atom sebagai terkecil suatu materi yang tidak dapat dibagi lagi.</li>
        <li>Atom dari suatu unsur yang sama memiliki berat, ukuran dan bentuk yang sama, tetapi berbeda dengan atom-atom lain.</li>
        <li>Atom tidak dapat diciptakan dan dimusnahkan.</li>
        <li>Pada reaksi kimia terjadi penggabungan dan pemisahan atom.</li>
        <li>Senyawa adalah hasil reaksi atom-atom penyusunnya.</li>
      </ul>

      <h4>Kelebihan</h4>
      <ul>
        <li>Meningkatkan rasa minat terhadap penelitian model atom berikutnya.</li>
        <li>Mampu menjelaskan Hukum Kekekalan Massa, Hukum Perbandingan Tetap, dan Hukum Perbandingan Berganda.</li>
      </ul>
      </div>
    </div>
  );
};

export default TeoriAtom;