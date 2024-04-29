import React from "react";
import Footer from "../../components/footer/footer";
import "./Kebijakan.css";
export const Kebijakan = () => {
  return (
    <div>
      <div className="container">
        <div className="top">
          <div>
            <h1>Kebijakan Privasi</h1>
          </div>
        </div>
        <div className="main-kp">
          <p>
            Selamat datang di halaman kebijakan privasi kami. Di sini, kami
            memprioritaskan privasi Anda dengan sepenuh hati. Kami, EMISEE,
            berkomitmen untuk melindungi informasi pribadi Anda dan menghormati
            kepercayaan yang Anda berikan kepada kami. Halaman kebijakan privasi
            ini bertujuan untuk memberikan pemahaman yang jelas tentang
            bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
            yang Anda berikan saat menggunakan layanan kami.
          </p>
          <p>
            Kami menganggap privasi sebagai hal yang sangat penting. Oleh karena
            itu, kami menerapkan langkah-langkah keamanan yang ketat untuk
            menjaga kerahasiaan informasi pribadi Anda. Dengan membaca halaman
            kebijakan privasi ini, Anda akan memahami secara detail bagaimana
            data Anda dikelola dan dilindungi di platform kami. Dalam hal ini,
            kami ingin menekankan bahwa kami tidak hanya bertanggung jawab atas
            keamanan data Anda, tetapi juga transparan dalam pengelolaan
            informasi. Kami menghargai privasi Anda sebagaimana kami menghargai
            privasi kami sendiri. Kami tidak akan pernah menjual, menyewakan,
            atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa
            izin Anda.
          </p>
          <p>
            Kami mengundang Anda untuk membaca dengan seksama kebijakan privasi
            kami dan menghubungi kami jika Anda memiliki pertanyaan atau
            kekhawatiran tentang bagaimana kami mengelola informasi Anda. Terima
            kasih atas kepercayaan Anda kepada kami.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
