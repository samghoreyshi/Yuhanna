"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-sm bg-white backdrop-blur-2xl" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-4 lg:py-8">
        <div className="flex flex-row-reverse flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block font-IranSans ">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  درباره‌ما{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  تماس با ما{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  رویدادها{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  آزمون{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  پانسیون{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  آموزش{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-accent"
                  href="#"
                >
                  {" "}
                  مشاوره{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block rounded-xl bg-gray-200 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="sm:flex sm:gap-4">
              <a
                className="block font-IranSans font-demiBold rounded-2xl bg-accent px-5 py-2.5 text-sm text-white transition hover:bg-blue-600"
                href="#"
              >
                درخواست مشاوره
              </a>
            </div>
            <div className="sm:flex sm:gap-4">
              <h2 className="hidden md:block text-2xl font-IranSans font-extraBold text-gray-500">۰۲۱-۲۸۱۱۱۱۹٥</h2>
            </div>
          </div>
        </div>
        <a className="block text-accent" href="#">
          <img src="/logo/logo.png" alt="Logo" width={100} height={100} />
        </a>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className=" space-y-4">
            <nav className="font-IranSans border-b-gray-300 border-b shadow-md">
              <ul className="flex flex-col space-y-4 text-right p-4">
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    درباره‌ما
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    رویدادها
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    آزمون
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    پانسیون
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    آموزش
                  </a>
                </li>
                <li>
                  <a
                    className="block text-gray-500 transition hover:text-accent"
                    href="#"
                  >
                    مشاوره
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
