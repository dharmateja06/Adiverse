import logoImage from "../logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImage} alt="Adiverse Logo" className="h-8 w-8" />
      <span className="font-display text-xl font-bold tracking-tight">Adiverse</span>
    </div>
  );
}