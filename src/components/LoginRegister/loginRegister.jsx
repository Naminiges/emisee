import { auth, googleProvider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import emiseeLogo from "../../image/logo.jpg";
import googleLogo from "../../image/7123025_logo_google_g_icon.svg";
import "./loginRegister.css";

export const LoginRegister = () => {
  const navigate = useNavigate();

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
    <div className="background-container"> {/* Kontainer untuk latar belakang */}
      <div className="container-loginregister">
        <div className="header">
          <img
            src={emiseeLogo}
            alt="logo"
            style={{ width: "200px", marginTop: "-90px", marginBottom: "-90px" }}
          />
        </div>
        <div className="content">
          <p>
            Mari Mulai Berdonasi Bersama <span className="highlighted">EMISEE</span>
          </p>
        </div>

        <div className="form-container">
          <button className="continuewith" onClick={signInWithGoogle}>
            <img src={googleLogo} alt="Google Logo" />
            Continue with Google
          </button>

          <p style={{ textAlign: "center" }}>or</p>
          <button className="signup" type="submit" onClick={() => navigate("/signUp")}>
            Sign up
          </button>
          <div className="termofuse">
            <p>
              By creating an account, you agree to our{" "}
              <a href="/syarat-dan-ketentuan" class="highlighted">Terms of Use</a> and{" "}
              <a href="/kebijakan-privasi" class="highlighted">Privacy Policy</a>.
            </p>
          </div>
          <div className="login">
            <p>Already have an account?</p>
            <button className="signin" type="submit" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
