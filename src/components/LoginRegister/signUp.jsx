import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../image/7123025_logo_google_g_icon.svg"
import emiseeLogo from "../../image/logo.jpg";
import './signUp.css';

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    setEmailError("");
    setpasswordError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login")
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setEmailError("Email already in use");
      } else if (email === "") {
        setEmailError("Email is required");
      } else if(password === ""){
        setpasswordError("Password is required");
      } else if(err.code === "auth/invalid-email"){
        setEmailError("Invalid email");
      }  else if (err.code === "auth/weak-password") {
        setpasswordError("Password should be at least 6 characters");
      } else {
        console.error(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="background-containerlogin"> {/* Kontainer untuk latar belakang */}
        <div class="container-signup">
        <div class="header">
            <img src={emiseeLogo} alt="logo" style={{ width: "200px", marginTop : "-90px", marginBottom: "-110px"}} />
          </div>
          <div class="content-signup">
            <p>Sign up For Free</p>
          </div>

          <div class="form-container">
            <p>Email</p>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{marginBottom: "0"}}
            />
            {emailError && <p style={{color:"red", textAlign:"left", marginTop:"10px"}}>&nbsp;&nbsp;*{emailError}</p>}
            <p>Password</p>
            <input
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{marginBottom: "0"}}
              />
            {passwordError && <p style={{color:"red", textAlign:"left", marginTop:"10px"}}>&nbsp;&nbsp;*{passwordError}</p>}
            <button class="signup" type="submit" onClick={signUp} style={{marginTop:"14px"}}>
              Sign up
            </button>
            <p style={{textAlign: "center"}}>or</p>
            <button class="continuewith" onClick={signInWithGoogle}>
              <img src={googleLogo} alt="Google Logo" />
              Continue with Google
            </button>

            <div class="termofuse">
              <p>
                By creating an account, you agree to our <a href="/syarat-dan-ketentuan" class="highlighted">Terms of Use</a> and <a href="/kebijakan-privasi" class="highlighted">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};
