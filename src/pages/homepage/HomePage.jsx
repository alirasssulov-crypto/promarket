import HeroBanner from "../sections/HeroBanner";
import Advantages from "../sections/Advantages";
import TileCollections from "../sections/TileCollections";
import BestSellers from "../sections/BestSellers";
import Promotions from "../sections/Promotions";
import PopularBrands from "../sections/PopularBrands";
import ArticlesAndSeo from "../sections/ArticlesAndSeo";

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroBanner />
      <Advantages />
      <TileCollections />
      <BestSellers />
      <Promotions />
      <PopularBrands />
      <ArticlesAndSeo />
    </div>
  );
}