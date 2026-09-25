"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/leadership", label: "Leadership" },
  { href: "/impact", label: "Impact" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-500",
        compact
          ? "nav-compact border-line bg-white/92 backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "section-pad mx-auto flex max-w-7xl items-center justify-between transition-all duration-500",
          compact ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-8 w-px bg-gold-500" aria-hidden />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-forest-900 md:text-xl">
              Prof. Linus Muthuri Gitonga
            </span>
            <span className="hidden text-[10px] tracking-[0.22em] text-muted uppercase sm:block">
              Academic archive
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-2.5 py-2 text-[11px] font-medium tracking-[0.16em] text-forest-800 uppercase transition-colors hover:text-forest-900"
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-px bg-gold-500 transition-opacity",
                  pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                )}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-forest-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="section-pad border-t border-line bg-white py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 font-serif text-2xl text-forest-900"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
