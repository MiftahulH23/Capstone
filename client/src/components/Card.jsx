import React, { isValidElement, useState, useEffect } from "react";
import { GetData } from "./Api";
import axios from "axios";
import { Link } from 'react-router-dom'
export const PembayaranCard = () => {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col w-[70%]">
        <input
          type="text"
          className="border-2 w-full px-4 py-1 rounded-lg"
          placeholder="Alamat"
        />
        <input
          type="text"
          className="border-2 w-full px-4 py-1 rounded-lg mt-5"
          placeholder="No Hp"
        />
        <input
          type="text"
          className="border-2 w-full px-4 py-1 rounded-lg mt-5"
          placeholder="Pesan(Opsional)"
        />
        <p className="mt-10">Metode Pembayaran</p>
        <div className="w-full border-2 px-4 py-1 rounded-lg mt-5">
          <p>Bayar di temmpat</p>
        </div>
        <button
          onClick={() => alert("Pesanan diproses")}
          className="w-full px-4 py-1 rounded-lg mt-5 bg-hijau"
        >
          Bayar
        </button>
      </div>
    </div>
  );
};

export const ScoreCard = ({ judul, ket, icon, subjudul, desc }) => {
  return (
    <div className="bg-white rounded-lg aspect-[4/2]">
      <div className="flex justify-between px-2 py-2 items-center">
        <p className="font-bold text-lg">{judul}</p>
        <p className="text-xs text-slate-400">{ket}</p>
      </div>
      <div className="grid grid-cols-3 px-2 py-5 place-items-center">
        <div className="fill-hijau">{icon}</div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="font-bold">{subjudul}</p>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const GrafikCard = () => {
  return (
    <div className="bg-white aspect-[6/2] rounded-lg">
      <p className="p-10">Grafik Penjualan</p>
    </div>
  );
};

export const PesananCard = () => {
  return (
    <div className="bg-white aspect-[4/2]">
      <p className="px-4 py-2">Input Pesanan</p>
      <div className="grid grid-cols-2 px-4 py-2 gap-4">
        <div className="w-full flex flex-col gap-2 ">
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Nomor Antrian"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Nama Customer"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Menu"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Jumlah"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Harga"
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Nama Kasir"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Metode Pembayaran"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Jenis Pesanan"
          />
          <input
            type="datetime-local"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Tanggal & Waktu"
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Total Harga"
          />
        </div>
      </div>
      <div className="w-full px-4">
        <input
          type="text"
          className="w-full px-4 py-8 border-2 rounded-lg"
          placeholder="Keterangan(opsional)"
        />
      </div>
      <div className="flex justify-end px-4 py-4">
        <button className="px-6 py-2 bg-hijau text-white rounded-lg">
          Input Pesanan
        </button>
      </div>
    </div>
  );
};

export const CardProduct = () => {
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/produk");
    console.log(users);
    return users;
  };
  const dataproduk = Produk();
  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Product</p>
        <Link className="bg-hijau rounded-lg px-4 py-2" to="/inputproduk">Tambah Product</Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="">
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Stock</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataproduk?.data.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
                <td>{item.harga ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CardBahanBaku = () => {
  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/bahanbaku");
    console.log(users);
    return users;
  };
  const databahanbaku = Bahanbaku();
  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Bahan Baku</p>
        <Link className="bg-hijau rounded-lg px-4 py-2" to={"/inputbahanbaku"}>Tambah Bahan Baku</Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan Baku</th>
              <th>Stock</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {databahanbaku?.data.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
