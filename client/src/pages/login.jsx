import Logo from '../assets/img/logo.png'
const Login = () => {
    return (
        <div className="grid grid-cols-2 w-[70%] h-[70%] bg-white py-20 divide-x divide-slate-700 ">
            {/* Kiri */}
            <div className='grid place-items-center'>
                <img src={Logo} alt="" />
            </div>
            {/* Kanan */}
            <div className='grid place-items-center'>
                <div className='flex flex-col w-[50%]'>
                    <h1 className='text-center font-bold text-2xl'>LOGIN</h1>
                    <p className='place-items-start'>Email</p>
                    <input type="text" className='border-2 w-full px-4 py-1 rounded-lg' placeholder='Email' />
                    <p className='mt-2'>Password</p>
                    <input type="text" className='border-2 w-full px-4 py-1 rounded-lg' placeholder='Password' />
                    <button className='bg-primary w-full mt-8 rounded-lg px-4 py-2 text-white'>LOGIN</button>
                </div>
            </div>
        </div>
    )
}
export default Login