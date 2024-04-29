import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import "./blog.css";
import blog1 from "../../image/blog1.jpg"
import blog2 from "../../image/blog2.jpg"
import blog3 from "../../image/blog3.jpg"

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
                Memberikan bantuan kepada buruh tani untuk meningkatkan
                kesejahteraan mereka. Dukungan Anda akan membuat perbedaan besar
                dalam kehidupan mereka.
              </p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          </div>
          <div className="blog-post">
            <img src={blog2} alt="Anak Usia Dini" />
            <div className="blog-content">
              <h2>Global Warming</h2>
              <p>
                Mendukung program pembelajaran dini untuk mempersiapkan
                anak-anak masa depan. Bergabunglah dengan kami untuk menciptakan
                masa depan yang lebih baik.
              </p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          </div>
          <div className="blog-post">
            <img src={blog3} alt="Buah dan Sayur" />
            <div className="blog-content">
              <h2>Zero Waste</h2>
              <p>
                Mendorong perkembangan buah dan sayur yang sehat untuk menjaga
                gizi masyarakat. Temukan bagaimana Anda dapat ikut
                berpartisipasi dalam misi kami.
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
