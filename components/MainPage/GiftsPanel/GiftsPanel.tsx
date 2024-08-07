import React from "react";
import Image from "next/image";

const GiftsPanel = () => {
  return (
    <section>
      <h2 className="text-[32px] font-extralight">
        <span className="font-extrabold">Cadeaus</span> voor iedereen
      </h2>
      <div className="mt-6 overflow-x-scroll flex gap-6">
        <article className="min-w-[270px] min-h-[208px]">
          <div className="h-[152px]">
            <Image
              className="rounded-xl h-[152px] aspect-[1.7/1] object-cover"
              alt="gift one"
              width={270}
              height={152}
              src="/images/gifts/1.webp"
            />
          </div>
          <div className="h-[56px] flex text-center justify-center items-center text-base text-gray-600 hover:underline cursor-pointer">
            Cadeauwinkel volwassenen
          </div>
        </article>

        <article className="min-w-[270px] min-h-[208px]">
          <div className="h-[152px]">
            <Image
              className="rounded-xl h-[152px] aspect-[1.7/1] object-cover"
              alt="gift one"
              width={270}
              height={152}
              src="/images/gifts/2.webp"
            />
          </div>
          <div className="h-[56px] flex text-center justify-center items-center text-base text-gray-600 hover:underline cursor-pointer">
            Kids cadeauwinkel
          </div>
        </article>

        <article className="min-w-[270px] min-h-[208px]">
          <div className="h-[152px]">
            <Image
              className="rounded-xl h-[152px] aspect-[1.7/1] object-cover"
              alt="gift one"
              width={270}
              height={152}
              src="/images/gifts/3.webp"
            />
          </div>
          <div className="h-[56px] flex text-center justify-center items-center text-base text-gray-600 hover:underline cursor-pointer">
            Verjaardag
          </div>
        </article>

        <article className="min-w-[270px] min-h-[208px]">
          <div className="h-[152px]">
            <Image
              className="rounded-xl h-[152px] aspect-[1.7/1] object-cover"
              alt="gift one"
              width={270}
              height={152}
              src="/images/gifts/4.webp"
            />
          </div>
          <div className="h-[56px] flex text-center justify-center items-center text-base text-gray-600 hover:underline cursor-pointer">
            Originele cadeaus
          </div>
        </article>
      </div>
    </section>
  );
};

export default GiftsPanel;
