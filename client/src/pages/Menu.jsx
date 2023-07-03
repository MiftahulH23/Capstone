import React from "react";
import Nusantara from "../assets/img/nusantara.png";
import Avocado from "../assets/img/avocado.png";

const CardMenu = (props) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-xl w-full h-full shadow-2xl items-center">
      <div className="grid place-items-center w-1/2 h-full overflow-hidden">
        <img src={props.img} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex justify-between mx-2 mt-3 w-full">
        <div>
          <p className="text-red-600">{props.produk}</p>
          <p>{props.stock}</p>
          <p>{props.harga}</p>
        </div>
        <div className="mt-2 flex flex-col items-end">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-star-fill fill-gold"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p>4.9</p>
          </div>
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart-plus"
              viewBox="0 0 16 16"
            >
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <h1 className="text-2xl font-bold ml-10 mt-8">Menu</h1>
      <div className="grid grid-cols-3 gap-5 place-items-center mx-10 mt-10">
        <CardMenu img={Nusantara} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
        <CardMenu img={Avocado} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
        <CardMenu img={Nusantara} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
        <CardMenu img={Nusantara} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
        <CardMenu img={Nusantara} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
        <CardMenu img={Nusantara} produk="Es Teh Nusantara" stock="Stock 15" harga="15K" />
      </div>
    </>
  );
};

export default Menu;
