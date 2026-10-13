import HeroBanner from "../sections/HeroBanner";
import Advantages from "../sections/Advantages";
import TileCollections from "../sections/TileCollections";
import BestSellers from "../sections/BestSellers";

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroBanner />
      <Advantages />
      <TileCollections />
      <BestSellers />
    </div>
  );
}