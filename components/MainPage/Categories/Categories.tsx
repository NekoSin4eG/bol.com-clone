import React from "react";
import Image from "next/image";
import Catergory from "./Catergory";

const Categories = () => {
  return (
    <section>
      <h2 className="text-[32px] font-extralight">
        Kies een <span className="font-extrabold">categorie</span>
      </h2>
      <div className="mt-6 overflow-x-scroll flex gap-6 no-scrollbar">
        <Catergory name="Elektronica" image="/images/categories/1.png" />
        <Catergory name="Boeken" image="/images/categories/2.png" />
        <Catergory name="Speelgoed" image="/images/categories/3.png" />
        <Catergory name="Persoonlijke verzorging" image="/images/categories/4.png" />
        <Catergory name="Huishouden" image="/images/categories/5.png" />
        <Catergory name="Wonen" image="/images/categories/6.png" />
        <Catergory name="Damesmode" image="/images/categories/7.png" />
        <Catergory name="Klussen" image="/images/categories/8.png" />
        <Catergory name="Kantoor & School" image="/images/categories/9.png" />
        <Catergory name="Herenmode" image="/images/categories/10.png" />
        <Catergory name="Baby" image="/images/categories/11.png" />
        <Catergory name="Gezondheid" image="/images/categories/12.png" />
        <Catergory name="Koken & Tafelen" image="/images/categories/13.png" />
        <Catergory name="Dieren" image="/images/categories/14.png" />
        <Catergory name="Sport" image="/images/categories/15.png" />
        <Catergory name="Computer" image="/images/categories/16.png" />
        <Catergory name="Tuin" image="/images/categories/17.png" />
        <Catergory name="Beauty" image="/images/categories/18.png" />
        <Catergory name="Kamperen & Outdoor" image="/images/categories/19.png" />
        <Catergory name="Reisbagage & Reisaccessoires" image="/images/categories/20.png" />
        <Catergory name="Fietsen & Accessoires" image="/images/categories/21.png" />
        <Catergory name="Games" image="/images/categories/22.png" />
        <Catergory name="Auto & Motor" image="/images/categories/23.png" />
        <Catergory name="Kindermode" image="/images/categories/24.png" />
        <Catergory name="Erotiek" image="/images/categories/25.png" />
        <Catergory name="Eten & Drinken" image="/images/categories/26.png" />
        <Catergory name="Films & Series" image="/images/categories/27.png" />
        <Catergory name="Muziek" image="/images/categories/28.png" />
      </div>
    </section>
  );
};

export default Categories;
