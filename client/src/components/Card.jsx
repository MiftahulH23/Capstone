import React, { isValidElement, useState, useEffect } from "react";
import { GetData } from "./Api";
import axios from "axios";
import { Link } from "react-router-dom";
import { currentDatetime } from "./format";

export const PembayaranCard = ({ count }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      namacustomer: e.target.nama.value,
      jumlah: e.target.jumlah.value,
      menu: "Esteh Susu Nusantara",
      harga: 15000,
      metodepembayaran: e.target.pembayaran.value,
      total: count,
      tanggalwaktu: currentDatetime(),
    };
    axios
      .post("http://localhost:5000/penjualan/add", data)
      .then((res) => {
        console.log(res.data);
        alert("Pesanan berhasil ditambahkan");
      })
      .catch((err) => {
        console.log(err);
        alert("Pesanan gagal");
      })
  }
  
  return (
    <div className="grid place-items-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-[70%]">
        <label htmlFor="">Nama</label>
        <input
          type="text"
          name="nama"
          className="border-2 w-full px-4 mb-4 rounded-lg"
          placeholder="Input nama"
        />
        <label htmlFor="">Jumlah Pesanan</label>
        <input
          type="text"
          name="jumlah"
          value={count}
          className="border-2 w-full px-4 mb-4 rounded-lg"
          placeholder="Jumlah"
        />
        <label htmlFor="">Alamat</label>
        <input
          type="text"
          name="alamat"
          className="border-2 w-full px-4 mb-4 rounded-lg"
          placeholder="alamat"
        />
        <label htmlFor="">Pembayaran</label>
        <select
          name="pembayaran"
          id="pembayaran"
          className="border-2 w-full px-4 mb-4 rounded-lg"
        >
          <option value="cash">COD</option>
          <option value="credit">Credit Card</option>
        </select>
        <button type="submit" className="w-full px-4 mb-4 rounded-lg bg-hijau">
          Bayar
        </button>
      </form>
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
        <div className="fill-hijau">{icon}</div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="font-bold">{subjudul}</p>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export const GrafikCard = () => {
  return (
    <div className="bg-white aspect-[6/2] rounded-lg">
      <p className="p-10">Grafik Penjualan</p>
    </div>
  );
};

export const PesananCard = () => {
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/produk");
    console.log(users);
    return users;
  };
  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahanbaku");
    console.log(users);
    return users;
  };
  const dataProduk = Produk();
  const dataBahanbaku = Bahan();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      namacustomer: event.target.namacustomer.value,
      menu: event.target.menu.value,
      jumlah: event.target.jumlah.value,
      harga: event.target.harga.value,
      namakasir: event.target.namakasir.value,
      metodepembayaran: event.target.metodepembayaran.value,
      jenispesanan: event.target.jenispesanan.value,
      tanggalwaktu: currentDatetime(),
      total: event.target.totalharga.value,
    };

    const product = dataProduk?.data.find((item) => item.nama === data.menu);

    axios
      .post(`http://127.0.0.1:5000/penjualan/add`, data)
      .then((res) => {
        console.log(res);
        console.log({ product });

        product.komposisi?.map((el) => {
          dataBahanbaku?.data?.map((item) => {
            if (el[0].toLowerCase() === item.nama.toLowerCase()) {
              axios
                .put(`http://localhost:5000/bahanbaku/update/${item._id}`, {
                  nama: item.nama,
                  minimum: item.minimum,
                  stok:
                    parseInt(item.stok) -
                    parseInt(el[1]) * parseInt(data.jumlah),
                })
                .then((res) => {
                  console.log(res);
                  console.log("material updated");
                })
                .catch((err) => {
                  console.error(err);
                  console.info("update material failed");
                });
            } else {
              console.info("material not found");
            }
          });
        });
        event.target.reset();
        alert("Pesanan berhasil");
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal");
      });
  };

  const [jumlah, setJumlah] = React.useState(0);
  const [harga, setHarga] = React.useState(0);
  const total = parseInt(jumlah) * parseInt(harga);

  return (
    <div className="bg-white aspect-[4/2]">
      <p className="px-4 py-2">Input Pesanan</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 px-4 py-2 gap-4"
      >
        <div className="w-full flex flex-col gap-2 ">
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Nama Customer"
            name="namacustomer"
            id="namacustomer"
          />
          <select
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            name="menu"
            id="menu"
          >
            {dataProduk?.data?.map((item) => (
              <option value={item.nama}>{item.nama}</option>
            ))}
          </select>
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Jumlah"
            name="jumlah"
            id="jumlah"
            onChange={(e) => setJumlah(e.target.value)}
          />
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Harga"
            name="harga"
            id="harga"
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Nama Kasir"
            name="namakasir"
            id="namakasir"
          />
          <select
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Metode Pembayaran"
            name="metodepembayaran"
            id="metodepembayaran"
          >
            <option value="cash">Cash</option>
            <option value="gopay">Gopay</option>
            <option value="credit">Kartu Kredit</option>
          </select>
          <select
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Jenis Pesanan"
            name="jenispesanan"
            id="jenispesanan"
          >
            <option value="dine in">Dine In</option>
            <option value="take away">Take Away</option>
          </select>
          <input
            type="text"
            className="px-4 py-2 border-2 w-full rounded-lg"
            placeholder="Total Harga"
            name="totalharga"
            id="totalharga"
            value={total}
          />
        </div>

        <div className="w-full px-4">
          <input
            type="text"
            className="w-full px-4 py-8 border-2 rounded-lg"
            placeholder="Keterangan(opsional)"
          />
        </div>
        <div className="flex justify-end px-4 py-4">
          <button
            className="px-6 py-2 bg-hijau text-white rounded-lg"
            type="submit"
          >
            Input Pesanan
          </button>
        </div>
      </form>
    </div>
  );
};

export const CardProduct = () => {
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/produk");
    console.log(users);
    return users;
  };
  const dataproduk = Produk();

  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Product</p>
        <Link className="bg-hijau rounded-lg px-4 py-2" to="/inputproduk">
          Tambah Product
        </Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="">
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Stock</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataproduk?.data.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
                <td>{item.harga ?? 0}</td>
                <td>
                  <Link to={`/editproduct/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CardBahanBaku = () => {
  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/bahanbaku");
    console.log(users);
    return users;
  };
  const databahanbaku = Bahanbaku();

  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Bahan Baku</p>
        <div className="flex gap-5">
          <Link
            className="bg-hijau rounded-lg px-4 py-2"
            to={"/inputbahanbaku"}
          >
            Tambah Bahan Baku
          </Link>
          <Link
            className="bg-hijau rounded-lg px-4 py-2"
            to={"/pesanbahanbaku"}
          >
            Pesan Bahan Baku
          </Link>
        </div>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan Baku</th>
              <th>Stock</th>
              <th>Minimum</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {databahanbaku?.data.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
                <td>{item.minimum ?? "-"}</td>
                <td>
                  {item.stok <= item.minimum ? (
                    <span className="text-red-500">Perlu dipesan</span>
                  ) : (
                    "Stok cukup"
                  )}
                </td>
                <td>
                  <Link to={`/editbahanbaku/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            )) ?? <tr>Bahan Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CardPesananBahanBaku = () => {
  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/pesanbahanbaku");
    console.log(users);
    return users;
  };
  const datapesananbahanbaku = Bahanbaku();
  const dataPesanan = datapesananbahanbaku?.data?.filter(
    (item) => item.status !== "diterima"
  );

  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Pesanan Masuk</p>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table cleassName="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan Baku</th>
              <th>Jumlah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPesanan?.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? 0}</td>
                <td>
                  <Link to={`/pengirimanbahanbaku/${item._id}`}>
                    <p>Kirim</p>
                  </Link>
                </td>
              </tr>
            )) ?? <tr>Pesanan Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CardBahanBakuSupplier = () => {
  const Bahanbaku = () => {
    const { users } = GetData("http://localhost:5000/bahanbakusupplier");
    console.log(users);
    return users;
  };
  const databahanbaku = Bahanbaku();
  return (
    <div>
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="text-xl text-hijau font-bold">Daftar Bahan Baku</p>
        <Link
          className="bg-hijau rounded-lg px-4 py-2"
          to={"/inputbahanbakusupplier"}
        >
          Tambah Bahan Baku
        </Link>
      </div>
      <div className="bg-white aspect-[4/1] px-10 py-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan Baku</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {databahanbaku?.data.map((item) => (
              <tr>
                <td>{item.nama ?? "-"}</td>
                <td>{item.stok ?? "-"}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};
