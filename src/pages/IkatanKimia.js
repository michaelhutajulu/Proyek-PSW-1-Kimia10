import React from 'react';
import Navbar from '../components/Navbar';
import './IkatanKimia.css';
import { Link } from 'react-router-dom';

const IkatanKimia = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Main Container*/}
      <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Materi:</h2>
        <ul>
          <li
            className="active"
            onClick={() => scrollToSection('pengertian-ikatan-kimia')}>
            Pengertian Ikatan Kimia
            </li>
            <li onClick={() => scrollToSection('sifat-sifat-ikatan-kimia')}>
              Sifat - sifat Ikatan Kimia
            </li>
            <li onClick={() => scrollToSection('jenis-jenis-ikatan-kimia')}>
              Jenis - jenis Ikatan Kimia
            </li>
          </ul>
        </aside>

      {/* Main Content */}
      <main className="content">
        {/* Section: Pengertian Ikatan Kimia */}
        <section id="pengertian-iakatan-kimia">
          <h1>Pengertian Ikatan Kimia</h1>
          <div className="image-container">
            <img
              src="ikatan kimiaa.jpg"
              alt="Model Ikatan Kimia"
              className="content-image"
            />
            <p>
               Ikatan kimia kelas 10 mempelajari bagaimana atom-atom bergabung
               membentuk senyawa atau molekul.
            </p>
          </div>
          <article className="description">
            <p>
                Teori tentang ikatan kimia lahir dari gagasan Gilbert N. Lewis.
                Dalam artikelnya yang dirilis tahun 1916, Lewis meneliti terkait
                kesulitan golongan gas mulia (VIIIA) membentuk suatu ikatan
                kimia. Diduga, gas mulia memiliki keunikan dalam konfigurasi
                elektronnya yang dapat mencegah persenyawaan dengan unsur lain.
            </p>
            <ul>
              <li>Beberapa unsur tidak tersusun dari atom melainkan molekul.</li>
              <li>Atom-atom dari unsur yang sama dapat memiliki massa yang
              berbeda.
              </li>
              <li>Masih ada partikel subatomik yang menyusun atom seperti
              proton, neutron, dan elektron.
              </li>  
            </ul>
          </article>
        </section>

        {/* Section: Sifat-sfat Ikatan Kimia */}
        <section id="sifat-sifat-ikatan-kimia">
          <h1>Sifat - sifat Ikatan Kimia</h1>
          <article className="description">
            <p>
              Memahami sifat-sifat ikatan kimia sangat penting untuk memahami 
              bagaimana unsur-unsur yang berbeda berinteraksi dan bergabung. 
              Umumnya, ikatan kimia dapat bervariasi dalam hal panjang, 
              kekuatan, polaritas, dan lainnya.
            </p>
            <p>
              Panjang ikatan adalah jarak fisik antara dua atom yang 
              berikatan-semakin pendek ikatannya, semakin kuat ikatannya.
              Kekuatan ikatan mengacu pada jumlah energi yang dibutuhkan untuk memutus 
              ikatan kimia-ikatan yang lebih kuat membutuhkan lebih banyak energi. 
              Dan polaritas menggambarkan distribusi elektron yang tidak merata dalam 
              suatu ikatan, yang menentukan daya tariknya terhadap partikel lain. 
            </p>
            <p>
              Selain sifat-sifat ini, ikatan kimia juga dapat diklasifikasikan ke 
              dalam tiga jenis utama: ionik, kovalen, dan logam. Penting untuk mengetahui
              perbedaan ini agar Anda dapat menganalisis berbagai jenis struktur ikatan 
              dalam kimia secara akurat.
            </p>
            <ul>
              <li>
                <strong>Ionik</strong>
                <p>
                Ikatan ionik terjadi ketika elektron dari satu atom ditransfer ke atom lain, 
                   membentuk ion bermuatan positif (kation) dan negatif (anion). Gaya elektrostatik 
                   antara ion-ion tersebut menciptakan ikatan yang kuat.
                </p>
                <strong>Contoh:</strong>
                <p>Contoh: Natrium klorida (NaCl). Natrium (Na) kehilangan satu elektron menjadi Na⁺, 
                sementara klorin (Cl) menerima elektron menjadi Cl⁻.
                </p>
              </li>
              <li>
                <strong>Kovalen</strong>
                <p>Ikatan kovalen terjadi ketika dua atom berbagi satu atau lebih pasangan elektron 
                    untuk mencapai kestabilan (biasanya memenuhi aturan oktet). Ikatan ini biasanya terjadi 
                    antara atom-atom non-logam.
                </p>
                <strong>Contoh:</strong>
                <p>Molekul air (H₂O), di mana 1oksigen berbagi elektron dengan dua atom hidrogen.</p>
              </li>
              <li>
                <strong>Logam</strong>
                <p>
                Ikatan logam terjadi antara atom-atom logam, di mana elektron valensi "berkelana" bebas 
                    di antara inti-inti atom dalam struktur logam. Elektron-elektron ini membentuk lautan elektron 
                    yang mengikat ion-ion logam bersama-sama.
                </p>
                <strong>Contoh:</strong>
                <p>Logam tembaga (Cu) dan besi (Fe).</p>
              </li>
            </ul>
          </article>
        </section>
        
        {/* section: Jenis-jenis Ikatan Kimia */}
        <section id="jenis-jenis-ikatan-kimia">
          <h1>Jenis - jenis Ikatan Kimia</h1>
          <article className="description">
            <p>
              Ikatan kimia dapat dibagi menjadi beberapa jenis berdasarkan cara
              atom-atom berbagi atau mentransfer elektron. Berikut adalah tiga
              jenis utama ikatan kimia:
            </p>
            <ul>
              <li>
                <strong>Ikatan Ionik:</strong> Ikatan yang terjadi ketika atom
                  satu elemen menyerahkan elektron kepada atom lain, biasanya
                  antara logam dan non-logam.
              </li>
              <li>
                <strong>Ikatan Kovalen:</strong> Ikatan di mana pasangan atom
                  berbagi elektron untuk mencapai kestabilan, umumnya terjadi
                  antara non-logam.
              </li>
              <li>
                <strong>Ikatan Logam:</strong> Ikatan yang terjadi dalam logam,
                  di mana elektron-elektron bebas bergerak di antara ion positif
                  logam, menciptakan "lautan elektron."
              </li>
            </ul>
          </article>
        </section>
        </main>
        </div>
        
        {/* Card Section */}
        <div className="card-container">
          <div className="card">
            <img
              src="Ikatan kovalen.png"
              alt="Ikatan Kovalen"
              className="card-image"
            />
            <div className="card-content">
              <h3>Overview of</h3>
              <h2>Ikatan Kovalen</h2>
              <Link to="/ikatan-kovalen">
              <button className="card-button">Pelajari Sekarang</button>
              </Link>

            </div>
          </div>
          <div className="card">
            <img src="ikatan ion 2.jpg" alt="Ikatan Ion" className="card-image"/>
            <div className="card-content">
              <h3>Overview of</h3>
              <h2>Ikatan Ion</h2>
            <Link to="/ikatan-ion">
            <button className="card-button">Pelajari Sekarang</button>
            </Link>
            </div>
          </div>
        <div className="card">
          <img
          src="Ikatan logam.png"
          alt="Ikatan logam"
          className="card-image"
        />

        <div className="card-content">
          <h3>Overview of</h3>
          <h2>Ikatan Logam</h2>
          <Link to="/ikatan-Logam">
        <button className="card-button">Pelajari Sekarang</button>
        </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default IkatanKimia;
