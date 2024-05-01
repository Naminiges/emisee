import React from "react";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import child from "../../../image/child.png";
import './notifikasi.css'

export const Notifikasi = () => {
  return (
    <div>
      <Navbarlogin />
      <div className="notif-main">
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> telah terkumpul sebesar{" "}
              <b>Rp 200.000</b>.
            </div>
            <div className="notif-date">23-04-2024 15:37</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> telah terkumpul sebesar{" "}
              <b>Rp 100.000</b>.
            </div>
            <div className="notif-date">23-04-2024 08:47</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terkumpul</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> telah terkumpul sebesar{" "}
              <b>Rp 50.000</b>.
            </div>
            <div className="notif-date">22-04-2024 13:10</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Diluncurkan</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> telah diluncurkan.
            </div>
            <div className="notif-date">21-04-2024 12:37</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Donasi Terverfikasi</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> telah diverifikasi dan akan segera diluncurkan.
            </div>
            <div className="notif-date">20-04-2024 10:47</div>
          </div>
        </div>
        <div className="notif-card">
          <div className="notif-img">
            <img src={child} alt="image" />
          </div>
          <div className="notif-text">
            <h3>Menunggu Verifikasi</h3>
            <div className="middle">
              Donasi <b>Penanggulangan Anak Petani</b> sedang menunggu verifikasi
            </div>
            <div className="notif-date">19-04-2024 12:10</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
