import React, { useState } from 'react';
import './Kontak.css';
import Navbar from '../components/Navbar';


const Kontak = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!name || !email || !message) {
      setNotification('Harap lengkapi semua kolom!');
      return;
    }

    // Simulasi pengiriman pesan
    setNotification('Pesan Telah Terkirim!');

    // Reset form after a short delay
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setNotification('');
    }, 3000); // Notifikasi muncul selama 3 detik
  };

  return (
<div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo-section">
          <img src="/logo192.png" alt="Chem10thguide Logo" className="logo" />
          <h1 className="website-name">Chem10thguide</h1>
        </div>
      </header>
      <Navbar />

    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p>Website Chem10th Guide akan memecahkan persoalan kimia anda.</p>
        <div className="contact-info">
          
          <p><strong>Telepon:</strong> 081 850 7766</p>
          <p><strong>WhatsApp:</strong> +62 852 1598 9472</p>
          <p><strong>Email:</strong> chem10thguide@gmail.com</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          placeholder="Nama Anda" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Anda" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Pesan Anda" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        
        <button type="submit">Send Message</button>
      </form>
      
      {notification && (
        <div className={`notification ${notification === 'Pesan Telah Terkirim!' ? '' : 'fade-out'}`}>
          {notification}
        </div>
      )}
    </div>
    </div>
  );
};

export default Kontak;
