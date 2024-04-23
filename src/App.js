import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./components/LoginRegister/login";
import { SignUp } from "./components/LoginRegister/signUp";
import { Home } from "./pages/home";
import { Index } from "./components/LoginRegister/loginRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
