import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/LoginRegister/login";
import { SignUp } from "./components/LoginRegister/signUp";
import { Index } from "./pages/Home/home";
import { LoginRegister } from "./components/LoginRegister/loginRegister";
import { Kontak } from "./pages/Kontak/kontak"
import { Blog } from "./pages/blog/blog";
import { Program } from "./pages/Program/program";
import { Campaign } from "./pages/Campaign/campaign";
import { SyaratDanKetentuan } from "./pages/SKUser/SyaratDanKetentuan";
import { Kebijakan } from "./pages/Kebijakan/KebijakanPrivasi";


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
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/campaign" element={<Campaign />}></Route>
          <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />}></Route>
          <Route path="/kebijakan-privasi" element={<Kebijakan />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
