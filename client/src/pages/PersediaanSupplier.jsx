import React from "react";

const PersediaanSupplier = () => {
    const data = [] 
  return (
    <div className="px-10">
      <div className=" flex justify-between py-4 mt-10 items-center">
        <p className="">Daftar Bahan Baku</p>
        <button className="bg-hijau rounded-lg px-4 py-2">Input Product</button>
      </div>
      <div className="bg-white aspect-[4/1] mb-10 px-10 py-3">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama Bahan Baku</th>
              <th>Jumlah (Rp)</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.name ?? "-"}</td>
                <td>{item.price ?? "-"}</td>
                <td>{item.amount ?? 0}</td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersediaanSupplier;
