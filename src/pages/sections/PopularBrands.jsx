import geberit from "../../shared/assets/brand-geberit.png";
import grohe from "../../shared/assets/brand-grohe.png";
import stworki from "../../shared/assets/brand-stworki.png";
import ampm from "../../shared/assets/brand-ampm.png";
import jacobDelafon from "../../shared/assets/brand-jacob-delafon.png";
import cersanit from "../../shared/assets/brand-cersanit.png";
import roca from "../../shared/assets/brand-roca.png";
import vitra from "../../shared/assets/brand-vitra.png";
import villeroyBoch from "../../shared/assets/brand-villeroy-boch.png";

const brands = [
  { name: "hansgrohe", image: grohe },
  { name: "GROHE", image: grohe },
  { name: "STWORKI", image: stworki },
  { name: "AM.PM", image: ampm },
  { name: "Jacob Delafon", image: jacobDelafon },
  { name: "cersanit", image: cersanit },
  { name: "GEBERIT", image: geberit },
  { name: "Roca", image: roca },
  { name: "VitrA", image: vitra },
  { name: "Villeroy & Boch", image: villeroyBoch },
  { name: "Ideal Standard", image: villeroyBoch },
  { name: "AQUANIKA", image: vitra },
  { name: "BENETTO", image: geberit },
  { name: "COLOMBO", image: ampm },
  { name: "dyson", image: vitra },
  { name: "gorenje", image: cersanit },
  { name: "JADO", image: grohe },
  { name: "LVI", image: grohe },
];


export default function PopularBrands() {
  return (
    <section className="relative overflow-hidden bg-[#f2f8ff] px-4 py-14 sm:px-7 lg:px-10">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[.22em] text-cyan-700">
              Нам доверяют
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Популярные бренды<span className="text-cyan-500">.</span>
            </h2>
            <div className="mt-2 h-1 w-14 rounded-full bg-cyan-500" />
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">
            Проверенные производители для стильного и надёжного дома.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <a
              key={brand.name}
              href="#brands"
              onClick={(event) => event.preventDefault()}
              aria-label={`Бренд ${brand.name}`}
              className="group flex h-24 items-center justify-center rounded-xl border border-white/80 bg-white px-5 py-4 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/10"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                className="max-h-12 max-w-full object-contain grayscale-[25%] transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "block";
                }}
              />
              <span className="hidden text-center text-sm font-extrabold tracking-wide text-slate-600">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
