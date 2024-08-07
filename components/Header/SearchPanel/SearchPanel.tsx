"use client";

import React from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const SearchPanel = () => {
  return (
    <div className="bg-[#0101A3] h-[72px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[72px] text-white">
          <div className="text-5xl font-extrabold">logo</div>
          <div>
            <input
              placeholder="Waar ben je naar op zoek?"
              className="rounded-2xl h-[48px] w-[625px] text-black placeholder:text-sm placeholder:text-neutral-400 pl-5 text-sm"
            ></input>
            <button className="text-black relative right-10 top-2">
              <AiOutlineSearch className="size-7 fill-[#0000a3]" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-normal cursor-pointer hover:underline">
              Inloggen
            </div>
            <div className="size-12 rounded-full hover:border-2 hover:border-white flex items-center justify-center">
              <AiOutlineHeart className="size-7" />
            </div>
            <div className="size-12 rounded-full hover:border-2 hover:border-white flex items-center justify-center">
              <AiOutlineShoppingCart className="size-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
