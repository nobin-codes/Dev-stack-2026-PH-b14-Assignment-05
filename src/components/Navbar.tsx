import { useState } from "react";
import logoText from "../assets/logo-text.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-[1080px] items-center px-3 sm:px-5 lg:px-0">
       

        
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-30 flex h-9 w-9 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block h-0.5 w-5 bg-gray-800"></span>
          <span className="block h-0.5 w-5 bg-gray-800"></span>
          <span className="block h-0.5 w-5 bg-gray-800"></span>
        </button>

    
        <a
          href="#home"
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer md:hidden"
        >
          <img
            src={logoText}
            alt="Dev Stack Logo"
            className="h-auto w-[72px] object-contain min-[375px]:w-[90px]"
          />
        </a>

   
        <div className="ml-auto flex shrink-0 items-center gap-1.5 min-[375px]:gap-2 md:hidden">
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap text-[10px] text-gray-700 transition hover:text-pink-500 min-[375px]:text-[11px]"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-bg cursor-pointer whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] font-medium text-white transition hover:opacity-90 min-[375px]:px-3 min-[375px]:text-[11px]"
          >
            Sign Up
          </button>
        </div>

        

      
        <a
          href="#home"
          className="hidden shrink-0 cursor-pointer items-center md:flex"
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

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="cursor-pointer text-sm text-gray-700 transition hover:text-pink-500"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-bg cursor-pointer rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
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
