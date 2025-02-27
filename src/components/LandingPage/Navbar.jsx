"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TagsButton from '@/components/LandingPage/Tags'


export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    // Close dropdown and mobile menu if clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setMobileMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Listen for scroll events to add a blurry background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownClick = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const MenuItems = [
        {
            id: 1,
            title: "صفحه نخست",
            subMenu: false,
            icon: false,
            iconPath: null,
        },
        {
            id: 2,
            title: "پرسش و پاسخ",
            subMenu: false,
            icon: false,
            iconPath: null,
        },
        {
            id: 7,
            title: "اخبار",
            subMenu: false,
            icon: false,
            iconPath: null,
        },
        {
            id: 8,
            title: "مقالات",
            subMenu: false,
            icon: false,
            iconPath: null,
        },
        {
            id: 3,
            title: "هوش‌مصنوعی",
            subMenu: false,
            icon: true,
            iconPath: "/icons/navbar/snowflake.svg",
        },
        {
            id: 4,
            title: "رویدادها",
            subMenu: true,
            icon: true,
            iconPath: "/icons/navbar/arrow-down.svg",
            subMenuItems: [
                {
                    id: 1,
                    title: "اردو نوروزی",
                    subTitle: "نوروز یک وقفه طلایی!",
                    icon: "/icons/navbar/dropdown/nowruz.svg",
                },
                {
                    id: 2,
                    title: "اردو قرنطینه",
                    subTitle: "آمادگی برای روزای سخت!",
                    icon: "/icons/navbar/dropdown/isolate.svg",

                },
                {
                    id: 3,
                    title: "اردو امتحانات",
                    subTitle: "یک قدم جلوتر باش!",
                    icon: "/icons/navbar/dropdown/exams.svg",

                },
            ]
        },
        {
            id: 5,
            title: "درباره‌ما",
            subMenu: false,
            icon: false,
            iconPath: null,
        },
        {
            id: 6,
            title: "تماس‌ با ما",
            subMenu: false,
            icon: false,
            iconPath: null,

        },
    ];

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 transition-all  duration-300 shadow-sm ${isScrolled ? "backdrop-blur-lg bg-white" : "bg-white"
                }`}
        >
            {/* Desktop Navbar: Visible only on screens 1090px and above */}
            <div className="hidden transition-all duration-300 min-[1090px]:flex px-32  gap-5 items-center justify-between  py-8 h-[64px]">
                {/* Logo */}
                <div>
                    <Image
                        src="/logo/logo.png"
                        width={120}
                        height={10}
                        alt="لوگو خانه یوحنا"
                    />
                </div>
                <div className="flex justify-between items-center w-full">
                    <ul className="flex justify-between items-center gap-5">
                        {MenuItems.map((item) => (
                            <li
                                key={item.id}
                                className="relative text-textSecondary hover:text-accent transition-colors duration-300 cursor-pointer"
                            >
                                {item.subMenu ? (
                                    <button
                                        onClick={() => handleDropdownClick(item.id)}
                                        className="flex items-center gap-1 focus:outline-none"
                                    >
                                        <span>{item.title}</span>
                                        {item.icon && item.iconPath && (
                                            <Image
                                                src={item.iconPath}
                                                alt={item.title}
                                                width={16}
                                                height={16}
                                            />
                                        )}
                                    </button>
                                ) : (
                                    <span className="flex items-center gap-1">
                                        <span>{item.title}</span>
                                        {item.icon && item.iconPath && (
                                            <Image
                                                src={item.iconPath}
                                                alt={item.title}
                                                width={16}
                                                height={16}
                                            />
                                        )}
                                    </span>
                                )}

                                {/* Desktop Dropdown submenu with smooth animation */}
                                {item.subMenu && (
                                    <ul
                                        className={`absolute flex justify-between items-center gap-5 left-1/2 top-8 mt-2 bg-white shadow-md rounded-b-xl z-10 p-5 transform transition-all duration-300 ${openDropdown === item.id
                                            ? "opacity-100 translate-y-0 -translate-x-1/2"
                                            : "opacity-0 -translate-y-2 pointer-events-none -translate-x-1/2"
                                            }`}
                                    >
                                        {item.subMenuItems?.map((subItem) => (
                                            <li key={subItem.id} className="text-gray-600 flex items-center justify-between gap-2 hover:text-black">
                                                <span className="flex items-center justify-center w-[54px] h-[54px] p-2 bg-accent/20 rounded-full">
                                                    <Image
                                                        src={subItem.icon}
                                                        alt={subItem.title}
                                                        width={24}
                                                        height={24}
                                                    />
                                                </span>
                                                <span className="group flex flex-col justify-between items-start hover:text-accent transition-all duration-300">
                                                    <h4 className="font-extrabold text-sm whitespace-nowrap text-[#497886] group-hover:text-accent transition-all duration-300">
                                                        {subItem.title}
                                                    </h4>
                                                    <p className="text-right text-xs text-[#497886] w-full whitespace-nowrap">
                                                        {subItem.subTitle}
                                                    </p>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between gap-2">
                        <TagsButton

                            title="تماس با ما ۲۸۱۱۱۱۸۵-۰۲۱"
                            background='bg-blue-50'
                            BGradinetFrom='from-blue-400'
                            BGradientTo='to-blue-100'
                            TextColor='text-blue-900'
                        />
                        <TagsButton

                            title="ورود | ثبت نام"
                            background='bg-blue-50'
                            BGradinetFrom='from-blue-400'
                            BGradientTo='to-blue-100'
                            TextColor='text-blue-900'
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navbar Header: Visible only below 1090px */}
            <div className="flex min-[1090px]:hidden items-center justify-between px-4 py-4">
                <div>
                    <Image
                        src="/logo/logo.png"
                        width={120}
                        height={90}
                        alt="لوگو خانه یوحنا"
                    />
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center justify-between gap-2">
                        <button className="flex gap-1 items-center text-[12px] whitespace-nowrap p-1 border border-accent text-accent rounded-md">
                            تماس با ما ۲۸۱۱۱۱۸۵-۰۲۱
                            <span>
                                <Image
                                    src="/icons/navbar/phone.svg"
                                    alt="تلفن خانه یوحنا، تماس بگیرید"
                                    width={14}
                                    height={14}
                                />
                            </span>
                        </button>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="focus:outline-none"
                    >
                        {mobileMenuOpen ? (
                            // Close Icon
                            <svg
                                className="w-10 h-10"
                                viewBox="0 0 24 24"
                                fill="#0CAEDD"
                                stroke="#0CAEDD"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>

                        ) : (
                            // Hamburger Icon
                            <svg
                                className="w-10 h-10"
                                fill="#0CAEDD"
                                stroke="#0CAEDD"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with smooth animation: Visible only below 1090px */}
            <div
                className={`absolute rounded-b-lg z-50 overflow-y-auto h-dvh left-0 right-0 shadow-lg bg-white backdrop-blur-md  p-4 transform transition-all duration-300 min-[1090px]:hidden ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <ul className="px-10 overflow-y-autoflex flex-col gap-2">
                    {MenuItems.map((item) => (
                        <li key={item.id} className="border-b last:border-none text-textSecondary border-gray-100 py-2">
                            {item.subMenu ? (
                                <div
                                    onClick={() => handleDropdownClick(item.id)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{item.title}</span>
                                        {item.icon && item.iconPath && (
                                            <Image
                                                src={item.iconPath}
                                                alt={item.title}
                                                width={16}
                                                height={16}
                                            />
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span>{item.title}</span>
                                    {item.icon && item.iconPath && (
                                        <Image
                                            src={item.iconPath}
                                            alt={item.title}
                                            width={16}
                                            height={16}
                                        />
                                    )}
                                </div>
                            )}
                            {/* Mobile dropdown submenu with smooth animation */}
                            {item.subMenu && (
                                <ul
                                    className={`overflow-hidden  flex flex-col gap-5 transition-all duration-300 pl-4 ${openDropdown === item.id
                                        ? "max-h-90 py-10 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {item.subMenuItems?.map((subItem) => (
                                        <li key={subItem.id} className="text-gray-600 flex items-center  gap-2 hover:text-black">
                                            <span className="flex items-center justify-center w-[54px] h-[54px] p-2 bg-accent/20 rounded-full">
                                                <Image
                                                    src={subItem.icon}
                                                    alt={subItem.title}
                                                    width={24}
                                                    height={24}
                                                />
                                            </span>
                                            <span className="group flex flex-col justify-between items-start hover:text-accent transition-all duration-300">
                                                <h4 className="font-extrabold text-sm whitespace-nowrap text-[#497886] group-hover:text-accent transition-all duration-300">
                                                    {subItem.title}
                                                </h4>
                                                <p className="text-right text-xs text-[#497886] w-full whitespace-nowrap">
                                                    {subItem.subTitle}
                                                </p>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
