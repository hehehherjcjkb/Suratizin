import React from 'react'
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";

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

        <div className="bg-[#950101] w-[870px] h-[160px] mx-[100px] my-[-46px] rounded-lg">
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

          <div className="flex justify-between items-center gap-4 mt-4">
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

        <div className="bg-[#999999] bg-opacity-15 h-[600px] w-[327px] mx-[1210px] my-[-200px] rounded-3xl ">

          <div className="bg-[#999999] bg-opacity-55 w-[245px] h-[42px] rounded-full ml-10"></div>
          <div className='space-y-4 mx-12 my-48'>
            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-2xl">
              <div className='bg-white w-[42px] h-[52px] rounded-lg'></div>
            </div>
            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-2xl"></div>
            <div className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-2xl"></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home


 