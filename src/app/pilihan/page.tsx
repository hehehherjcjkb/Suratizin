"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
function page() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/pengajuan_baru");
    };

    const handleProsesClick = () => {
      router.push("/proses");
    };
  return (
    <>
      <div className="bg-white w-screen h-screen fixed">
        <div className='flex flex-row justify-center'>

        <div className="flex flex-col gap-4 absolute left-64 bottom-80">
          
            <button onClick={handleClick}
            className="border-[#4E4E4E] border-2 w-[440px] h-[65px] rounded-lg flex items-center justify-center">
              Pengajuan
            </button>
            
            <div  onClick={handleProsesClick}
            className="border-[#4E4E4E] border-2 w-[440px] h-[65px] rounded-lg flex items-center justify-center">
              Proses Pengajuan
          </div>
        </div>
        
        <div className=" absolute right-0">
          <Image
            src="/assets/logo/dashboardSiswa.png"
            alt="dashboardSiswa"
            className=" h-screen "
            width={600}
            height={300}
          ></Image>
        </div>

        </div>
      </div>
    </>
  );
}

export default page