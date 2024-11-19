import React from 'react';
import Navbar from '../components/Navbar';
import './IkatanKimia.css';

const IkatanKimia = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
    <div className="container">
      
      {/* Header */}
      <header className="header">
        <h1>Ikatan Kimia</h1>
        <p>
        Ikatan kimia adalah dasar dari semua materi di alam semesta. Dengan memahami cara atom bergabung, kita dapat menjelaskan berbagai fenomena dalam kehidupan sehari-hari.
        </p>
      </header>
      
      {/* Content */}
      <section className="content">
        <div className="main-content">
          <h2>Apa itu ikatan kimia?</h2>
          <p>
          Ikatan kimia adalah gaya tarik yang mengikat atom-atom untuk membentuk molekul atau senyawa.
            Ini terjadi karena atom berusaha mencapai keadaan stabil dengan memiliki konfigurasi elektron yang lengkap, seperti gas mulia.
            Ikatan kimia juga terjadi karena pencapaian kestabilan suatu unsur. 
            Elektron yang berperan pada pembentukan ikatan kimia adalah elektron valensi dari suatu atom.
          </p>
          <div className="highlight">
            <p>
            "Ikatan kimia menghubungkan atom-atom untuk menciptakan segala sesuatu di sekitar kita, 
            dari air yang kita minum hingga udara yang kita hirup."
            </p>
          </div>
        </div>
        <div className="image">
          <img src="Ikatan Kimia.jpg" alt="Ikatan Kimia Ilustrasi" />
        </div>
      </section>

      {/* Types Section */}
      <section className="types">
        <h2>Jenis-Jenis Ikatan Kimia</h2>
        <p>
        Sifat-sifat zat sebagian ditentukan oleh ikatan kimia antara atom-atom pembentukya. 
        Suatu ikatan kimia adalah gaya tarik menarik yang kaut antara atom-atom tertentu di dalam suatu zat. 
        Perubahan kimia atau reaksi kimia terjadi karena penggabungan atau pemisahan atom-atom dengan cara tertentu 
        sehingga terbentuk zatyang lebih stabil. Berikut merupakan jenis-jenis ikatan kimia:
        </p>
      <div className="type-boxes">
        <div className="type-boxes">
        <h3>Ikatan Ionik</h3>
        <p>
        Terjadi ketika atom memberikan atau menerima elektron. Contohnya adalah NaCl (garam dapur), di mana ion natrium (Na⁺) 
        dan klorida (Cl⁻) saling tarik-menarik. sedangkan ion negatif terbentuk karena unsurnonlogam menerima elektronnya.
        Ion positif terbentuk karena suatu atom melepaskanelectron yaitu atom unsur logam. Ion negative terbentuk karena 
        suatu atom menerimaelectron yaitu atom unsur nonlogam. Ikatan ion terjadi karena serah terima elektron.
        </p>
        <img src="Ikatan ionik.png" alt="Ikatan Ionik" className="type-image" />
      </div>

      <div className="type-box">
        <h3>Ikatan Kovalen</h3>
        <p>
        Terbentuk saat dua atom berbagi pasangan elektron. Contoh: Molekul air (H₂O), di mana atom hidrogen 
        dan oksigen berbagi elektron untuk mencapai kestabilan.
        yang dalam pembentukannya, masing-masing atom mempunyai orbital pada kulit terluaryang berisi elektron tunggal. 
        </p>
        <img src="Ikatan kovalen.png" alt="Ikatan Kovalen" className="type-image" />
      </div>

      <div className="type-box">
        <h3>Ikatan logam</h3>
        <p>
        Terjadi di antara atom logam. Elektron-elektron valensi bergerak bebas, memungkinkan logam menjadi konduktor listrik yang baik. Contoh: tembaga (Cu).
        </p>
        <img src="Ikatan logam.png" alt="Ikatan Logam" className="type-image" />
      </div>
      </div>
      </section>
    </div>

       {/* Importance Section */}
       <section className="importance">
        <h2>Pentingnya Ikatan Kimia</h2>
        <p>
        Ikatan kimia adalah inti dari banyak proses di alam. Tanpa itu, tidak akan ada air, makanan, atau bahkan kehidupan. Berikut adalah beberapa peran penting ikatan kimia:
        </p>
        <ul>
          <li><b>Dalam Biologi:</b> Molekul seperti DNA, protein, dan karbohidrat semuanya terbentuk melalui ikatan kimia. </li>
          <li><b>Dalam Kimia:</b> Reaksi kimia, seperti pembakaran bahan bakar, melibatkan pemutusan dan pembentukan ikatan.</li>
          <li><b>Dalam Industri:</b> Material seperti plastik, baja, dan kaca dihasilkan melalui manipulasi ikatan kimia.</li>
        </ul>
        </section>

        {/* Example Section */}
        <section className="examples">
          <h2>Contoh Aplikasi Ikatan Kimia</h2>
          <div className="example-boxes">
            <div className="example-box">
              <h3>Air (H₂O)</h3>
              <p>
              Air terdiri dari dua atom hidrogen yang berbagi elektron dengan satu atom oksigen melalui ikatan kovalen. Ini adalah molekul paling vital untuk kehidupan.
              </p>
            </div>

            <div className="example-box">
              <h3>Karbon Dioksida (CO₂)</h3>
              <p>
              Molekul gas ini terbentuk melalui ikatan kovalen antara karbon dan oksigen. Ini berperan dalam proses fotosintesis dan respirasi.
              </p>
            </div>
            </div>
            </section>

            {/* Footer */}
            <footer className="footer">
              <p>
              Belajar tentang ikatan kimia membantu kita memahami dunia di tingkat paling mendasar. Terus eksplorasi untuk menemukan lebih banyak!
              </p>
            </footer>
            </div>
  );
};

export default IkatanKimia;