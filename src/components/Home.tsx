import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-red-900 h-7"></nav>

      {/* Search */}
      <div className="mx-[380px] my-[60px]">
        <form className="relative">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
          <input
            type="text"
            id="Search"
            className="w-[420px] h-[39px] pl-10 placeholder-slate-300 text-slate-200 bg-gray-400 rounded-full focus:outline-none"
            placeholder="Search"
            required
          />
        </form>
      </div>

      {/* Sidebar */}
      <div className="bg-red-800 w-[200px] h-[640px] mx-[47px] my-[-110px] rounded-xl">

        <div className="flex justify-center py-[40px] relative">
          <CgProfile className="text-white w-[60px] h-[100px]"></CgProfile>
        </div>

        <div className="space-y-[-15px] my-[20px]">

          <div className="flex items-center py-[50px] px-10">
            <IoHomeOutline className="text-white w-[27px] h-[24px]"></IoHomeOutline>
            <span className="text-white ml-[10px]">Home</span>
          </div>

          <div className="flex items-center py-1 px-10">
            <GoHistory className="text-white w-[27px] h-[23px]"></GoHistory>
            <span className='text-white ml-[10px]'>Riwayat</span>
          </div>

        </div>

      </div>

      {/* Buku */}
    <div className='bg-red-700 w-[200px] h-[200px border-x-black border border-y-black flex justify-center]'>
      
    </div>
    </>
  );
}

export default Home