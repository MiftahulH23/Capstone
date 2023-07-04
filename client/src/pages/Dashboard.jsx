import React from 'react'
import { GrafikCard, ScoreCard } from '../components/Card'
import { CupIcon } from "../components/Svg";
const Dashboard = () => {
  return (
    <div className='px-10 py-8'>
      <div className='grid grid-cols-3 gap-6 mb-10'>
        <ScoreCard judul={"Menu Terlaris"} ket={"Dalam Bulan ini"} icon={<CupIcon/>} subjudul={"Esteh Susu Nusantara"} desc={"Total penjualan:350"} />
        <ScoreCard judul={"Menu Terlaris"} ket={"Dalam Bulan ini"} icon={<CupIcon/>} subjudul={"Esteh Susu Nusantara"} desc={"Total penjualan:350"} />
        <ScoreCard judul={"Menu Terlaris"} ket={"Dalam Bulan ini"} icon={<CupIcon/>} subjudul={"Esteh Susu Nusantara"} desc={"Total penjualan:350"} />
      </div>
      <GrafikCard />
    </div>
  )
}

export default Dashboard