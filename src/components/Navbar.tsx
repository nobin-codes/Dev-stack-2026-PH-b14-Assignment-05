import { useState } from "react";
import logoText from "../assets/logo-text.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-[1080px] items-center justify-between px-4 sm:px-5 lg:px-0">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block h-0.5 w-5 bg-gray-800"></span>
          <span className="block h-0.5 w-5 bg-gray-800"></span>
          <span className="block h-0.5 w-5 bg-gray-800"></span>
        </button>

        
        <a
  href="#home"
  className="absolute left-1/2 flex -translate-x-1/2 cursor-pointer items-center md:static md:translate-x-0"
>
  <img
    src={logoText}
    alt="Dev Stack Logo"
    className="h-8 w-auto object-contain sm:h-9"
  />
</a>

       
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          <a
            href="#home"
            className="cursor-pointer text-sm font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#home"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#technologies"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="cursor-pointer text-xs text-gray-700 transition hover:text-pink-500 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-bg cursor-pointer rounded-full px-3.5 py-2 text-xs font-medium text-white transition hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

     
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={closeMenu}
              className="cursor-pointer text-left text-sm text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="cursor-pointer text-left text-sm text-gray-700 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#home"
              onClick={closeMenu}
              className="cursor-pointer text-left text-sm text-gray-700 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="cursor-pointer text-left text-sm text-gray-700 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="cursor-pointer text-left text-sm text-gray-700 transition hover:text-pink-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
