import React from "react";
import "./IkatanKovalen.css";

const IkatanKovalen = () => {
    const handleBackClick = () => {
        window.history.back();
};

return (
    <div className="ikatan-kovalen-container">
        <h1 className="title">Apa Itu Ikatan Kovalen?</h1>
        <p className="description">
        Ikatan kovalen adalah ikatan yang terjadi antara dua atau lebih atom non
        logam dengan pemakaian elektron secara bersama. Kedua atom yang
        berikatan tersebut akan tertarik pada pasangan elektron yang sama.
        Contohnya adalah ikatan yang terjadi pada molekul H<sub>2</sub>.
        Itulah mengapa ikatan kovalen disebut juga sebagai ikatan molekul.
        </p>


        <h1 className="title1">Ikatan Kovalen Tunggal</h1>
        <p className="description">
        Ikatan kovalen tunggal melibatkan satu pasangan elektron. Contohnya pada molekul H2O.
        </p>

        <div className="image-container">
            <img
                src="Kovalen2.png" alt="Ikatan Kovalen Tunggal" className="description-image" />
        </div>

        <h1 className="title1">Ikatan Kovalen Rangkap 2</h1>
        <p className="description">
          Ikatan kovalen rangkap 2 terjadi ketika masing-masing atom menyumbang dua elektron valensi
          untuk membentuk dua pasang elektron ikatan. Contohnya adalah O2 dan CO2.
        </p>

        <div className="image-container">
            <img src="Ikatan kovalen.png" alt="Ikatan Kovalen Rangkap 2" className="description-image" />
        </div>

        <h1 className="title1">Ikatan Kovalen Polar</h1>
        <p className="description">
          Ikatan kovalen polar terjadi ketika pasangan elektron ikatan tertarik lebih kuat ke salah
          satu atom karena perbedaan keelektronegatifan antar atom. Contohnya adalah H-Cl.
        </p>

        <div className="image-container">
            <img src="Kovalen3.png" alt="Ikatan Kovalen Polar" className="description-image" />
        </div>

        <p className="description">
          Zat polar akan cenderung tertarik kepada zat polar lainnya. Begitu juga dengan zat non-polar
          yang lebih tertarik kepada zat non-polar.
        </p>

        <a href="#" className="back-button" onClick={handleBackClick}>
            <span>← Kembali</span>
        </a>
    </div>
  );
};

export default IkatanKovalen;