  import React, { useEffect } from "react";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import './home.css';

export const Home = () => {
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
      <div className="container">
        <div className="top">
          <div>
            <h1>Temukan Siapa Yang Ingin Kamu Bantu</h1>
          </div>
        </div>
        <div className="home-main">
          <div className="card">
            <div className="img1"></div>
            <div className="card-text">
              <div className="judul">Bantu Para Buruh Tani</div>
              <div className="text">Bantu para buruh tani, pahlawan-pahlawan yang tanpa henti bekerja di ladang-ladang kita setiap hari.</div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
          <div className="card">
            <div className="img2"></div>
            <div className="card-text">
              <div className="judul">Pembelajaran Anak Usia Dini</div>
              <div className="text">Pembelajaran anak usia dini adalah fondasi penting bagi perkembangan anak-anak kita.</div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
          <div className="card">
            <div className="img3"></div>
            <div className="card-text">
              <div className="judul">Perkembangan Buah dan Sayur</div>
              <div className="text">Perkembangan buah dan sayur merupakan indikator penting dalam pertanian dan kesehatan masyarakat. Dari benih hingga panen, proses ini...</div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
          <div className="card">
            <div className="img4"></div>
            <div className="card-text">
              <div className="judul">Menumbuhkan Padi Bebas Hama</div>
              <div className="text">Menumbuhkan padi bebas hama adalah tantangan penting dalam pertanian modern. Dengan mengadopsi pendekatan organik atau berkelanjutan...</div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
          <div className="card">
            <div className="img5"></div>
            <div className="card-text">
              <div className="judul">Pengelolaan Lahan Kering</div>
              <div className="text">Pengelolaan lahan kering merupakan tantangan yang penting dalam pertanian di daerah yang memiliki curah hujan rendah dan tanah yang cenderung...</div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
          <div className="card">
            <div className="img6"></div>
            <div className="card-text">
              <div className="judul">Pelestarian Pohon Mangrove</div>
              <div className="text">Pelestarian pohon mangrove adalah kunci untuk menjaga ekosistem pesisir yang seimbang dan berkelanjutan. </div>
              <div className="dana">
                <div className="dana-top">
                  <div>Dana terkumpul</div>
                  <div>Rp 2.590.000</div>
                </div>
                <div className="line">
                  <div className="kumpul"></div>
                  <div className="sisa"></div>
                </div>
                <div className="bottom">Dari Rp 8.840.000</div>
              </div>
              <button className="card-btn">Donasi</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
