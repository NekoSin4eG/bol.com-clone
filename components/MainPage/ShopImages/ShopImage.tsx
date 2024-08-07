import React from "react";
import Image from "next/image";

interface ShopImage {
  name: string;
  image: string;
}

const ShopImage = (props: ShopImage) => {
  const { name, image } = props;

  return (
    <article className="min-w-[172px] h-[228px]">
      <Image
        className="rounded-full w-[172px] h-[172px] object-cover"
        alt={name}
        src={image}
        width={172}
        height={172}
      />
      <div className="h-[56px] flex text-center justify-center items-center text-base text-gray-600 hover:underline cursor-pointer">
        {name}
      </div>
    </article>
  );
};

export default ShopImage;
