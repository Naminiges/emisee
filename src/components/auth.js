import { useState } from "react";
import { auth, signIn, googleProvider } from "../config/firebase";

import {useNavigate} from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signIn(auth, email, password);
      navigate("/home")
    } catch (err) {
        console.error(err);
      alert("Inputan salah")
    }
  };

  const signInWithGoogle = async() => {
    try{
        await signInWithPopup(auth,googleProvider)
        navigate("/home")
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={login}>
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
              <button type="submit">Sign In</button>
            </td>
          </tr>
          <tr>
            <td>Sign in using google</td>
            <td>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            </td>
          </tr>
          <tr>
            <td>Don't have an account?</td>
            <td>
              <button onClick={() => navigate('/')}>Make account</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};
