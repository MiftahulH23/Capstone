import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import {
  BerandaIcon,
  PesananIcon,
  MenuIcon,
  AboutIcon,
  DashboardIcon,
  PersediaanIcon,
  InputPesanan,
} from "./Svg";
const Navbar = ({ user }) => {
  const Menu = {
    customer: [
      ["Beranda", "/"],
      ["Menu", "/menu"],
      ["Pesanan", "/pesanan"],
      ["Tentang", "/tentang"],
    ],
    admin: [
      ["Dashboard", "/dashboard"],
      ["Input Pesanan", "/inputpesanan"],
      ["Persediaan", "/persediaan"],
    ],
    supplier: [
      ["Beranda", "/"],
      ["Pesanan", "/pesanan"],
    ],
  };

  return (
    <div className="flex-none flex flex-col items-center w-[15%] h-screen px-5 bg-white py-20">
      <img src={Logo} alt="" className="w-[100%]" />
      <ul className="flex flex-col gap-3 mt-20">
        {Menu[user].map(([name, path], i) => (
          <li key={i}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-hijau stroke-hijau" : "text-black stroke-black"
              }
            >
              <div className="flex gap-3 items-center">
                {user === "admin"
                  ? (() => {
                      switch (name) {
                        case "Dashboard":
                          return <DashboardIcon />;
                        case "Persediaan":
                          return <PersediaanIcon />;
                        case "Input Pesanan":
                          return <InputPesanan />;
                        default:
                          return null;
                      }
                    })()
                  : (() => {
                      switch (name) {
                        case "Beranda":
                          return <BerandaIcon />;
                        case "Menu":
                          return <MenuIcon />;
                        case "Pesanan":
                          return <PesananIcon />;
                        case "Tentang":
                          return <AboutIcon />;
                      }
                    })()}
                <span>{name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
