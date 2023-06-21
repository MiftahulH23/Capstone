import homeIcons from '../assets/icons/home.svg'
import Logo from '../assets/img/logo.png'
const Navbar = () => {
    return (
        <div className="flex-none flex flex-col items-center w-[15%] h-screen px-5 bg-white py-20">
            <img src={Logo} alt="" className='w-48' />
            <ul className='mt-20'>
                <li className='flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Beranda
                </li>
                <li className='flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    Menu
                </li>
                <li>Pesanan Saya</li>
                <li>Tentang Kami</li>
                <li>Login</li>
                <li>Sign In</li>
            </ul>
        </div>
    )
}

export default Navbar