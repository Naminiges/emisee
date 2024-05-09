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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
            <div className="img"></div>
            <div className="card-text">
              <div className="judul">Perjuangan Anak Petani Melawan Penyakit Lumpuh Otak</div>
              <div className="text">Orang tua mana yang tidak khawatir kalau anaknya tidak menunjukkan perkembangan yang baik. Itulah yang...</div>
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
