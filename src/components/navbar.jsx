"use client";

import React, { useState, useEffect, useRef, Fragment } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineViewGrid,
  HiChevronDown,
  HiOutlineChat,
  HiOutlineArrowLeft,
  HiOutlineX,
  HiOutlineInformationCircle,
  HiOutlineCalendar,
} from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const eventsDropdownRef = useRef(null);

  const menuItems = [
    ["صفحه نخست", "/", HiOutlineHome],
    ["پرسش و پاسخ", "/forum"],
    ["مقالات", "/blog"],
    ["اخبار", "/news"],
  ];

  const eventItems = [
    [
      "همه رویدادها",
      "مشاهده تمامی رویداد‌های یوحنا",
      "/events",
      HiOutlineViewGrid,
      "blue",
    ],
    [
      "اردو امتحانات",
      "مشاهده تمامی رویداد‌های آنلاین یوحنا",
      "/events/ordu-emtehanat",
      HiOutlineViewGrid,
      "blue",
    ],
    [
      "اردو قرنطینه",
      "درباره اردو قرنظینه بخوانید",
      "/events/ordu-gharantine",
      HiOutlineViewGrid,
      "blue",
    ],
    [
      "اردو نوروزی",
      "مشاهده تمامی کارگاه‌های یوحنا",
      "/events/ordu-nowruzi",
      HiOutlineViewGrid,
      "blue",
    ],
    [
      "همایش استراتژی اردو نوروزی",
      "مشاهده تمامی همایش‌های یوحنا",
      "/events/conferences-nowruzi",
      HiOutlineViewGrid,
      "blue",
    ],
    [
      "تصاویر یوحنا",
      "مشاهده تمامی همایش‌های یوحنا",
      "/gallery",
      HiOutlineViewGrid,
      "blue",
    ],
  ];

  const navItems = [
    ["صفحه نخست", "/", HiOutlineHome],
    ["پرسش و پاسخ", "/forum", HiOutlineChat],
    ["مقالات", "/blog", HiOutlineViewGrid],
    ["اخبار", "/news", HiOutlineViewGrid],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scrolling when mobile menu is open.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsMobileEventsOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Close the events dropdown if clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        eventsDropdownRef.current &&
        !eventsDropdownRef.current.contains(event.target)
      ) {
        setIsEventsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isCurrentPath = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Mobile menu content
  const mobileMenu = (
    isMobileMenuOpen && (
      <div className="fixed inset-x-0 bottom-0 h-[75vh] overflow-y-auto bg-white/95 backdrop-blur-lg rounded-t-3xl shadow-2xl border-t border-blue-100/50 z-[9999]">
        <div className="px-4 pb-16 pt-5 space-y-1 relative">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 left-4 p-2 text-gray-500 hover:text-blue-600 transition-colors z-10"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>
          <div className="ml-14 mt-8 space-y-1">
            {/* Mobile Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileEventsOpen((prev) => !prev)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/30 transition-colors w-full"
              >
                <HiOutlineCalendar className="w-5 h-5 text-blue-600" />
                <span className="text-base font-medium text-gray-800">
                  رویدادها
                </span>
                <HiChevronDown
                  className={`w-4 h-4 text-gray-500 ml-auto transition-transform duration-300 ${
                    isMobileEventsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileEventsOpen && (
                <div className="pl-8 space-y-2 mt-1 transition-all duration-200">
                  {eventItems.map(([title, , path, Icon, color]) => (
                    <Link
                      key={path}
                      href={path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileEventsOpen(false);
                      }}
                      className="flex items-center gap-3 p-2 text-sm text-gray-700 hover:bg-blue-50/20 rounded-lg"
                    >
                      <span className={`w-2 h-2 rounded-full bg-${color}-500`} />
                      <span>{title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navItems
              .filter(([title]) => title !== "رویدادها")
              .map(([title, path, Icon]) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/30 transition-colors whitespace-nowrap"
                >
                  {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  <span className="text-base font-medium text-gray-800">
                    {title}
                  </span>
                </Link>
              ))}
          </div>
          <div className="pt-4 border-t border-blue-100/30 mt-4">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/30 transition-colors"
            >
              <HiOutlineInformationCircle className="w-5 h-5 text-gray-600" />
              <span className="text-base text-gray-700">درباره ما</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/30 transition-colors mt-2"
            >
              <HiOutlineChat className="w-5 h-5 text-gray-600" />
              <span className="text-base text-gray-700">تماس با ما</span>
            </Link>
          </div>
          <div className="pt-4 border-t border-blue-100/30 mt-4">
            <div className="p-3 text-sm text-gray-600">
              <p className="font-medium">پشتیبانی تلفنی</p>
              <a
                href="tel:02128111195"
                className="block mt-1 text-blue-600 hover:text-blue-700"
              >
                ۰۲۱-۲۸۱۱۱۱۹۵
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-IranSans border-b border-gray-200 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-28 md:w-40">
                  <Image
                    src="/logo/Logo-U.webp"
                    alt="Logo"
                    width={130}
                    height={130}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map(([title, path, Icon]) => {
                const isActive = isCurrentPath(path);
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`group relative px-4 py-2 rounded-xl transition-colors duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-blue-600 bg-blue-50 shadow-sm"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isActive ? "scale-110" : "group-hover:scale-110"
                          }`}
                        />
                      )}
                      <span className="font-medium">{title}</span>
                    </div>
                    <div
                      className="absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-blue-600"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transition:
                          "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
                      }}
                    />
                  </Link>
                );
              })}

              {/* Desktop Events Dropdown */}
              <div className="relative" ref={eventsDropdownRef}>
                <button
                  onClick={() => setIsEventsOpen(!isEventsOpen)}
                  className={`group relative px-4 py-2 rounded-xl transition-colors duration-300 whitespace-nowrap ${
                    isCurrentPath("/events")
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">رویدادها</span>
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isEventsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {isEventsOpen && (
                  <div className="absolute right-0 mt-3 z-50 p-4 bg-white border rounded-lg shadow-lg transition-all duration-200">
                    {/* Use a dynamic grid layout; each column is at least 150px wide and will grow to fit its content */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,auto))] gap-4">
                      {eventItems.map(
                        ([title, description, path, Icon, color]) => (
                          <Link
                            key={path}
                            href={path}
                            onClick={() => setIsEventsOpen(false)}
                            className="block"
                          >
                            <div className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition-colors">
                              <div
                                className={`p-3 rounded-xl bg-${color}-100 flex-shrink-0`}
                              >
                                {Icon && (
                                  <Icon className="w-5 h-5 text-blue-600" />
                                )}
                              </div>
                              <div className="flex-grow">
                                <h4 className="text-md font-medium text-blue-800">
                                  {title}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {description}
                                </p>
                              </div>
                              <HiOutlineArrowLeft className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`group relative px-4 py-2 rounded-xl transition-colors duration-300 whitespace-nowrap ${
                  isCurrentPath("/about")
                    ? "text-blue-600 bg-blue-50 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <span className="font-medium">درباره ما</span>
              </Link>

              <Link
                href="/contact"
                className={`group relative px-4 py-2 rounded-xl transition-colors duration-300 whitespace-nowrap ${
                  isCurrentPath("/contact")
                    ? "text-blue-600 bg-blue-50 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <span className="font-medium">تماس با ما</span>
              </Link>

              <Link
                href="tel:02128111195"
                className="group relative px-4 py-2 rounded-xl transition-colors duration-300 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 whitespace-nowrap"
              >
                <span className="font-medium" style={{ direction: "ltr" }}>
                  ۰۲۱-۲۸۱۱۱۱۹۵
                </span>
              </Link>

              <Link
                href="/consultation"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-colors duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 font-medium whitespace-nowrap"
              >
                مشاوره رایگان
              </Link>
            </nav>

            {/* Right Side: Auth / User Menu */}
            <div className="flex items-center gap-4">
              {user ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
                      <HiOutlineUser className="w-5 h-5" />
                      <span className="font-medium text-base">
                        {user.username}
                      </span>
                      <HiChevronDown
                        className="w-4 h-4 -mr-1 text-blue-400 transition-transform"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-36 origin-top-left divide-y divide-gray-100/20 rounded-xl bg-white shadow-xl ring-1 ring-black/5 focus:outline-none z-50">
                      <div className="px-1 py-2">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm ${
                                isCurrentPath("/dashboard")
                                  ? "bg-blue-50/80 text-blue-600 font-medium"
                                  : active
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              <span>داشبورد</span>
                              <HiOutlineViewGrid className="w-5 h-5 opacity-70" />
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/forum"
                              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm ${
                                isCurrentPath("/forum")
                                  ? "bg-blue-50/80 text-blue-600 font-medium"
                                  : active
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              <span>فروم</span>
                              <HiOutlineChat className="w-5 h-5 opacity-70" />
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-2">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm ${
                                active
                                  ? "bg-red-50 text-red-600"
                                  : "text-red-500"
                              }`}
                            >
                              <span>خروج</span>
                              <HiOutlineLogout className="w-5 h-5 opacity-70" />
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  <HiOutlineUser className="w-5 h-5" />
                  <span>ثبت نام | ورود</span>
                </Link>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 md:hidden"
              >
                <span className="sr-only">Open menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0.5"
                        : "-translate-y-1"
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-0.5"
                        : "translate-y-1"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {typeof window !== "undefined" &&
        createPortal(mobileMenu, document.body)}
    </>
  );
}
