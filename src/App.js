import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route exact path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
        <Route exact path={process.env.PUBLIC_URL + "/signup"} element={<Signup />} />
        <Route exact path={process.env.PUBLIC_URL + "/profile"} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
