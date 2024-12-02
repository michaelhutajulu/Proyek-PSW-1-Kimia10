// FullExplanation.js
import Navbar from '../components/Navbar'
import './TabelPeriodik.css';
import React, { useState } from "react";
const TabelPeriodik2 = () => {
const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prevState) => !prevState);
  };
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
      <div className="periodic-content">
        <p className="periodic-description">
          Tabel periodik dan informasi unsur-unsur akan ditampilkan di sini.
        </p>
        <h3 className="periodic-section-title">Apa itu Tabel Periodik Unsur?</h3>
        <p className="periodic-text">
          Tabel periodik unsur adalah salah satu alat paling penting dalam ilmu kimia dan ilmu pengetahuan secara keseluruhan.
          Tabel ini memberikan cara terstruktur untuk mengorganisasikan unsur-unsur kimia berdasarkan sifat-sifatnya, 
          sehingga memudahkan para ilmuwan dan pelajar untuk memahami bagaimana unsur-unsur tersebut berinteraksi satu sama lain. 
          Dengan susunannya yang sistematis, tabel periodik unsur memungkinkan kita untuk melihat pola dalam sifat-sifat kimia dan fisik unsur,
          memprediksi perilaku unsur yang belum ditemukan, 
          serta mengembangkan pemahaman yang lebih baik tentang struktur atom.
        </p>

        <h4 className="periodic-section-title">Pengelompokkan Unsur menurut Antoine Lavoisier</h4>
        <p className="periodic-text">
          Aristokrat dan ahli kimia Prancis Antoine Laurent Lavoisier adalah tokoh yang sangat penting dalam sejarah kimia.
          Melalui bukunya ini Lavoisier menjadi pembuka jalan atas penemuan-penemuan unsur-unsur
          kimia dan cikal bakal tabel unsur periodik. Ia juga berhasil mempublikasikan daftar 33 unsur, di mana semua unsur
          dikelompokkan berdasarkan sifat logam, non-logam, gas, dan tanah.
        </p>

        <h5 className="periodic-section-title">Pengelompokan Unsur Menurut Johann Wolfgang Dobereiner</h5>
        <p className="periodic-text">
          Wolfgang Johannes Dobereiner, seorang peneliti kimia dan fisika, menjadi pencipta konsep
          yang dapat ditemukan di dalam tabel periodik unsur. Ia mengelompokkan unsur-unsur berdasarkan triade yang disusun berdasarkan massa atomnya,
          di mana unsur kedua setiap triade merupakan massa rata-rata dari unsur pertama dan ketiga.
          Salah satu triad tersebut adalah lithium, natrium, dan kalium.
          Sistem Triade ini didasarkan pada sifat fisik dan kimia suatu unsur.
        </p>
        <img src="/johann.png" alt="Johann" className="periodic-image" />

        <h6 className="periodic-section-title">Pengelompokkan Unsur Menurut Henry Moseley</h6>
        <p className="periodic-text">
          Setelah ditemukan adanya struktur atom yaitu partikel penyusun atom yang terdiri dari Proton, Elektron, dan Neutron
          di mana elektron mengitari neutron dan proton yang berada di inti atom. Dikenal sebagai hukum Moseley,
          penemuan mendasar tentang nomor atom ini merupakan tonggak sejarah dalam memajukan pengetahuan tentang atom.  
          Pada tahun 1914 Moseley menerbitkan sebuah makalah di mana ia menyimpulkan bahwa nomor atom adalah jumlah muatan positif dalam inti atom.
          Dia juga menyatakan bahwa ada tiga unsur yang tidak diketahui, dengan nomor atom 43, 61, dan 75, antara aluminium dan emas.
          Henry Moseley mengemukakan pentingnya nomor atom, dalam penempatan unsur-unsur pada tabel periodik,
          dan kemudian Moseley memperbaharui tabel unsur periodik milik Mendeleev.  
          Tabel periodik menurut Moseley inilah kemudian dikembangkan hingga menjadi tabel unsur periodik yang saat ini kita gunakan dan kita temui di pelajaran kimia, seperti di bawah ini.
      <img src="/moseley.png"
      alt="moseley"
      />
      </p>
      <h7 className="periodic-section-title">Jenis-Jenis Unsur pada Tabel Periodik</h7>
      <p className="perodic-text"> Tabel periodik memuat berbagai jenis unsur, mulai logam, semilogam, logam transisi, logam post transisi, hingga nonlogam. Lantas,
         mana saja pembagian unsur-unsur tersebut? Perhatikan gambar berikut.
      <img src="/Tabel Periodik 3.jpg"
      alt="Periodic-image"
      />
      </p>
      <h8 className="periodic-section-title">
        Unsur logam pada tabel periodik dibagi menjadi empat, yaitu logam utama, logam transisi, logam post transisi,
         dan deret aktinida-lantanida. Apa perbedaan antara keempat logam tersebut?</h8>
      <p className="title 1"><strong>A. Logam utama</strong></p>
      <p className="periodic-text">
      Unsur logam utama berada di golongan A,
      yakni I A (logam alkali) dan II A (logam alkali tanah).
      Kedua logam ini bersifat reaktif karena memiliki elektron valensi yang relatif
      lebih sedikit dibandingkan logam transisi. Jika dibandingkan logam transisi,
      logam utama ini bersifat lebih lunak dengan titik leleh dan titik didih yang relatif lebih rendah. 
      </p>
      <p className="title 2"><strong>B. Logam transisi</strong></p>
      <p className="periodic-text">
      Logam transisi (ditunjukkan oleh warna ungu) berada di golongan I B – VIII B.
      Salah satu unsur logam transisi yang umum Quipperian kenal adalah besi. 
      Jika dibandingkan logam utama, logam transisi ini bersifat lebih keras namun 
      sulit untuk bereaksi karena memiliki elektron val ensi lebih banyak.
      </p> 
      <p className="title 3"><strong>C. Logam post transisi</strong></p>
      <p className="periodic-text">
      Logam post transisi ini berada di antara golongan unsur metaloid 
      dan unsur logam transisi. Titik leleh dan titik didihnya relatif lebih 
      rendah dari logam transisi dan bersifat lebih lunak. Contoh logam post 
      transisi adalah Pb (timbal), Bi (bismuth), Al (aluminium), Ga (gallium), 
      dan sebagainya.
      </p>
      <p className="title 4"><strong>D. Deret lantanida dan aktinida</strong></p>
      <p className="periodic-text">
      Kedua deret tersebut termasuk logam, lho. 
      Untuk lantanida cukup jarang ditemukan meskipun jumlahnya cukup melimpah 
      di kerak Bumi. Tidak menutup kemungkinan, logam tanah jarang ini bisa 
      dikembangkan di masa mendatang. Sementara itu, aktinida erat kaitannya 
      dengan pengembangan nuklir, sehingga sulit dijangkau oleh kimia terapan.
      </p>
      <h9 className="periodic-section-title">Unsur semilogam</h9>
      <p className="periodic-text">
      Unsur semilogam (ditunjukkan oleh warna kuning keemasan) juga biasa disebut metaloid. 
      Mengapa disebut semilogam? Karena sifat-sifat unsurnya merupakan perpaduan 
      antara logam dan nonlogam. Unsur-unsur ini biasa dimanfaatkan sebagai bahan 
      semikonduktor. Contohnya, Si (silicon), Ge (germanium), B (boron), dan sebagainya.
      </p>
      <h10 className="periodic-section-title">Unsur nonlogam</h10>
      <p className="periodic-text">
      Unsur nonlogam berada di golongan A, yaitu I A (hidrogen), IV A (karbon), V A (nitrogen dan fosfor), 
      VI A (oksigen, sulfur, dan selenium), VII A (fluor, klor, brom, iodin), dan semua 
      golongan VIII A. Semua unsur nonlogam, selain VIII A, bersifat reaktif atau mudah 
      berikatan dengan unsur lain.
      </p>
      <h11>Tips Menghafal Tabel Periodik</h11>
      <button className="animated-button" onClick={toggleText}>
        {showText ? "Tutup Tips" : "Lihat Tips"}
      </button>
      <div className={`tips-container ${showText ? "show" : ""}`}>
        <ol>
          <li>
            Buat susunan kalimat singkat untuk memudahkan dalam menghafal.
            <br />
            Contoh: Hari Libur Nanti Ku Rebut Cinta si Frido (H, Li, Na, K, Rb, Cs, Fr).
          </li>
          <li>
            Berilah highlight untuk unsur-unsur yang biasa keluar pada soal.
            <br />
            Contoh: Na, Cl, O, H, Li, Br, K, Mg, Ca.
          </li>
        </ol>
       </div>
      </div>
    </div>
  );
};

export default TabelPeriodik2;  