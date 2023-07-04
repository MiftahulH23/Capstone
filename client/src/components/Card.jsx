import React, { isValidElement } from "react";

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
        <div className="stroke-hijau">{icon}</div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="font-bold">{subjudul}</p>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const GrafikCard = () => {
  return <div className="bg-white aspect-[6/2] rounded-lg"></div>;
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

export const PersediaanAdmin = () => {
  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="">Daftar Product</p>
        <button className="bg-hijau rounded-lg px-4 py-2">Input Product</button>
      </div>
      <div className="bg-white aspect-[4/1]"></div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="">Daftar Product</p>
        <button className="bg-hijau rounded-lg px-4 py-2">Input Product</button>
      </div>
      <div className="bg-white aspect-[4/1] mb-10"></div>
    </div>
  );
};
