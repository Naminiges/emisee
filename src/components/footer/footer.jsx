import React from 'react';
import './Footer.css';
import logo from '../../image/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3>Tunjukkan Aksimu</h3>
        <ul>
          <li>Donasi</li>
          <li>Menggalang Dana</li>
          <li>Tanam Kebaikan</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Pelajari Lebih Lanjut</h3>
        <ul>
          <li>Syarat Pengguna</li>
          <li>Kebijakan Privasi</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Terhubung</h3>
        <ul>
          <li>FAQ</li>
          <li>Kontak Kami</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer