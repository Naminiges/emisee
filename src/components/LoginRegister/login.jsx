import { useEffect, useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../image/7123025_logo_google_g_icon.svg";
import emiseeLogo from "../../image/logo.jpg";
import './login.css';

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const currentUser = localStorage.getItem("currentUser");
  //   if (currentUser) {
  //     navigate("/");
  //   }

  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // Jika pengguna sudah login, arahkan mereka ke halaman beranda
  //       navigate("/");
  //     }
  //   });

  //   // Membersihkan listener saat komponen di-unmount
  //   return () => unsubscribe();
  // }, []);

  const signIn = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Simpan informasi pengguna ke dalam penyimpanan sesi
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      if (email === "") {
        setEmailError("Email is required");
      } else if(password === ""){
        setPasswordError("Password is required");
      } else if(err.code === "auth/invalid-email"){
        setEmailError("Invalid email");
      }  else if (err.code === "auth/invalid-credential") {
        setPasswordError("Incorrect email or password");
      } else {
        console.error(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      // Simpan informasi pengguna ke dalam penyimpanan sesi
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      // Tangani kesalahan saat login dengan Google
      console.error(err);
    }
  };


  return (
  <div class="background-container"> {/* Kontainer untuk latar belakang */}
        <div class="container-login">
        <div class="header">
            <img src={emiseeLogo} alt="logo" style={{ width: "200px", marginTop : "-90px", marginBottom: "-110px"}} />
          </div>
          <div class="content-login">
            <p>Login to Your Account</p>
          </div>

          <div class="form-container">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "0" }}
            />
            {emailError && (
              <p style={{ color: "red", textAlign: "left", marginTop: "10px" }}>
                &nbsp;&nbsp;*{emailError}
              </p>
            )}
            <p>Password</p>
            <input
              placeholder="Password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "0" }}
            />
            {passwordError && (
              <p style={{ color: "red", textAlign: "left", marginTop: "10px" }}>
                &nbsp;&nbsp;*{passwordError}
              </p>
            )}
            <button
              class="signin"
              type="submit"
              onClick={signIn}
              style={{ marginTop: "14px" }}
            >
              Log in
            </button>
            <p style={{ textAlign: "center" }}>or</p>
            <button class="continuewith" onClick={signInWithGoogle}>
              <img src={googleLogo} alt="Google Logo" />
              Continue with Google
            </button>

            <div class="termofuse">
              <p>
                By logging in, you agree to our{" "}
                <span class="highlighted">Terms of Use</span> and{" "}
                <span class="highlighted">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
</div>
  );
};
