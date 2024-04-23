import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const currentUser = auth.currentUser;
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Apa Kabar</h1>
      <h2>{currentUser && currentUser.email}</h2> {/* Periksa apakah currentUser tidak null sebelum mengakses email */}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};
