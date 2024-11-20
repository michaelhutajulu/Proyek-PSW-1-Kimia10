import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import { Link } from 'react-router-dom'; 
import './web.css';


const Dashboard = () => {
  const sliderImages = [
    '/images/slider1.png',
    '/images/slider3.png',
    '/images/slider2.png',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      
      <Navbar />

      <main className="dashboard-main">
        <div className="box slider">
          <img
            src={sliderImages[currentImage]}
            alt={`Slider ${currentImage + 1}`}
            className="slider-image"
          />
        </div>

        <div className="box welcome-box">
          <div className="welcome-text">
            <h1>Selamat Datang di Chem10thguide</h1>
            <p>
              Kami menyediakan panduan lengkap untuk belajar kimia Kelas 10 SMA
              dengan materi interaktif dan mudah dipahami.
            </p>
          </div>
        </div>

        <div className="articles-container">
          <div className="article">
            <div className="article-content">
              <h2>Pengenalan Teori Atom</h2>
              <p>Temukan konsep dasar atom dan sejarah perkembangannya.</p>
              <Link to="/teori-atom" className="btn">Baca</Link>
            </div>
            <img src="/images/artikel1.png" alt="Teori Atom" className="article-image" />
          </div>
          <div className="article">
            <div className="article-content">
              <h2>Pemahaman Stoikiometri</h2>
              <p>Pelajari cara menghitung reaksi kimia dengan mudah.</p>
              <Link to="/stoikiometri" className="btn">Baca</Link>
            </div>
            <img src="/images/artikel2.png" alt="Stoikiometri" className="article-image" />
          </div>
          <div className="article">
            <div className="article-content">
              <h2>Tabel Periodik Unsur</h2>
              <p>Pelajari tabel periodik unsur untuk memahami sifat kimia unsur.</p>
              <Link to="/tabel-periodik" className="btn">Baca</Link>
            </div>
            <img src="/images/artikel3.png" alt="Tabel Periodik" className="article-image" />
          </div>
          <div className="article">
            <div className="article-content">
              <h2>Ikatan Kimia</h2>
              <p>Pelajari jenis-jenis ikatan kimia dan cara terjadinya.</p>
              <Link to="/ikatan-kimia" className="btn">Baca</Link>
            </div>
            <img src="/images/artikel4.png" alt="Ikatan Kimia" className="article-image" />
          </div>
          <div className="article">
            <div className="article-content">
              <h2>Reaksi Redoks</h2>
              <p>Pahami konsep reaksi redoks dan penerapannya dalam kehidupan sehari-hari.</p>
              <Link to="/reaksi-redoks" className="btn">Baca</Link>
            </div>
            <img src="/images/artikel5.png" alt="Reaksi Redoks" className="article-image" />
          </div>
        </div>

        <div className="box question-box">
          <h2>Tanyakan Pertanyaan Anda</h2>
          <form>
            <textarea placeholder="Tulis pertanyaan Anda di sini..." rows="4"></textarea>
            <button type="submit" className="btn">Kirim</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
