import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const TabelPeriodik = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />
      <div className="page-container">
        <h2>Tabel Periodik Unsur</h2>
        <img src="/tabel periodik.png"
        alt="Tabel periodik"
        style={{  width: '50%', height: 'auto', marginTop: '20px' }}/>
        <p>Tabel periodik dan informasi unsur-unsur akan ditampilkan di sini.</p>
        <h3> Apa itu Tabel Periodik Unsur?</h3>
      <p> Tabel periodik unsur adalah salah satu alat paling penting dalam ilmu kimia dan ilmu pengetahuan secara keseluruhan. 
        Tabel ini memberikan cara terstruktur untuk mengorganisasikan unsur-unsur kimia berdasarkan sifat-sifatnya, 
        sehingga memudahkan para ilmuwan dan pelajar untuk memahami bagaimana unsur-unsur tersebut berinteraksi satu sama lain. 
        Dengan susunannya yang sistematis, tabel periodik unsur memungkinkan kita untuk melihat pola dalam sifat-sifat kimia dan fisik unsur, memprediksi perilaku unsur yang belum ditemukan, 
        serta mengembangkan pemahaman yang lebih baik tentang struktur atom.
      </p>
      <h4> Pengelompokkan Unsur menurut Antoine Lavoisier</h4>
      <p>Aristokrat dan ahli kimia Prancis Antoine Laurent Lavoisier adalah
         tokoh yang sangat penting dalam sejarah kimia,  Melalui bukunya ini Lavoisier menjadi pembuka jalan atas penemuan-penemuan unsur-unsur
            kimia dan cikal bakal tabel unsur periodik. Ia juga berhasil mempublikasikan daftar 33 unsur, di mana semua unsur
             dikelompokkan berdasarkan sifat logam, non-logam, gas, dan tanah.
             </p>
      <h5> Pengelompokan Unsur Menurut Johann Wolfgang Dobereiner</h5>
      <p>Wolfgang Johannes Dobereiner, seorang peneliti kimia dan fisika yang menjadi pencipta konsep yang dapat ditemukan di dalam tabel periodik unsur, 
         menggunakan teori kinetik yang dikembangkan oleh Leonard Fermi. Ia mengelompokkan unsur-unsur berdasarkan obereiner mengelompokkan unsur-unsur di mana dalam satu triade yang disusun berdasarkan massa atomnya, unsur kedua setiap trade merupakan massa rata-rata dari unsur pertama dan ketiga.
           Salah satu triad tersebut adalah lithium, natrium, dan kalium.
            Sistem Triade ini didasarkan pada sifat fisik dan kimia suatu unsur.
            </p>
            <div className="page-container">
      <h5>Pengelompokan Unsur Menurut Johann Wolfgang Dobereiner</h5>
      <img src="/johann.png" 
        alt="johann" 
        style={{  width: '50%', height: 'auto', marginTop: '20px' }}/>
      </div>
      <h6> Pengelompokkan Unsur Menurut Henry Moseley</h6>
      <p>Setelah ditemukan adanya struktur atom yaitu partikel penyusun atom yang terdiri dari Proton, Elektron, dan Neutron, di mana elektron mengitari neutron dan proton yang berada di inti atom. Dikenal sebagai hukum Moseley,
      penemuan mendasar tentang nomor atom ini merupakan tonggak sejarah dalam memajukan pengetahuan tentang atom.  
      Pada tahun 1914 Moseley menerbitkan sebuah makalah di mana ia menyimpulkan bahwa nomor atom adalah jumlah muatan positif dalam inti atom.
      Dia juga menyatakan bahwa ada tiga unsur yang tidak diketahui, dengan nomor atom 43, 61, dan 75, antara aluminium dan emas. Henry Moseley mengemukakan pentingnya nomor atom, dalam penempatan unsur-unsur pada tabel periodik,
      dan kemudian Moseley memperbaharui tabel unsur periodik milik Mendeleev.  
      Tabel periodik menurut Moseley inilah kemudian dikembangkan hingga menjadi tabel unsur periodik yang saat ini kita gunakan dan kita temui di pelajaran kimia, seperti di bawah ini.
      </p>
      <div className="page-container">
      <h6>tabel periodik modern</h6>
      <img src="/moseley.png" 
        alt="moseley" 
        style={{  width: '50%', height: 'auto', marginTop: '20px' }}/>
        </div>
      </div>
    </div>
  );
};

export default TabelPeriodik;
