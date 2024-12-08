import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Kontak.css";
import Navbar from '../components/Navbar';

const Kontak = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000); // Notifikasi menghilang setelah 3 detik
  };

  const developers = [
    {
      name: "Michael Hutajulu",
     
      img: "kael.jpg",
      instagram: "https://www.instagram.com/kael.htjl?igsh=bzVjcTJ4ODhwMGl3",
    },
    {
      name: "Yohana Nababan",
      
      img: "yoyo.jpg",
      instagram: "https://www.instagram.com/yohfbryx_?igsh=MzRlODBiNWFlZA==",
    },
    {
      name: "Win Grace ",
      
      img: "winni.jpg",
      instagram: "https://www.instagram.com/win.gra?igsh=N2JoOTduczUyb2Rm",
    },
    {
      name: "Gery Nababan",
      
      img: "gery.jpg",
      instagram: "https://www.instagram.com/gery_15_nb?igsh=MXRvZzMxbHA2ZXVzNA==",
    },
  ];

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
    <div className="kontak-container">
      <h1 className="kontak-title">Hubungi Kami</h1>

      {/* Bagian Customer Care */}
      <div className="customer-care">
        <h2>Customer Care</h2>
        <p>Jika ada pertanyaan atau kendala, Anda dapat menghubungi kami:</p>
        
      </div>

      {/* Ikon Media Sosial */}
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon youtube">
          <FaYoutube />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
          <FaTwitter />
        </a>
      </div>

      {/* Formulir Aspirasi */}
      <div className="message-container">
        <textarea
          className="message-box"
          placeholder="Tulis pesan atau aspirasi Anda di sini..."
        ></textarea>
        <button className="send-button" onClick={handleSendMessage}>
          Kirim
        </button>
      </div>

      {/* Notifikasi */}
      {messageSent && <div className="notification">Pesan Anda berhasil terkirim!</div>}

      {/* Profil Developer */}
      <div className="developer-profiles">
        {developers.map((dev, index) => (
          <div key={index} className="developer-card">
            <img src={dev.img} alt={dev.name} className="developer-photo" />
            <div className="developer-info">
              <h3>{dev.name}</h3>
              <p>{dev.role}</p>
              <a
                href={dev.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FaInstagram className="instagram-icon" /> @{dev.name.toLowerCase().replace(" ", "")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Kontak;
