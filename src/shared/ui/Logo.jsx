export default function Logo({ className = "" }) {
  return (
    <a
      href="/"
      aria-label="GG Promarket — на главную"
      className={`group inline-flex items-center gap-1 select-none ${className}`}
    >
      <span className="text-[34px] font-black leading-none tracking-tighter text-brand transition-transform duration-300 group-hover:-translate-y-0.5">
        GG
      </span>
      <span className="bg-sale px-1.5 py-[3px] text-[12px] font-extrabold leading-none tracking-[0.12em] text-white transition-colors duration-300 group-hover:bg-brand">
        PROMARKET
      </span>
    </a>
  );
}