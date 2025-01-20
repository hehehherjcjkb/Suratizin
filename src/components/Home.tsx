import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

function Home
() {
  return (
    <>
      <div className="bg-white w-screen h-screen fixed">
        <Image
          src="/assets/logo/logo2.png"
          alt="telkom"
          className=" top-0 mx-[7px] mt-[-40px]"
          width={140}
          height={100}
        ></Image>

        <div className="my-[-35px] border-t-2 border-black w-screen ">
          <div className="mx-[110px] my-[60px] text-lg font-normal">
            DATA PENGAJUAN
          </div>
        </div>

        <div className="bg-[#950101] w-[870px] h-[160px] mx-[100px] my-[-46px] rounded-xl">
          <div className="text-white text-base mx-[30px] py-[7px]">
            November 2024
          </div>

          <div className="flex justify-between items-center gap-4 mt-3">
            <div className="text-white text-base  w-[40px]">SEN</div>
            <div className="text-white text-base  w-[40px]">SEL</div>
            <div className="text-white text-base  w-[40px]">RAB</div>
            <div className="text-white text-base  w-[40px]">KAM</div>
            <div className="text-white text-base  w-[40px]">JUM</div>
            <div className="text-white text-base  w-[40px]">SAB</div>
            <div className="text-white text-base  w-[40px]">MIN</div>
            <div className="text-white text-base w-[40px]">SEN</div>
            <div className="text-white text-base  w-[40px]">SEL</div>
            <div className="text-white text-base  w-[40px]">RAB</div>
          </div>

          <div className="flex justify-between -space-x mt-4">
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px] bg-black">
              4
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              5
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              6
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              7
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              8
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              9
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              10
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              11
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              12
            </div>
            <div className="text-white text-2xl rounded-lg px-4 py-2  w-[40px]">
              13
            </div>
          </div>
        </div>

        <div className="space-y-2 mx-32">
          <div className="bg-[#950101] bg-opacity-100 w-[439px] h-[44px] mt-32 rounded-lg"></div>
          <div className="bg-[#950101] bg-opacity-100 w-[439px] h-[44px] mt-32 rounded-lg "></div>
          <div className="bg-[#950101] bg-opacity-100 w-[439px] h-[44px] mt-32 rounded-lg"></div>
        </div>

        <div className="bg-[#999999] bg-opacity-15 h-[627px] w-[327px] mx-[1210px] my-[-450px] rounded-3xl py-14 px-3 ">
          <div className='space-y-7'>
            <div>
              <form className="relative">
                <CiSearch className="absolute left-14 top-1/3 text-white"></CiSearch>
                <input
                  type="text"
                  id="Search"
                  className="bg-[#999999] bg-opacity-55 w-[245px] h-[42px] rounded-full ml-10 text-white placeholder-white pl-12"
                  placeholder="Pencarian"
                  required
                ></input>
              </form>
            </div>

            <div className="bg-[#D9D9D9] bg-opacity-100 w-[133px] h-[50px] rounded-lg border-2 border-black mx-[90px] my-16">
              <div className="text-black font-sans mx-10 my-2">Riwayat</div>
              <IoMdNotificationsOutline className="ml-3 text-2xl mt-[-30px]"></IoMdNotificationsOutline>
            </div>

            <h1 className="text-black flex justify-center my-16">
              Detail Novermber 2024
            </h1>
          </div>

          <div className="space-y-4 mx-11 mt-5">
            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-xl flex items-center px-2">
              <div className="bg-white w-[42px] h-[52px] rounded-md ">
                <div className="text-black flex justify-center py-3 font-medium">
                  18
                </div>
              </div>
              <h1 className="text-white font-normal mx-3">Sakit</h1>
            </div>

            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-xl flex items-center px-2">
              <div className="bg-white w-[42px] h-[52px] rounded-md ">
                <div className="text-black flex justify-center py-3 font-medium">
                  36
                </div>
              </div>
              <h1 className="text-white font-normal mx-3">Pulang</h1>
            </div>

            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-xl flex items-center px-2">
              <div className="bg-white w-[42px] h-[52px] rounded-md ">
                <div className="text-black flex justify-center py-3 font-medium">
                  29
                </div>
              </div>
              <h1 className="text-white font-normal mx-3">Keluar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home


 