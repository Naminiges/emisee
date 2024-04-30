import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./program.css";
import Footer from "../../components/footer/footer";
import menanam from "../../image/menanam.png";
import memanen from "../../image/memanen.png";
import bertani from "../../image/bertani.png";
import "../../App.css";

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
                Memberikan Edukasi Kepada Masyarakat
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
              <h1>Berkontribusi Untuk Bumi</h1>
              <p>
                Emisee bertujuan untuk meningkatkan kesadaran masyarakat akan
                pentingnya menjaga lingkungan, mempromosikan gaya hidup yang
                ramah lingkungan, dan mendukung berbagai inisiatif yang
                bertujuan untuk melestarikan sumber daya alam serta mengurangi
                dampak negatif terhadap lingkungan.
                <br />
                <br />
                Dengan memberikan akses yang mudah dan informasi yang dapat
                dipercaya, Emisee ingin mendorong partisipasi aktif dari
                individu dan komunitas dalam menjaga kelestarian Bumi bagi
                generasi mendatang.
              </p>
              <div className="info-icon">
                <div className="icon">
                  <img src={memanen} alt="memanen" />
                </div>
                <div className="icon">
                  <img src={menanam} alt="menanam" />
                </div>
                <div className="icon">
                  <img src={bertani} alt="bertani" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <h1>Tertarik untuk bergabung dengan kami?</h1>
        <button className="end-btn">
          <a href="loginRegister">Ayo Bergabung</a>
        </button>
      </div>
      <Footer />
    </div>
  );
};
