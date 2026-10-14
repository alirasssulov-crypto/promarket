import { useState } from "react";
import Logo from "../../shared/ui/Logo";
import CallModal from "../../shared/ui/CallModal";
import { WhatsappIcon, InstagramIcon, TelegramIcon } from "../../shared/ui/icons";

const CATALOG = [
  "Плитка",
  "Сантехника",
  "Мебель для ванной",
  "Электроника и бытовая техника",
  "Отопление",
  "Напольное покрытие",
];
const INFO = ["Оплата", "Доставка", "Поставщикам", "Статьи", "Контакты"];

const SOCIALS = [
  { name: "WhatsApp", href: "#", Icon: WhatsappIcon, hover: "hover:bg-[#25d366]" },
  { name: "Instagram", href: "#", Icon: InstagramIcon, hover: "hover:bg-[#e1306c]" },
  { name: "Telegram", href: "#", Icon: TelegramIcon, hover: "hover:bg-[#229ed9]" },
];

const linkCls =
  "inline-block text-[12px] text-brand transition-all duration-200 hover:translate-x-1 hover:text-brand-light";

export default function Footer() {
  const [callOpen, setCallOpen] = useState(false);

  return (
    <footer className="mt-16 bg-sky">
      {/* цветная полоска сверху */}
      <div className="flex h-2">
        <div className="w-1/4 bg-brand" />
        <div className="flex-1 bg-accent" />
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pt-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
          {/* Каталог + логотип */}
          <div className="flex flex-col justify-between gap-8">
            <ul className="space-y-2.5">
              {CATALOG.map((c) => (
                <li key={c}><a href="#" className={linkCls}>{c}</a></li>
              ))}
            </ul>
            <div>
              <Logo />
              <p className="mt-1.5 text-[10px] text-ink/50">© 2020 ggpromarket.ru</p>
            </div>
          </div>

          {/* Информация */}
          <ul className="space-y-2.5">
            {INFO.map((c) => (
              <li key={c}><a href="#" className={linkCls}>{c}</a></li>
            ))}
          </ul>

          {/* Контакты */}
          <div>
            <a href="tel:+74950183210" className="text-base font-extrabold transition hover:text-brand">
              8 495 018-32-10
            </a>
            <button
              onClick={() => setCallOpen(true)}
              className="mt-3 block rounded border border-brand px-4 py-1.5 text-[10px] font-extrabold tracking-wider text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-lg"
            >
              ЗАКАЗАТЬ ЗВОНОК
            </button>
            <div className="mt-4 space-y-1 text-[11px] text-ink/70">
              <p>Пн-Пт: 10:00 — 20:00</p>
              <p>Сб: 10:00 — 18:00</p>
              <p>Вс: выходной</p>
            </div>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map(({ name, href, Icon, hover }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-md ${hover}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Склад */}
          <div className="text-[11px] text-ink/70">
            <p className="text-ink/50">Склад:</p>
            <p className="mt-1">Москва, ул. Салтыковская, 6 стр 11</p>
            <a
              href="mailto:zakaz@ggpromarket.ru"
              className="mt-1 inline-block text-brand underline-offset-2 hover:underline"
            >
              zakaz@ggpromarket.ru
            </a>

            <a
              href="#"
              className="group mt-8 inline-flex flex-col items-start"
              aria-label="Оценить магазин на Яндекс Маркете"
            >
              <span className="mb-1.5 text-[11px] font-bold">
                <span className="text-sale">Яндекс</span> Маркет
              </span>
              <span className="rounded-lg border border-ink/15 bg-white px-3 py-1.5 text-[11px] font-bold shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-hit group-hover:shadow-md">
                Оцените магазин
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* юридический блок */}
      <div className="mt-10 bg-sky-100/60">
        <div className="mx-auto max-w-[1240px] space-y-3 px-4 py-6 text-[10px] leading-relaxed text-ink/50">
          <p>
            Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения
            владельцев авторских прав запрещено. Сайт носит исключительно информационный характер, и ни при каких
            условиях не является публичной офертой, определяемой положениями статьи 437(2) Гражданского кодекса
            Российской Федерации. Наличие и цены уточняйте у наших операторов.
          </p>
          <p>
            Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с{" "}
            <a href="#" className="font-semibold text-brand hover:underline">правилами использования cookie</a>
            , а также даёте{" "}
            <a href="#" className="font-semibold text-brand hover:underline">согласие на обработку персональных данных</a>.
          </p>
        </div>
      </div>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </footer>
  );
}