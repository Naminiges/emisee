import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase"; // tambahkan impor auth
import { signOut } from "firebase/auth"; // tambahkan impor signOut
import './Navbar.css';
import emiseeLogo from "../../image/logo.jpg";
const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    // Periksa apakah pengguna sudah login
    if (currentUser) {
      setIsLoggedIn(true); // Jika sudah login, set state isLoggedIn menjadi true
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth); // tambahkan signOut
      localStorage.removeItem("currentUser"); // Hapus informasi pengguna dari penyimpanan sesi saat logout
      navigate("/loginregister");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='navbar'>
      <img src={emiseeLogo} alt="" style={{ width: "200px", marginTop: "-70px", marginBottom: "-90px", marginLeft: "20px"}} />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Program</li>
        <li>Campaign</li>
        <li>Partnership</li>
      </ul>
      {/* Periksa apakah pengguna sudah login, jika iya, tampilkan tombol "Logout", jika tidak, tampilkan tombol "Start a Journey" */}
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/loginregister")}>Start a Journey</button>
      )}
    </div>
  );
};

export default Navbar;
