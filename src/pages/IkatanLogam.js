import React from "react";
import "./IkatanLogam.css";

const IkatanLogam = () => {
  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <div className="ikatan-kovalen-container">
      <h1 className="title">Apa Itu Ikatan Logam?</h1>
      <p className="description">
      Ikatan logam adalah jenis ikatan kimia yang terjadi 
      ketika adanya gaya tarik menarik antara  ion-ion yang bermuatan 
      positif dengan elektron valensi yang terdelokalisasi (bergerak bebas). 
      Ikatan logam ini dijelaskan dalam salah satu teori, yakni teori awan elektron 
      atau lautan elektron yang ditemukan oleh Drude dan Lorentz. 
      </p>

      <p className="description">
      Menurut teori ini, setiap atom logam yang melepaskan elektron valensinya akan membentuk 
      awan elektron atau lautan elektron yang mengelilingi ion positif pada atom yang tidak berubah tempatnya. 
      Elektron valensi yang dilepas tidak terikat oleh ion-ion logam sehingga dapat bergerak bebas (terdelokalisasi) pada semua ion logam. 
      </p>

      <p className="description">
      Teori ini juga menyatakan bahwa, logam terdiri dari kumpulan ion logam bermuatan positif yang berada dalam 
      lautan elektron yang mudah bergerak bebas. Oleh karena itu, ikatan logam terjadi antara ion-ion yang bermuatan 
      positif dengan elektron valensi yang terdelokalisasi. 
      </p>
      

      <h1 className="title1">Ciri- ciri Ikatan Logam</h1>
      <p className="description">
      Adapun ciri-ciri ikatan logam adalah sebagai berikut:
      </p>
      
      <p className="description">
      1. Kekuatan ikatan logam ditentukan oleh banyaknya jumlah elektron yang terdapat di dalam ikatan logam. 
      </p>

      <p className="description">
      2. Dalam ikatan logam, elektron valensi bebas bergerak di seluruh struktur logam sehingga membentuk lautan elektron.
      </p>

      <p className="description">
      3. Hasil dari ikatan logam sering digunakan dalam bidang teknik, industri, dan perhiasan.
      </p>

      <h1 className="title1">Proses Pembentukan Ikatan Logam</h1>
      <p className="description">
      Pada dasarnya salah satu penyebab terbentuknya ikatan logam adalah akibat adanya delokalisasi 
      elektron yang senantiasa berpindah-pindah, kemudian terjadilah proses saling meminjamkan elektron atau 
      juga sering disebut sebagai model lautan elektron. 
      </p>
      <p className="description">
      Jadi, menurut teori lautan elektron ikatan pada logam terjadi akibat gaya tarik menarik antara 
      muatan positif ion logam dengan elektron bermuatan negatif yang dapat bergerak dengan bebas.
      </p>
      
      <div className="image-container">
        <img
          src="Logam1.jpg" // Replace with your image URL
          alt="Ikatan Kovalen Rangkap 2"
          className="description-image"
        />
      </div>

      <p className="description">
      Mudahnya elektron bergerak bebas disebabkan oleh 2 hal yaitu energi ionisasi yang rendah, 
      serta orbital yang kosong. Pada umumnya unsur logam memiliki energi ionisasi yang rendah, 
      hal ini menyebabkan elektron valensinya tidak secara kuat menarik elektron ke inti atomnya, 
      sehingga energi ionisasinya rendah dan elektron bergerak bebas. Selain itu,  adanya orbital 
      yang kosong pada unsur logam menyebabkan mungkinnya terjadi perpindahan elektron antara orbital 
      secara bebas. Itulah kenapa, karena elektron bergerak bebas dan saling meminjamkan elektron satu 
      sama lain, seakan-akan membentuk kabut elektron dan terjadi delokalisasi. 
      </p>

      <a href="#" className="back-button" onClick={handleBackClick}>
        <span>← Kembali</span>
      </a>
    </div>
  );
};

export default IkatanLogam;
