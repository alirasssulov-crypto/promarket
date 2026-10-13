import { useEffect, useState } from "react";
import { CloseIcon } from "./icons";

export default function CallModal({ open, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleClose = () => {
    setSent(false);
    setError("");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Введите корректный номер телефона");
      return;
    }
    setError("");
    setSent(true);
    setName("");
    setPhone("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-[pop-in_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 text-neutral-400 transition hover:rotate-90 hover:text-neutral-900"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <p className="text-xl font-bold text-brand">Спасибо!</p>
            <p className="mt-2 text-sm text-neutral-600">Мы перезвоним вам в ближайшее время.</p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold">Заказать звонок</h3>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                type="tel"
                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
              {error && <p className="mt-1 text-xs text-danger">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-3 text-sm font-bold uppercase tracking-wide text-neutral-900 transition hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Перезвоните мне
            </button>
          </form>
        )}
      </div>
    </div>
  );
}