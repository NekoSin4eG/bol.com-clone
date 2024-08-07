import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import GoodsCard from "@/components/GoodsCard/GoodsCard";

const TopDeals = () => {
  return (
    <section>
      <h2 className="text-[32px] font-extralight">
        <span className="font-extrabold">Topdeals</span>
      </h2>
      <div className="mt-6 overflow-x-scroll flex gap-6 no-scrollbar">
        <GoodsCard
          name="L'Oréal Paris Brow Color wenkbrauwverf - getinte wenkbrauwen tot wel 5 weken* - resultaten na 5 min. - 3.0 Dark Brunette - 30 ml"
          image="/images/topdeals/1.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="This Much is True"
          image="/images/topdeals/2.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Travelin' Helsem - Wandelsandalen Dames - Outdoor slippers - Kleur Zwart - Maat 42"
          image="/images/topdeals/3.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="White Trainers"
          image="/images/topdeals/4.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Warm your body"
          image="/images/topdeals/5.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Gardlov"
          image="/images/topdeals/6.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Chatten met Napoleon"
          image="/images/topdeals/7.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="T-Shirt Jack & Jones"
          image="/images/topdeals/8.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Lenor"
          image="/images/topdeals/9.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Horses"
          image="/images/topdeals/10.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Sport en btw"
          image="/images/topdeals/11.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />

        <GoodsCard
          name="Flamingo"
          image="/images/topdeals/12.jpg"
          price={parseFloat((Math.random() * 100).toFixed(2))}
        />
      </div>
    </section>
  );
};

export default TopDeals;
