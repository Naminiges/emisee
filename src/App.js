import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Auth } from './components/auth';
import { SignUp } from './components/signUp';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/login' element={<Auth />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
