import { useEffect, useRef, useState } from "react";
import Logo from "../../shared/ui/Logo";
import CallModal from "../../shared/ui/CallModal";
import {
  MenuIcon, CloseIcon, SearchIcon, UserIcon, HeartIcon,
  CartIcon, ChevronIcon, PhoneIcon,
} from "../../shared/ui/icons";

const TOP_LINKS = ["Оплата", "Доставка", "Поставщикам", "Статьи", "Контакты"];
const CATEGORIES = [
  "Плитка",
  "Сантехника",
  "Мебель для ванной",
  "Электроника и бытовая техника",
  "Отопление",
  "Напольное покрытие",
];

/* Анимированное подчёркивание для ссылок */
const underline =
  "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100";

function IconButton({ children, label, badge }) {
  return (
    <button
      aria-label={label}
      className="group relative p-1.5 text-ink/80 transition duration-200 hover:-translate-y-0.5 hover:text-brand"
    >
      {children}
      {badge > 0 && (
        <span
          key={badge}
          className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 animate-pop items-center justify-center rounded-full bg-hit px-1 text-[9px] font-extrabold text-ink"
        >
          {badge}
        </span>
      )}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const catalogRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // закрываем каталог при клике вне
  useEffect(() => {
    const onClick = (e) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) setCatalogOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-sky transition-shadow duration-300 ${
          scrolled ? "shadow-[0_6px_24px_-8px_rgba(11,42,158,0.35)]" : ""
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-4">
          {/* ===== верхняя строка ===== */}
          <div
            className={`flex items-center justify-between overflow-hidden transition-all duration-300 ${
              scrolled ? "h-0 opacity-0 lg:h-0" : "h-16 opacity-100"
            }`}
          >
            <Logo />

            <button className="hidden items-center gap-1.5 text-[11px] text-ink/70 transition hover:text-brand md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-hit ring-2 ring-hit/40" />
              Москва
            </button>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="tel:+74950183210" className="text-sm font-bold transition hover:text-brand">
                8 495 018-32-10
              </a>
              <span className="h-1.5 w-1.5 rounded-full bg-hit" />
              <button
                onClick={() => setCallOpen(true)}
                className={`text-[11px] text-brand ${underline}`}
              >
                Заказать звонок
              </button>
            </div>

            <nav className="hidden items-center gap-5 text-[11px] text-brand md:flex">
              {TOP_LINKS.map((l) => (
                <a key={l} href="#" className={underline}>{l}</a>
              ))}
            </nav>

            {/* мобильная кнопка телефона */}
            <a
              href="tel:+74950183210"
              aria-label="Позвонить"
              className="rounded-full bg-brand p-2 text-white md:hidden"
            >
              <PhoneIcon width={18} height={18} />
            </a>
          </div>

          {/* ===== навигационная панель ===== */}
          <div className="flex h-12 items-stretch bg-white shadow-sm">
            {/* Каталог */}
            <div ref={catalogRef} className="relative hidden md:block">
              <button
                onClick={() => setCatalogOpen((v) => !v)}
                aria-expanded={catalogOpen}
                className="flex h-full items-center gap-3 bg-brand px-5 text-[11px] font-extrabold tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                <span className="relative block h-3 w-4">
                  <span className={`absolute left-0 h-0.5 w-4 bg-white transition-all duration-300 ${catalogOpen ? "top-[5px] rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 top-[5px] h-0.5 w-4 bg-white transition-opacity duration-200 ${catalogOpen ? "opacity-0" : ""}`} />
                  <span className={`absolute left-0 h-0.5 w-4 bg-white transition-all duration-300 ${catalogOpen ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
                </span>
                КАТАЛОГ ТОВАРОВ
              </button>

              {catalogOpen && (
                <ul className="absolute left-0 top-full z-10 w-72 animate-fade-down overflow-hidden rounded-b-lg bg-white py-2 shadow-xl">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <a
                        href="#"
                        className="group flex items-center justify-between px-5 py-2.5 text-[13px] font-medium transition-all hover:bg-sky hover:pl-7 hover:text-brand"
                      >
                        {c}
                        <ChevronIcon
                          width={14}
                          height={14}
                          className="-rotate-90 opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="#"
              className="hidden items-center bg-brand px-5 text-[11px] font-extrabold tracking-wider text-white transition-colors hover:bg-brand-dark md:flex"
            >
              АКЦИИ
            </a>
            <a
              href="#"
              className="hidden items-center bg-brand-light px-5 text-[11px] font-extrabold tracking-wider text-white transition-colors hover:bg-brand md:flex"
            >
              БРЕНДЫ
            </a>

            {/* бургер на мобилке */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Меню"
              className="flex items-center bg-brand px-4 text-white md:hidden"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Поиск */}
            <label className="group flex flex-1 items-center gap-2 px-4">
              <input
                type="search"
                placeholder="Что вы ищете?"
                className="w-full bg-transparent text-xs outline-none placeholder:text-ink/45"
              />
              <SearchIcon
                width={18}
                height={18}
                className="shrink-0 text-ink/60 transition group-focus-within:scale-110 group-focus-within:text-brand"
              />
            </label>

            <div className="flex items-center gap-1 pr-3 sm:gap-2 sm:pr-4">
              <IconButton label="Профиль"><UserIcon width={22} height={22} /></IconButton>
              <IconButton label="Избранное" badge={4}><HeartIcon width={22} height={22} /></IconButton>
              <IconButton label="Корзина" badge={2}><CartIcon width={22} height={22} /></IconButton>
            </div>
          </div>

          {/* ===== мобильное меню ===== */}
          {mobileOpen && (
            <div className="animate-fade-down rounded-b-lg bg-white px-5 py-4 shadow-lg md:hidden">
              <ul className="space-y-1 border-b border-ink/10 pb-3">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <a href="#" className="block py-2 text-sm font-semibold transition hover:pl-2 hover:text-brand">{c}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-xs text-brand">
                {["Акции", "Бренды", ...TOP_LINKS].map((l) => (
                  <a key={l} href="#">{l}</a>
                ))}
              </div>
              <button
                onClick={() => { setMobileOpen(false); setCallOpen(true); }}
                className="mt-4 w-full rounded bg-hit py-2.5 text-sm font-extrabold"
              >
                Заказать звонок
              </button>
            </div>
          )}
        </div>
      </header>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}