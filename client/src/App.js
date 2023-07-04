
import './App.css';
import Login from './pages/login'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Header from './components/header';
import Beranda from './pages/beranda';
import PesananSaya from './pages/PesananSaya';
import TentangKami from './pages/TentangKami';
import Persediaan from './pages/Persediaan';
import Menu from './pages/Menu';
import Dashboard from './pages/Dashboard';
import InputPesanan from './pages/InputPesanan';


function App() {
  const [login, setLogin] = useState(false)
  const handleLogin = () => setLogin(!login)

  const [user, setUser] = useState("admin");

  return (
    <Router>
      <div className={`w-full h-screen  bg-background ${login? 'grid place-items-center' : 'flex'}`}>
        {login ? (
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        ) : (
          <>
            {/* kiri */}
            <Navbar user={user} />
            {/* kanan */}
            <div className="flex-auto h-screen overflow-y-scroll ">
              <Header />
              <Routes>
                <Route path='/' element={<Beranda />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/pesanan' element={<PesananSaya />} />
                <Route path='/tentang' element={<TentangKami />} />
                <Route path='/persediaan' element={<Persediaan />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/inputpesanan' element={<InputPesanan />} />
              </Routes>
              {/* <button onClick={handleLogin}>login</button> */}
            </div>
          </>
        )}
      </div>
    </Router>
  );
}
export default App;
