import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import "./blog.css";
import blog1 from "../../image/blog1.jpg";
import blog2 from "../../image/blog2.jpg";
import blog3 from "../../image/blog3.jpg";
import "../../App.css";

export const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="top">
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="main-blog">
          <div className="blog-post">
            <img src={blog1} alt="Buruh Tani" />
            <div className="blog-content">
              <h2>Data Sampah Plastik di Indonesia</h2>
              <p>
                Data menunjukkan bahwa Indonesia merupakan salah satu negara
                dengan jumlah sampah plastik terbesar di dunia. Hal ini
                menimbulkan dampak negatif pada ekosistem dan kesehatan manusia.
              </p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          </div>
          <div className="blog-post">
            <img src={blog2} alt="Anak Usia Dini" />
            <div className="blog-content">
              <h2>Global Warming</h2>
              <p>
                Global warming adalah fenomena pemanasan global yang disebabkan
                oleh peningkatan konsentrasi gas-gas rumah kaca di atmosfer
                bumi. Hal ini menyebabkan suhu rata-rata planet ini meningkat
                secara signifikan, mengakibatkan perubahan iklim yang merusak.
              </p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          </div>
          <div className="blog-post">
            <img src={blog3} alt="Buah dan Sayur" />
            <div className="blog-content">
              <h2>Zero Waste</h2>
              <p>
                Zero waste merupakan konsep yang bertujuan untuk mengurangi
                sampah yang dihasilkan oleh individu, perusahaan, atau komunitas
                dengan cara meminimalkan penggunaan bahan yang tidak dapat
                terurai secara alami atau didaur ulang.
              </p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
