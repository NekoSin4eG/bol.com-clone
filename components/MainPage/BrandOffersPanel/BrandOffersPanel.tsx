import React from "react";
import Image from "next/image";

const BrandOffersPanel = () => {
  return (
    <section>
      <h2 className="text-[32px] font-extralight">
        <span className="font-extrabold">Meer van</span> onze merken
      </h2>
      <div className="flex gap-6 overflow-x-scroll no-scrollbar mt-[26px]">
        <article className="min-w-[368px] h-[184px] bg-[#44883E] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/1.webp"
            width={133}
            height={184}
          />
          <div className="text-white flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">Ontdek Green Beauty</div>
            <div className="text-base font-light">van Garnier</div>
          </div>
        </article>

        <article className="min-w-[368px] h-[184px] bg-[#021C47] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/2.webp"
            width={133}
            height={184}
          />
          <div className="text-white flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">LEGO® DREAMZzz™</div>
            <div className="text-base font-light">bouw de wildste dromen</div>
          </div>
        </article>

        <article className="min-w-[368px] h-[184px] bg-[#FFF605] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/3.webp"
            width={133}
            height={184}
          />
          <div className="text-black flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">Nutrition</div>
            <div className="text-base font-light">to fuel your progress</div>
          </div>
        </article>

        <article className="min-w-[368px] h-[184px] bg-[#C3D144] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/4.webp"
            width={133}
            height={184}
          />
          <div className="text-black flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">Trim, scheer en style</div>
            <div className="text-base font-light">haar van elke lengte</div>
          </div>
        </article>

        <article className="min-w-[368px] h-[184px] bg-[#F5F5F5] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/5.webp"
            width={133}
            height={184}
          />
          <div className="text-black flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">De allersterkste</div>
            <div className="text-base font-light">Galaxy Foldables ooit!</div>
          </div>
        </article>

        <article className="min-w-[368px] h-[184px] bg-[#CB3282] rounded-md flex cursor-pointer">
          <Image
            className="rounded-l-md h-[184px]"
            alt="brand"
            src="/images/brands/6.webp"
            width={133}
            height={184}
          />
          <div className="text-white flex flex-col pl-4 justify-center">
            <div className="text-lg font-bold">Verleg je horizon</div>
            <div className="text-base font-light">met gloednieuwe LEGO® sets</div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BrandOffersPanel;
