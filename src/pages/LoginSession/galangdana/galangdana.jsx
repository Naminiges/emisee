import React from "react";
import "./galangdana.css";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const Galangdana = () => {
  const [userdata, setuserdataList] = useState([]);

  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [gender, setGender] = useState(null);
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState("");
  const [profession, setProfession] = useState("");
  const [citizenship, setCitizenship] = useState(null);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const userDataCollectionRef = collection(db, "Galang_Dana");

  const onsubmitData = async () => {
    if (
      !name ||
      !id ||
      !gender ||
      !birthPlace ||
      !birthDate ||
      !province ||
      !districts ||
      !profession ||
      !citizenship ||
      !phone ||
      !email ||
      !address
    ) {
      alert("Mohon lengkapi semua field sebelum mengirimkan formulir.");
      return;
    }

    try {
      await addDoc(userDataCollectionRef, {
        Fullname: name,
        ID: id,
        Gender: gender,
        Birth_place: birthPlace,
        Birth_date: birthDate,
        Province: province,
        Districts: districts,
        Profession: profession,
        Citizenship: citizenship,
        Phone: phone,
        email: email,
        Address: address,
      });
      window.location.href = '/home';
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getDocs(userDataCollectionRef);
        const filteredData = data.docs.map((docs) => ({
          ...docs.data(),
          id: docs.id,
        }));
        setuserdataList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, [onsubmitData]);

  useEffect(() => {
    // Ambil nilai username dan email dari local storage dan tetapkan ke state
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email);
    } else {
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
            <h1>Mari bantu lebih banyak orang</h1>
          </div>
        </div>
        <div className="galangdana-container">
          <div className="galangdana-item">
            <div className="galangdana-label">Fullname</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setName(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">ID Number</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setId(Number(e.target.value))}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Gender</div>
            <div className="galangdana-gender">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={() => setGender("Male")}
                required // tambahkan required di sini
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={() => setGender("Female")}
                required // tambahkan required di sini
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Place and Date of Birth</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setBirthPlace(e.target.value)}
              required // tambahkan required di sini
            />
            <input
              type="date"
              className="galangdana-dana"
              onChange={(e) => setBirthDate(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Province</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setProvince(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Districts</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setDistricts(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Profession</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write Here"
              onChange={(e) => setProfession(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Citizenship</div>
            <div className="galangdana-citizenship">
              <input
                type="radio"
                id="wni"
                name="citizenship"
                value="wni"
                onChange={() => setCitizenship("WNI")}
                required // tambahkan required di sini
              />
              <label htmlFor="wni">WNI</label>
              <input
                type="radio"
                id="wna"
                name="citizenship"
                value="wna"
                onChange={() => setCitizenship("WNA")}
                required // tambahkan required di sini
              />
              <label htmlFor="wna">WNA</label>
            </div>
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Phone Number</div>
            <input
              type="tel"
              className="galangdana-dana"
              placeholder="Write Here"
              onChange={(e) => setPhone(Number(e.target.value))}
              required // tambahkan required di sini
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Email</div>
            <input
              type="email"
              className="galangdana-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // tambahkan required di sini
              readOnly
            />
          </div>
          <div className="galangdana-item">
            <div className="galangdana-label">Address</div>
            <input
              type="text"
              className="galangdana-input"
              placeholder="Write here"
              onChange={(e) => setAddress(e.target.value)}
              required // tambahkan required di sini
            />
          </div>
          <button  onClick={onsubmitData} className="galangdana-save">
          Save Changes
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
