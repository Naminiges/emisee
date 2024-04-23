import React, { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import './home.css'

export const Index = () => {
  const [currentUser, setCurrentUser] = useState(null); // State untuk menyimpan informasi pengguna yang saat ini login
  const navigate = useNavigate();

  // Gunakan useEffect untuk mendapatkan informasi pengguna saat komponen di-mount
  useEffect(() => {
    const currentUserData = localStorage.getItem("currentUser");
    if (currentUserData) {
      setCurrentUser(JSON.parse(currentUserData)); // Jika ada informasi pengguna di penyimpanan sesi, set nilai currentUser
    } else {
      setCurrentUser(null);
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("currentUser"); // Hapus informasi pengguna dari penyimpanan sesi saat logout
      setCurrentUser(null); // Set currentUser menjadi null
      navigate("/loginregister");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Apa Kabar</h1>
      {/* Tampilkan email pengguna jika currentUser tidak null */}
      {currentUser && (
        <h2>{currentUser.email}</h2>
      )}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Index;
