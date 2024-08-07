import React from "react";
import Image from "next/image";

interface CatergoryProps {
  name: string;
  image: string;
}

const Catergory = (props: CatergoryProps) => {
  const { name, image } = props;

  return (
    <article className="min-w-[123px] min-h-[180px]">
      <div className="h-[124px]">
        <Image
          className="rounded-xl"
          alt={name}
          width={124}
          height={124}
          src={image}
        />
      </div>
      <div className="h-[56px] flex text-center justify-center items-center text-base text-[#03031b] hover:underline cursor-pointer">
        {name}
      </div>
    </article>
  );
};

export default Catergory;
