import React from 'react'
import Image from 'next/image'
function Detail() {
  return (
    <>
      <div className="bg-white w-screen h-screen fixed">
        <div className="my-[-40px]">
          <Image
            src="/assets/logo/logo2.png"
            alt="logo"
            className=""
            width={140}
            height={100}
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Detail