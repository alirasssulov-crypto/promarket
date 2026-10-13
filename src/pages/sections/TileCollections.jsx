import kerama1 from "../../shared/assets/kerama-1.png";
import kerama2 from "../../shared/assets/kerama-2.png";
import lb from "../../shared/assets/lb.png";
import gracia from "../../shared/assets/gracia.png";
import alma from "../../shared/assets/alma.png";

const ITEMS = [
  { name: "Сияние", brand: "Kerama Marazzi", img: kerama1, cls: "lg:col-span-5 lg:row-span-2 max-lg:col-span-2 max-lg:h-72" },
  { name: "Вестанд", brand: "LB-Ceramics", img: lb, cls: "lg:col-span-4 max-lg:h-44" },
  { name: "Rotterdam", brand: "Gracia Ceramica", img: gracia, cls: "lg:col-span-3 max-lg:h-44" },
  { name: "Rane", brand: "Alma Ceramica", img: alma, cls: "lg:col-span-3 max-lg:h-44" },
  { name: "Гинардо", brand: "Kerama Marazzi", img: kerama2, cls: "lg:col-span-4 max-lg:h-44" },
];

export default function TileCollections() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-6">
      <h2 className="mb-5 inline-block border-b-2 border-brand pb-0.5 text-lg font-extrabold">Коллекции плитки</h2>

      <div className="grid grid-cols-2 gap-3 lg:h-[420px] lg:grid-cols-12 lg:grid-rows-2">
        {ITEMS.map((it) => (
          <a key={it.name} href="#" className={`group relative block overflow-hidden ${it.cls}`}>
            <img
              src={it.img}
              alt={`${it.name} — ${it.brand}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute bottom-3 left-3 transition-transform duration-300 group-hover:-translate-y-1">
              <span className="inline-block bg-accent px-3 py-1.5 text-sm font-bold text-white">{it.name}</span>
              <p className="mt-1 text-[9px] text-white/90">{it.brand}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}