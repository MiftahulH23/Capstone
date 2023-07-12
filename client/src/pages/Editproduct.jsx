import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GetData } from "../components/Api";

const Products = () => {
  const { users } = GetData("http://localhost:5000/produk");
  console.log(users);
  return users;
};

const Editproduk = () => {
  const dataProducts = Products();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama: event.target.nama.value,
      stok: event.target.stok.value,
      harga: parseInt(event.target.harga.value),
    };

    const product = dataProducts?.data?.find((item) => item.nama === data.nama);

    axios
      .put(`http://localhost:5000/produk/update/${product._id}`, data)
      .then((res) => {
        console.log(res);
        event.target.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="p-8">
      <div className="bg-white aspect-[4/2] rounded-lg">
        <p className="px-4 py-2">Input Pesanan</p>
        <div className="flex px-4 py-2 gap-4">
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Nama Produk"
              id="nama"
              name="nama"
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Harga"
              id="harga"
              name="harga"
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="stok"
              id="stok"
              name="stok"
              required
            />
            <div className="flex justify-end px-4 py-4">
              <button
                className="px-6 py-2 bg-hijau text-white rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editproduk;
