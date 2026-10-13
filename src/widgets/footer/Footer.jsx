import { useState } from "react";
import Logo from "../../shared/ui/Logo";
import CallModal from "../../shared/ui/CallModal";
import { WhatsappIcon, InstagramIcon, TelegramIcon } from "../../shared/ui/icons";

const catalog = [
  "Плитка",
  "Сантехника",
  "Мебель для ванной",
  "Электроника и бытовая техника",
  "Отопление",
  "Напольное покрытие",
];
const info = ["Оплата", "Доставка", "Поставщикам", "Статьи", "Контакты"];
const socials = [
  { name: "WhatsApp", href: "https://wa.me/74950183210", Icon: WhatsappIcon },
  { name: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { name: "Telegram", href: "https://t.me", Icon: TelegramIcon },
];

const linkClass = "text-xs text-brand transition hover:translate-x-1 hover:text-brand-dark";

export default function Footer() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <footer className="mt-20 bg-white">
      <div className="mx-auto grid max-w-300 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between gap-8">
          <ul className="space-y-3">
            {catalog.map((c) => (
              <li key={c}><a href="#" className={`inline-block ${linkClass}`}>{c}</a></li>
            ))}
          </ul>
          <div>
            <Logo />
            <p className="mt-2 text-xs text-neutral-500">© 2020 ggpromarket.ru</p>
          </div>
        </div>

        <ul className="space-y-3">
          {info.map((l) => (
            <li key={l}><a href="#" className={`inline-block ${linkClass}`}>{l}</a></li>
          ))}
        </ul>

        <div className="space-y-4">
          <a href="tel:+74950183210" className="block text-base font-semibold transition hover:text-brand">
            8 495 018-32-10
          </a>
          <button
            onClick={() => setCallOpen(true)}
            className="rounded border border-brand px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white"
          >
            Заказать звонок
          </button>
          <div className="space-y-1 text-xs text-neutral-700">
            <p>Пн-Пт: 10:00 — 20:00</p>
            <p>Сб: 10:00 — 18:00</p>
            <p>Вс: выходной</p>
          </div>
          <div className="flex gap-4 pt-2">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="text-brand transition hover:-translate-y-1 hover:text-brand-bright"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-xs text-neutral-700">
          <p>Склад:</p>
          <p>Москва, ул. Салтыковская, 6 стр 11</p>
          <a href="mailto:zakaz@ggpromarket.ru" className="block text-brand hover:underline">
            zakaz@ggpromarket.ru
          </a>
          <a
            href="https://market.yandex.ru"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl border border-neutral-300 px-4 py-2 font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Оцените магазин
          </a>
        </div>
      </div>

      <div className="bg-brand/5">
        <div className="mx-auto max-w-300 space-y-4 px-4 py-8 text-[11px] leading-relaxed text-neutral-500">
          <p>
            Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного
            разрешения владельцев авторских прав запрещено. Сайт носит исключительно информационный
            характер, и ни при каких условиях не является публичной офертой, определяемой
            положениями статьи 437(2) Гражданского кодекса Российской Федерации. Наличие и цены
            уточняйте у наших операторов.
          </p>
          <p>
            Сайт использует технологию cookie.
            Используя сайт, Вы соглашаетесь с{" "}
            <a href="#" className="font-semibold text-brand hover:underline">правилами использования cookie</a>
            , а также даёте{" "}
            <a href="#" className="font-semibold text-brand hover:underline">согласие на обработку персональных данных</a>
          </p>
        </div>
      </div>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </footer>
  );
}