import PromoBanner from "@/components/MainPage/PromoBanner/PromoBanner";
import PromoOffers from "@/components/MainPage/PromoOffers/PromoOffers";

export default function Home() {
  return (
    <main className="container mx-auto mt-6">
      <PromoBanner />
      <div className="mt-8">
        <PromoOffers />
      </div>
    </main>
  );
}
