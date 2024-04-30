import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Tambahkan useLocation
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import "./Navbarlogin.css";
import emiseeLogo from "../../image/logo.jpg";

const Navbarlogin = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Gunakan useLocation untuk mendapatkan lokasi halaman saat ini
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("currentUser");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar">
      <img
        src={emiseeLogo}
        alt=""
        style={{
          width: "200px",
          marginTop: "-70px",
          marginBottom: "-90px",
          marginLeft: "20px",
        }}
      />
      <ul className="navbar-menu">
        <li className={location.pathname === "/home" ? "active" : ""}>
          <a href="/home">Home</a>
        </li>
        <li className={location.pathname === "/notifikasi" ? "active" : ""}>
          <a href="/notifikasi">Notifikasi</a>
        </li>
        <li className={location.pathname === "/galang-dana" ? "active" : ""}>
          <a href="/galang-dana">Galang Dana</a>
        </li>
        <li className={location.pathname === "/profil" ? "active" : ""}>
          <a href="/profil">Profil</a>
        </li>
      </ul>

      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/")}>
          Start a Journey
        </button>
      )}
    </div>
  );
};

export default Navbarlogin;
