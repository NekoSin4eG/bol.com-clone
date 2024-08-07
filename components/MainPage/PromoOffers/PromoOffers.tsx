import React from "react";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

const PromoOffers = () => {
  return (
    <div className="flex justify-between h-[245px]">
      <div className="div">
        <div className="h-[83px] bg-[#FFE0C7] px-6 pt-6">
          <span className="text-[#0000a4] text-lg font-extrabold">
            Keukengadgets voor een
          </span>
          <br />
          <span className="text-[#0000a4] text-base font-light">
            goede prijs
          </span>
        </div>
        <Image
          className="object-cover h-[147px]"
          width={270}
          height={147}
          alt="card 1"
          src="/images/2.png"
        />
        <button className="bg-[#0000ff] text-white size-8 flex justify-center items-center relative left-6 bottom-14">
          <IoChevronForward />
        </button>
      </div>
      <div className="div">
        <div className="h-[83px] bg-[#FFDEE2] px-6 pt-6">
          <span className="text-[#0000a4] text-lg font-extrabold">
            Tot 50% korting
          </span>
          <br />
          <span className="text-[#0000a4] text-base font-light">
            op make-up & nagellak
          </span>
        </div>
        <Image
          className="object-cover h-[147px]"
          width={270}
          height={147}
          alt="card 2"
          src="/images/3.png"
        />
        <button className="bg-[#0000ff] text-white size-8 flex justify-center items-center relative left-6 bottom-14">
          <IoChevronForward />
        </button>
      </div>
      <div className="div">
        <div className="h-[83px] bg-[#9EBDF4] px-6 pt-6">
          <span className="text-[#0000a4] text-lg font-extrabold">
            Snelle SSD&apos;s
          </span>
          <br />
          <span className="text-[#0000a4] text-base font-light">
            van Samsung
          </span>
        </div>
        <Image
          className="object-cover h-[147px]"
          width={270}
          height={147}
          alt="card 3"
          src="/images/4.png"
        />
        <button className="bg-[#0000ff] text-white size-8 flex justify-center items-center relative left-6 bottom-14">
          <IoChevronForward />
        </button>
      </div>
      <div className="div">
        <div className="h-[83px] bg-[#FFDEE2] px-6 pt-6">
          <span className="text-[#0000a4] text-lg font-extrabold">
            Tot 60% korting
          </span>
          <br />
          <span className="text-[#0000a4] text-base font-light">
            op een schoon toilet
          </span>
        </div>
        <Image
          className="object-cover h-[147px]"
          width={270}
          height={147}
          alt="card 4"
          src="/images/5.png"
        />
        <button className="bg-[#0000ff] text-white size-8 flex justify-center items-center relative left-6 bottom-14">
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

export default PromoOffers;
