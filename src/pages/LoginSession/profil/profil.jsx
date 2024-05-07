import React, { useState } from "react";
import Navbarlogin from "../../../components/navbarLogin/Navbarlogin";
import Footer from "../../../components/footer/footer";
import "./profil.css";
import { useEffect } from "react";
import {auth, db, storage} from "../../../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

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

  const userProfileCollectionRef = collection(db, "User");

  const onsubmitProfile = async () => {
    if (
      !username ||
      !name ||
      !email ||
      !phoneNumber ||
      !job ||
      !gender ||
      !birthdate ||
      !profileImage
    ) {
      alert("Mohon lengkapi semua field sebelum mengirimkan formulir.");
      return;
    }

    try {
      const filesFolderRef = ref(storage, `userProfile/${profileImage.name}`);
      await uploadBytes(filesFolderRef, profileImage);
      await addDoc(userProfileCollectionRef, {
        user_id: auth?.currentUser?.uid,
        username: username,
        name: name,
        email: email,
        phone_number: phoneNumber,
        job: job,
        gender: gender,
        birthdate: birthdate,
        user_picture: profileImage.name,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getUserProfileList = async () => {
      try {
        const data = await getDocs(userProfileCollectionRef);
        const filteredData = data.docs.map((docs) => ({
          ...docs.data(),
          id: docs.id,
        }));
        setuserprofileList(filteredData);
      } catch(err){
        console.error(err);
      }
    };
    getUserProfileList();
  }, [onsubmitProfile]);
  
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

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
  };

  return (
    <div>
      <Navbarlogin />
      <div className="edit-profile-container">
        <div className="form1-container">
          <h2>Edit Profile</h2>
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
              readOnly
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

            <button className="button-profil" onClick={onsubmitProfile}>Save</button>
        </div>

        <div className="image-container">
          <h2>Profile Picture</h2>
          <div className="profile-image">
            {profileImage ? (
              <img src={URL.createObjectURL(profileImage)} alt="Profile" />
            ) : (
              <div className="placeholder">Select Image</div>
            )}
            <input type="file"  onChange={handleImageChange}  />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
