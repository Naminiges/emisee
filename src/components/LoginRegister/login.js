import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../image/7123025_logo_google_g_icon.svg";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setEmailError("Invalid email or password");
      } else if (err.code === "auth/invalid-credential") {
        setPasswordError("Invalid email or password");
      } else if (email === "") {
        setEmailError("Email is required");
      } else if (password === "") {
        setPasswordError("Password is required");
      } else if (err.code === "auth/invalid-email") {
        setEmailError("Invalid email");
      } else {
        console.error(err);
      }
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
      </body>
    </html>
  );
};
