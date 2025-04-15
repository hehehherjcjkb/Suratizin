'use client'
import { useRouter } from 'next/navigation';

import React from 'react'
import Image from 'next/image'
function Header() {
  const router=useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Anda telah keluar.");
    window.history.replaceState(null, "", "/");
    router.push("/");
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Image
            src="/assets/logo/logo2.png"
            alt="telkom"
            className="top-0 mx-[7px] mt-[-30px]"
            width={120}
            height={100}
          />
        </div>
        <div
          onClick={handleLogout}
          className="w-16 h-9 flex items-center justify-center rounded-md text-black font-medium text-sm mt-2 mr-2"
        >
          logout
        </div>
      </div>
      <div className="absolute my-[-35px] border-t-2 border-black w-screen"></div>
    </>
  );
}

export default Header