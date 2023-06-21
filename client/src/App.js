
import './App.css';
import Login from './pages/login'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register } from './pages/register';
import { MenuUtama } from './components/menuUtama';
import Navbar from './components/navbar'
import Header from './components/header';

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
                <Route path='/' element={<MenuUtama />} />

              </Routes>
              <button onClick={handleLogin}>login</button>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
