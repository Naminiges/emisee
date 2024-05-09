import React, { useEffect } from "react";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import './notifikasi.css'

export const Notifikasi = () => {
  useEffect(() => {
    // Ambil nilai username dan email dari local storage dan tetapkan ke state
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (!storedUser || !storedUser.email) {
      // Jika currentUser tidak ada, arahkan ke halaman /error
      window.location.href = "/error";
    }
  }, []);
  return (
    <div>
      <Navbarlogin />
      <div className="notif-main">
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> telah terkumpul sebesar{" "}
              <b>Rp 200.000</b>.
            </div>
            <div className="notif-date">23-04-2024 15:37</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> telah terkumpul sebesar{" "}
              <b>Rp 100.000</b>.
            </div>
            <div className="notif-date">23-04-2024 08:47</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> telah terkumpul sebesar{" "}
              <b>Rp 50.000</b>.
            </div>
            <div className="notif-date">22-04-2024 13:10</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Diluncurkan</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> telah diluncurkan.
            </div>
            <div className="notif-date">21-04-2024 12:37</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terverfikasi</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> telah diverifikasi dan akan segera diluncurkan.
            </div>
            <div className="notif-date">20-04-2024 10:47</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src="https://garuda.industry.co.id/uploads/berita/detail/51039.jpg" alt="image" />
          </div>
          <div className="notif-text">
            <h3>Menunggu Verifikasi</h3>
            <div className="middle">
              Donasi <b>Pengelolaan Lahan Kering</b> sedang menunggu verifikasi
            </div>
            <div className="notif-date">19-04-2024 12:10</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
