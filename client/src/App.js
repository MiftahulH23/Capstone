import "./App.css";
import Login from "./pages/login";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Beranda from "./pages/beranda";
import PesananSaya from "./pages/PesananSaya";
import TentangKami from "./pages/TentangKami";
import Persediaan from "./pages/Persediaan";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import InputPesanan from "./pages/InputPesanan";
import DashboardSupplier from "./pages/DashboardSupplier";
import PersediaanSupplier from "./pages/PersediaanSupplier";
import Pesananmasuk from "./pages/Pesananmasuk";
import Product from "./pages/Product";
import Bahanbaku from "./pages/Bahanbaku";
import Inputproduk from "./pages/Inputproduk";
import Inputbahanbaku from "./pages/Inputbahanbaku";
import Inputbahanbakusupplier from "./pages/Inputbahanbakusupplier";
import Register from "./pages/register";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogin = () => setLogin(!login);

  const [user, setUser] = useState({
    id: "",
    name: "",
    role: "",
  });
  const handleUser = (id, name, role) =>
    setUser({
      id: id,
      name: name,
      role: role,
    });

  return (
    <Router>
      <div
        className={`w-full h-screen  bg-background ${
          !login ? "grid place-items-center" : "flex"
        }`}
      >
        {!login ? (
          <Routes>
            <Route
              path="/"
              element={
                <Login handleLogin={handleLogin} handleUser={handleUser} />
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        ) : (
          <>
            {/* kiri */}
            <Navbar
              user={user}
              handleLogin={handleLogin}
              handleUser={handleUser}
            />
            {/* kanan */}
            <div className="flex-auto h-screen overflow-y-scroll ">
              <Header user={user} />
              <Routes>
                {user.role === "admin" ? (
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/bahanbaku" element={<Bahanbaku />} />
                    <Route path="/inputpesanan" element={<InputPesanan />} />
                    <Route path="/inputproduk" element={<Inputproduk />} />
                    <Route
                      path="/inputbahanbaku"
                      element={<Inputbahanbaku />}
                    />
                  </>
                ) : user.role === "supplier" ? (
                  <>
                    <Route path="/" element={<DashboardSupplier />} />
                    <Route
                      path="/persediaansupplier"
                      element={<PersediaanSupplier />}
                    />
                    <Route
                      path="/inputbahanbakusupplier"
                      element={<Inputbahanbakusupplier />}
                    />
                    <Route path="/pesananmasuk" element={<Pesananmasuk />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/pesanan" element={<PesananSaya />} />
                    <Route path="/tentang" element={<TentangKami />} />
                  </>
                )}
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
