import React from "react";
import { ScoreCard } from "../components/Card";
import { CupIcon } from "../components/Svg";

const DashboardSupplier = () => {
    const data = []
  return (
    <div className="px-10 py-8">
      <div className="grid grid-cols-3 gap-6">
        <ScoreCard
          judul={"Menu Terlaris"}
          ket={"Dalam Bulan ini"}
          icon={<CupIcon />}
          subjudul={"Esteh Susu Nusantara"}
          desc={"Total penjualan:350"}
        />
        <ScoreCard
          judul={"Menu Terlaris"}
          ket={"Dalam Bulan ini"}
          icon={<CupIcon />}
          subjudul={"Esteh Susu Nusantara"}
          desc={"Total penjualan:350"}
        />
        <ScoreCard
          judul={"Menu Terlaris"}
          ket={"Dalam Bulan ini"}
          icon={<CupIcon />}
          subjudul={"Esteh Susu Nusantara"}
          desc={"Total penjualan:350"}
        />
      </div>
      <p className="py-4 text-lg font-medium">Daftar Pengiriman Bahan Baku</p>
      <div className="bg-white aspect-[4/1] px-5 py-3">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jumlah</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.name ?? "-"}</td>
                <td>{item.jumlah ?? "-"}</td>
                <td>{item.keterangan ?? 0}</td>
                <td></td>
              </tr>
            )) ?? <tr>Produk Tidak tersedia</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardSupplier;
