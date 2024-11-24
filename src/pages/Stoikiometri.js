import React from 'react';
import Navbar from '../components/Navbar';

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
    <div className="content-section">
      <h2>Stoikiometri</h2>
      <img src="/Stoikiometri.jpg" className='image-section'/>
      <p>Penjelasan dan contoh soal stoikiometri akan ditampilkan di sini.</p>
      <h3>Pengertian Stoikiometri</h3>
      <p> Stoikometri, di dalam ilmu kimia ialah ilmu yang mempelajari hubungan kuantitatif antar
          reaktan dan produk dalam reaksi kimia. Konsep stoikometri digunakan untuk menghitung massa, volume, dan 
          jumlah mol zat yang terlibat dalam suatu reaksi kimia. dan stoikometri berasal dari kata "stoicheion" dalam 
          bahasa Yunani yang berarti mengukur.</p>
      <p>
      Suatu reaksi kimia dapat dikatakan sebagai reaksi
      stoikometri apabila reaktan dalam reaksi habis seluruhnya.
      </p>
      <p>Adapun rumus-rumus yang biasa digunakan dalam menyelesaikan 
      materi Kimia Stoikiometri adalah sebagai berikut:
      </p>
    </div>
    <img 
    src="/Rumus-Stoikiometri-Kimia.png"  
    alt="Gambar"
    style={{  width: '50%', height: 'auto', marginTop: '20px' }}
    />
    <p>Angka 22,4 L merupakan volume gas ideal dalam keadaan STP (Standard Temperature and Pressure), 
      dengan tekanan gas (P) = 1 atm, dan suhu (T) = 273 K.
       Sementara angka 6,02 x 1023 merupakan besaran tetapan Avogadro. 
       Jadi, 1 mol zat apa pun memiliki jumlah partikel yang sama yaitu sebanyak 6,02 x 1023 partikel.</p>
    </div>
  );
};

export default Stoikiometri;
