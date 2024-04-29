import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/footer";
import "./campaign.css";
export const Campaign = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="top">
          <div><h1>Campaign</h1></div>
        </div>
        <div className="main-donasi">
        <div><h1>Mari Mulai Berdonasi</h1></div>
        <div className="wrapper">
            <div className="donate">
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Bantu Para Buruh Tani</h5>
                </div>
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Pembelajaran Anak Usia Dini</h5>
                </div>
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Perkembangan Buah dan Sayur</h5>
                </div>
            </div>
            <div className="donate">
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Menumbuhkan Padi Bebas Hama</h5>
                </div>
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Pengelolaan Lahan Kering</h5>
                </div>
              <div className="org">
                <div className="click">
                <button className="org-button">Donasi Sekarang</button>
              </div>
                <h5>Pelestarian Pohon Mangrove</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
