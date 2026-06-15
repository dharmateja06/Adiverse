export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-8 w-8 text-primary" fill="none">
        <path d="M24 6 L40 40 H32 L24 22 L16 40 H8 Z" fill="currentColor" />
        <path d="M28 14 L34 8 L36 14 L30 20 Z" fill="currentColor" opacity="0.8" />
        <circle cx="36" cy="12" r="1" fill="currentColor" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
        <circle cx="40" cy="20" r="0.8" fill="currentColor" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">Adiverse</span>
    </div>
  );
}