import { useState } from "react";
import logoText from "../assets/logo-text.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      {" "}
      <nav className="relative mx-auto flex h-16 max-w-[1080px] items-center justify-between px-5 lg:px-0">
        {" "}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          aria-label="Open menu"
        >
          {" "}
          <span className="block h-0.5 w-5 bg-gray-800"></span>{" "}
          <span className="block h-0.5 w-5 bg-gray-800"></span>{" "}
          <span className="block h-0.5 w-5 bg-gray-800"></span>{" "}
        </button>{" "}
        <div className="flex items-center">
          {" "}
          <img
            src={logoText}
            alt="Dev Stack Logo"
            className="h-9 w-auto object-contain"
          />{" "}
        </div>{" "}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {" "}
          <button
            type="button"
            className="cursor-pointer text-sm font-medium text-pink-500"
          >
            {" "}
            Home{" "}
          </button>{" "}
          <button
            type="button"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            {" "}
            Technologies{" "}
          </button>{" "}
          <button
            type="button"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            {" "}
            Projects{" "}
          </button>{" "}
          <button
            type="button"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            {" "}
            About{" "}
          </button>{" "}
          <button
            type="button"
            className="cursor-pointer text-sm text-gray-600 transition hover:text-pink-500"
          >
            {" "}
            Contact{" "}
          </button>{" "}
        </div>{" "}
        <div className="flex items-center gap-3">
          {" "}
          <button
            type="button"
            className="hidden text-sm text-gray-700 sm:block"
          >
            {" "}
            Sign In{" "}
          </button>{" "}
          <button
            type="button"
            className="gradient-bg rounded-full px-4 py-2 text-xs font-medium text-white sm:px-5 sm:text-sm"
          >
            {" "}
            Sign Up{" "}
          </button>{" "}
        </div>{" "}
      </nav>{" "}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          {" "}
          <div className="flex flex-col gap-4">
            {" "}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm text-pink-500"
            >
              {" "}
              Home{" "}
            </button>{" "}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm text-gray-700"
            >
              {" "}
              Technologies{" "}
            </button>{" "}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm text-gray-700"
            >
              {" "}
              Projects{" "}
            </button>{" "}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm text-gray-700"
            >
              {" "}
              About{" "}
            </button>{" "}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-left text-sm text-gray-700"
            >
              {" "}
              Contact{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </header>
  );
}
