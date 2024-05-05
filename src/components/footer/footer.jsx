import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Tambahkan useLocation
import "./Footer.css";
import logo from "../../image/logo.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Gunakan useLocation untuk mendapatkan lokasi halaman saat ini
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <footer className="footer">
      <div className="footer-column">
        <a href="/">
          <img src={logo} alt="Logo" className="footer-logo" />
        </a>
      </div>
      <div className="footer-column">
        <h3>Tunjukkan Aksimu</h3>
        {isLoggedIn ? (
          <ul>
            <li>
              <a href="/home">Donasi</a>
            </li>
            <li>
              <a href="//galang-dana">Menggalang Dana</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/loginregister">Donasi</a>
            </li>
            <li>
              <a href="/loginregister">Menggalang Dana</a>
            </li>
          </ul>
        )}
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
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/kontak">Kontak Kami</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
