"use client";

import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-[#0d0d0d] transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        <div className="font-bold text-xl md:text-2xl flex items-center gap-1">
          <Image src={"./ak.svg"} width={25} height={25} alt="logo" />
          <span
            style={{
              background: 'linear-gradient(180deg, #70, #162)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: '#9773CF',
              backgroundClip: 'text'
            }}
          >
            AK.DEV
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#e5e7eb] dark:bg-[#1e1b29] rounded-full px-1 lg:px-2 py-1 border border-[#d1d5db] dark:border-gray-700">
          <Link
            href="/"
            className={`px-3 lg:px-4 py-2 rounded-full transition-colors text-sm ${pathname === "/"
                ? "bg-[#f9fafb] dark:bg-[#2a2635]"
                : "hover:bg-[#f3f4f6] dark:hover:bg-[#2a2635]"
              }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`px-3 lg:px-4 py-2 rounded-full transition-colors text-sm ${pathname === "/projects"
                ? "bg-[#f9fafb] dark:bg-[#2a2635]"
                : "hover:bg-[#f3f4f6] dark:hover:bg-[#2a2635]"
              }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`px-3 lg:px-4 py-2 rounded-full transition-colors text-sm ${pathname === "/about"
                ? "bg-[#f9fafb] dark:bg-[#2a2635]"
                : "hover:bg-[#f3f4f6] dark:hover:bg-[#2a2635]"
              }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`px-3 lg:px-4 py-2 rounded-full transition-colors text-sm ${pathname === "/contact"
                ? "bg-[#f9fafb] dark:bg-[#2a2635]"
                : "hover:bg-[#f3f4f6] dark:hover:bg-[#2a2635]"
              }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d0d0d] border-t border-gray-200 dark:border-gray-800 px-4 py-4">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors text-sm ${pathname === "/"
                  ? "bg-[#e5e7eb] dark:bg-[#1e1b29]"
                  : "hover:bg-[#f3f4f6] dark:hover:bg-[#1e1b29]"
                }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors text-sm ${pathname === "/projects"
                  ? "bg-[#e5e7eb] dark:bg-[#1e1b29]"
                  : "hover:bg-[#f3f4f6] dark:hover:bg-[#1e1b29]"
                }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors text-sm ${pathname === "/about"
                  ? "bg-[#e5e7eb] dark:bg-[#1e1b29]"
                  : "hover:bg-[#f3f4f6] dark:hover:bg-[#1e1b29]"
                }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg transition-colors text-sm ${pathname === "/contact"
                  ? "bg-[#e5e7eb] dark:bg-[#1e1b29]"
                  : "hover:bg-[#f3f4f6] dark:hover:bg-[#1e1b29]"
                }`}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
