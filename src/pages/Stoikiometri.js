import React from 'react';
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom';
import '../pages/Stoikiometri.css'; // Perbaiki cara impor CSS

const Stoikiometri = () => {
  return (
    <div className="dashboard-container">
    <header className="dashboard-header">
      <div className="logo-section">
        <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
        <h1 className="website-name">Chem10thguide</h1>
      </div>
    </header>
      <Navbar />
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
        <p>Stoikiometri di dasarkan pada hukum dasar kimia,
           yaitu hukum kekekalan massa,
           hukum perbandingan tetap, dan hukum perbandingan berganda.</p>
        <h4><strong> Perhatikan contoh dibawah</strong></h4>
        <img src="/contoh-stoikiometri.png"
        alt="contoh stoikiometri"
        />
        <p><strong>Stoikiometri gas</strong></p>
        <p>ialah suatu bentuk khusus, di mana reaktan dan produknya seluruhnya merupakan gas.
           Di dalam kasus ini, koefisien zat (yang menyatakan perbandingan mol dalam stoikiometri reaksi) 
           sekaligus menyatakan perbandingan volume antara zat-zat yang terlibat.</p>
        <h4><strong> Dasar stoikiometri larutan </strong></h4>
        <p className="stoikiometri-paragraph">
          Istilah “konsentrasi” larutan ialah menyatakan jumlah zat terlarut yang dilarutkan ke dalam sejumlah tertentu pelarut ataupun sejumlah tertentu larutan.
           Konsentrasi larutan bisa dinyatakan dalam molaritas.
           Molaritas (M) didefinisikan sebagai jumlah mol zat terlarut per liter larutan
           </p>
        <p><strong>dengan rumus dibawah ini</strong></p> 
        <img src="/rumus.png"
        alt="rumus-image"
        />
        <h5><strong> Dasar Stoikiometri Gas Ideal </strong></h5>
        <p className="stoikiometri-paragraph">
        Volum molar, di definisikan sebagai volum dari 1 mol entitas
        (atom, ion, molekul, unit formula) dari materi. Satuan dari volum molar ialah L/mol.
        </p>
        <img src="/rumus2.png"
        alt="rumus-image"/>
        <img src="/rumus3.png"
        alt="rumus3-image"
        />
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
        <div className="stoikiometri-button-container">
          <Link to="/JenisStoikometri" className="stoikiometri-button">
            Lihat Jenis Stoikiometri
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stoikiometri;