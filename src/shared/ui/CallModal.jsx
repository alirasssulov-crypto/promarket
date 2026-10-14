import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "./icons";

export default function CallModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");
  const nameRef = useRef(null);

  // Esc + блокировка скролла + автофокус
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    nameRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // сбрасываем состояние после закрытия
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => { setSent(false); setPhone(""); }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: отправка на бэкенд
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-[400px] animate-modal rounded-xl bg-white p-7 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 rounded-full p-1.5 text-ink/50 transition hover:rotate-90 hover:bg-sky hover:text-brand"
        >
          <CloseIcon width={20} height={20} />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 animate-pop items-center justify-center rounded-full bg-accent text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold">Заявка отправлена</h2>
            <p className="mt-2 text-sm text-ink/60">Перезвоним на {phone} в рабочее время.</p>
            <button
              onClick={onClose}
              className="mt-6 rounded bg-brand px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-light"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 id="call-modal-title" className="text-xl font-extrabold">Заказать звонок</h2>
            <p className="mt-1 text-sm text-ink/60">Оставьте номер — мы перезвоним в течение 15 минут.</p>

            <label className="mt-5 block text-xs font-semibold text-ink/70">
              Ваше имя
              <input
                ref={nameRef}
                required
                type="text"
                placeholder="Как к вам обращаться"
                className="mt-1.5 w-full rounded-md border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </label>

            <label className="mt-4 block text-xs font-semibold text-ink/70">
              Телефон
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="mt-1.5 w-full rounded-md border border-ink/15 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </label>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-hit py-3 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Перезвоните мне
            </button>
            <p className="mt-3 text-center text-[11px] leading-snug text-ink/45">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </div>
  );
}