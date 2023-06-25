import React, { useState } from "react";
import Nusantara from "../assets/img/nusantara.png";
const CardPesananSaya = ({ produk, harga }) => {
  const [jumlah, setJumlah] = useState(1);
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center mt-10">
        <div className="w-[20%]">
          <img src={Nusantara} alt="" />
        </div>
        <div className="">
          <p>{produk}</p>
          <p>{harga}</p>
          <div className="flex justify-center gap-4">
            {/* Tombol Kurang */}
            <button onClick={() => setJumlah((prev) => prev - 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p>{jumlah}</p>
            {/* Tombol Tambah */}
            <button onClick={() => setJumlah((prev) => prev + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPesananSaya;
