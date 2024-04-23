import { auth, googleProvider } from "../../config/firebase";

import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import './loginRegister.css';

import googleLogo from "../../image/7123025_logo_google_g_icon.svg"

export const Index = () => {
  const navigate = useNavigate();

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
      </head>
      <body>
        <div class="container">
          <div class="header"></div>
          <div class="content">
            <p>
              Mari Mulai Berdonasi Bersama{" "}
              <span class="highlighted">EMISEE</span>
            </p>
          </div>

          <div class="form-container">
            <button class="continuewith" onClick={signInWithGoogle}>
              <img src={googleLogo} alt="Google Logo" />
              Continue with Google
            </button>

            <p style={{ textAlign: "center" }}>or</p>
            <button
              class="signup"
              type="submit"
              onClick={() => navigate("/signUp")}
            >
              Sign up
            </button>
            <div class="termofuse">
              <p>
                By creating an account, you agree to our
                <span class="highlighted">Terms of Use</span> and
                <span class="highlighted">Privacy Policy</span>.
              </p>
            </div>
            <div class="login">
              <p>Already have an account?</p>
              <button class="signup" type="submit"
              onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
