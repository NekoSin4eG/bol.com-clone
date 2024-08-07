"use client";

import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const MenuPanel = () => {
  return (
    <div className="h-14">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-between">
          <div className="h-full flex gap-9 text-gray-500 text-sm">
            <div className="h-full flex items-center gap-1 pt-[4px] border-b-4 border-transparent hover:border-b-4 hover:border-blue-600">
              <div>Categorieën</div>
              <div>
                <FaChevronDown className="size-4" />
              </div>
            </div>
            <div className="h-full flex items-center gap-1 pt-[4px] border-b-4 border-transparent hover:border-b-4 hover:border-blue-600">
              <div>Cadeaus & Inspiratie</div>
              <div>
                <FaChevronDown className="size-4" />
              </div>
            </div>
            <div className="h-full flex items-center gap-1 pt-[4px] border-b-4 border-transparent hover:border-b-4 hover:border-blue-600">
              <div>Aanbiedingen</div>
              <div>
                <FaChevronDown className="size-4" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-gray-500 text-[12px]">
            <div className="cursor-pointer hover:underline">Zakelijk</div>
            <div className="cursor-pointer hover:underline">Cadeaukaart</div>
            <div className="cursor-pointer hover:underline">Bestelstatus</div>
            <div className="cursor-pointer hover:underline">Klantenservice</div>
            <div className="flex gap-1">
              <div className="w-6 h-[15px] flex flex-col justify-between">
                <div className="bg-[#AF1724] h-[5px]" />
                <div className="bg-white h-[5px]" />
                <div className="bg-[#1B448C] h-[5px]" />
              </div>
              <div className="flex items-center pr-2">
                <div>NL</div>
                <div>
                  <IoChevronDownOutline className="size-3 font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPanel;
