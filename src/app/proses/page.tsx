import React from 'react'
import Image from 'next/image'
import { IoMdArrowBack } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
function page() {
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

        <div className='flex justify-center'>

        <div className='flex flex-col justify-center items-start'>
          <div className="flex flex-col items-center mt-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-black font-bold text-3xl">Detail Pengajuan</h1>
              <div className="bg-[#999999] rounded-xl bg-opacity-60 w-[841px] h-[52px] flex justify-center items-center relative">
                <IoMdArrowBack className="absolute left-9" />
                <p className="font-bold">Proses Pengajuan</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center my-7 gap-3">
            <div className="border-black border-2 rounded-xl w-[728px] h-[45px] relative">
              <BsPerson className=" absolute top-1/2 -translate-y-1/2 left-4 text-xl"></BsPerson>
              <div className="absolute top-1/2 -translate-y-1/2 left-14 font-medium">
                <div className="text-[10px]">Mufidah Erisa | XI RPL 4</div>
                <div className="text-[10px]">Pengajuan Izin Pulang</div>
              <div className="absolute top-1/2 -translate-y-1/2 right-8 text-xs font-medium start-[580px]">
                Diproses
              </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </>
  );
}

export default page