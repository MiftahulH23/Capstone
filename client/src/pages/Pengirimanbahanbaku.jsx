import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { GetData } from "../components/Api";

const BahanBaku = () => {
  const { users } = GetData("http://localhost:5000/bahanbaku");
  console.log(users);
  return users;
};

const Pengirimanbahanbaku = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getID = location.pathname.split("/")[2];
  const dataBahan = BahanBaku();
  console.log(getID);

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataOrder = {
      nama: event.target.nama.value,
      stok: event.target.stok.value,
      status: "diterima",
    };

    axios
      .put(`http://127.0.0.1:5000/pesanbahanbaku/update/${getID}`, dataOrder)
      .then((res) => {
        console.log(res);
        event.target.reset();

        dataBahan?.data?.map((item) => {
          if (item.nama.toLowerCase() === dataOrder.nama.toLowerCase()) {
            axios
              .put(`http://localhost:5000/bahanbaku/update/${item._id}`, {
                nama: item.nama,
                minimum: item.minimum,
                stok: parseInt(item.stok) + parseInt(dataOrder.stok),
              })
              .then((res) => {
                console.log(res);
                alert("material updated");
              })
              .catch((err) => {
                console.error(err);
                alert("failed update material");
              });
          }
        });
        navigate("/pesananmasuk");
      })
      .catch((err) => {
        console.error(err);
        alert("order failed");
      });
  };

  return (
    <div className="p-8">
      <div className="bg-white aspect-[4/2] rounded-lg">
        <p className="px-4 py-2">Pengiriman Bahan Baku</p>
        <div className="flex px-4 py-2 gap-4">
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Nama Bahan Baku"
              id="nama"
              name="nama"
              required
            />
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="jumlah"
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

export default Pengirimanbahanbaku;
