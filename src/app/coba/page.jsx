"use client";
import { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import useAuthMiddleware from "@/hooks/auth";
import Layout from "../component/layout/Layout";
import { useAuth } from "@/context/AuthContext";

const dataPengajuan = {
  "2024-11-04": [
    { nama: "Mutia Erisah", kelas: "XI RPL 4", izin: "Pengajuan Izin Pulang" },
    {
      nama: "Moses Dizarro Shyafril",
      kelas: "XI RPL 4",
      izin: "Pengajuan Izin Keluar",
    },
    { nama: "Munirah Janna", kelas: "XI RPL 4", izin: "Pengajuan Izin Pulang" },
  ],
  "2024-11-05": [
    {
      nama: "Muhammad Dzaki Hasyim",
      kelas: "XI RPL 4",
      izin: "Pengajuan Izin Sakit",
    },
  ],
};

const getDayOfWeek = (dateString) => {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString("id-ID", { weekday: "long" });
};

const getFormattedDate = (dateString) => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const isWeekend = (dateString) => {
  const date = new Date(`${dateString}T00:00:00Z`);
  const dayOfWeek = date.getUTCDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState("2024-11-04");
  const router = useRouter();
  const { user } = useAuth();

  useAuthMiddleware();

  return (
    <Layout>
      <div className="bg-white w-screen h-screen fixed">
        <div className="mt-8 mx-5">
          <div className="flex flex-col">
            <h2 className="mx-[110px] text-lg font-normal">DATA PENGAJUAN</h2>
            <div className="mx-[110px] text-lg font-semibold mt-[-50px]">
              {getDayOfWeek(selectedDate)}, {getFormattedDate(selectedDate)}
            </div>
          </div>

          <div className="bg-[#950101] w-[870px] h-[160px] mx-[100px] my-5 rounded-xl p-3">
            <div className="text-white text-base mx-[30px] py-[7px]">
              November 2024
            </div>
            <div className="flex justify-between items-center mt-3 mx-7">
              {[...Array(10).keys()].map((i) => {
                const date = new Date(Date.UTC(2024, 10, 4 + i));
                const dateString = date.toISOString().split("T")[0];
                return (
                  <button
                    key={dateString}
                    onClick={() => setSelectedDate(dateString)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg text-white text-3xl w-[40px] ${
                      selectedDate === dateString
                        ? "bg-black bg-opacity-50 rounded-3xl"
                        : ""
                    }`}
                  >
                    <div className="text-center text-sm">
                      {getDayOfWeek(dateString).slice(0, 3).toUpperCase()}
                    </div>
                    {date.getUTCDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {isWeekend(selectedDate) ? (
            <div className="flex justify-center absolute right-2/3 bottom-60">
              <Image
                src="/assets/logo/image.png"
                alt="Libur"
                width={300}
                height={200}
                className="rounded-xl"
              />
            </div>
          ) : (
            <div className="space-y-1 p-4 mx-24 my-5">
              {dataPengajuan[selectedDate] &&
              dataPengajuan[selectedDate].length > 0 ? (
                dataPengajuan[selectedDate].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#950101] text-white w-[439px] h-[44px] rounded-lg p-3"
                  >
                    <IoPersonOutline className="text-xl" />
                    <div className="flex-1 ml-5">
                      <p className="text-xs font-normal">
                        {item.nama} | {item.kelas}
                      </p>
                      <p className="text-xs">{item.izin}</p>
                    </div>
                    <GrFormNext className="text-xl" />
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Tidak ada pengajuan</p>
              )}
            </div>
          )}
        </div>

        <div className="bg-[#999999] bg-opacity-15 h-[627px] w-[327px] ml-auto rounded-3xl py-14 px-3 absolute top-3 right-2">
          <div className="space-y-7">
            <form className="relative">
              <CiSearch className="absolute left-14 top-1/3 text-white" />
              <input
                type="text"
                className="bg-[#999999] bg-opacity-55 w-[245px] h-[42px] rounded-full ml-10 text-white placeholder-white pl-12"
                placeholder="Pencarian"
                required
              />
            </form>
            <button
              onClick={() => router.push("/riwayat_baru")}
              className="bg-[#D9D9D9] w-[133px] h-[50px] rounded-lg border-2 border-black mx-[90px] my-16 flex items-center justify-center gap-2"
            >
              <span className="text-black">Riwayat</span>
              <IoMdNotificationsOutline className="text-2xl" />
            </button>
            <h1 className="text-black flex justify-center my-16">
              Detail November 2024
            </h1>
          </div>

          <div className="space-y-4 mx-11 mt-5">
            {[
              { jumlah: 18, label: "Sakit" },
              { jumlah: 36, label: "Pulang" },
              { jumlah: 29, label: "Keluar" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#999999] text-opacity-100 w-[235px] h-[74px] rounded-xl flex items-center px-2"
              >
                <div className="bg-white w-[42px] h-[52px] rounded-md flex justify-center py-3 font-medium">
                  {item.jumlah}
                </div>
                <h1 className="text-white font-normal mx-3">{item.label}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
