import React from 'react';
import { Link } from 'react-router-dom';
import './TeoriAtom.css';

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
    <div className="page-containerr">
      <h2 className="section-title">Teori Atom</h2>
      <p> Pada dasarnya, setiap material yang ada di dunia ini pasti mempunyai bagian yang paling kecil, lalu jika bagian kecil itu dibelah lagi, maka akan terdapat bagian yang lebih kecil lagi. Nah, bagian kecil dari bagian yang terkecil itulah disebut dengan atom.
        Sebuah pengertian pasti diawali dengan katanya. Sama halnya dengan atom, kata atom itu sendiri berasal dari bahasa Yunani, atomos. Atomos berarti tidak dapat dibagi-bagi. Sementara itu, pengertian atom-atom menurut para ahli juga berbeda-beda. 
        Berikut pengertian atom menurut para ahli:
      </p>
    <div className="content-section">
      <h2>Teori Atom John Dalton</h2>
      <div className="alert-box">
        <strong>Halo, Sobat pintar!</strong> Kali ini kita akan belajar tentang <strong>Perkembangan Teori Atom</strong>. Ada <strong>Teori Atom Dalton</strong> sebagai pembuka nih, Sobat!
      </div>
      <p>
      Teori atom Dalton dikembangkan oleh John Dalton pada tahun 1803 hingga 1809. Lewat teori ini, Dalton menyatakan atom adalah zat yang tidak dapat dibagi lagi menjadi zat-zat yang lebih sederhana atau lebih kecil.
          Struktur atom adalah susunan partikel dasar dalam atom. Atom sebagai partikel penyusun materi dapat menentukan sifat materi.
            <strong> Atom </strong> berasal dari Bahasa Yunani yaitu <i>atomos</i> yang berarti partikel terkecil yang tidak dapat dibagi lagi. 
            Atom memang tidak dapat dilihat dengan kasat mata, namun kita dapat melihat visualisasi atom dalam 
            <strong> perkembangan model atom </strong> berdasarkan hasil eksperimen dari para ilmuwan. Kebenaran suatu model atau teori atom 
            tidak mutlak. Dalam perkembangannya model atau teori atom terus mengalami perbaikan dan penyempurnaan.
      </p>
      
      <h3>Teori atom John Dalton</h3>
      <img src="John Dalton.jpg" alt="Model Atom Dalton" className="img-fluid mb-3" />
      <p>Dalton mengemukakan tentang atom sebagai berikut:</p>
      <ul className="list">
        <li>Atom adalah bola pejal yang tidak bermuatan.</li>
        <li>Atom sebagai terkecil suatu materi yang tidak dapat dibagi lagi.</li>
        <li>Atom dari suatu unsur yang sama memiliki berat, ukuran dan bentuk yang sama, tetapi berbeda dengan atom-atom lain.</li>
        <li>Atom tidak dapat diciptakan dan dimusnahkan.</li>
        <li>Pada reaksi kimia terjadi penggabungan dan pemisahan atom.</li>
        <li>Senyawa adalah hasil reaksi atom-atom penyusunnya.</li>
      </ul>

      <h4>Kelebihan</h4>
      <ul className="list">
        <li>Meningkatkan rasa minat terhadap penelitian model atom berikutnya.</li>
        <li>Mampu menjelaskan Hukum Kekekalan Massa, Hukum Perbandingan Tetap, dan Hukum Perbandingan Berganda.</li>
      </ul>

      <h4>Kelemahan</h4>
      <ul className="list">
        <li>Beberapa unsur tidak tersusun dari atom melainkan molekul.</li>
        <li>Atom-atom dari unsur yang sama dapat memiliki massa yang berbeda.</li>
        <li>Masih ada partikel subatomik yang menyusun atom seperti proton, neutron, dan elektron.</li>
        <li>Tidak mengenal muatan dan sifat materi listrik sehingga tidak dapat menjelaskan bagaimana cara atom dapat berikatan.</li>
      </ul>

      <div className="content-section">
        <h2>Teori Atom Thomson</h2>
      </div>
      <img src="Thomson.jpg" alt="Model Atom Thomson" className="image-section" />
      <p> Dalam perkembangannya, Thomson memperbaiki kekurangan-kekurangan yang ada pada teori atom Dalton sebleumnya. Pada tahun 1897, Thomson menemukan partikel yang bermuatan negatif dan disebut dengan elektron.
          Elektron merupakan penemuan yang bertujuan untuk memperbaiki kekurangan teori atom sebelumnya. Teori atom Thomson berawal dari penemuan tabung katode oleh William Crookes. Dari penelitian yang sudah 
          dilakukan Crookes, Thomson mengembangkan penelitiannya tentang sinar katode di Laboratorium Cavendish. Teori atom Thomson bisa disebut dengan sebutan teori roti kismis. Dinamakan teori roti kismis
          karena muatan negatifnya atau elektron (kismis) mengelilingi atom yang bermuatan positif (roti). Secara garis besar teori atom J.J Thomson dapat disimpulkan menjadi beberapa garis besar. 
          Berikut inti dari teori atom Thomson:
      </p>
      <ul className="list">
        <li>Atom bukanlah bagian terkecil dari suatu zat.</li>
        <li>Massa elektron atom lebih kecil dari massa atom.</li>
        <li>Atom dengan muatan positif akan tersebar secara merata ke seluruh bagian atom, kemudian atom itu dinetralkan oleh elektron-elektron yang tersebar diantara muatan positif.</li>
      </ul>

      <h4>Kelebihan</h4>
      <ul className="list">
        <li>Dapat menerangkan adanya partikel yang lebih kecil dari atom yang disebut partikel subatomik.</li>
        <li>Dapat menerangkan sifat listrik atom.</li>
      </ul>

      <h4>Kelemahan</h4>
      <ul className="list">
        <li>Tidak dapat menerangkan fenomena penghamburan partikel alfa oleh selaput tipis emas yang dikemukakan oleh Rutherford.</li>
        <li>Model ini belum dapat memastikan susunan muatan positif dan elektron dalam atom.</li>
      </ul>
      </div>

      <div className="model-atom-container">
        <h2>Perbandingan model Atom</h2>
        <div className="model-atom-images">
          <div className="model">
            <img src="Dalton.jpg" alt="Model Dalton" />
            <p>Model Dalton</p>
            </div>
          <div className="model">
            <img src="Thomson2.jpg" alt="Model Thomson" />
            <p>Model Thomson</p> 
          </div>
          <div className="model">
            <img src="AtomRutherford.png" alt="Model Rutherford" />
            <p>Model Rutherford</p>
          </div>
          <div className="model">
            <img src="Bohr.jpg" alt="Model Bohr" />
            <p>Model Bohr</p>
          </div>
          <div className="model">
            <img src="Mekanika.png" alt="Model Mekanika Kuantum" />
            <p>Mekanika Kuantum</p>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default TeoriAtom;