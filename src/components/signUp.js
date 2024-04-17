import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      await sendEmailVerification(auth.currentUser);
      alert("Email have been sent")
    } catch (err) {
      if(err.code === "auth/email-already-in-use"){
        alert("Email already in use");
      } else {
        alert(err.message);
      }
      console.error(err);
    }
  };

  const signInWithGoogle = async() => {
    try{
        await signInWithPopup(auth, googleProvider)
        navigate("/home")
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={signUp}>
        <table>
          <tr>
            <td>Masukkan Nama Email</td>
            <td> : </td>
            <td>
              <input
                placeholder="Email Username"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Masukkan Password</td>
            <td> : </td>
            <td>
              <input
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Sign Up</button>
            </td>
          </tr>
          <tr>
            <td>Already have account?</td>
            <td>
              <button onClick={() => navigate("/login")}>Login</button>
            </td>
          </tr>
          <tr>
            <td>Sign in using google</td>
            <td>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
