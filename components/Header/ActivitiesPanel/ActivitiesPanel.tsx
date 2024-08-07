"use client";

import React from "react";
import { GoChevronRight } from "react-icons/go";

const ActivitiesPanel = () => {
  return (
    <div className="h-10 bg-[#F0F6FF]">
      <div className="container mx-auto h-full">
        <div className="flex justify-end items-center h-full text-gray-500 text-sm gap-8">
          <div className="cursor-pointer hover:underline">
            Festival essentials
          </div>
          <div className="cursor-pointer hover:underline">
            Een soepele start
          </div>
          <div className="cursor-pointer hover:underline">Fashion sale</div>
          <div className="cursor-pointer hover:underline">Acties in je app</div>
          <div className="cursor-pointer text-[#00f] text-xl font-bold flex items-center gap-2">
            Outlet
            <span>
              <GoChevronRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPanel;
