"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Faculty", href: "/faculty" },
  { label: "Admission", href: "/admission" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-royal-900/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
           <Link href="/" className="flex items-center gap-3 group">
              <Image src="/logo.png" alt="Siddhiksha Education Care Logo" width={64} height={64} className="object-contain" />
              <div>
                <span
                  className={cn(
                    "block font-montserrat font-bold text-lg leading-none transition-colors duration-200",
                    isScrolled || !isHome ? "text-royal-900" : "text-white"
                  )}
                >
                  Siddhiksha
                </span>
                <span
                  className={cn(
                    "block text-xs font-medium transition-colors duration-200",
                    isScrolled || !isHome ? "text-gold-600" : "text-gold-300"
                  )}
                >
                  Education Care
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? isScrolled || !isHome
                        ? "bg-royal-50 text-royal-700"
                        : "bg-white/20 text-white"
                      : isScrolled || !isHome
                      ? "text-gray-600 hover:text-royal-700 hover:bg-royal-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/admission"
                className="btn-gold text-sm py-2.5 px-5"
              >
                Register Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors duration-200",
                isScrolled || !isHome
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
             <Image src="/logo.png" alt="Siddhiksha Education Care Logo" width={48} height={48} className="object-contain" />
              <div>
                <span className="block font-montserrat font-bold text-lg text-white leading-none">
                  Siddhiksha
                </span>
                <span className="block text-xs font-medium text-gold-400">
                  Education Care
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-royal-700 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <Link
              href="/admission"
              className="btn-gold w-full justify-center text-base py-4"
            >
              Register for Admission
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
