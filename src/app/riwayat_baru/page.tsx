import React from 'react'
import Image from 'next/image'
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
function page() {
  return (
    <>
      <div className="bg-white  w-screen h-screen fixed">
        <div className="flex items-center">
          <Image
            src="/assets/logo/logo2.png"
            alt="telkom"
            className="top-0 mx-[7px] mt-[-30px]"
            width={120}
            height={100}
          ></Image>
        </div>

        <div className="my-[-35px] border-t-2 border-black w-screen"></div>

        <div className="flex flex-col justify-center items-center my-28 gap-3">
          <div className="text-3xl font-bold mr-[760px]">Riwayat</div>

          <div className="flex flex-row gap-4 mr-96">
            <button className="text-white text-xs bg-[#950101] bg-opacity-95 w-[111px] h-[34px] rounded-lg">
              Semua
            </button>
            <button className="text-white text-xs bg-[#950101] bg-opacity-95 w-[111px] h-[34px] rounded-lg">
              Diterima
            </button>
            <button className="text-white text-xs bg-[#950101] bg-opacity-95 w-[111px] h-[34px] rounded-lg">
              Ditolak
            </button>
            <button className="text-white text-xs bg-[#950101] bg-opacity-95 w-[111px] h-[34px] rounded-lg">
              Ditangguhkan
            </button>
          </div>

          <form className="my-3 relative w-[880px]">
            <input
              type="search"
              id="search"
              className="bg-[#999999] bg-opacity-60 w-full h-[53px] rounded-xl pl-4  placeholder-white"
              placeholder="Pencarian"
              required
            ></input>
            <IoIosSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2zl"></IoIosSearch>
          </form>

          <div className='flex flex-col gap-2 mr-36'>
            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Mufidah Erisa | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium">
                Diterima
              </div>
            </div>

            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Maesaa Diandra Shyafril | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium">
                Diterima
              </div>
            </div>

            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Munira Janna | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium">
                Diterima
              </div>
            </div>

            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Muhammad Dzaki Hasyim | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium">
                Ditolak
              </div>
            </div>

            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Nuraqilah | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium">
                Ditangguhkan
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page