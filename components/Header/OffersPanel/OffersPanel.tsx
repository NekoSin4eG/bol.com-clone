"use client";

import React from "react";

const OffersPanel = () => {
  return (
    <div className="h-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-8 text-[#0000a3] text-[12px]">
          <div className="flex gap-6">
            <div className="cursor-pointer">
              <span className="font-bold">Gratis</span> verzending vanaf 20,-
            </div>
            <div className="cursor-pointer">
              Bezorging dezelfde dag, &apos;s avonds of in het weekend*
            </div>
            <div className="cursor-pointer">
              <span className="font-bold">Gratis</span> retourneren
            </div>
          </div>
          <div className="text-[#01ad3a] cursor-pointer">
            <span className="font-extrabold text-[13px]">Select</span> Ontdek nu
            de 4 voordelen
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPanel;
