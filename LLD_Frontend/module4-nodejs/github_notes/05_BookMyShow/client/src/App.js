import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regsiter" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
