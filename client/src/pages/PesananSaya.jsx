
import * as React from 'react';
import { PembayaranCard } from "../components/Card";
import CardPesananSaya from "../components/CardPesananSaya";
import axios from 'axios';

const PesananSaya = () => {
  const [count, setCount] = React.useState(1);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  }
  
  return (
    <div className=" w-[80%] h-[80%] bg-white mx-auto mt-10 grid grid-cols-2 divide-x divide-black py-2 rounded-md">
      <div>
        <h1 className="mt-5 font-bold ml-5">Pesanan Saya</h1>
        <CardPesananSaya produk={'Esteh Susu Nusantara'} harga={'15000'} count={count} setCount={handleCount} />
      </div>
      <PembayaranCard count={count} />
    </div>
  );
};

export default PesananSaya;
