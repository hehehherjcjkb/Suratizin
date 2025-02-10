"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useRouter } from "next/navigation";

export default function Page() {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);

  };
  const router = useRouter();
  const handleClick = () => {
    router.push("/proses");
  }

  return (
    <div className="bg-white w-screen h-screen fixed">
      <div className="flex items-center">
        <Image
          src="/assets/logo/logo2.png"
          alt="telkom"
          className="top-0 mx-[7px] mt-[-30px]"
          width={120}
          height={100}
        />
      </div>

      <div className="my-[-35px] border-t-2 border-black w-screen"></div>

      <div className="flex flex-col items-center mt-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-3xl">Detail Pengajuan</h1>
          <div className="bg-[#999999] rounded-xl bg-opacity-60 w-[841px] h-[52px] flex justify-center items-center relative">
            <IoMdArrowBack onClick={handleClick} className="absolute left-9 text-xl" />
            <p className="font-bold">Pengajuan Surat Izin</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-7">
        <div className="flex flex-col gap-4">
          {/* NIS */}
          <form className="relative">
            <div className="relative">
              <Image
                src="/assets/logo/nis.png"
                alt="nis"
                className="absolute top-1/2 left-4 -translate-y-1/2"
                width={27}
                height={26}
              />
              <input
                type="number"
                id="NIS"
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                placeholder="NIS"
                required
              />
            </div>
          </form>

          {/* Nama */}
          <form className="relative">
            <div className="relative">
              <FaRegSmile className="absolute top-1/2 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <input
                type="text"
                id="Nama"
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                placeholder="Nama"
                required
              />
            </div>
          </form>

          {/* Status & Kelas dalam satu baris */}
          <div className="flex gap-2 ">
            {/* Dropdown Status */}
            <div className="relative w-[170px]">
              <select
                id="status"
                value={selectedStatus}
                onChange={handleChange}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-full h-[45px] pl-4"
              >
                <option value="">Pilih</option>
                <option value="Pulang">Pulang</option>
                <option value="Sakit">Sakit</option>
                <option value="Keluar">Keluar</option>
              </select>
            </div>

            {/* Input Kelas */}
            <div className="relative w-[170px]">
              <select
                id="kelas"
                value={selectedStatus}
                onChange={handleChange}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[220px] h-[45px] pl-4"
              >
                <option value="">Kelas</option>

                {/* KELAS 10 */}
                <option value="X TKJ 1">X TKJ 1</option>
                <option value="X TKJ 2">X TKJ 2</option>
                <option value="X TKJ 3">X TKJ 3</option>
                <option value="X TKJ 4">X TKJ 4</option>
                <option value="X RPL 1">X RPL 1</option>
                <option value="X RPL 2">X RPL 2</option>
                <option value="X RPL 3">X RPL 3</option>
                <option value="X RPL 4">X RPL 4</option>
                <option value="X TEL 1">X TEL 1</option>
                <option value="X TEL 2">X TEL 2</option>
                <option value="X DBP 1">X DBP 1</option>
                <option value="X DBP 2">X DBP 2</option>

                {/* kelas 11 */}
                <option value="XI TKJ 1">XI TKJ 1</option>
                <option value="XI TKJ 2">XI TKJ 2</option>
                <option value="XI TKJ 3">XI TKJ 3</option>
                <option value="XI TKJ 4">XI TKJ 4</option>
                <option value="XI TKJ 5">XI TKJ 5</option>
                <option value="XI RPL 1">XI RPL 1</option>
                <option value="XI RPL 2">XI RPL 2</option>
                <option value="XI RPL 3">XI RPL 3</option>
                <option value="XI RPL 4">XI RPL 4</option>
                <option value="XI TEL 1">XI TEL 1</option>
                <option value="XI TEL 2">XI TEL 2</option>
                <option value="XI DBP 1">XI DBP 1</option>
              </select>
            </div>
          </div>

          <form className="relative">
            <div className="relative">
              <SlCalender className="absolute top-1/2 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <input
                type="date"
                id="Nama"
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                placeholder="Time and date"
                required
              />
            </div>
          </form>

          {/* Keterangan */}
          <form className="relative">
            <div className="relative">
              <IoDocumentTextOutline className="absolute top-8 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <input
                type="text"
                id="Keterangan"
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-lg w-[400px] h-[126px] pl-14"
                placeholder="Keterangan"
                required
              />
            </div>
          </form>

          {/* Tombol Kirim */}
          <button
          onClick={handleClick}
          className="bg-[#950101] w-[110px] h-[40px] text-white font-medium rounded-xl text-sm">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
