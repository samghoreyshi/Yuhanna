"use client";

import { useState, useRef, useEffect } from "react";
import NextImage from "next/image";
import { usePathname } from 'next/navigation'; // Import usePathname
import Link from "next/link";

// --- SVG Icon Components ---
const EmailIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>);
const PhoneIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>);
// Removed Social Media Icons as they are replaced
const SearchIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <title>Search</title> <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path> </svg>);

// --- NEW: News Icon Component ---
const NewsIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fillRule="evenodd" d="M18 3H2a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM2 4.586l6.707 6.707a1 1 0 001.414-1.414L4.414 4H15.586l-3.293 3.293a1 1 0 001.414 1.414L17.414 5H2V4.586zM18 16H2V7.414l4.293 4.293a1 1 0 001.414 0L12 7.414l4.293 4.293a1 1 0 001.414 0L18 11.414V16z" clipRule="evenodd" />
        <path d="M5 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
    </svg>
);
// --- End SVG Icon Components ---


// --- Navbar Component ---
export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const pathname = usePathname();

    // --- Dummy News Headlines & State for Fading Ticker ---
    const newsHeadlines = [
        "ثبت نام دوره‌های جدید آغاز شد! شما می‌توانید همین حالا در دوره‌های تخصصی ما ثبت‌نام کنید و از آموزش‌های پیشرفته بهره‌مند شوید.",
        "کارگاه آنلاین رایگان: تکنیک‌های مطالعه نوین! در این وبینار رایگان، جدیدترین روش‌های مطالعه مؤثر را بیاموزید و عملکرد خود را بهبود دهید.",
        "تخفیف ویژه نوروزی برای همه دانش‌آموزان! به مناسبت نوروز، تمامی دوره‌های آموزشی با تخفیف ویژه ارائه می‌شوند. فرصت را از دست ندهید!",
        "اعلام نتایج آزمون آزمایشی هفته گذشته! نتایج آزمون منتشر شد. برای مشاهده عملکرد خود و دریافت تحلیل تخصصی، به پنل کاربری مراجعه کنید.",
        "یوحنا در رسانه‌ها: مصاحبه با مدیر مجموعه! گفت‌وگوی اختصاصی درباره برنامه‌های آینده و چشم‌انداز آموزشی مؤسسه را از دست ندهید.",
    ];
    const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
    const [headlineVisible, setHeadlineVisible] = useState(true);
    const headlineInterval = 5000; // Time each headline is visible (in ms)
    const headlineFadeDuration = 500; // Duration of fade effect (in ms), ensure this matches Tailwind duration class

    // --- useEffect for News Ticker ---
    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeadlineVisible(false); // Start fade out

            setTimeout(() => {
                setCurrentHeadlineIndex(prevIndex => (prevIndex + 1) % newsHeadlines.length);
                setHeadlineVisible(true); // Start fade in of new headline
            }, headlineFadeDuration); // Wait for fade out to complete

        }, headlineInterval);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [newsHeadlines.length]); // Dependency array includes newsHeadlines.length


    // --- Other useEffect hooks ---
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setMobileMenuOpen(false); // Close mobile menu too on outside click
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty dependency array means this runs once on mount
    // --- End useEffect hooks ---

    // --- Dropdown Handler ---
    const handleDropdownClick = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    // --- Menu Items Data ---
    const MenuItems = [
        { id: 1, title: "صفحه نخست", href: "/", subMenu: false, icon: false, iconPath: null, },
        { id: 8, title: "مقالات و اخبار", href: "/blog", subMenu: false, icon: false, iconPath: null, },
        {
            id: 2, title: "پانسیون‌ها", href: "#", subMenu: true, icon: true, iconPath: "/icons/navbar/arrow-down.svg", subMenuItems: [
                { id: 41, title: "پانسیون حضوری", subTitle: "فضای مطالعه اختصاصی", href: "/pension-inperson", icon: "/icons/navbar/inp.svg", },
                { id: 42, title: "پانسیون آنلاین", subTitle: "پلتفرم آنلاین مطالعاتی", href: "/pension-online", icon: "/icons/navbar/online.svg", },
            ]
        },
        {
            id: 4, title: "رویدادها", href: "#", subMenu: true, icon: true, iconPath: "/icons/navbar/arrow-down.svg", subMenuItems: [
                { id: 41, title: "اردو نوروزی", subTitle: "نوروز یک وقفه طلایی!", href: "/events/nowruz", icon: "/icons/navbar/dropdown/nowruz.svg", },
                { id: 42, title: "اردو قرنطینه", subTitle: "آمادگی برای روزای سخت!", href: "/events/isolate", icon: "/icons/navbar/dropdown/isolate.svg", },
                { id: 43, title: "اردو امتحانات", subTitle: "یک قدم جلوتر باش!", href: "/events/exams", icon: "/icons/navbar/dropdown/exams.svg", },
            ]
        },
        { id: 5, title: "درباره‌ما", href: "/about", subMenu: false, icon: false, iconPath: null, },
        { id: 6, title: "تماس‌ با ما", href: "/contact", subMenu: false, icon: false, iconPath: null, },
    ];
    // --- End Menu Items Data ---

    // --- Helper Functions (RESTORED) ---
    const renderMenuItemContent = (item, isActive = false) => (
        <>
            <span className={isActive ? 'font-semibold' : ''}>{item.title}</span>
            {/* Use NextImage for the dropdown arrow */}
            {item.icon && item.iconPath && (
                <NextImage
                    src={item.iconPath}
                    alt="" // Decorative, alt can be empty
                    width={16}
                    height={16}
                    // Use ml-1 (margin-left) for RTL layout consistency
                    className={`ml-1 transition-transform duration-300 ${openDropdown === item.id ? "rotate-180" : ""}`}
                />
            )}
        </>
    );

    const renderSubMenuItem = (subItem) => (
        <li key={subItem.id}>
            <Link href={subItem.href || "#"} className="flex items-center gap-3 p-2 group rounded-lg hover:bg-accent/10 transition-colors duration-200">
                <span className="flex items-center justify-center flex-shrink-0 w-[48px] h-[48px] p-2 bg-accent/10 rounded-full group-hover:bg-accent/10 transition-colors duration-200">
                    {/* Use NextImage for submenu item icons */}
                    <NextImage
                        src={subItem.icon}
                        alt="" // Decorative
                        width={24}
                        height={24}
                    />
                </span>
                <span className="flex flex-col items-start">
                    <h4 className="font-semibold text-sm whitespace-nowrap text-gray-700 group-hover:text-accent transition-colors duration-200">
                        {subItem.title}
                    </h4>
                    <p className="text-xs text-gray-500 w-full whitespace-nowrap group-hover:text-gray-600 transition-colors duration-200">
                        {subItem.subTitle}
                    </p>
                </span>
            </Link>
        </li>
    );
    // --- End Helper Functions ---

    // Search State & Handlers
    const [searchOpen, setSearchOpen] = useState(false);
    const handleSearchClick = () => {
        setSearchOpen(true);
        // Focus input after animation starts
        setTimeout(() => {
            document.getElementById('search-input')?.focus();
        }, 100); // Small delay
    };
    const handleSearchClose = () => {
        setSearchOpen(false);
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        console.log('Search for:', searchValue); // Replace with actual search logic
        setSearchOpen(false); // Close overlay on submit
    };

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 w-full text-sm transition-all duration-300 shadow-sm bg-white ${isScrolled ? "" : "bg-opacity-100"}`}
        >
            {/* === Desktop Navbar (min-width: 1090px) === */}
            <div className="hidden min-[1090px]:block max-w-screen-xl mx-auto px-6 lg:px-1">
                {/* --- Top Row --- */}
                <div className="flex justify-between items-center h-12 border-b border-gray-200/30 backdrop-blur-sm text-xs text-gray-600 bg-gradient-to-r from-white/80 via-white/95 to-white/80">
                    {/* Left Side - Email & News Ticker */}
                    <div className="flex items-center gap-x-6">
                        {/* Email */}
                        <a href="mailto:info@yuhanna.ir" className="flex items-center gap-x-1.5 hover:text-accent transition-all duration-200 hover:scale-105">
                            <EmailIcon /> <span>info@yuhanna.ir</span>
                        </a>
                        {/* Divider */}
                        <span className="h-4 w-px bg-gray-300" aria-hidden="true"></span>

                        {/* News Ticker Section */}
                        <div className="flex items-center gap-x-2" aria-live="polite" aria-atomic="true">
                            <span className="text-accent flex-shrink-0" title="آخرین اخبار">
                                <NewsIcon />
                            </span>
                            {/* Container for fading headline - MODIFIED */}
                            <div className="relative h-5"> {/* REMOVED w-96 and overflow-hidden */}
                                <span
                                    key={currentHeadlineIndex} // Add key to help React with transition timing
                                    className={`absolute inset-0 flex items-center whitespace-nowrap text-gray-700 transition-opacity duration-${headlineFadeDuration} ease-in-out ${headlineVisible ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDuration: `${headlineFadeDuration}ms` }} // Ensure duration matches
                                >
                                    {newsHeadlines[currentHeadlineIndex]}
                                </span>
                            </div>
                        </div>
                        {/* END: News Ticker Section */}

                    </div>
                    {/* Right Side - Phone & Login */}
                    <div className="flex items-center gap-x-5">
                        <a href="tel:02128111195" className="flex gap-x-1.5 items-center hover:text-accent transition-all duration-200 hover:scale-105">
                            <PhoneIcon /> <span className="whitespace-nowrap">تماس: ۲۸۱۱۱۱۹۵-۰۲۱</span>
                        </a>
                        <button className="relative group overflow-hidden bg-accent hover:-translate-y-0.5 transition-all duration-300 py-1.5 px-4 rounded-full text-white text-xs font-semibold shadow-sm hover:shadow-accent/25 hover:shadow-lg">
                            ورود | ثبت نام
                            <span className="absolute top-0 -left-10 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 blur-sm to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:Bshimmer_0.5s_ease-in-out]"></span>
                        </button>
                    </div>
                </div>

                {/* --- Bottom Row --- */}
                <div className="flex gap-6 items-center justify-between h-16">

                    <div className="flex gap-10">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/">
                                <NextImage src="/logo/Logo-U.webp" width={110} height={35} alt="لوگو خانه یوحنا" priority />
                            </a>
                        </div>

                        {/* Navigation Links (FIXED POSITIONING) */}
                        <ul className="flex justify-center items-center gap-5 flex-grow">
                            {MenuItems.map((item) => {
                                const isActive = !item.subMenu && pathname === item.href;
                                return (
                                    // **** ADD 'relative' to the LI ****
                                    <li key={item.id} className="group relative">
                                        {item.subMenu ? (
                                            // Dropdown Button (Keep relative for its underline)
                                            <button
                                                onClick={() => handleDropdownClick(item.id)}
                                                className="relative flex items-center gap-1 p-2 text-gray-700 hover:text-accent transition-colors duration-300 focus:outline-none focus:text-accent"
                                                aria-expanded={openDropdown === item.id}
                                            >
                                                {renderMenuItemContent(item)}
                                                {/* Underline */}
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                                            </button>
                                        ) : (
                                            // Regular Link (Keep relative for its underline)
                                            <a
                                                href={item.href || '#'}
                                                className={`relative flex items-center gap-1 p-2 transition-colors duration-300 ${isActive
                                                    ? 'text-accent font-semibold'
                                                    : 'text-gray-700 hover:text-accent'
                                                    }`}
                                            >
                                                {renderMenuItemContent(item, isActive)}
                                                {/* Underline */}
                                                <span
                                                    className={`
                                                    absolute bottom-0 left-0 w-full h-0.5 bg-accent
                                                    transform transition-transform duration-300 ease-out origin-left
                                                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                                                `}
                                                ></span>
                                            </a>
                                        )}
                                        {/* Desktop Dropdown submenu (Positioning logic remains the same, but relative to the LI now) */}
                                        {item.subMenu && (
                                            <ul className={`absolute w-max max-w-xs ${
                                                // This logic now centers relative to the LI's width
                                                item.id === 4 ? 'left-1/2 -translate-x-1/2' : 'left-0'
                                                } top-full mt-2 bg-white shadow-lg  rounded-br-xl rounded-bl-xl z-20 p-4 space-y-1 transform transition-all duration-300 origin-top ${openDropdown === item.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                                                }`}>
                                                {item.subMenuItems?.map(renderSubMenuItem)}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Search Icon Button */}
                    <div className="flex-shrink-0">
                        <button onClick={handleSearchClick} aria-label="جستجو" className="p-2 text-gray-500 hover:text-accent transition-colors duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-gray-100">
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* === Mobile Navbar & Menu Panel === */}
            <div className="flex min-[1090px]:hidden items-center justify-between px-4 py-3 h-16">
                {/* Mobile Logo */}
                <div>
                    <a href="/">
                        <NextImage src="/logo/Logo-U.webp" width={100} height={32} alt="لوگو خانه یوحنا" priority />
                    </a>
                </div>
                {/* Mobile Actions */}
                <div className="flex items-center gap-2">
                    <a href="tel:02128111195" className="p-2 text-accent rounded-md hover:bg-accent/10 transition-colors" aria-label="تماس">
                        {/* Assuming phone.svg exists in public/icons/navbar/ */}
                        <NextImage src="/icons/navbar/phone.svg" alt="" width={24} height={24} />
                    </a>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-md text-accent" aria-label="Toggle Menu" aria-expanded={mobileMenuOpen}>
                        {mobileMenuOpen ? (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>)}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`absolute left-0 right-0 top-full shadow-lg bg-white transition-all duration-300 ease-in-out min-[1090px]:hidden ${mobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"} overflow-y-auto`} style={{ maxHeight: mobileMenuOpen ? 'calc(100vh - 64px)' : '0px' }}> {/* Dynamic max-height */}
                <ul className="flex flex-col p-4 gap-1">
                    {MenuItems.map((item) => {
                        const isActive = !item.subMenu && pathname === item.href;
                        return (
                            <li key={item.id} className="border-b last:border-none border-gray-100">
                                {item.subMenu ? (
                                    // Mobile Dropdown Section
                                    <div>
                                        <button onClick={() => handleDropdownClick(item.id)} className="flex justify-between items-center w-full py-3 px-2 cursor-pointer text-gray-700 hover:text-accent hover:bg-accent/5 transition-colors duration-200 rounded-md">
                                            <span className="flex items-center gap-2">{item.title}</span>
                                            <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                        <ul className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === item.id ? "max-h-96" : "max-h-0"} pl-4 pr-2 pt-1 pb-2 space-y-1`}>
                                            {/* Render submenu items using the same helper */}
                                            {item.subMenuItems?.map(renderSubMenuItem)}
                                        </ul>
                                    </div>
                                ) : (
                                    // Regular Mobile Link Item
                                    <a
                                        href={item.href || '#'}
                                        className={`block py-3 px-2 transition-colors duration-200 rounded-md ${isActive
                                            ? 'text-accent bg-accent/10 font-semibold' // Active styles
                                            : 'text-gray-700 hover:text-accent hover:bg-accent/5' // Default/hover styles
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)} // Close menu on click
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                    {/* Mobile Login/Register Button */}
                    <li className="pt-4">
                        <button className="w-full relative group overflow-hidden bg-accent hover:-translate-y-0.5 transition-all duration-300 py-2.5 px-4 rounded-md text-white font-semibold shadow-sm hover:shadow-md">
                            ورود | ثبت نام
                            <span className="absolute top-0 -left-10 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 blur-sm to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:Bshimmer_0.5s_ease-in-out]"></span>
                        </button>
                    </li>
                </ul>
            </div>
            {/* === End Mobile Navbar & Menu Panel === */}

            {/* Search Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleSearchClose}>
                <div className="flex items-start justify-center pt-20 md:pt-32 px-4" onClick={e => e.stopPropagation()}> {/* Adjusted padding top */}
                    <form onSubmit={handleSearchSubmit} className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl transition-all duration-300 ease-out ${searchOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                        <div className="relative flex items-center p-2 md:p-4"> {/* Adjust padding */}
                            <span className="pl-2 text-gray-400"> <SearchIcon /> </span>
                            <input
                                id="search-input"
                                type="search"
                                name="search"
                                placeholder="جستجو در خانه یوحنا..."
                                className="w-full px-2 py-2 text-sm md:text-base text-gray-700 bg-transparent border-none outline-none focus:ring-0 placeholder:text-gray-400"
                                autoComplete="off"
                            />
                            <button
                                type="button"
                                onClick={handleSearchClose}
                                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                aria-label="Close search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 py-2 md:py-3 bg-gray-50 text-xs text-gray-500 rounded-b-2xl border-t border-gray-100">
                            برای جستجو Enter را فشار دهید یا خارج از کادر کلیک کنید
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

// Note: Ensure Tailwind CSS is configured to recognize dynamic classes like `duration-500`
// if you used a custom value for headlineFadeDuration. If headlineFadeDuration is 500,
// you need `duration-500` in your tailwind.config.js or use a default like `duration-300`.
// Example for tailwind.config.js:
/*
module.exports = {
  // ... other config
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms', // Add this if using 500ms fade
      }
      // ... other extensions
    },
  },
  plugins: [],
}
*/

// Also, ensure the Bshimmer animation is defined in your global CSS:
/*
@keyframes Bshimmer {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(150%); }
}
*/