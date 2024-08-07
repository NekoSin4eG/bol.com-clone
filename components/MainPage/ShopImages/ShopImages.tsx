import React from "react";
import ShopImage from "./ShopImage";

const ShopImages = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-[32px] font-extralight">
          <span className="font-extrabold">Shop</span> de look
        </h2>
        <div className="text-[#3d40ff] hover:underline cursor-pointer text-sm">
          Ontdek alle looks
        </div>
      </div>
      <div className="mt-6 overflow-x-scroll flex gap-6 no-scrollbar">
        <ShopImage name="Dames" image="/images/shop_images/1.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/2.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/3.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/4.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/5.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/6.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/7.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/8.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/9.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/10.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/11.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/12.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/13.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/14.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/15.jpg" />
        <ShopImage name="Dames" image="/images/shop_images/16.jpg" />
      </div>
    </section>
  );
};

export default ShopImages;
