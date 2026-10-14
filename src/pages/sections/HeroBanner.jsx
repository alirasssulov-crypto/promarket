import { useEffect, useState } from "react";
import { ChevronIcon } from "../../shared/ui/icons";

const SLIDES = [
  { id: 1, title: ["СМЕСИТЕЛИ", "RAIBER"], sub: "уже в наличии", bg: "bg-brand" },
  { id: 2, title: ["ПЛИТКА", "KERAMA MARAZZI"], sub: "новые коллекции", bg: "bg-gradient-to-br from-brand to-brand-light" },
  { id: 3, title: ["ВАННЫ", "AM.PM"], sub: "скидки до 20%", bg: "bg-gradient-to-br from-brand-dark to-accent" },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d) => setActive((i) => (i + d + SLIDES.length) % SLIDES.length);

  return (
    <section className="bg-sky pb-6">
      <div className="mx-auto grid max-w-[1240px] gap-3 px-4 lg:grid-cols-[2.1fr_1fr]">
        {/* карусель */}
        <div
          className="group relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[340px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              aria-hidden={i !== active}
              className={`absolute inset-0 flex items-center justify-center text-white transition-all duration-700 ${s.bg} ${
                i === active ? "translate-x-0 opacity-100" : i < active ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0"
              }`}
            >
              {i === active && (
                <div key={s.id} className="animate-fade-down text-left">
                  <h2 className="text-2xl font-extrabold leading-tight tracking-[0.12em] sm:text-3xl">
                    {s.title[0]}
                    <br />
                    {s.title[1]}
                  </h2>
                  <p className="mt-3 text-sm font-bold">{s.sub}</p>
                  <a
                    href="#"
                    className="mt-5 inline-block bg-hit px-5 py-2 text-[10px] font-extrabold tracking-wider text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    ПОДРОБНЕЕ
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* стрелки */}
          <button
            onClick={() => go(-1)}
            aria-label="Назад"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/70 opacity-0 transition hover:bg-white/15 hover:text-white group-hover:opacity-100"
          >
            <ChevronIcon className="rotate-90" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Вперёд"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/70 opacity-0 transition hover:bg-white/15 hover:text-white group-hover:opacity-100"
          >
            <ChevronIcon className="-rotate-90" />
          </button>

          {/* точки */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`h-1.5 rounded-full bg-white transition-all duration-300 ${
                  i === active ? "w-6 opacity-100" : "w-1.5 opacity-50 hover:opacity-80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* правые плитки */}
        <div className="grid h-[340px] grid-rows-2 gap-3 max-lg:hidden">
          <a href="#" className="group relative flex items-center justify-center overflow-hidden bg-brand-light text-center text-white">
            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-extrabold leading-snug tracking-[0.1em]">
                УНИТАЗЫ<br />ДО 10 000 ₽
              </h3>
              <span className="mt-2 inline-block text-[9px] tracking-wider opacity-70 transition-opacity group-hover:opacity-100">ПОДРОБНЕЕ</span>
            </div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-150" />
          </a>
          <a href="#" className="group relative flex items-center justify-center overflow-hidden bg-accent text-center text-white">
            <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-extrabold leading-snug tracking-[0.1em]">
                ТОВАРЫ<br />СО СКИДКОЙ
              </h3>
              <span className="mt-2 inline-block text-[9px] tracking-wider opacity-70 transition-opacity group-hover:opacity-100">ПОДРОБНЕЕ</span>
            </div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
          </a>
        </div>
      </div>
    </section>
  );
}