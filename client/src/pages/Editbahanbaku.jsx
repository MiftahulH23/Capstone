import axios from "axios";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GetData } from "../components/Api";

const Bahanbaku = () => {
  const { users } = GetData("http://localhost:5000/bahanbaku");
  console.log(users);
  return users;
};

const Editbahanbaku = () => {
  let location = useLocation()
  const navigate = useNavigate();
  const getID = location.pathname.split("/")[2]
  const dataBahanbaku = Bahanbaku();
  const getBahanbaku = dataBahanbaku?.data?.find(item => item._id === getID)

  const [nama, setNama] = React.useState(getBahanbaku.nama)
  const [stok, setStok] = React.useState(getBahanbaku.stok)
  const [minimum, setMinimum] = React.useState(getBahanbaku.minimum)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nama: nama,
      stok: parseInt(stok),
      minimum: parseInt(minimum)
    };

    axios
      .put(`http://localhost:5000/bahanbaku/update/${getID}`, data)
      .then((res) => {
        console.log(res);
        event.target.reset();
        alert('Bahan Baku berhasil diubah')
        navigate('/bahanbaku')
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <div className="p-8">
      <div className="bg-white aspect-[4/2] rounded-lg">
        <p className="px-4 py-2">Edit Bahan Baku</p>
        <div className="flex px-4 py-2 gap-4">
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="Nama Bahan Baku"
              id="nama"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
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
            <input
              type="text"
              className="px-4 py-2 border-2 w-full rounded-lg"
              placeholder="minimum"
              id="minimum"
              name="minimum"
              value={minimum}
              onChange={(e) => setMinimum(e.target.value)}
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

export default Editbahanbaku;
