export default function Logo({ className = "" }) {
  return (
    <a href="/" className={`flex items-center gap-1 ${className}`} aria-label="GG Promarket">
      <span className="text-3xl font-extrabold italic tracking-tighter text-brand">GG</span>
      <span className="bg-danger px-1.5 py-0.5 text-sm font-extrabold tracking-wide text-white">
        PROMARKET
      </span>
    </a>
  );
}