import React from 'react';
import { Link } from 'react-router-dom';
import '../web.css';
import './reaksiredoks.css';

const ReaksiRedoks = () => {
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
      <h2>Reaksi Redoks</h2>
      <section>
          <h3>Reaksi Redoks</h3>
          <p>Apa itu reaksi redoks? Reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi yang berlangsung pada proses elektrokimia. Boleh dibilang, reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi. Berikut pengertian dari kedua istilah tersebut.</p>
        </section>
        
        <section>
          <h3>Pengertian Reduksi</h3>
          <p>Reduksi adalah reaksi yang mengalami penurunan bilangan oksidasi dan kenaikan elektron. Dapat dikatakan bahwa reduksi adalah reaksi dimana suatu zat kehilangan oksigen.</p>
        </section>
        
        <section>
          <h3>Pengertian Oksidasi</h3>
          <p>Oksidasi adalah reaksi yang mengalami peningkatan bilangan oksidasi dan penurunan elektron. Dapat dikatakan bahwa oksidasi adalah reaksi dimana suatu zat mengikat oksigen.</p>
        </section>

        <section>
          <h4>Contoh Reaksi</h4>
          <p>Perhatikan contoh reaksi berikut ini:</p>
          <img src="reaksi redoks.png" alt="Contoh Reaksi Redoks" />
          <p>Bagaimana penjelasan reaksi oksidasi dan reduksi pada contoh di atas? Besi (III) oksida (<em>Fe₂O₃</em>) mengalami reduksi karena kehilangan atom oksigen dan berubah menjadi besi (<em>2Fe</em>). Adapun karbon monoksida (<em>3CO</em>) mengalami reaksi oksidasi karena mengikat atom oksigen dan berubah menjadi karbon dioksida (<em>3CO₂</em>).</p>
        </section>

        <section>
          <h3>Konsep Bilangan Oksidasi</h3>
          <p>Konsep reaksi redoks yang melibatkan perpindahan elektron ini hanya bisa terjadi pada senyawa ionik aja, sedangkan senyawa kovalen tidak. Oleh karena itu, muncul konsep redoks yang ketiga, yaitu berdasarkan perubahan bilangan oksidasi (biloks).

Bilangan oksidasi adalah muatan positif dan negatif pada suatu atom. Unsur yang biloksnya positif, biasanya merupakan atom-atom unsur logam, seperti Na, Fe, Mg, Ca, dan unsur logam lainnya. Sementara itu, unsur yang biloksnya negatif, biasanya atom-atom unsur nonlogam, seperti O, Cl, F, dan unsur nonlogam lainnya. Berdasarkan konsep perubahan bilangan oksidasi, reaksi reduksi adalah reaksi yang mengalami penurunan bilangan oksidasi. Sedangkan reaksi oksidasi adalah reaksi yang mengalami kenaikan bilangan oksidasi.</p>
<p>Terdapat delapan aturan dalam menentukan bilangan oksidasi suatu atom yang harus Sobat ketahui, antara lain adalah sebagai berikut.</p>
          </section>
          <section>
            <h3>1. Bilangan oksidasi unsur bebas dalam bentuk atom dan molekul adalah 0.</h3>
            <p>Contoh: bebas berbentuk atom</p>
            <p>C, Ca, Cu, Na, Fe, Al, Ne = 0</p>
            <img src="reaksiredoks2.jpg" alt="Bilangan oksidasi" />

          </section>
      
    </div>
    </div>
  );
};

export default ReaksiRedoks;
