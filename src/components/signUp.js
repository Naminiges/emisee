import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../image/7123025_logo_google_g_icon.svg"

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created succesfully");
      navigate("/home")
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        alert("Email invalid");
      }
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="signup.css" />
      </head>
      <body>
        <div class="container">
          <div class="header"></div>
          <div class="content">
            <p>Sign up For Free</p>
          </div>

          <div class="form-container">
            <p>Email</p>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            <button class="signup" type="submit" onClick={signUp}>
              Sign up
            </button>
            <p style={{textAlign: "center"}}>or</p>
            <button class="continuewith" onClick={signInWithGoogle}>
              <img src={googleLogo} alt="Google Logo" />
              Continue with Google
            </button>

            <div class="termofuse">
              <p>
                By creating an account, you agree to our
                <span class="highlighted">Terms of Use</span> and
                <span class="highlighted">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
