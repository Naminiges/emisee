import React, { useState } from "react";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import "./profil.css";
import { useEffect } from "react";
import {db} from "../../../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const Profil = () => {
  const [userprofile, setuserprofileList] = useState([])

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const userProfileCollectionRef = collection(db, "...");//nanti diisi

  const onsubmitProfile = async () => {
    if (
      // !name ||
      // !id ||
      // !gender ||
      // !birthPlace ||
      // !birthDate ||
      // !province ||
      // !districts ||
      // !profession ||
      // !citizenship ||
      // !phone ||
      // !email ||
      // !address
    ) {
      alert("Mohon lengkapi semua field sebelum mengirimkan formulir.");
      return;
    }

    try {
      await addDoc(userProfileCollectionRef, {
        // Fullname: name,
        // ID: id,
        // Gender: gender,
        // Birth_place: birthPlace,
        // Birth_date: birthDate,
        // Province: province,
        // Districts: districts,
        // Profession: profession,
        // Citizenship: citizenship,
        // Phone: phone,
        // email: email,
        // Address: address,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang disubmit
  };
  
  useEffect(() => {
    // Ambil nilai username dan email dari local storage dan tetapkan ke state
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser && storedUser.displayName) {
      setUsername(storedUser.displayName);
    }
    if (storedUser && storedUser.email) {
      setEmail(storedUser.email);
    }
  }, []);

  return (
    <div>
      <Navbarlogin />
      <div className="edit-profile-container">
        <div className="form1-container">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label>Job</label>
            <input
              type="text"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />

            <div>
              <label>Gender</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male

                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female


                  <input
                    type="radio"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Other
                </label>
              </div>
            </div>

            <label>Birthdate</label>
            <div className="date">
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            </div>

            <button className="button-profil" type="submit" onClick={onsubmitProfile}>Save</button>
          </form>
        </div>

        <div className="image-container">
          <h2>Profile Picture</h2>
          <div className="profile-image">
            {profileImage ? (
              <img src={URL.createObjectURL(profileImage)} alt="Profile" />
            ) : (
              <div className="placeholder">Select Image</div>
            )}
            <input type="file" onChange={handleImageChange} accept="image/*" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
