import { useEffect, useRef, useState } from "react";
import Logo from "../../shared/ui/Logo";
import CallModal from "../../shared/ui/CallModal";
import {
  SearchIcon, UserIcon, HeartIcon, CartIcon, MenuIcon, CloseIcon, ChevronIcon,
} from "../../shared/ui/icons";

const topLinks = ["Оплата", "Доставка", "Поставщикам", "Статьи", "Контакты"];
const categories = [
  "Плитка",
  "Сантехника",
  "Мебель для ванной",
  "Электроника и бытовая техника",
  "Отопление",
  "Напольное покрытие",
];

function Badge({ count }) {
  if (!count) return null;
  return (
    <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-neutral-900">
      {count}
    </span>
  );
}

export default function Header({ favorites = 4, cart = 2, onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [query, setQuery] = useState("");
  const catalogRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (catalogRef.current && !catalogRef.current.contains(e.target)) setCatalogOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    onSearch ? onSearch(q) : console.log("search:", q);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-300 px-4">
          {/* верхняя строка */}
          <div className="flex items-center justify-between gap-4 py-3">
            <Logo />

            <div className="hidden items-center gap-2 text-xs lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <button className="text-brand-dark transition hover:text-brand">Москва</button>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a href="tel:+74950183210" className="text-sm font-semibold transition hover:text-brand">
                8 495 018-32-10
              </a>
              <button
                onClick={() => setCallOpen(true)}
                className="text-xs text-brand underline-offset-4 transition hover:underline"
              >
                Заказать звонок
              </button>
            </div>

            <nav className="hidden items-center gap-5 text-[11px] text-brand-dark xl:flex">
              {topLinks.map((l) => (
                <a key={l} href="#" className="transition hover:text-brand-bright hover:underline">
                  {l}
                </a>
              ))}
            </nav>

            <button
              className="text-brand md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Меню"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* навигационная панель */}
          <div className="relative flex items-stretch bg-white">
            <div ref={catalogRef} className="relative">
              <button
                onClick={() => setCatalogOpen((v) => !v)}
                className="flex h-11 items-center gap-3 bg-brand-dark px-5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand"
              >
                <MenuIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Каталог товаров</span>
                <ChevronIcon
                  className={`h-4 w-4 transition-transform duration-300 ${catalogOpen ? "rotate-180" : ""}`}
                />
              </button>

              {catalogOpen && (
                <ul className="absolute left-0 top-full z-50 w-72 overflow-hidden rounded-b-xl bg-white py-2 shadow-xl animate-[pop-in_0.2s_ease-out]">
                  {categories.map((c) => (
                    <li key={c}>
                      <a
                      href="#"
                        onClick={() => setCatalogOpen(false)}
                        className="block px-5 py-2.5 text-sm transition hover:bg-brand/5 hover:pl-7 hover:text-brand"
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="#"
              className="hidden h-11 items-center bg-brand px-5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-dark sm:flex"
            >
              Акции
            </a>
            <a
              href="#"
              className="hidden h-11 items-center bg-brand-bright px-5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand sm:flex"
            >
              Бренды
            </a>

            <form onSubmit={handleSearch} className="flex flex-1 items-center bg-neutral-100 px-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Что вы ищете?"
                className="w-full bg-transparent text-xs outline-none placeholder:text-neutral-500"
              />
              <button type="submit" aria-label="Поиск" className="text-brand-dark transition hover:scale-110">
                <SearchIcon className="h-4 w-4" />
              </button>
            </form>

            <div className="flex items-center gap-5 bg-neutral-100 pr-4 text-brand-dark">
              <a href="#" aria-label="Профиль" className="transition hover:scale-110 hover:text-brand">
                <UserIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Избранное" className="relative transition hover:scale-110 hover:text-brand">
                <HeartIcon className="h-5 w-5" />
                <Badge count={favorites} />
              </a>
              <a href="#" aria-label="Корзина" className="relative transition hover:scale-110 hover:text-brand">
                <CartIcon className="h-5 w-5" />
                <Badge count={cart} />
              </a>
            </div>
          </div>
        </div>

        {/* мобильное меню */}
        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-white px-4 py-4 animate-[fade-in_0.2s_ease-out] md:hidden">
            <a href="tel:+74950183210" className="block text-sm font-semibold">8 495 018-32-10</a>
            <button
              onClick={() => { setCallOpen(true); setMobileOpen(false); }}
              className="mt-1 text-xs text-brand"
            >
              Заказать звонок
            </button>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-brand-dark">
              {[...topLinks, "Акции", "Бренды"].map((l) => (
                <li key={l}><a href="#" className="block py-1 hover:text-brand-bright">{l}</a></li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}