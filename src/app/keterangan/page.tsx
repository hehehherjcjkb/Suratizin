"use client";
import React from 'react'
import Image from 'next/image'
import { IoMdArrowBack } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
function page() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/riwayat_baru");
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

        <div className="flex flex-col items-center mt-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-bold text-3xl">Detail Pengajuan </h1>
            <div className="bg-[#999999] rounded-xl bg-opacity-60 w-[841px] h-[52px] flex justify-center items-center relative">
              <IoMdArrowBack onClick={handleClick} className="absolute left-9 text-xl"></IoMdArrowBack>
              <p className="font-bold">Keterangan Surat Izin</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-7">
          <div className="flex flex-col gap-4">
            <form className="relative">
              <div className="relative">
                <Image
                  src="/assets/logo/nis.png"
                  alt="nis"
                  className="absolute top-1/2 left-4 -translate-y-1/2"
                  width={27}
                  height={26}
                />
                <div className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14 flex items-center">
                  54423000
                </div>
              </div>
            </form>

            <form className="relative">
              <div className="relative">
                <FaRegSmile className="absolute top-1/2 left-4 -translate-y-1/2  w-[25px] h-[23px] text-gray-600 " />
                <div className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14 flex items-center">
                  Mufidah Erisa
                </div>
              </div>
            </form>

            <div className="flex gap-2">
              <form className="relative">
                <div className="relative">
                  <SlEnvolopeLetter className="absolute top-1/2 left-4 -translate-y-1/2  w-[25px] h-[23px] text-gray-600 " />
                  <div className="bg-wh ite border-2 border-[#4E4E4E] text-black rounded-xl w-[170px] h-[45px] pl-14 flex items-center">
                    Pulang
                  </div>
                </div>
              </form>

              <form className="relative">
                <div className="relative">
                  <FaGraduationCap className="absolute top-1/2 left-4 -translate-y-1/2  w-[25px] h-[23px] text-gray-600 " />
                  <div className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[220px] h-[45px] pl-14 flex items-center">
                    XI RPL 4
                  </div>
                </div>
              </form>
            </div>

            <form className="relative">
              <div className="relative">
                <SlCalender className="absolute top-1/2 left-4 -translate-y-1/2  w-[25px] h-[23px] text-gray-600 " />
                <div className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14 flex items-center">
                  Time and date
                </div>
              </div>
            </form>

            <form className="relative">
              <div className="relative">
                <IoDocumentTextOutline className="absolute top-8 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600 " />
                <div className="bg-white border-2 border-[#4E4E4E] text-black rounded-lg w-[400px] h-[126px] pl-14 flex items-center text-sm">
                  Izin pulang dikarenakan ingin keluar kota dan harus bersiap -
                  siap
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-row gap-11 justify-center text-sm my-7">
          <button onClick={handleClick} className="bg-[#950101] w-[103px] h-[35px] text-white font-medium rounded-l-xl rounded-r-xl">
            Ditolak
          </button>
          <button onClick={handleClick}
          className="bg-[#950101] w-[103px] h-[35px] text-white font-medium rounded-l-xl rounded-r-xl">
            Diterima
          </button>
          <button onClick={handleClick}
          className="bg-[#950101] w-[103px] h-[35px] text-white font-medium rounded-l-xl rounded-r-xl">
            Ditangguhkan
          </button>
        </div>
      </div>
    </>
  );
}

export default page;