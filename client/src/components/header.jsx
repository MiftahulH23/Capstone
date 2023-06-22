import User from '../assets/img/user.png'

const Header = () => {
  return (
    <div className="flex justify-between mt-5 mr-10 ml-10">
      <div className="flex bg-white  w-[50%] items-center py-1 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input type="text" placeholder="Cari" className=" ml-3" />
      </div>
      <div className="flex gap-2 px-2 items-center">
        <p className='font-bold'>Miftahul Huda</p>
        <div>
          <img src={User} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
