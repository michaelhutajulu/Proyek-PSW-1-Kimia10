import React from 'react';
import Navbar from '../components/Navbar';
import './TeoriAtom.css';
import { Link } from 'react-router-dom';


const TeoriAtom = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logokimia.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div> 
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Materi:</h2>
          <ul>
            <li
              className="active"
              onClick={() => scrollToSection('apa-itu-teori-atom')}
            >
              Pengertian Teori Atom
            </li>
            <li onClick={() => scrollToSection('apa-itu-teori-atom-dalton')}>
              Teori Atom Dalton (1802)
            </li>
            <li onClick={() => scrollToSection('apa-itu-teori-atom-thomson')}>
              Teori Atom Thomson (1904)
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          {/* Section: Pengertian Ikatan Kimia */}
          <section id="apa-itu-ikatan-kimia">
            <h1>Pengertian Teori Atom</h1>
            <div className="image-container">
              <img
                src="TeoriAtom.jpg"
                alt="Model Ikatan Kimia"
                className="content-image"
              />
              <p>
                kelas 10 mempelajari bagaimana atom-atom bergabung
                membentuk senyawa atau molekul.
              </p>
            </div>
            <article className="description">
              <p>
              Sejak 2500 tahun yang lalu, manusia sudah mencari tahu apa partikel 
              terkecil yang ada di alam semesta dan bagaimana bentuknya. Dua orang filsuf pada 
              zaman Yunani kuno, Democritus dan Leucippus, adalah orang pertama yang mengemukakan
              ide mengenai partikel terkecil ini. Mereka menyebutkan bahwa atom adalah unit terkecil 
              penyusun semua materi yang ada di sekitar kita. Karena atom adalah unit terkecil, atom 
              tidak bisa dibagi atau diubah lagi.
              </p>
              <p>
              Sayangnya, gagasan ini mendapat banyak kritik dari filsuf-filsuf lain. Salah satunya adalah 
              Aristoteles. Menurut Aristoteles, segala sesuatu yang ada di dunia ini bisa dibagi, sehingga 
              tidak mungkin ada istilah “atom” yang artinya “tidak terbagi”. Pendapat Aristoteles ini banyak 
              didukung oleh filsuf-filsuf lainnya. Akibatnya, gagasan mengenai atom tidak pernah lagi berkembang 
              selama berabad-abad lamanya.
              </p>

              <div className="image-container">
              <img
                src="Atom1.png"
                alt="Model Ikatan Kimia"
                className="content-image"
              />
              <p>Gagasan Teori Atom</p>
              </div>
            </article>
          </section>


          {/* Section: Sifat-sifat Ikatan Kimia */}
          <section id="apa-itu-teori-atom-dalton">
            <h1>Teori Atom Dalton (1802)</h1>
            <article className="description">
              <p>
              Dalton mengemukakan empat pendapat yaitu:
              </p>
              <ul>
                <li>
                    <strong>Atom merupakan bagian terkecil dari materi yang tidak dapat dibagi lagi. Hal ini 
                    sesuai dengan gagasan yang sebelumnya telah dikemukakan oleh Democritus dan Leucippus.</strong>
                </li>
                <li>
                <strong>Dalton mengemukakan model atom pertama yang berbentuk seperti bola pejal. Dalton mengemukakan 
                  bahwa atom berbentuk seperti bola pejal yang sangat kecil dan setiap unsur memiliki atom-atom yang 
                  identik dan berbeda untuk membentuk unsur yang berbeda.</strong>
                </li>
                <li>
                  <strong>Atom-atom bergabung membentuk senyawa dengan perbandingan 
                    bulat dan sederhana. Seperti air yang terbentuk dari atom-atom 
                    oksigen dan atom-atom hidrogen.</strong>
                </li>
                <li>
                  <strong>Reaksi kimia merupakan pemisahan atau penggabungan atau penyusunan kembali 
                    dari atom-atom, sehingga atom tidak dapat diciptakan atau dimusnahkan.</strong>
                </li>
              </ul>
              <p>Teori yang dikemukakan oleh Dalton membangkitkan kembali minat penelitian terhadap atom. 
                Dikarenakan atom pada saat itu tidak bisa dilihat secara langsung, para peneliti hanya dapat mengamati sifat-sifat yang ditimbulkan oleh atom.</p>
            </article>
          </section>
      {/* Section: Jenis-jenis Ikatan Kimia */}
      <section id="apa-itu-teori-atom-thomson">
            <h1>Teori Atom Thomson (1904)</h1>
            <article className="description">
              <p>
              Salah satu peneliti yang tertarik untuk meneliti tentang atom setelah John Dalton adalah Joseph JJ. Thomson, 
              seorang fisikawan yang juga berasal dari Inggris. Thomson melakukan sebuah percobaan untuk mencari tahu muatan apa saja yang terkandung dalam atom.
              </p>
              <p>Thomson melakukan percobaan menggunakan tabung katode, yaitu sebuah tabung yang sebagian besar udaranya telah disedot keluar. Pada pangkal tabung 
                ditempelkan dua lempeng logam dengan muatan yang berbeda. Lempeng tersebut kemudian dihubungkan dengan sumber tegangan tingkat tinggi. Dari sumber 
                tersebut muncul sinar yang merambat sampai ke ujung tabung. Ketika sinar tersebut menabrak permukaan tabung, muncul cahaya yang terang.</p>
              <p>
              Selanjutnya, Thomson meletakkan dua lempeng berbeda muatan tadi pada masing-masing sisi tabung. Pada satu sisi, ditempelkan lempeng logam bermuatan 
              positif, sementara pada sisi yang lain, ditempelkan lempeng logam bermuatan negatif. Kemudian Thomson melakukan percobaan yang sama. Namun kali ini, 
              arah sinar yang muncul malah berbelok ke arah lempeng yang bermuatan positif alih-alih merambat lurus.
              </p>
              <p>
              Berdasarkan percobaan tersebut Thomson berkesimpulan bahwa dalam atom terdapat sesuatu yang bermuatan negatif. Hal ini didasarkan pada sifat muatan 
              yang berbeda akan saling tarik-menarik. Thomson kemudian menamakan partikel yang bermuatan negatif ini sebagai <strong>elektron.</strong>
              </p>
              <p>
              Thomson kemudian mengajukan model atom terbaru. Thomson menyetujui pendapat Dalton bahwa atom berbentuk seperti bola pejal yang bermuatan positif, 
              namun muatan positif ini dinetralkan oleh elektron yang menyebar rata di dalamnya. Thomson mengibaratkan model atom yang dikemukakannya seperti roti 
              kismis dengan roti yang mengibaratkan muatan positif dan kismis yang menngibaratkan muatan negatif.
              </p>
            </article>
          </section>
          </main>
      </div>
      </div>
  );
};

export default TeoriAtom;