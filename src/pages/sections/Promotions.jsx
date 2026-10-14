import { useRef } from "react";


const products = [
  {
    image: "/src/shared/assets/promo-faucet.jpg",
    title: "Смеситель Hansgrohe Logis 71070000 для раковины",
    country: "Германия",
    price: "6 050 ₽",
    oldPrice: "7 601 ₽",
    rating: 4,
    reviews: 12,
    category: "Смесители",
  },
  {
    image: "/src/shared/assets/promo-shower.jpg",
    title: "Душевая кабина Black&White Galaxy G8800, 80 × 110 см",
    country: "Германия",
    price: "84 000 ₽",
    oldPrice: "90 580 ₽",
    rating: 5,
    reviews: 12,
    category: "Душевые системы",
  },
  {
    image: "/src/shared/assets/promo-bath.jpg",
    title: "Ванна акриловая Am.Pm Spirit W72A-160L00W-A2, 160 × 100 см",
    country: "Германия",
    price: "29 990 ₽",
    oldPrice: "36 900 ₽",
    rating: 4,
    reviews: 12,
    category: "Ванны",
  },
  {
    image: "/src/shared/assets/promo-toilet.jpg",
    title: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
    country: "Китай",
    price: "32 108 ₽",
    oldPrice: "34 900 ₽",
    rating: 4,
    reviews: 12,
    category: "Унитазы",
  },
  {
    image: "/src/shared/assets/promo-sink.jpg",
    title: "Раковина Laufen Palace 120 см",
    country: "Швейцария",
    price: "53 458 ₽",
    oldPrice: "58 601 ₽",
    rating: 5,
    reviews: 12,
    category: "Раковины",
  },
];

const categories = [
  "Любые товары",
  "Смесители",
  "Полотенцесушители",
  "Биде",
  "Душевые системы",
  "Ванны",
  "Унитазы",
  "Отопители",
  "Посудомоечные машины",
];

export default function Promotions() {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    railRef.current?.scrollBy({
      left: direction * 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#eaf4ff] px-4 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[.22em] text-cyan-700">
              Выгодные предложения
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Акции<span className="text-cyan-500">.</span>
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-cyan-500" />
          </div>
          <span className="hidden rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-500 sm:block">
            Подборка недели
          </span>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`shrink-0 rounded-lg px-4 py-2 text-xs font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                index === 0
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "border border-white bg-white/90 text-slate-600 hover:bg-slate-900 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Прокрутить товары влево"
            onClick={() => scrollRail(-1)}
            className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-xl shadow-lg transition hover:scale-110 hover:bg-cyan-500 hover:text-white md:flex"
          >
            ‹
          </button>

          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <article
                key={product.title}
                className="group w-[225px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50 sm:w-[235px]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-5">
                  <span className="absolute left-3 top-3 z-[1] rounded-md bg-rose-500 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Акция
                  </span>
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
                    <span className="text-4xl">＋</span>
                    <span className="text-center text-xs">Добавьте фото товара</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center gap-1 text-amber-400" aria-label={`Рейтинг ${product.rating} из 5`}>
                    {Array.from({ length: 5 }, (_, star) => (
                      <span key={star} className={star < product.rating ? "" : "text-slate-200"}>★</span>
                    ))}
                    <span className="ml-1 text-[10px] font-medium text-slate-400">▣ {product.reviews}</span>
                  </div>
                  <p className="mb-2 line-clamp-2 min-h-[38px] text-xs font-semibold leading-5 text-slate-800">
                    {product.title}
                  </p>
                  <p className="mb-3 text-[11px] text-slate-400">{product.country}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-lg font-extrabold tracking-tight text-slate-950">{product.price}</span>
                    <button
                      type="button"
                      onClick={() => window.alert(`Добавьте обработчик корзины для: ${product.title}`)}
                      className="rounded-md border border-cyan-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-700 transition hover:bg-cyan-500 hover:text-white"
                    >
                      В корзину
                    </button>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-rose-500 line-through">{product.oldPrice}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Прокрутить товары вправо"
            onClick={() => scrollRail(1)}
            className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-xl shadow-lg transition hover:scale-110 hover:bg-cyan-500 hover:text-white md:flex"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
