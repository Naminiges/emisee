import React from "react";
import "./Footer.css";
import logo from "../../image/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <a href="/">
          <img src={logo} alt="Logo" className="footer-logo" />
        </a>
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
          <li>
            <a href="/syarat-dan-ketentuan" class="highlighted">
              Syarat Pengguna
            </a>
          </li>
          <li>
            <a href="/kebijakan-privasi" class="highlighted">
              Kebijakan Privasi
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Terhubung</h3>
        <ul>
          <li><a href="/">FAQ</a></li>
          <li><a href="/kontak">Kontak Kami</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
