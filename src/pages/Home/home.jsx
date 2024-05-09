import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import "./home.css";
import farmImage from "../../image/farm.jpg";
import check from "../../image/check.png";
import about_isi from "../../image/about-isi.png";

export const Index = () => {
  const [currentUser, setCurrentUser] = useState(null); // State untuk menyimpan informasi pengguna yang saat ini login
  const navigate = useNavigate();

  // Gunakan useEffect untuk mendapatkan informasi pengguna saat komponen di-mount
  useEffect(() => {
    const currentUserData = localStorage.getItem("currentUser");
    if (currentUserData) {
      setCurrentUser(JSON.parse(currentUserData)); // Jika ada informasi pengguna di penyimpanan sesi, set nilai currentUser
    } else {
      setCurrentUser(null);
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("currentUser"); // Hapus informasi pengguna dari penyimpanan sesi saat logout
      setCurrentUser(null); // Set currentUser menjadi null
      navigate("/loginregister");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header>
          <div className="text">
            <div className="top-home">SELAMAT DATANG DI EMISEE</div>
            <div className="judul">
              <h1>Discover</h1>
              <h1>The nature</h1>
            </div>
            <div className="top-home">
              Mari kita selamatkan alam bersama dan menjaga agar udara tidak
              tercemar
            </div>
            <div className="top-home">
              <button className="top-btn"><a href="#">Discover More</a></button>
            </div>
          </div>
        </header>
        <div className="about-us">
          <div className="info">
            <div className="isi">
              <h1>5.000+</h1>
              Galang Dana
            </div>
            <div className="line"></div>
            <div className="isi">
              <h1>64.000+</h1>
              Donasi Terkumpul
            </div>
            <div className="line"></div>
            <div className="isi">
              <h1>5.000+</h1>
              Donatur
            </div>
          </div>
          <div className="about">
            <div className="img">
              <img src={about_isi} alt="about img" />
            </div>
            <div className="about-isi">
              <p className="judul">Tentang Kami</p>
              <h1>EMISEE Social</h1>
              <h1>Company</h1>
              <p>
                Kami beroperasi secara mudah untuk menemukan solusi dan
                mengurangi masalah sosial di Indonesia melalui platform
                crowdfunding dan CSR Marketplace.
                <br />
                <br />
                Sebagai jembatan kebaikan, kami berkomitmen untuk menciptakan
                dampak positif dan membawa perubahan nyata untuk Indonesia yang
                lebih baik.
              </p>
              <div className="about-btn">
                <button className="donasi"><a href="#">Ayo Donasi</a></button>
              </div>
            </div>
          </div>
          <div className="teman">
            <h1>Beberapa orang yang sudah menjadi #temanbaik</h1>
            <div className="orang">
              <div className="org1">
                <div className="org-text"></div>
              </div>
              <div className="org2">
                <div className="org-text"></div>
              </div>
              <div className="org3">
                <div className="org-text"></div>
              </div>
              <div className="org4">
                <div className="org-text"></div>
              </div>
            </div>
          </div>
          <div className="donasi-info">
            <div className="donasi-img"></div>
            <div className="donasi-text">
              <h1>Kenapa Donasi di EMISEE?</h1>
              <div className="sub-judul">
                <p>Ada beberapa keharusan kenapa kamu harus berdonasi di EMISEE,
                yaitu antara lain :</p>
              </div>
              <div className="donasi-isi">
                <div className="donasi-contain">
                  <div className="check">
                    <img src={check} alt="check icon" />
                  </div>
                  <div className="donasi-kalimat">
                    <h2>Aman dan Terpercaya</h2>
                    <p>Semua galang dana yang dibuat sudah melalui proses kurasi
                    dan verifikasi secara akurat oleh tim kami
                  </p>
                  </div>
                </div>
                <div className="donasi-contain">
                  <div className="check">
                    <img src={check} alt="check icon" />
                  </div>
                  <div className="donasi-kalimat">
                    <h2>Mudah dan Cepat</h2>
                    <p>Proses donasi yang kamu lakukan hanya dalam hitungan menit
                    dengan berbagai metode pembayaran
                  </p>
                  </div>
                </div>
                <div className="donasi-contain">
                  <div className="check">
                    <img src={check} alt="check icon" />
                  </div>
                  <div className="donasi-kalimat">
                    <h2>Transparan</h2>
                    <p>Pencairan dan penggunaan donasi yang sudah diterima
                    penggalang dana dapat dilihat di update aktivitas
                  </p>
                  </div>
                </div>
              </div>
              <div className="donasi-btn">
                <button><a href="#">Donasi sekarang</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Index;
