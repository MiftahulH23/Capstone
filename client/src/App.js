
import './App.css';
import Login from './pages/login'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Header from './components/header';
import Beranda from './pages/beranda';
import PesananSaya from './pages/PesananSaya';
import TentangKami from './pages/TentangKami';
import Menu from './pages/Menu';


function App() {
  const [login, setLogin] = useState(false)
  const handleLogin = () => setLogin(!login)

  return (
    <Router>
      <div className={`w-full h-screen  bg-background ${login? 'grid place-items-center' : 'flex'}`}>
        {login ? (
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Login />} />
          </Routes>
        ) : (
          <>
            {/* kiri */}
            <Navbar />
            {/* kanan */}
            <div className="flex-auto h-full ">
              <Header />
              <Routes>
                <Route path='/' element={<Beranda />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/pesanan' element={<PesananSaya />} />
                <Route path='/tentang' element={<TentangKami />} />
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
