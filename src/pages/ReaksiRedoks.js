import React from 'react';
import Navbar from '../components/Navbar';
import './reaksiredoks.css';
import { Link } from 'react-router-dom';

const ReaksiRedoks = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'});
  }
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logokimia.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>

      {/* Navbar*/ }
      <Navbar />
      {/*Main Container */}
     <div className="redoks.container">
     {/*Sidebar */}
     <aside className="sidebar1">
      <h2>Materi:</h2>
      <ul>
        <li
          className="active1"
          onClick={() => scrollToSection('pengertian-rekasi-redoks')}>
            Pengertian Reaksi Redoks
        </li>
        <li onClick={() => scrollToSection('Konsep-Bilangan-Oksidasi')}>
          Fungsi Reaksi Redoks
        </li>
        <li onClick={() => scrollToSection('Konsep-Reaksi-Redoks')}>
          Konsep Reaksi Redoks
        </li>
      </ul>
     </aside>

     {/* Main Content */}
     <main className="content1">
      {/* Section; Pengertian Reaksi Redoks*/}
      <section id="pengertian-reaksi-redoks">
        <h1>Pengertian Reaksi Redoks</h1>
        <div className="image-contain">
          <img 
          src="redoks.jpg"
          alt="Model Reaksi Redoks"
          className="content-image"
          />
          <p>
            Reaksi redoks kelas 10 mempelajari bagaimana setiap senyawa dapat berekasi
          </p>
        </div>
        <article className="description">
          <p>
          Apa itu reaksi redoks? Reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi yang berlangsung pada proses elektrokimia. Boleh dibilang, reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi.Reaksi redoks adalah proses kimia yang melibatkan transfer elektron antara dua zat, di mana satu zat mengalami oksidasi dan zat lainnya mengalami reduksi.
          </p>
          <p>Dalam reaksi redoks, zat yang mengalami oksidasi disebut reduktor karena memberikan elektron, sedangkan zat yang mengalami reduksi disebut oksidator karena menerima elektron. Contohnya adalah reaksi antara logam seng (Zn) dan ion tembaga (Cu²⁺), di mana Zn teroksidasi menjadi Zn²⁺ dengan melepaskan elektron, dan Cu²⁺ tereduksi menjadi logam Cu dengan menerima elektron. Reaksi redoks memainkan peran penting dalam berbagai proses alami dan teknologi, seperti fotosintesis, respirasi, dan pembangkitan energi dalam baterai.</p>
        
        <ul>
          <li>
          Bilangan oksidasi unsur bebas dalam bentuk atom dan molekul adalah 0.
          </li>
          <li>Bilangan oksidasi ion monoatom (1 atom) dan poliatom (lebih dari 1 atom) sesuai dengan jenis muatan ionnya</li>
        <li>Bilangan oksidasi unsur pada golongan logam IA, IIA, dan IIIA sesuai dengan golongannya</li>
        <li>Bilangan oksidasi unsur golongan transisi (golongan B) lebih dari satu</li>
        <li>Jumlah bilangan oksidasi unsur-unsur yang membentuk ion = jumlah muatannya</li>
        <li>Jumlah bilangan oksidasi unsur-unsur yang membentuk senyawa = 0</li>
        <li>Bilangan oksidasi hidrogen (H) bila berikatan dengan logam = -1. Bila H berikatan dengan non-logam = +1</li>
        <li>Bilangan oksidasi oksigen (O) dalam senyawa proksida = -1. Bilangan oksidasi O dalam senyawa non-peroksida = -2</li>
        </ul>
        </article>
      </section>

      {/* Section: Konsep Bilangan Oksidasi*/}

      <section id="Konsep-Bilangan-Oksidasi">
        <h1> Fungsi Reaksi Redoks</h1>
        <article className="description">
         <ul>
          <li>

         
         <strong>Energi</strong>
           <p>
           Reaksi redoks adalah sumber utama energi dalam banyak proses biologis dan industri. Dalam proses metabolisme, misalnya, oksidasi senyawa organik seperti glukosa menghasilkan energi yang digunakan oleh sel. Di bidang industri, reaksi redoks digunakan dalam pembangkit listrik, seperti dalam sel bahan bakar.
           </p>
           </li>
           <li>
            <strong>Bahan Bakar</strong>
          <p>
          Banyak bahan bakar yang digunakan dalam kehidupan sehari-hari melibatkan reaksi redoks. Misalnya, pembakaran bahan bakar fosil seperti bensin dan batu bara melibatkan oksidasi molekul-molekul dalam bahan bakar oleh oksigen dari udara, menghasilkan energi dan produk sampingan seperti karbon dioksida dan air.
          </p>
          </li>
          <li>
            <strong>Elektrokimia</strong>
        <p>
        Reaksi redoks menjadi dasar bagi banyak proses elektrokimia. Contohnya adalah sel elektrokimia seperti baterai dan sel elektrolisis, di mana reaksi redoks terjadi secara spontan atau dipaksa dengan bantuan aliran arus listrik.
        </p>
        </li>
        <li>
          <strong>Korosi</strong>
        <p>
        Korosi adalah reaksi redoks yang terjadi ketika logam bereaksi dengan oksigen dan air, menghasilkan produk korosi seperti karat pada besi. Meskipun ini umumnya dianggap sebagai efek negatif, pemahaman tentang reaksi redoks ini membantu dalam mengembangkan metode perlindungan terhadap korosi.
        </p>
        </li>
        <li>
          <strong>Fotosintesis</strong>
        <p>
        Proses fotosintesis dalam tumbuhan melibatkan reaksi redoks. Di dalam kloroplas, cahaya matahari menginduksi reaksi redoks yang mengubah karbon dioksida dan air menjadi glukosa dan oksigen dengan bantuan klorofil.
        </p>
        </li>
        </ul>
        </article>
      </section>



      {/*section: Konsep-Reaksi-Redoks*/}
      <section id="Konsep-Reaksi-Redoks">
        <h1>Konsep Reaksi Redoks</h1>
        <article className="description">
          <p>
          Apa itu reaksi redoks? Reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi yang berlangsung pada proses elektrokimia. Boleh dibilang, reaksi redoks adalah singkatan dari reaksi reduksi dan oksidasi.Reaksi redoks adalah proses kimia yang melibatkan transfer elektron antara dua zat, di mana satu zat mengalami oksidasi dan zat lainnya mengalami reduksi.
          Dalam reaksi redoks, zat yang mengalami oksidasi disebut reduktor karena memberikan elektron, sedangkan zat yang mengalami reduksi disebut oksidator karena menerima elektron. Contohnya adalah reaksi antara logam seng (Zn) dan ion tembaga (Cu²⁺), di mana Zn teroksidasi menjadi Zn²⁺ dengan melepaskan elektron, dan Cu²⁺ tereduksi menjadi logam Cu dengan menerima elektron. Reaksi redoks memainkan peran penting dalam berbagai proses alami dan teknologi, seperti fotosintesis, respirasi, dan pembangkitan energi dalam baterai.
          Berikut pengertian dari kedua istilah tersebut.
          </p>
          <ul>
            <li>
              <strong>Reduksi </strong> 
               adalah reaksi yang mengalami penurunan bilangan oksidasi dan kenaikan elektron. Dapat dikatakan bahwa reduksi adalah reaksi dimana suatu zat kehilangan oksigen.
              Reduksi sering kali melibatkan pelepasan oksigen dari suatu zat atau pengikatan hidrogen oleh zat tersebut.   Sebagai contoh, dalam reaksi Fe₂O₃ + 3CO → 2Fe + 3CO₂, besi oksida (Fe₂O₃) mengalami reduksi menjadi besi (Fe) karena kehilangan atom oksigen. Sementara itu, karbon monoksida (CO) bertindak sebagai reduktor, memberikan elektron selama reaksi berlangsung. Proses reduksi ini penting dalam berbagai bidang, seperti metalurgi untuk ekstraksi logam dan biokimia dalam respirasi seluler.
            </li>
            <li> 
              <strong>Oksidasi </strong>
               adalah reaksi yang mengalami peningkatan bilangan oksidasi dan penurunan elektron. Dapat dikatakan bahwa oksidasi adalah reaksi dimana suatu zat mengikat oksigen.
              Dalam reaksi ini, bilangan oksidasi (tingkat oksidasi) zat yang terlibat meningkat. Reaksi oksidasi biasanya berpasangan dengan reaksi reduksi, karena elektron yang hilang oleh satu zat harus diterima oleh zat lain.
              </li>
          </ul>
        </article>
      </section>
     </main>
     </div>

     {/*Card Section*/}
     <div className="card-container1">
      <div className="card1">
      <img
      src="chemistry.png"
      alt="pertambahan dan penurunan bilangan oksidasi"
      className="card-image1"
      />
      <div className="card-content1">
        <h3>Overview of</h3>
        <h2>Bilangan Oksidasi</h2>
        <Link to="/Kuis">
        <button className="card-button1">Pelajari Sekarang</button></Link>
      </div>
      </div>
      </div>
      </div>
      
      
  );
};

export default ReaksiRedoks;

     