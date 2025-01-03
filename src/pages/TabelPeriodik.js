import React from 'react';
import Navbar from '../components/Navbar';
import './TabelPeriodik.css';
import { Link } from 'react-router-dom';

const TabelPeriodik = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logokimia.png" alt="Chem10thguide Logo" className="logo" />
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
            Pengertian Tabel Periodik
            </li>
            <li onClick={() => scrollToSection('sifat-sifat-ikatan-kimia')}>
              Jenis-jenis unsur pada tabel periodik
            </li>
            <li onClick={() => scrollToSection('jenis-jenis-ikatan-kimia')}>
              Golongan dan Periode pada tabel periodik
            </li>
          </ul>
        </aside>

      {/* Main Content */}
      <main className="content">
        {/* Section: Pengertian Ikatan Kimia */}
        <section id="pengertian-ikatan-kimia">
          <h1>Pengertian Tabel Periodik</h1>
          <div className="image-container">
            <img
              src="/tabel periodik.png"
              alt="Model Ikatan Kimia"
              className="content-image"
            />
            <p>
               Tabel Periodik kelas 10 mempelajari sejarah tabel periodik dan unsur-unsurnya 
            </p>
          </div>
          <article className="description">
            <p>
            Tabel periodik unsur adalah salah satu alat paling penting dalam ilmu kimia dan ilmu pengetahuan secara keseluruhan.
          Tabel ini memberikan cara terstruktur untuk mengorganisasikan unsur-unsur kimia berdasarkan sifat-sifatnya, 
          sehingga memudahkan para ilmuwan dan pelajar untuk memahami bagaimana unsur-unsur tersebut berinteraksi satu sama lain. 
          Dengan susunannya yang sistematis, tabel periodik unsur memungkinkan kita untuk melihat pola dalam sifat-sifat kimia dan fisik unsur,
          memprediksi perilaku unsur yang belum ditemukan, 
          serta mengembangkan pemahaman yang lebih baik tentang struktur atom.
            </p>
            <h2> Pengelompokkan Unsur Tabel Periodik </h2>
            <ul>
              <li>Menurut Antoine Lavoisier</li>
            <p>Aristokrat dan ahli kimia Prancis <strong>Antoine Laurent Lavoisier</strong> adalah tokoh yang sangat penting dalam sejarah kimia.
          Melalui bukunya ini Lavoisier menjadi pembuka jalan atas penemuan-penemuan unsur-unsur
          kimia dan cikal bakal tabel unsur periodik. Ia juga berhasil mempublikasikan daftar 33 unsur, di mana semua unsur
          dikelompokkan berdasarkan sifat logam, non-logam, gas, dan tanah.
          </p>
              <li>Menurut Johann Wolfgang Dobereiner</li>
            <p><strong>Wolfgang Johannes Dobereiner</strong>, seorang peneliti kimia dan fisika, menjadi pencipta konsep
          yang dapat ditemukan di dalam tabel periodik unsur. Ia mengelompokkan unsur-unsur berdasarkan triade yang disusun berdasarkan massa atomnya,
          di mana unsur kedua setiap triade merupakan massa rata-rata dari unsur pertama dan ketiga.
          Salah satu triad tersebut adalah lithium, natrium, dan kalium.
          Sistem Triade ini didasarkan pada sifat fisik dan kimia suatu unsur.
            </p>
            <div className="image-container">
            <img
              src="/johann.png"
              alt="Model TB johann"
              className="content-image"
            />
            </div>
              <li>Menurut Henry Moseley</li>
            <p>Setelah ditemukan adanya struktur atom yaitu partikel penyusun atom yang terdiri dari Proton, Elektron, dan Neutron
          di mana elektron mengitari neutron dan proton yang berada di inti atom. Dikenal sebagai <strong>hukum Moseley</strong>,
          penemuan mendasar tentang nomor atom ini merupakan tonggak sejarah dalam memajukan pengetahuan tentang atom.  
          Pada tahun 1914 Moseley menerbitkan sebuah makalah di mana ia menyimpulkan bahwa nomor atom adalah jumlah muatan positif dalam inti atom.
          Dia juga menyatakan bahwa ada tiga unsur yang tidak diketahui, dengan nomor atom 43, 61, dan 75, antara aluminium dan emas.
          Henry Moseley mengemukakan pentingnya nomor atom, dalam penempatan unsur-unsur pada tabel periodik,
          dan kemudian Moseley memperbaharui tabel unsur periodik milik Mendeleev.  
          Tabel periodik menurut Moseley inilah kemudian dikembangkan hingga menjadi tabel unsur periodik yang saat ini
         kita gunakan dan kita temui di pelajaran kimia, seperti di bawah ini.</p>
         <div className="image-container">
            <img
              src="/moseley.png"
              alt="Model TB moseley"
              className="content-image"
            />
            </div>
          </ul>
          </article>
        </section>

        {/* Section: Sifat-sfat Ikatan Kimia */}
        <section id="sifat-sifat-ikatan-kimia">
          <h1>Jenis-Jenis Unsur pada Tabel Periodik</h1>
          <p className="perodic-text"> Tabel periodik memuat berbagai jenis unsur, mulai logam, semilogam, logam transisi, logam post transisi, hingga nonlogam. Lantas,
         mana saja pembagian unsur-unsur tersebut? Perhatikan gambar berikut.
         <div className="image-container">
            <img
              src="/Tabel Periodik 3.jpg"
              alt="TB 3"
              className="content-image"
            />
            </div>
          </p>
          <h2>  Unsur logam pada tabel periodik dibagi menjadi empat, yaitu logam utama, logam transisi, logam post transisi,
          dan deret aktinida-lantanida. Apa perbedaan antara keempat logam tersebut? </h2>
          <article className="description">
          <h1>A. Logam utama</h1>
            <p>
            Unsur logam utama berada di golongan A,
      yakni I A (logam alkali) dan II A (logam alkali tanah).
      Kedua logam ini bersifat reaktif karena memiliki elektron valensi yang relatif
      lebih sedikit dibandingkan logam transisi. Jika dibandingkan logam transisi,
      logam utama ini bersifat lebih lunak dengan titik leleh dan titik didih yang relatif lebih rendah.
            </p>
          <h1> B. Logam transisi </h1>
            <p>
            Logam transisi (ditunjukkan oleh warna ungu) berada di golongan I B – VIII B.
      Salah satu unsur logam transisi yang umum Quipperian kenal adalah besi. 
      Jika dibandingkan logam utama, logam transisi ini bersifat lebih keras namun 
      sulit untuk bereaksi karena memiliki elektron val ensi lebih banyak.
            </p>
          <h1>C. Logam post transisi </h1>
            <p>
            Logam post transisi ini berada di antara golongan unsur metaloid 
      dan unsur logam transisi. Titik leleh dan titik didihnya relatif lebih 
      rendah dari logam transisi dan bersifat lebih lunak. Contoh logam post 
      transisi adalah Pb (timbal), Bi (bismuth), Al (aluminium), Ga (gallium), 
      dan sebagainya.
            </p>
            <h1>D. Deret lantanida dan aktinida</h1>
      Kedua deret tersebut termasuk logam, lho. 
      <p>Untuk lantanida cukup jarang ditemukan meskipun jumlahnya cukup melimpah 
      di kerak Bumi. Tidak menutup kemungkinan, logam tanah jarang ini bisa 
      dikembangkan di masa mendatang. Sementara itu, aktinida erat kaitannya 
      dengan pengembangan nuklir, sehingga sulit dijangkau oleh kimia terapan.
      </p>
      <h1> Unsur pada Tabel Periodik</h1>
      <p className="#"><strong>Unsur semilogam</strong></p>
      <p>Unsur semilogam (ditunjukkan oleh warna kuning keemasan) juga biasa disebut metaloid. 
      Mengapa disebut semilogam? Karena sifat-sifat unsurnya merupakan perpaduan 
      antara logam dan nonlogam. Unsur-unsur ini biasa dimanfaatkan sebagai bahan 
      semikonduktor. Contohnya, Si (silicon), Ge (germanium), B (boron), dan sebagainya.
      </p>
      <p className="#"><strong>Unsur nonlogam</strong></p>
      <p>Unsur nonlogam berada di golongan A, yaitu I A (hidrogen), IV A (karbon), V A (nitrogen dan fosfor), 
      VI A (oksigen, sulfur, dan selenium), VII A (fluor, klor, brom, iodin), dan semua 
      golongan VIII A. Semua unsur nonlogam, selain VIII A, bersifat reaktif atau mudah 
      berikatan dengan unsur lain.
      </p>
          </article>
        </section>
        
        {/* section: Jenis-jenis Ikatan Kimia */}
        <section id="jenis-jenis-ikatan-kimia">
          <h1>Cara Menentukan Golongan dan Periode Unsur pada Tabel Periodik</h1>
          <article className="description">
            <p>
            Sekarang giliran mencari golongan! Golongan dalam tabel periodik merupakan kolom-kolom vertikal yang biasanya diberi angka romawi atau huruf A dan B. 
        Unsur-unsur yang berada dalam golongan yang sama memiliki sifat-sifat kimia yang serupa.
        Caranya sangat mudah, teman-teman! Cari nomor pada setiap kolom vertikal dan voila, 
        kamu telah menemukan golongan unsur tersebut. Contohnya, golongan 1 berarti unsur itu terletak pada kolom vertikal pertama, 
        sedangkan golongan 17 dapat ditemukan pada kolom vertikal ketujuh.
            </p>
            <p>
            Periode dalam tabel periodik adalah baris-baris horizontal yang biasanya diberi nomor 1 hingga 7. 
        Unsur-unsur yang berada dalam periode yang sama memiliki jumlah kulit elektron yang serupa.
        Jadi, bagaimana mencari periode dengan mudah? Cukup lakukan pencarian dengan melihat nomor pada setiap baris horizontal. 
        Jika unsur berada pada baris pertama, maka itu termasuk dalam periode 1. Begitu seterusnya hingga periode 7.
            </p>
            <h1>
            Cara Mencari Golongan dan Periode
            </h1>
            <p>
            Golongan dalam Tabel Periodik, Golongan dalam tabel periodik adalah kolom-kolom vertikal di tabel yang mengelompokkan unsur-unsur dengan sifat kimia serupa. 
                  Ada 18 golongan dalam tabel periodik, dan setiap golongan memiliki karakteristik yang berbeda. 
                  Pemahaman tentang golongan ini penting untuk memahami sifat-sifat kimia suatu unsur dan memprediksi perilakunya dalam reaksi kimia.
            </p>
            <p><strong> Berikut beberapa contoh golongan dalam tabel periodik </strong></p>
            <h1>Golongan 1: Logam Alkali</h1>
            <p> Unsur-unsur dalam Golongan 1 adalah logam alkali. Mereka sangat reaktif dan terdapat di dalam senyawa ionik. 
            Unsur-unsur dalam golongan ini meliputi litium (Li), natrium (Na), kalium (K), rubidium (Rb), sesium (Cs), dan francium (Fr). </p>
            <h1>Golongan 2: Logam Alkali Tanah</h1>
            <p> Unsur-unsur dalam Golongan 2 adalah logam alkali tanah. 
                  Mereka juga reaktif, tetapi tidak seaktif logam alkali. Contoh unsur dalam golongan ini adalah 
                  beryllium (Be), magnesium (Mg), kalsium (Ca), strontium (Sr), barium (Ba), dan radium (Ra). </p>
            <h1>Golongan 17: Halogen</h1>
            <p> Unsur-unsur dalam Golongan 17 adalah halogen. Mereka sangat reaktif dan cenderung membentuk senyawa ionik.
            dengan logam alkali. 
            Contoh unsur dalam golongan ini adalah fluor (F), klor (Cl), brom (Br), iodin (I), astatin (At), dan unsur sintetis ununseptium (Uus). </p>
            <h1>Periode dalam Tabel Periodik</h1>
            <p>Periode dalam tabel periodik adalah baris-baris horizontal di tabel. Setiap unsur dalam periode memiliki lapisan elektron yang sama. 
            Periode pertama hanya memiliki 2 unsur (hidrogen dan helium), sedangkan periode kedua memiliki 8 unsur. Pola ini berlanjut hingga periode ke-7.</p>
            <h1> Berikut adalah beberapa contoh unsur dalam setiap periode: </h1>
            <h1>Periode 2</h1>
            <p>Periode 2 terdiri dari unsur-unsur litium (Li) hingga neon (Ne). Unsur-unsur dalam periode ini memiliki lapisan elektron K dan L.</p>
                <h1>Periode 3</h1>
                <p>Periode 3 terdiri dari unsur-unsur natrium (Na) hingga argon (Ar). Unsur-unsur dalam periode ini memiliki lapisan elektron K, L, dan M.</p>
                <h1>Periode 4</h1>
                <p>Periode 4 terdiri dari unsur-unsur kalium (K) hingga krypton (Kr). Unsur-unsur dalam periode ini memiliki lapisan elektron K, L, M, dan N.</p>
          </article>
        </section>
        </main>
        </div>
        <div className="card-container1">
      <div className="card1">
      <img
      src="/tabel periodik.png"
      alt="pertambahan dan penurunan bilangan oksidasi"
      className="card-image1"
      />
      <div className="card-content1">
        <h3>Overview of</h3>
        <h2> tes dulu ga sih? tekan tombol dibawah</h2>
        <Link to="/Kuis-Tabel-Periodik">
        <button className="card-button1">Kuis</button></Link>
      </div>
      </div>
      </div>
      </div>
  );
};

export default TabelPeriodik;