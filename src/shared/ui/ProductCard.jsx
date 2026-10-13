import { useState } from "react";
import { HeartIcon } from "./icons";

const fmt = (n) => n.toLocaleString("ru-RU") + " ₽";

function Stars({ value = 5 }) {
  return (
    <span className="flex gap-px text-hit" aria-label={`Рейтинг ${value} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i < value ? "currentColor" : "#d5d9e3"}>
          <path d="M12 2l3 7 7.500.6-5.700 5 1.800 7.400L12 18l-6.600 4 1.800-7.400-5.700-5L9 9z" />
        </svg>
      ))}
    </span>
  );
}

export default function ProductCard({ product }) {
  const { name, country, price, oldPrice, img, hit, sale, rating, reviews } = product;
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  return (
    <article className="group relative flex h-full w-[220px] shrink-0 snap-start flex-col bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(11,42,158,0.35)]">
      {/* бейджи */}
      <div className="absolute left-3 top-3 z-10 flex gap-1">
        {hit && <span className="bg-hit px-1.5 py-0.5 text-[8px] font-extrabold">ХИТ</span>}
        {sale && <span className="bg-sale px-1.5 py-0.5 text-[8px] font-extrabold text-white">АКЦИЯ</span>}
      </div>

      {/* избранное */}
      <button
        onClick={() => setLiked((v) => !v)}
        aria-label="В избранное"
        aria-pressed={liked}
        className={`absolute right-3 top-3 z-10 transition-all duration-300 ${
          liked ? "scale-110 text-sale" : "text-ink/30 opacity-0 hover:text-sale group-hover:opacity-100"
        }`}
      >
        <HeartIcon width={18} height={18} fill={liked ? "currentColor" : "none"} />
      </button>

      {/* фото */}
      <div className="relative flex h-[170px] items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        <button className="absolute inset-x-6 top-1/2 -translate-y-1/2 translate-y-2 bg-brand-light/90 py-2 text-[9px] font-extrabold tracking-wider text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          БЫСТРЫЙ ПРОСМОТР
        </button>
      </div>

      {/* рейтинг */}
      <div className="mt-3 flex items-center gap-2 text-[9px] text-ink/50">
        <Stars value={rating} />
        <span>{reviews}</span>
      </div>

      <h3 className="mt-2 line-clamp-3 min-h-[48px] text-[11px] font-semibold leading-snug">{name}</h3>
      <p className="mt-2 text-[10px] text-ink/50">{country}</p>

      <div className="mt-auto flex items-end justify-between gap-2 pt-3">
        <div>
          <p className="text-base font-extrabold">{fmt(price)}</p>
          {oldPrice && <p className="text-[10px] text-sale line-through">{fmt(oldPrice)}</p>}
        </div>
        <button
          onClick={() => setInCart((v) => !v)}
          className={`rounded-sm border px-3 py-1.5 text-[9px] font-extrabold tracking-wider transition-all duration-300 active:scale-95 ${
            inCart
              ? "border-accent bg-accent text-white"
              : "border-brand/50 text-brand hover:bg-brand hover:text-white"
          }`}
        >
          {inCart ? "В КОРЗИНЕ ✓" : "В КОРЗИНУ"}
        </button>
      </div>
    </article>
  );
}