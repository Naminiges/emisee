import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Tambahkan useLocation
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";
import emiseeLogo from "../../image/logo.jpg";

const Navbar = () => {
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
      navigate("/loginregister");
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
        <li className={location.pathname === "/" ? "active" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={location.pathname === "/program" ? "active" : ""}>
          <a href="/program">Program</a>
        </li>
        <li className={location.pathname === "/campaign" ? "active" : ""}>
          <a href="/campaign">Campaign</a>
        </li>
        <li className={location.pathname === "/blog" ? "active" : ""}>
          <a href="/blog">Blog</a>
        </li>
        <li className={location.pathname === "/kontak" ? "active" : ""}>
          <a href="/kontak">Contact</a>
        </li>
      </ul>

      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/loginregister")}>
          Start a Journey
        </button>
      )}
    </div>
  );
};

export default Navbar;
