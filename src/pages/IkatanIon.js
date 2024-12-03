import React from "react";
import "./IkatanIon.css";

const IkatanIon = () => {
    const handleBackClick = () => {
        window.history.back(); 
    };

    return (
        <div className="ikatan-kovalen-container">
            <h1 className="title">Apa Itu IKatan Ion?</h1>
            <p className="description">
            Ikatan ion terjadi akibat adanya serah terima 
            elektron sehingga membentuk ion positif dan ion 
            negatif yang konfigurasi elektronnya sama dengan gas mulia. 
            Ion positif dan ion negatif diikat oleh suatu gaya elektrostatik. 
            Senyawa yang dihasilkan disebut senyawa ion. Salah satu contoh yang 
            sering kita jumpai sehari-hari adalah garam dapur.
            </p>
            <p className="description">
            Nah, garam dapur itu rumus kimianya adalah NaCl (Natrium klorida). 
            Dalam NaCl padat terdapat ikatan antara ion Na+ dan ion Cl– dengan 
            gaya elektrostatik, sehingga disebut ikatan ion. Bentuk kristal NaCl 
            merupakan rangkaian antara ion Na+ dan ion Cl–. Satu ion Na+ dikelilingi oleh 
            enam ion Cl– dan satu ion Cl– dikelilingi oleh enam ion Na+ seperti yang 
            diilustrasikan oleh gambar di bawah.
            </p>
            <div className="image-container">
                <img src="ikatan ion 1.jpg" alt="ikatan ion" className="description-image" />
            </div>

            <h1 className="title1">Pembentukan Ikatan Ion</h1>
            <p className="description">
            Seperti yang telah dibahas pada kaidah oktet sebelumnya, setiap 
            unsur harus berusaha memiliki konfigurasi elektron seperti gas mulia, 
            bisa dengan melepaskan elektron ataupun menerima elektron, supaya stabil. 
            Peristiwa serah terima elektron ini terjadi pada senyawa NaCl alias garam dapur.
            </p>

            <p className="description">
            Bagaimana ceritanya? Na merupakan golongan IA dimana IA memiliki elektron valensi 1, 
            sehingga supaya stabil IA harus melepas 1 elektron. Kalo dilihat dari konfigurasi elektronnya, 
            11Na: 2, 8, 1. Sehingga ketika melepas 1 elektron, maka elektron paling terakhinya menjadi 8 
            (sesuai kaidah oktet). Karena melepas 1 elektron, maka Na yang asalnya netral berubah menjadi 
            bermuatan +1 (Na+). Reaksinya:
            </p>

            <p className="description">
            <strong>Na → Na+ + e-   (artinya Na melepas 1 elektron, lihat elektron berada di sebelah kiri panah)</strong>
            </p>

            <p className="description">
            sekarang kira-kira ke mana tuh 1 elektron tadi yang dilepas Na? Hilang? Tidak, di sana ada yang menangkapnya 
            yaitu si Cl. Kenapa bisa? Karena Cl memiliki elektron valensi 7 (dia golongan VIIA). Ya kalau dilihat dari 
            konfigurasi elektronnya 17Cl : 2, 8, 7. Jadi kalau Cl menangkap 1 elektron, konfigurasinya menjadi 2, 8, 8, 
            dengan elektron terakhirnya 8, ini sudah mematuhi kaidah oktet. Karena Cl menangkap 1 elektron maka Cl yang 
            asalnya netral berubah menjadi -1 (Cl–). Reaksinya:
            </p>

            <p className="description">
            <strong>Cl + e- → Cl- (artinya Cl menerima 1 elektron, lihat elektron berada di sebelah kiri panah)</strong>
            </p>

            <p className="description">
            Nah sekarang, apa pengaruhnya pembentukan Na+ dan Cl– ini? Sesuai Hukum Coulomb, muatan yang berbeda jenis akan saling 
            tarik menarik. Sehingga Na+ ini akan berikatan dengan Cl– dengan gaya elektrostatik.
            </p>

            <p className="description">
            <strong>Na+ + Cl– → NaCl</strong>
            </p>

            <p className="description">
            Untuk lebih jelasnya perhatikan gambar berikut:
            </p>

            <div className="image-container">
                <img src="Ion1.jpg" alt="Ikatan ion" className="description-image" />
           </div>

           <a href="#" className="back-button" onClick={handleBackClick}>
            <span>← Kembali</span>
           </a>
           </div>
    );
};

export default IkatanIon;