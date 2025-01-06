import React from 'react'
import Image from 'next/image';
function login() {
  return (
    // Background
    <div className="bg-white w-screen h-screen">
      {/* Judul */}
      <h2 className="text-3xl font-serif from-neutral-600 py-[110px] mx-[280px]">
        WELCOME STELKERS
      </h2>

      {/*  Garis  */}
      <div className="flex items-center px-[320px] my-[-50px]">
        <div className="w-20 border-t border-black "></div>
        <div className="mx-4 text-xs text-black">Login</div>
        <div className="w-20 border-t border-black"></div>
      </div>

      {/* Form */}
      <div className=" mx-[280px] my-[100px] space-y-4">
        <form>
          <input
            type="text"
            id="Username"
            className=" bg-white px-[70px] py-2 border-2 border-gray-500 text-black rounded-md"
            placeholder="Username"
            required
          ></input>
        </form>

        <form>
          <input
            type="text"
            id="Password"
            className=" bg-white px-[70px] py-2 border-2 border-gray-500 text-black rounded-md"
            placeholder="Password"
            required
          ></input>
        </form>
      </div>

      {/* Login */}
      <div className="px-[260px] my-[10px]">
        <button
          type="submit"
          className="w-[350px] py-3 text-white font-light rounded-full bg-red-700 relative top-[-50px]"
        >
          Log in
        </button>
      </div>

      {/* Gambar */}
      <Image
      src="/assets/logo/sekolah.png"
      alt="Sekolah"
      className='absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-[545px]'
      width={300}
      height={300}
      />
    </div>
  );
}

export default login