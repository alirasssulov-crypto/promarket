const ic = {
  width: 40, height: 40, viewBox: "0 0 40 40", fill: "none",
  stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round",
};

const ITEMS = [
  {
    text: "Быстрая доставка по Москве и в любой регион России",
    icon: <svg {...ic}><path d="M3 12h19v15H3zM22 17h7l5 5v5H22" /><circle cx="10" cy="29" r="3" /><circle cx="27" cy="29" r="3" /></svg>,
  },
  {
    text: "Все товары имеют официальную гарантию производителя",
    icon: <svg {...ic}><path d="M20 4l13 5v9c0 8-5.500 14-13 17C12.500 32 7 26 7 18V9z" /><path d="M14 20l4 4 8-9" /></svg>,
  },
  {
    text: "Более 100 000 товаров",
    icon: <svg {...ic}><path d="M5 34V10h14v24M19 34V18h10v16M3 34h34" /><path d="M9 16h6M9 22h6M9 28h6" /></svg>,
  },
  {
    text: "Любой способ оплаты",
    icon: <svg {...ic}><circle cx="20" cy="20" r="15" /><path d="M16 28V12h6a4.500 4.500 0 0 1 0 9h-6M14 24h8" /></svg>,
  },
  {
    text: "Высокие оценки клиентов",
    icon: <svg {...ic}><path d="M5 18h7v16H5zM12 18l6-12c3 0 4 2 4 4l-1 6h10a3 3 0 0 1 3 3.500l-2 12a3 3 0 0 1-3 2.500H12" /></svg>,
  },
];

export default function Advantages() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-8">
      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {ITEMS.map((it) => (
          <li key={it.text} className="group flex items-center gap-3">
            <span className="shrink-0 text-brand/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-brand">
              {it.icon}
            </span>
            <span className="text-[10px] leading-snug text-ink/70">{it.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}