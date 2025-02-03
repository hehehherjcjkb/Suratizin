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
            <span className="text-white ml-[10px]">Riwayat</span>
          </div>
        </div>
      </div>

      {/* Buku */}
      <div className="bg-red-700 w-[200px] h-[633px]  border-x-black border border-y-black flex justify-center absolute right-4">
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home
// <div className="bg-red-700 w-[200px] h-[200px]  border-x-black border border-y-black flex justify-center fle">

import React from 'react'
import Image from 'next/image';
function Home
() {
  return (
    <>
      <div className="bg-white w-full h-full">
        <Image
          src="/assets/logo/logo2.png"
          alt="telkom"
          className="absolute top-0 mx-[7px] mt-[-40px]"
          width={140}
          height={100}
        ></Image>

        <div className="absolute mt-[-75px] border-t-2 border-black w-screen ">
          <div className="mx-[110px] my-[40px] text-lg font-normal">
            DATA PENGAJUAN
          </div>
        </div>

        <div className="bg-[#950101] w-[870px] h-[160px] mx-[100px] my-[136px] rounded-lg">
          <div className="text-white text-base mx-[30px] py-[7px]">
            November 2024
          </div>

          <div className="flex justify-between items-center gap-4 mt-3">
            <div className="text-white text-base text-center w-[40px]">SEN</div>
            <div className="text-white text-base text-center w-[40px]">SEL</div>
            <div className="text-white text-base text-center w-[40px]">RAB</div>
            <div className="text-white text-base text-center w-[40px]">KAM</div>
            <div className="text-white text-base text-center w-[40px]">JUM</div>
            <div className="text-white text-base text-center w-[40px]">SAB</div>
            <div className="text-white text-base text-center w-[40px]">MIN</div>
            <div className="text-white text-base text-center w-[40px]">SEN</div>
            <div className="text-white text-base text-center w-[40px]">SEL</div>
            <div className="text-white text-base text-center w-[40px]">RAB</div>
          </div>

          <div className="flex justify-between items-center gap-4 mt-4">
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px] bg-black">
              4
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              5
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              6
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              7
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              8
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              9
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              10
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              11
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              12
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2 text-center w-[40px]">
              13
            </div>

          </div>
        </div>
            <div className='bg-slate-200'></div>

        
      </div>

    </>
  );
}

export default Home

// login
import React from 'react'
import Image from 'next/image';
function login() {
  return (
    // Background
    <div className="bg-white w-screen h-screen fixed">
      <div className='container mx-auto'>
        {/* Judul */}
        <h2 className="text-3xl font-serif from-neutral-600 py-[110px] mx-[240px] mt-11">
          WELCOME STELKERS
        </h2>

        {/*  Garis  */}
        <div className="flex items-center px-[245px] my-[-30px]">
          <div className="w-32 h-0 border-t border-black "></div>
          <div className="mx-4 text-xs text-black">Login</div>
          <div className="w-32 h-0 border-t border-black"></div>
        </div>

        {/* Form */}
        <div className=" mx-[180px] my-[70px] space-y-4">
          <form>
            <input
              type="text"
              id="Username"
              className=" bg-white px-[20px] py-2 border-2 border-gray-500 text-black rounded-lg w-[440px]"
              placeholder="Username"
              required
            ></input>
          </form>

          <form>
            <input
              type="text"
              id="Password"
              className=" bg-white px-[20px] py-2 border-2 border-gray-500 text-black rounded-lg w-[440px]"
              placeholder="Password"
              required
            ></input>
          </form>

          {/* Login */}
          <div className="px-[4px] my-[-100px] py-[25px]">
            <button
              type="submit"
              className="w-[430px] py-3 text-white font-light rounded-full bg-[#950101]"
            >
              Log in
            </button>
          </div>
        </div>

        {/* Gambar */}
        <Image
          src="/assets/logo/sekolah.png"
          alt="Sekolah"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-[700px]"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default login
 