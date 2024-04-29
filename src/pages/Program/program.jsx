import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./program.css";
import Footer from "../../components/footer/footer";
import menanam from "../../image/menanam.png";
import memanen from "../../image/memanen.png";
import bertani from "../../image/bertani.png";

export const Program = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="top">
          <div>HOME / PROGRAM</div>
          <div>
            <h1>Program</h1>
          </div>
        </div>
        <div className="main">
          <div className="card">
            <div className="contain">
              <div className="image one"></div>
              <div className="text-contain">Membantu Buruh Tani</div>
            </div>
            <div className="contain">
              <div className="image two"></div>
              <div className="text-contain" style={{ width: "200px" }}>
                Memberikan Edukasi Kepada Anak
              </div>
            </div>
            <div className="contain">
              <div className="image three"></div>
              <div className="text-contain">Memanen Buah</div>
            </div>
            <div className="contain">
              <div className="image four"></div>
              <div className="text-contain">Merawat Ternak</div>
            </div>
          </div>
          <div className="program">
            <div className="program-contain">
              <div className="program-text">Quality Standards</div>
              <div className="program-image five"></div>
            </div>
            <div className="program-contain">
              <div className="program-text">Organic Farming</div>
              <div className="program-image six"></div>
            </div>
            <div className="program-contain">
              <div className="program-text">Agriculture Products</div>
              <div className="program-image seven"></div>
            </div>
          </div>
          <div className="info">
            <div className="info-img">
              <div className="info-image"></div>
            </div>
            <div className="info-contain">
            <p className="judul">What We Do</p>
              <h1>Membantu Petani Untuk Menjadi Kaya</h1>
              <p>
                Nisi elit ipsum aute exercitation enim. Pariatur proident consectetur nulla veniam magna exercitation aliquip. Nostrud ex Lorem nisi anim eiusmod sint pariatur. Duis nostrud nisi laboris est id.
                <br />
                <br />
                Minim sint occaecat voluptate in nulla amet exercitation labore amet commodo qui est. Culpa dolor dolore eiusmod deserunt. Amet laboris sit velit occaecat.
              </p>
              <div className="info-icon">
                <div className="icon"><img src={memanen} alt="memanen" /></div>
                <div className="icon"><img src={menanam} alt="menanam" /></div>
                <div className="icon"><img src={bertani} alt="bertani" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <h1>Tertarik untuk bergabung dengan kami?</h1>
        <button className="end-btn"><a href="loginRegister">Ayo Bergabung</a></button>
      </div>
      <Footer />
    </div>
  );
};
