import { useRef, useState } from "react";
import ProductCard from "../../shared/ui/productCard";
import { ChevronIcon } from "../../shared/ui/icons";

import sink from "../../shared/assets/sink.png";
import bath from "../../shared/assets/bath.jpg";
import shower from "../../shared/assets/shower.jpg";
import toilet from "../../shared/assets/toilet.jpg";
import towel from "../../shared/assets/towel.jpg";

const TABS = [
  "Любые товары", "Раковины", "Ванны", "Унитазы", "Душевые системы",
  "Смесители", "Зеркала", "Душевые кабины", "Стиральные машины",
];

const PRODUCTS = [
  { id: 1, cat: "Раковины", name: "Раковина Roca Debba 32799400Y, 60x48 см", country: "Испания", price: 2601, img: sink, hit: true, rating: 5, reviews: 12 },
  { id: 2, cat: "Ванны", name: "Акриловая ванна AM.PM Bliss L 180x80 W53A-180-080W-ARB", country: "Германия", price: 26990, oldPrice: 28601, img: bath, hit: true, sale: true, rating: 5, reviews: 2 },
  { id: 3, cat: "Душевые системы", name: "Душевая система Raiber R0808, хром", country: "Германия", price: 12207, img: shower, hit: true, rating: 5, reviews: 24 },
  { id: 4, cat: "Унитазы", name: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт", country: "Испания", price: 14764, img: toilet, hit: true, rating: 5, reviews: 4 },
  { id: 5, cat: "Полотенцесушители", name: "Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт", country: "Россия, Украина", price: 12730, img: towel, hit: true, rating: 5, reviews: 10 },
];

export default function BestSellers() {
  const [tab, setTab] = useState(TABS[0]);
  const scroller = useRef(null);

  const list = tab === TABS[0] ? PRODUCTS : PRODUCTS.filter((p) => p.cat === tab);
  const scrollBy = (d) => scroller.current?.scrollBy({ left: d * 480, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8">
      <h2 className="mb-5 text-xl font-extrabold">Хиты продаж</h2>

      {/* вкладки */}
      <div className="mb-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative flex w-max min-w-full border border-brand/40 text-[10px]">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`whitespace-nowrap px-4 py-2.5 font-semibold transition-all duration-300 ${
                tab === t ? "bg-brand text-white" : "text-brand hover:bg-sky"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* карусель товаров */}
      <div className="group/slider relative bg-sky/60 p-4">
        {list.length > 0 ? (
          <>
            <div
              key={tab}
              ref={scroller}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {list.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-fade-down"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>

            {list.length > 4 && (
              <>
                <button
                  onClick={() => scrollBy(-1)}
                  aria-label="Назад"
                  className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-brand shadow-md transition hover:scale-110 hover:bg-brand hover:text-white"
                >
                  <ChevronIcon className="rotate-90" width={18} height={18} />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  aria-label="Вперёд"
                  className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 text-brand shadow-md transition hover:scale-110 hover:bg-brand hover:text-white"
                >
                  <ChevronIcon className="-rotate-90" width={18} height={18} />
                </button>
              </>
            )}
          </>
        ) : (
          <p className="animate-fade-in py-16 text-center text-sm text-ink/50">
            В категории «{tab}» пока нет товаров
          </p>
        )}
      </div>
    </section>
  );
}