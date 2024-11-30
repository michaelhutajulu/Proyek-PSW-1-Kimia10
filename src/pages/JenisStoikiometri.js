// JenisStoikiometri.js
import React from 'react';
import { Link } from 'react-router-dom';
import './JenisStoikometri.css';
import Navbar from '../components/Navbar';
const JenisStoikiometri = () => {
  return (
    <div className="periodic-table-container">
      <header className="periodic-header">
        <div className="periodic-logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="periodic-logo" />
          <h1 className="periodic-website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
    <div className="jenis-stoikiometri-page">
      <header className="jenis-stoikiometri-header">
        <h1>Jenis Stoikiometri</h1>
      </header>
      <div className="jenis-stoikiometri-content">
        <h2>Stoikiometri Reaksi</h2>
        <p>
          Stoikiometri sering sekali digunakan untuk menyeimbangkan persamaan kimia yang dapat ditemukan pada stoikiometri reaksi. Hal ini menggambarkan hubungan kuantitatif antara zat yang berpartisipasi dalam reaksi kimia. Di dalam contoh di atas, nitrogen dan hidrogen bereaksi untuk membentuk amonia, reaksi stoikiometri menggambarkan rasio molekul nitrogen, hidrogen, dan amonia 1:3:2.
        </p>
      </div>
        <h2>Stoikiometri Komposisi</h2>
        <p>
          Hal ini menjelaskan kuantitatif (massa) hubungan antara unsur-unsur dalam senyawa. Contohnya, stoikiometri komposisi menggambarkan (massa) nitrogen dengan hidrogen yang bergabung menjadi amonia kompleks, yaitu 1 (satu) mol nitrogen dan 3 (tiga) mol hidrogen dalam setiap 2 mol amonia. Mol ialah satuan yang dipakai dalam kimia untuk jumlah zat.
        </p>
        
        <h2>Stoikiometri Gas</h2>
        <p>
          Ialah jenis stoikiometri yang berkaitan dengan reaksi yang melibatkan gas, di mana gas berada pada suhu, tekanan, dan volume yang dikenal dan dianggap gas ideal. Untuk gas, perbandingan volume idealnya sama dengan hukum gas ideal, akan tetapi rasio massa reaksi tunggal harus dihitung dari massa molekul reaktan dan produk, di mana massa molekul ialah massa 1 (satu) molekul zat. Gas ideal ialah gas teoretis yang terdiri dari satu set partikel yang bergerak acak, tanpa interaksi yang mematuhi hukum gas ideal. Hukum gas ideal ialah persamaan keadaan gas ideal. Persamaan hukum gas ideal adalah PV = nRT, di mana P adalah tekanan, V adalah volume, dan T adalah temperatur absolut, sedangkan n adalah mol gas dan R adalah konstanta gas universal.
        </p>

        <h2>Rasio Stoikiometri</h2>
        <p>
          Sejumlah stoikiometri (rasio reagen) atau zat yang ditambahkan ke sistem dalam rangka membuat reaksi kimia ialah jumlah atau rasio di mana, dengan asumsi bahwa hasil dari reaksi selesai dengan dasar sebagai berikut:
        </p>
        <ul>
          <li>Tidak ada sisa-sisa residu</li>
          <li>Semua reagen yang dikonsumsi</li>
          <li>Tidak ada defisit reagen</li>
          <li>Reaksi hanya terjadi pada rasio stoikiometri</li>
        </ul>
      </div>
      <div className="jenis-stoikiometri-button-container">
        <Link to="/Stoikiometri" className="jenis-stoikiometri-button">
          Kembali ke Stoikiometri
        </Link>
      </div>
    </div>
  );
};

export default JenisStoikiometri;