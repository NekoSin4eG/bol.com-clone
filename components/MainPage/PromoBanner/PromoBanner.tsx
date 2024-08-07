import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <div className="h-[324px] cursor-pointer">
      <div className="flex bg-[#D1E1FF]">
        <div className="flex flex-col justify-between pl-6 py-8">
          <div className="text-[#0000a3] text-[52px] font-black leading-[52px]">
            Retourdeals
            <br />
            <span className="text-[#0000a3] text-[52px] font-light">
              nieuw product + korting
            </span>
          </div>
          <div>
            <button className="bg-[#0000ff] hover:bg-[#3D40FF] text-white text-base rounded shadow-[#03031a] shadow--sm w-[100px] h-12">
              Bekijk nu
            </button>
          </div>
        </div>

        <div>
          <Image alt="promo" src="/images/1.webp" height={324} width={576} />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
