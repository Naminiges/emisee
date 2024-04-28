import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import "./kontak.css";
export const Kontak = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="top">
          <div>HOME / KONTAK</div>
          <div><h1>Kontak</h1></div>
        </div>
        <div className="main">
            <div className="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1077807974607!2d98.65714507412083!3d3.5626521504734163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fdf837c0b1b%3A0xa5ef19b5b1fb64a5!2sProgram%20Studi%20Teknologi%20Informasi%2C%20Fasilkom-TI%2C%20Universitas%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1700523510807!5m2!1sid!2sid"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="map-area"
                />
            </div>
            <div className="message">
                <form method="POST" className="form">
                  <div className="text">
                    <h3>Contact Us</h3>
                    <h2>Write a message</h2>
                  </div>
                  <div className="input">
                    <div class="input-group">
                        <input readonly type="text" placeholder="Nama" name="username" class="name" required />
                    </div>
                    <div class="input-group mail">
                        <i data-feather="mail"></i>
                        <input readonly type="text" placeholder="E-mail" name="email" class="email" required />
                    </div>
                  </div>
                    
                    <div class="input-group">
                        <textarea
                        name="message"
                        id=""
                        cols="20"
                        rows="10"
                        placeholder="Write message here..."
                        class="message"
                        required
                        ></textarea>
                    </div>
                    <button name="send" type="submit" class="send-btn" onsubmit="return validate()">Kirim Pesan</button>
                </form>
            </div>
        </div>
        <div className="footer"></div>
      </div>
      <Footer/>
    </div>
  );
};
