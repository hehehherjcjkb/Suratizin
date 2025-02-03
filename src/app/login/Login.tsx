"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const handleClick = () => {
    console.log('login');
    router.push("/dashboard")
  };
  return (
    <div className="w-full h-screen bg-white md:flex md:flex-row-reverse overflow-hidden relative">
      {/* Bagian Kanan - Gambar sebagai Background di HP */}
      <div className="absolute inset-0 md:relative w-full h-full md:w-1/2">
        <Image
          src="/assets/logo/sekolah.png"
          alt="Sekolah"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden"></div>
      </div>

      {/* Bagian Kiri - Form Login */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 relative z-10 h-full md:h-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:bg-transparent md:shadow-none md:p-0">
          <h1 className="font-serif text-3xl md:text-4xl text-center">
            WELCOME STELKERS
          </h1>
          <div className="flex items-center gap-4 justify-center mt-20">
            <div className="border-t border-black w-24 md:w-32 h-0"></div>
            <div className="text-xs text-center">Login</div>
            <div className="border-t border-black w-24 md:w-32 h-0"></div>
          </div>

          <div className="flex flex-col gap-5 mt-6 w-full">
            <input
              type="text"
              id="Username"
              className="bg-white px-5 py-2 border-2 border-gray-500 text-black rounded-lg w-full"
              placeholder="Username"
              required
            />
            <input
              type="password"
              id="Password"
              className="bg-white px-5 py-2 border-2 border-gray-500 text-black rounded-lg w-full"
              placeholder="Password"
              required
            />
          </div>

          <div className="mt-8 w-full">
            <button
            onClick={handleClick}
             className="w-full py-2 text-white bg-[#950101] rounded-2xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
