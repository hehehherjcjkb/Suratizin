"use client";
import React from 'react'
import Image from 'next/image'
import { MdOutlineSick } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
function page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/pengajuan")
  };
  return (
    <>
      <div className="bg-white w-screen h-screen fixed">
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

        <div className="flex justify-center my-32 gap-4">
          <Image
            src="/assets/logo/surat.png"
            alt="surat"
            className="top-0 mx-[7px] mt-[-75px]"
            width={271}
            height={272}
          ></Image>
          <div className="flex flex-col">
            <div className="text-4xl font-bold">Selamat datang</div>
            <div className="text-4xl font-bold">di surat pengajuan izin</div>
            <div className="text-xl font-normal">SMK TELKOM MAKASSAR</div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[-70px]">

          <div className='gap-3 flex flex-col mb-24'>
            <h2 className="text-black text-base">Pengajuan</h2>

            <button onClick={handleClick} 
            className="border border-black w-[737px] h-[69px] rounded-lg flex items-center">
              <div className="flex justify-between items-center gap-[560px]">
                <div className="flex flex-row gap-5 pl-5">
                  <MdOutlineSick className="w-[27px] h-[28px] text-gray-700"></MdOutlineSick>
                  <h3>Surat sakit</h3>
                </div>
                <GrFormNext className="text-2xl"></GrFormNext>
              </div>
            </button>

            <div className="border border-black w-[737px] h-[69px] rounded-lg flex items-center">
              <div className="flex justify-between items-center gap-[550px]">
                <div className="flex flex-row gap-5 pl-5">
                  <IoIosLogOut className="w-[27px] h-[28px] text-gray-700"></IoIosLogOut>
                  <h3>Surat keluar</h3>
                </div>
                <GrFormNext className="text-2xl"></GrFormNext>
              </div>
            </div>

            <div className="border border-black w-[737px] h-[69px] rounded-lg flex items-center">
              <div className="flex justify-between items-center gap-[543px]">
                <div className="flex flex-row gap-5 pl-5">
                  <GoHome className="w-[27px] h-[28px] text-gray-700"></GoHome>
                  <h3>Surat pulang</h3>
                </div>
                <GrFormNext className="text-2xl"></GrFormNext>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default page