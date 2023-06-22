import Foto from '../assets/img/foto1.png'
const Beranda =() =>{
    return(
        <div className="flex mt-32">
            {/* Kiri */}
            <div className="flex-auto grid items-center ml-10">
                <div>
                    <h1 className='text-7xl'><span className='text-hijau text-8xl font-bold'>es </span> Teh <br /> Indonesia </h1>
                    <p className='mt-2 text-xl'>Menyajikan berbagai varian es teh dengan cita  rasa khas Indonesia yang memberikan anda sensasi meminum teh yang menyenangkan</p>
                    <button className='px-8 py-2 bg-hijau rounded-lg mt-10'>Order Now</button>
                </div>
            </div>
            {/* Kanan*/}
            <img src={Foto} alt="" className="flex-none w-[43%] mr-10" />
        </div>
    )
}
export default Beranda