import { Link } from "@tanstack/react-router";
import { Search, Sun, Moon, PenLine, User, BookMarked, Settings, LogOut } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { Logo } from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="ml-4 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link to="/" activeProps={{ className: "text-foreground font-medium" }} activeOptions={{ exact: true }} className="hover:text-foreground transition">Feed</Link>
          <Link to="/explore" activeProps={{ className: "text-foreground font-medium" }} className="hover:text-foreground transition">Explore</Link>
          <Link to="/profile/reader" activeProps={{ className: "text-foreground font-medium" }} className="hover:text-foreground transition">Library</Link>
        </nav>

        <div className="relative ml-auto hidden max-w-sm flex-1 md:flex">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search stories, poets, novels…"
            className="h-10 w-full rounded-full border border-border bg-card/60 pl-9 pr-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:bg-card"
          />
        </div>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground transition hover:bg-card"
        >
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>

        <Link
          to="/write"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          <PenLine className="h-4 w-4" />
          <span className="hidden sm:inline">Write</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 hover:bg-card">
              <User className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link to="/profile/reader"><BookMarked className="mr-2 h-4 w-4" /> Reader profile</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link to="/profile/writer"><PenLine className="mr-2 h-4 w-4" /> Writer portfolio</Link></DropdownMenuItem>
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}