"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useRouter } from "next/navigation";
import Layout from "../component/layout/Layout";

export default function Pengajuan() {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const router = useRouter();

  const handleClick = () => {
    router.push("/pilihan");
  };

  const handlekirimClick = async () => {
    try {
      const data = {
        nis,
        nama,
        status: selectedStatus,
        kelas: selectedKelas,
        tanggal,
        keterangan,
      };

      const response = await fetch("http://localhost:8000/api/pengajuan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        console.error("Gagal kirim:", err);
        alert("Pengajuan gagal. Cek kembali data.");
      } else {
        const result = await response.json();
        console.log("Sukses:", result);
        alert("Pengajuan berhasil!");
        router.push("/proses");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="bg-white w-screen h-screen fixed">
      <Layout>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-bold text-3xl">Detail Pengajuan</h1>
            <div className="bg-[#999999] rounded-xl bg-opacity-60 w-[841px] h-[52px] flex justify-center items-center relative">
              <IoMdArrowBack
                onClick={handleClick}
                className="absolute left-9 text-xl"
              />
              <p className="font-bold">Pengajuan Surat Izin</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-7">
          <div className="flex flex-col gap-4">
            {/* NIS */}
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
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                placeholder="NIS"
                required
              />
            </div>

            {/* Nama */}
            <div className="relative">
              <FaRegSmile className="absolute top-1/2 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <input
                type="text"
                id="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                placeholder="Nama"
                required
              />
            </div>

            {/* Status & Kelas */}
            <div className="flex gap-2">
              <div className="relative w-[170px]">
                <select
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-full h-[45px] pl-4"
                >
                  <option value="">Pilih</option>
                  <option value="Pulang">Pulang</option>
                  <option value="Sakit">Sakit</option>
                  <option value="Keluar">Keluar</option>
                </select>
              </div>

              <div className="relative w-[220px]">
                <select
                  id="kelas"
                  value={selectedKelas}
                  onChange={(e) => setSelectedKelas(e.target.value)}
                  className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-full h-[45px] pl-4"
                >
                  <option value="">Kelas</option>
                  <option value="X TKJ 1">X TKJ 1</option>
                  <option value="X RPL 1">X RPL 1</option>
                  <option value="XI TKJ 1">XI TKJ 1</option>
                  <option value="XI RPL 1">XI RPL 1</option>
                  {/* Tambah sesuai kebutuhan */}
                </select>
              </div>
            </div>

            {/* Tanggal */}
            <div className="relative">
              <SlCalender className="absolute top-1/2 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-xl w-[400px] h-[49px] pl-14"
                required
              />
            </div>

            {/* Keterangan */}
            <div className="relative">
              <IoDocumentTextOutline className="absolute top-14 left-4 -translate-y-1/2 w-[25px] h-[23px] text-gray-600" />
              <textarea
                id="Keterangan"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                className="bg-white border-2 border-[#4E4E4E] text-black rounded-lg w-[400px] h-[126px] pl-14 pt-4"
                placeholder="Keterangan"
                required
              />
            </div>

            {/* Tombol Kirim */}
            <button
              onClick={handlekirimClick}
              className="bg-[#950101] w-[110px] h-[40px] text-white font-medium rounded-xl text-sm"
            >
              Kirim
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
