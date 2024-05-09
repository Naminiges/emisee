import React from "react";
import Footer from "../../components/footer/footer";
import "../../App.css";
import "./faq.css";
export const Faq = () => {
  return (
    <div>
      <div className="container">
        <div className="top">
          <div>
            <h1>Frequently Ask Question</h1>
          </div>
        </div>
        <div className="main-faq">
          <ol className="list-faq">
            <li>
              <h4>Bagaimana cara kerja EMISEE?</h4>
              <p>
                EMISEE menyediakan sistem elektronik yang mampu mempertemukan
                antara donatur dengan penerima manfaat, serta memfasilitasi
                fundraiser untuk menghimpun dana masyarakat secara luas dengan
                mengakses situs EMISEE.
              </p>
            </li>
            <li>
              <h4>Apa saja prinsip penggalangan dana di EMISEE?</h4>
              <p>
                Transparansi, Akuntabilitas, Partisipasi, Berkelanjutan, dan
                Kemandirian
              </p>
            </li>
            <li>
              <h4>
                Program penggalangan dana model apa saja yang bisa saya lakukan
              </h4>
              <p>
                Anda dapat melakukan penggalangan dana untuk program yang
                berhubungan dengan kesejahateraan sosial, kemanusiaan,
                kebudayaan, keagamaan, pendidikan, kesehatan, flora & fauna, dan
                bidang lainnya sepanjang tidak bertentangan dengan peraturan
                perundang-undangan yang berlaku. Selain itu, secara khusus, Anda
                dapat melakukan penggalangan dana untuk mendukung pendanaan UMKM
                dan produk lokal.
              </p>
            </li>
            <li>
              <h4>Bagaimana cara melakukan galang dana di EMISEE?</h4>
              <li>
                <p>
                  Platform EMISEE menyediakan 2 (dua) fitur galang dana, yaitu
                  galang dana bantuan dan produk. Adapun langkah-langkah
                  melakukan penggalangan dana sebagai berikut:
                </p>
                <ol>
                  <li>Kunjungi platform EMISEE.</li>
                  <li>
                    Registrasi akun dengan menyertakan nama lengkap dan nomor
                    Whatsapp atau email.
                  </li>
                  <li>Aktivasi akun, baik melalui Whatsapp atau email.</li>
                  <li>
                    Bila akun sudah terverifikasi, Anda dapat mengklik tombol
                    galang dana.
                  </li>
                  <li>
                    Mengisi form penggalangan dana meliputi menentukan program,
                    target dana, batas waktu penggalangan dana, dan judul
                    kampanye.
                  </li>
                  <li>
                    Mengisi deskripsi konten meliputi teks, foto atau video.
                  </li>
                  <li>
                    Setiap penggalangan dana yang dibuat akan dikurasi oleh team
                    EMISEE
                  </li>
                  <li>
                    Team EMISEE akan melakukan kurasi dan menghubungi Anda
                  </li>
                  <li>
                    jika proses kurasi selesai, maka penggalangan dana Anda
                    sudah bisa dilihat di website EMISEE.
                  </li>
                </ol>
                <p>
                  Anda dapat melakukan penggalangan dana donasi dengan memilih
                  tenggat waktu 30 hari, 60 hari, dan 90 hari. Limit
                  penggalangan dana donasi hanya dibatasi untuk nominal ratusan
                  juta dan sesuai kebutuhan penerima manfaat.
                </p>
              </li>
            </li>
            <li>
              <h4>Bagaimana cara saya berdonasi?</h4>
              <ol>
                <li>Kunjungi platform EMISEE;</li>
                <li>
                  Pilih program penggalangan dana yang tayang di homepage;
                </li>
                <li>Klik donasi;</li>
                <li>Input nominal donasi;</li>
                <li>
                  Pilih metode pembayaran yang sudah bekerjasama dengan EMISEE;
                </li>
                <li>Anda dapat menyertakan nama atau tanpa nama;</li>
                <li>Tulis dukungan Anda dengan singkat;</li>
                <li>Klik lakukan pembayaran.</li>
              </ol>
            </li>
            <li>
              <h4>
                Metode pembayaran apa saja yang dapat Anda gunakan untuk
                berdonasi?
              </h4>
              <p>
                Melalui kerjasama sistem elektronik EMISEE telah terintegrasi
                dengan Mitra Bank (“Transfer Antar Bank” atau “Virtual Account”)
                dan Perusahaan Sistem Pembayaran Non Bank (“Dompet Elektronik”)
                sebagai channel pembayaran donasi bagi Donatur, yaitu:{" "}
              </p>
              <ol>
                <li>Mitra Bank BCA dan Mandiri;</li>
                <li>
                  Mitra Perusahaan Sistem Pembayaran, diantaranya Dompet Dana,
                  OVO, dan Link Aja
                </li>
              </ol>
            </li>
            <li>
              <h4>Bagaimana cara pencairan donasi yang sudah terkumpul?</h4>
              <p>
                Anda sebagai penggalang dana dapat melakukan pencairan donasi
                yang berhasil terkumpul sesuai tenggat waktu yang telah Anda
                tentukan. Proses pencairan dana diproses selama 3 (tiga) hari
                kerja. Pencairan donasi hanya dilakukan terhadap akun yang sudah
                terverifikasi oleh EMISEE. Syarat pencairan donasi Yayasan
                dengan melampirkan dokumen melalui Email EMISEE@gmail.com:{" "}
              </p>
              <ol>
                <li>SK Kemenkumham;</li>
                <li>NPWP Badan;</li>
                <li>Keterangan Domisili;</li>
                <li>Tanda Daftar Yayasan;</li>
                <li>Izin Operasional (apabila ada);</li>
                <li>KTP Ketua Yayasan + Foto Selfie;</li>
                <li>Rekening a.n Yayasan.</li>
                <li>Akta Pendirian;</li>
              </ol>
              <p>
                Syarat pencairan donasi individu dengan mengupload dan
                melampirkan dokumen melalui fitur unggah EMISEE:
              </p>
              <ol>
                <li>
                  KTP + Foto Selfie (berlaku juga untuk penerima manfaat yang
                  diwakilkan oleh wali);
                </li>
                <li>Surat Kuasa apabila diwakilkan;</li>
                <li>Rekening a.n penerima manfaat atau wali.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};
