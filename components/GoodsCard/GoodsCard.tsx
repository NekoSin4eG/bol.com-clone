import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

interface GoodsCardProps {
  name: string;
  image: string;
  price: number;
}

const GoodsCard = (props: GoodsCardProps) => {
  const { name, image, price } = props;

  return (
    <article className="min-w-[172px] max-w-[172px] h-[321px] flex flex-col justify-start relative">
      <div>
        <Image
          className="w-[172px] h-[172px] bg-[#F7F7F7] p-3 object-scale-down"
          alt={name}
          src={image}
          width={172}
          height={172}
        />
      </div>
      <div className="absolute top-[8px] right-[8px] size-10 bg-white hover:border-[#0102FF] hover:border-2 cursor-pointer rounded-full flex justify-center items-center">
        <AiOutlineHeart className="size-6" />
      </div>
      <p className="text-sm text-[#0a0a0a] font-semibold line-clamp-2 hover:underline cursor-pointer mt-[30px]">
        {name}
      </p>
      <div className="relative inline-block mt-2 bg-[#EA0500] text-white rounded-[4px] text-base font-extrabold px-[6px] w-fit after:absolute after:inset-0 after:bg-[#EA0500] after:transform after:skew-x-[-15deg] after:translate-x-[4%] after:rounded-[4px]">
        <span className="relative z-10">{price}</span>
      </div>
      <div className="text-[#eb0400] text-[12px] font-bold leading-[18px] mt-1">
        in prijs verlaagd
      </div>
      <div className="text-[#696977] text-[12px] leading-[14px] mt-4">
        Adviesprijs <span className="line-through">{price + 10}</span>
      </div>
    </article>
  );
};

export default GoodsCard;
