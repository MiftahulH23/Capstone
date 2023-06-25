import CardPembayaran from "../components/cardPembayaran";
import CardPesananSaya from "../components/CardPesananSaya";


const PesananSaya = () => {
  return (
    <div className=" w-[80%] h-[80%] bg-white mx-auto mt-10 grid grid-cols-2 divide-x divide-black py-2 rounded-md">
      <div>
        <h1 className="mt-5 font-bold ml-5">Pesanan Saya</h1>
        <CardPesananSaya produk={'Esteh Susu Nusantara'} harga={'15K'} />
        <CardPesananSaya produk={'Esteh Susu Nusantara'} harga={'15K'} />
        <CardPesananSaya produk={'Esteh Susu Nusantara'} harga={'15K'} />
      </div>
      <CardPembayaran />
    </div>
  );
};

export default PesananSaya;
