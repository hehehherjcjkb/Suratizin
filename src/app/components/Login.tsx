import React from 'react'
import Image from 'next/image';
function login() {
  return (
    // Background
    <div className="bg-white w-screen h-screen fixed">
      {/* Judul */}
      <h2 className="text-3xl font-serif from-neutral-600 py-[110px] mx-[240px] mt-11">
        WELCOME STELKERS
      </h2>

      {/*  Garis  */}
      <div className="flex items-center px-[245px] my-[-30px]">
        <div className="w-32 h-0 border-t border-black "></div>
        <div className="mx-4 text-xs text-black">Login</div>
        <div className="w-32 h-0 border-t border-black"></div>
      </div>

      {/* Form */}
      <div className=" mx-[180px] my-[70px] space-y-4">
        <form>
          <input
            type="text"
            id="Username"
            className=" bg-white px-[20px] py-2 border-2 border-gray-500 text-black rounded-lg w-[440px]"
            placeholder="Username"
            required
          ></input>
        </form>

        <form>
          <input
            type="text"
            id="Password"
            className=" bg-white px-[20px] py-2 border-2 border-gray-500 text-black rounded-lg w-[440px]"
            placeholder="Password"
            required
          ></input>
        </form>

      <div className="px-[4px] my-[-100px] py-[25px]">
        <button
          type="submit"
          className="w-[430px] py-3 text-white font-light rounded-full bg-red-700"
        >
          Log in
        </button>
      </div>
      </div>

      {/* Login */}

      {/* Gambar */}
      <Image
      src="/assets/logo/sekolah.png"
      alt="Sekolah"
      className='absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-[700px]'
      width={300}
      height={300}
      />
    </div>
  );
}

export default login