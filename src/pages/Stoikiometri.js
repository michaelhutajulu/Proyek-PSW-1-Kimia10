import React from 'react';
import Navbar from '../components/Navbar';
import './Stoikiometri.css';
import { Link } from 'react-router-dom';

const Stoikiometri = () => {
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
            Pengertian Stoikiometri 
            </li>
            <li onClick={() => scrollToSection('sifat-sifat-ikatan-kimia')}>
              Jenis-jenis Stoikiometri
            </li>
            <li onClick={() => scrollToSection('jenis-jenis-ikatan-kimia')}>
              Rasio Stoikiometri 
            </li>
          </ul>
        </aside>

      {/* Main Content */}
      <main className="content">
        {/* Section: Pengertian Ikatan Kimia */}
        <section id="pengertian-iakatan-kimia">
          <h1>Pengertian Stoikiometri</h1>
          <div className="image-container">
            <img
              src="/Stoikiometri2.jpg"
              alt="stoikiometri"
              className="content-image"
            />
            <p>
               Stoikimoteri kelas 10 mempelajari apa itu Stoikiometri beserta rumus-rumusnya
            </p>
          </div>
          <article className="description">
            <p>
            Stoikometri, di dalam ilmu kimia ialah ilmu yang mempelajari hubungan kuantitatif antar reaktan 
          dan produk dalam reaksi kimia. Konsep stoikometri digunakan untuk menghitung massa, volume, dan 
          jumlah mol zat yang terlibat dalam suatu reaksi kimia. Stoikometri berasal dari kata "stoicheion" 
          dalam bahasa Yunani yang berarti mengukur.
            </p>
            <p>Stoikiometri di dasarkan pada hukum dasar kimia,
           yaitu hukum kekekalan massa,
           hukum perbandingan tetap, dan hukum perbandingan berganda.
           </p>
           <p>Perhatikan gambar dibawah</p>
           <div className="image-container">
            <img
              src="/contoh-stoikiometri.png"
              alt="stoikiometri"
              className="content-image"
            />
          </div>
          <h1> Stoikiometri gas </h1>
          <p> ialah suatu bentuk khusus, di mana reaktan dan produknya seluruhnya merupakan gas.
           Di dalam kasus ini, koefisien zat (yang menyatakan perbandingan mol dalam stoikiometri reaksi) 
           sekaligus menyatakan perbandingan volume antara zat-zat yang terlibat.
           </p>
          <h1> Dasar stoikiometri larutan </h1>
          <p> Istilah “konsentrasi” larutan ialah menyatakan jumlah zat terlarut yang dilarutkan ke dalam sejumlah tertentu 
            pelarut ataupun sejumlah tertentu larutan. Konsentrasi larutan bisa dinyatakan dalam molaritas. Molaritas (M) didefinisikan 
            sebagai jumlah mol zat terlarut per liter larutan 
            </p>
          <p> Dengan rumus dibawah ini </p>
          <div className="image-container">
            <img
              src="/rumus.png"
              alt="stoikiometri"
              className="content-image"
            />
          </div>
           <h1> Dasar Stoikiometri Gas Ideal </h1>
           <p> Volum molar, di definisikan sebagai volum dari 1 mol entitas 
            (atom, ion, molekul, unit formula) dari materi. Satuan dari volum molar ialah L/mol.
           </p>
           <p>Perhatikan rumus dibawah</p>
           <div className="image-container">
            <img
              src="/rumus2.png"
              alt="stoikiometri"
              className="content-image"
            />
          </div>
          <div className="image-container">
            <img
              src="/rumus3.png"
              alt="stoikiometri"
              className="content-image"
            />
          </div>
          <p> Suatu reaksi kimia dapat dikatakan sebagai reaksi stoikometri apabila reaktan dalam reaksi habis seluruhnya.
            </p>
          <p> Adapun rumus-rumus yang biasa digunakan dalam menyelesaikan materi Kimia Stoikiometri adalah sebagai berikut:\
            </p>
            <div className="image-container">
            <img
              src="/Rumus-Stoikiometri-Kimia.png"
              alt="stoikiometri"
              className="content-image"
            />
          </div>
          <p>  Angka 22,4 L merupakan volume gas ideal dalam keadaan STP (Standard Temperature and Pressure), 
          dengan tekanan gas (P) = 1 atm, dan suhu (T) = 273 K. Sementara angka 6,02 x 10<sup>23</sup> 
          merupakan besaran tetapan Avogadro. Jadi, 1 mol zat apa pun memiliki jumlah partikel yang sama 
          yaitu sebanyak 6,02 x 10<sup>23</sup> partikel. </p>
          </article>
        </section>
        {/* Section: Sifat-sfat Ikatan Kimia */}
        <section id="sifat-sifat-ikatan-kimia">
          <h1> Jenis Stoikiometri </h1>
          <article className="description">
            <h1> Stoikiometri Reaksi: </h1>
            <p>
            Stoikiometri sering sekali digunakan untuk menyeimbangkan persamaan kimia yang dapat ditemukan pada stoikiometri reaksi. 
            hal Ini menggambarkan hubungan kuantitatif antara zat karena berpartisipasi dalam reaksi kimia. Di dalam contoh di atas, 
            nitrogen dan hidrogen bereaksi untuk membentuk amonia, reaksi stoikiometri menggambarkan rasio molekul nitrogen, hidrogen dan amonia 1: 3: 2.
            </p>
            <h1> Stoikiometri Komposisi: </h1>
            <p>
            hal ini menjelaskan kuantitatif (massa) hubungan antara unsur-unsur dalam senyawa. contohnya, 
            stoikiometri komposisi menggambarkan (massa) nitrogen dengan hidrogen yang bergabung menjadi amonia kompleks. 
            yaitu 1 (satu) mol nitrogen dan 3 (tiga) mol hidrogen dalam setiap 2 mol amonia. Mol ialah satuan yang dipakai dalam kimia untuk jumlah zat. 
            </p>
            <h1> Stoikiometri Gas: </h1>
            <p>
            ialah Jenis stoikiometri yang berkaitan dengan reaksi yang melibatkan gas, di mana gas berada pada suhu, tekanan dan volume yang di kenal dan dianggap gas ideal. Untuk gas,
            perbandingan volume idealnya sama dengan <strong>hukum gas ideal</strong>,akan tetapi rasio massa reaksi tunggal harus dihitung dari massa molekul reaktan dan produk, 
            di mana massa molekul ialah massa 1 (satu) molekul zat.
            <strong>Gas ideal ialah</strong> gas teoretis yang terdiri dari satu set partikel dan yang bergerak acak, tanpa-berinteraksi yang mematuhi hukum gas ideal. 
            Hukum gas ideal ialah persamaan keadaan gas ideal. Persamaan hukum gas ideal adalah <strong>PV = nRT</strong>, di mana 
            P adalah tekanan,dan V adalah volume dan T adalah temperatur absolut,sedangkan n adalah mol gas dan R adalah konstanta gas universal.
            </p>
          </article>
        </section>
        
        {/* section: Jenis-jenis Ikatan Kimia */}
        <section id="jenis-jenis-ikatan-kimia">
          <h1> Rasio Stoikiometri</h1>
          <article className="description">
            <p>
            Sejumlah stoikiometri (rasio reagen) atau zat yang ditambahkan ke sistem
             dalam rangka membuat reaksi kimia ialah jumlah atau rasio di mana, 
             dengan asumsi bahwa hasil dari reaksi selesai dengan dasar sebagai berikut:
            </p>
            <ul>
              <li>
                <strong>Tidak ada sisa-sisa residu</strong>
              </li>
              <li>
                <strong>Semua reagen yang dikonsumsi</strong>
              </li>
              <li>
                <strong>Tidak ada defisit reagen</strong>
              </li>
            </ul>
            <p>Reaksi hanya terjadi pada rasio stoikiometri 
              Stoikiometri bersandar pada hukum seperti hukum perbandingan tetap, 
              hukum perbandingan ganda dan hukum kekekalan massa.</p>
            <ul>
              <li>
                <strong> Hukum kekekalan massa = </strong>
                Menggunakan hukum-hukum fisika seperti hukum kekekalan massa, yang menyatakan massa reaktan sama dengan massa produk, 
                Stoikiometri dipakai untuk mengumpulkan informasi tentang jumlah berbagai unsur yang digunakan di dalam reaksi kimia , 
                dan apakah mereka mengambil bentuk gas, padat atau cairan.
              </li>
              <li>
                <strong> Hukum perbandingan tetap =</strong>
                Ini menyatakan bahwasanya senyawa kimia (zat yang terdiri dari 2 atau lebih usnur) 
                selalu berisi proporsi yang sama dari unsur (senyawa dengan satu jenis atom) dengan massa.
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
      src="/Stoikiometri2.jpg"
      alt="Stoikiometri"
      className="card-image"
    />
    <div className="card-content">
      <h3>Overview of</h3>
      <h2> Mau tes dulu? tekan tombol dibawah ini</h2>
      <div className="card-buttons">
        <Link to="/kuisstoikiometri.js">
          <button className="card-button">Kuis</button>
        </Link>
      </div>
    </div>
  </div>
  <div className="card">
    <img
      src="/rumus3.png"
      alt="Ikatan Ion"
      className="card-image"
    />
    <div className="card-content">
      <h3>Overview of</h3>
      <h2>Udah Paham? gas kerjakan soal</h2>
      <div className="card-buttons">
        <Link to="/soal-ikatan-ion">
          <button className="card-button">Soal</button>
        </Link>
      </div>
    </div>
  </div>
    </div>
  </div>
);
};

export default Stoikiometri;
