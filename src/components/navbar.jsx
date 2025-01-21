"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    ["تماس با ما", "/contact"],
    ["نظرات", "/testimonials"],
    ["درباره ما", "/about"],
    ["رویداد", "/events"],
    ["آزمون", "/exams"],
    ["کتاب", "/books"],
    ["خانه آموزش", "/education-house"],
    ["خانه مطالعه", "/study-house"],
    ["خانه مشاوره", "/counseling"],
    ["صفحه نخست", "/"],
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="w-full rounded-2xl bg-white shadow-lg px-4 py-2.5 border border-white/20">
            <div className="flex items-center justify-between">
              {/* Left Section: Mobile Menu + CTA */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-5 h-4 flex flex-col justify-between">
                    <span
                      className={`w-full h-0.5 bg-gray-700 transform origin-center transition-all duration-300 ${
                        isOpen ? 'rotate-45 translate-y-[0.45rem]' : ''
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                        isOpen ? 'opacity-0' : ''
                      }`}
                    />
                    <span
                      className={`w-full h-0.5 bg-gray-700 transform origin-center transition-all duration-300 ${
                        isOpen ? '-rotate-45 -translate-y-[0.45rem]' : ''
                      }`}
                    />
                  </div>
                </button>

                <div className="hidden lg:flex items-center gap-4">
                  <Link href="/counseling">
                    <button className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-IranSans font-demiBold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                      <span className="relative z-10">درخواست مشاوره</span>
                    </button>
                  </Link>
                  <a
                    href="tel:۰۲۱-۲۸۱۱۱۱۹۵"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-IranSans text-base font-medium"
                  >
                    ۰۲۱-۲۸۱۱۱۱۹۵
                  </a>
                </div>
              </div>

              {/* Center: Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1 rtl space-x-1 space-x-reverse">
                {menuItems.map(([title, path]) => (
                  <Link href={path} key={path}>
                    <button className="group relative px-4 py-2 font-IranSans text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      <span className="relative">
                        {title}
                        <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-gradient-to-l from-blue-500 to-blue-600 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 -z-10 rounded-xl bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </Link>
                ))}
              </div>

              {/* Right: Logo and Title */}
              <div className="flex items-center gap-2">
                <span className="lg:hidden text-xl font-IranSans font-bold text-accent">خانه یوحنا</span>
                <Link href="/">
                  <div className="flex-shrink-0 cursor-pointer relative group hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl transition-all duration-300" />
                    <div className="relative bg-gradient-to-br from-white/80 to-white/50 p-2.5 rounded-2xl border border-white/20 shadow-lg shadow-accent/5 group-hover:shadow-accent/10 transition-all duration-300">
                      <img
                        src="/logo/Logo-U.webp"
                        alt="Logo"
                        className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-[80%] sm:w-[60%] md:hidden bg-white z-40 overflow-hidden shadow-2xl">
            <div className="h-full flex flex-col pt-24 px-6">
              <div className="space-y-1">
                {menuItems.map(([title, path]) => (
                  <Link href={path} key={path}>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-end w-full py-3.5 font-IranSans relative overflow-hidden rounded-xl hover:bg-gray-50/80 transition-colors duration-200 text-gray-600"
                    >
                      <span className="relative z-10 px-4 text-base transition-colors duration-200 group-hover:text-blue-600">
                        {title}
                        <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-gradient-to-l from-blue-500 to-blue-600 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                    </button>
                  </Link>
                ))}
                
                {/* Mobile Consultation Button and Phone */}
                <div className="mt-4 space-y-3">
                  <Link href="/counseling">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-white px-4 py-3 rounded-xl text-base font-IranSans font-demiBold shadow-lg shadow-accent/20"
                    >
                      <span className="relative z-10">درخواست مشاوره</span>
                    </button>
                  </Link>
                  
                  <a
                    href="tel:۰۲۱-۲۸۱۱۱۱۹۵"
                    className="block w-full text-center mb-5 text-gray-600 py-2 font-IranSans text-base font-medium"
                  >
                    ۰۲۱-۲۸۱۱۱۱۹۵
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
