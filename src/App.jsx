import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/LoginRegister/login";
import { SignUp } from "./components/LoginRegister/signUp";
import { Index } from "./pages/Home/home";
import { LoginRegister } from "./components/LoginRegister/loginRegister";
import {Kontak} from "./pages/Kontak/kontak"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/loginregister" element={<LoginRegister />}></Route>
          <Route path="/kontak" element={<Kontak />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
