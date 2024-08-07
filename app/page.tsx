import BrandOffersPanel from "@/components/MainPage/BrandOffersPanel/BrandOffersPanel";
import Categories from "@/components/MainPage/Categories/Categories";
import GiftsPanel from "@/components/MainPage/GiftsPanel/GiftsPanel";
import PromoBanner from "@/components/MainPage/PromoBanner/PromoBanner";
import PromoOffers from "@/components/MainPage/PromoOffers/PromoOffers";
import ShopImages from "@/components/MainPage/ShopImages/ShopImages";
import TopDeals from "@/components/MainPage/TopDeals/TopDeals";
import TopPicks from "@/components/MainPage/TopPicks/TopPicks";

export default function Home() {
  return (
    <main className="container mx-auto mt-6">
      <PromoBanner />
      <div className="mt-8">
        <PromoOffers />
      </div>
      <div className="mt-8">
        <TopDeals />
      </div>
      <div className="mt-20">
        <Categories />
      </div>
      <div className="mt-12">
        <TopPicks />
      </div>
      <div className="mt-12">
        <BrandOffersPanel />
      </div>
      <div className="mt-24">
        <GiftsPanel />
      </div>
      <div className="mt-12">
        <ShopImages />
      </div>
    </main>
  );
}
