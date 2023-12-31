import axios from "axios";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetData } from "../components/Api";

const Products = () => {
  const { users } = GetData("http://localhost:5000/produk");
  console.log(users);
  return users;
};

const Editproduk = () => {
  let location = useLocation()
  const navigate = useNavigate();
  const getID = location.pathname.split("/")[2]
  const dataProducts = Products();
  const getProduct = dataProducts?.data?.find(item => item._id === getID)

  const [nama, setNama] = React.useState(getProduct.nama)
  const [harga, setHarga] = React.useState(getProduct.harga)
  const [stok, setStok] = React.useState(getProduct.stok)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama: nama,
      stok: parseInt(stok),
      harga: parseInt(harga),
    };

    axios
      .put(`http://localhost:5000/produk/update/${getID}`, data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        alert('Produk berhasil diubah')
        navigate('/product')
      })
      .catch((err) => {
        console.error(err);
      })
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
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Harga"
              id="harga"
              name="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
              />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="stok"
              id="stok"
              name="stok"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
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
