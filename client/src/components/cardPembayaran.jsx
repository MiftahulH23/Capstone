import React from "react";

const CardPembayaran = () => {
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
        <button onClick={()=> alert("Pesanan diproses")} className="w-full px-4 py-1 rounded-lg mt-5 bg-hijau">
          Bayar
        </button>
      </div>
    </div>
  );
};

export default CardPembayaran;
