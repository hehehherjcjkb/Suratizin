"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import useAuthMiddleware from "@/hooks/auth";
import Layout from "../component/layout/Layout"
import { useAuth } from "@/context/AuthContext";

const getDayOfWeek = (dateString) => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const date = new Date(dateString);
  return days[date.getUTCDay()];
};

const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const CalendarComponent = () => {
  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(todayISO);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const start = new Date();
      start.setDate(start.getDate() - 4); // 4 hari sebelum hari ini
      let newDates = [];
      for (let i = 0; i < 9; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        newDates.push(date.toISOString().split("T")[0]);
      }
      setDates(newDates);
    };
    generateDates();
  }, []);
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {}, []);
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
            {new Date(selectedDate).toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex justify-between items-center mt-3 mx-7">
            {dates.map((date, index) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center gap-2 p-2 rounded-lg text-white text-3xl w-[40px] ${
                  selectedDate === date
                    ? "bg-black bg-opacity-50 rounded-3xl"
                    : ""
                }`}
              >
                <div className="text-center text-sm">
                  {getDayOfWeek(date).slice(0, 3).toUpperCase()}
                </div>
                {new Date(date).getUTCDate()}
              </button>
            ))}
          </div>
        </div>
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
  </Layout>
  );
};

export default CalendarComponent;