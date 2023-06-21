import Logo from '../assets/img/logo.png'
const Register = () => {
    return(
        <div className="h-screen grid place-items-center bg-background">
            <div className="grid grid-cols-2 w-[70%] h-[70%] bg-white py-20 divide-x divide-slate-700 ">
                {/* Kiri */}
                <div className='grid place-items-center'>
                    <img src={Logo} alt="" />
                </div>
                {/* Kanan */}
                <div className='grid place-items-center'>
                    <div className='flex flex-col w-[50%]'>
                        <h1 className='text-center font-bold text-2xl'>Sign Up</h1>
                        <p className='place-items-start'>Email</p>
                        <input type="text" className='border-2 w-full px-4 py-1 rounded-lg' placeholder='Email' />
                        <p className='mt-2'>Password</p>
                        <input type="text" className='border-2 w-full px-4 py-1 rounded-lg' placeholder='Password' />
                        <p className='mt-2'>Confirm Password</p>
                        <input type="text" className='border-2 w-full px-4 py-1 rounded-lg' placeholder='Confirm Password' />
                        <button className='bg-primary w-full mt-8 rounded-lg px-4 py-2 text-white'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register