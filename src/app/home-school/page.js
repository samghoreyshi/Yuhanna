"use client"

// pages/homeschooling.js (یا مسیر مورد نظر شما)
import React, { useState } from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'; // مسیر کامپوننت خودتان
import CTA from "@/components/LandingPage/CTA"; // مسیر کامپوننت خودتان
// import PricingSection from "@/components/LandingPage/PricingSection"; // اگر نیاز دارید، از کامنت خارج کنید

// --- آیکون‌های مورد نیاز ---

// آیکون برای دکمه CTA هیرو
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H3.56l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06L3.56 7.25H13.25A.75.75 0 0 1 14 8Z" clipRule="evenodd" /></svg>;

// آیکون‌ها برای بخش خدمات
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600 inline-block ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500 inline-block ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.31h5.418a.562.562 0 0 1 .321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988h5.418a.563.563 0 0 0 .475-.31L11.48 3.5Z" /></svg>;
const AcademicCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 inline-block ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>;
const InformationCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-600 inline-block ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>;

// آیکون برای آکاردئون FAQ
const ChevronDownIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>;

// --- آیکون‌های جدید پیشنهادی برای پایه‌های مختلف (Placeholder - با SVG جایگزین شود) ---
const Grade1Icon = () => <span className="ml-2 text-xl">✏️</span>;
const Grade2Icon = () => <span className="ml-2 text-xl">📚</span>;
const Grade3Icon = () => <span className="ml-2 text-xl">💡</span>;
const Grade4Icon = () => <span className="ml-2 text-xl">🌍</span>;
const Grade5Icon = () => <span className="ml-2 text-xl">🔬</span>;
const Grade6Icon = () => <span className="ml-2 text-xl">⭐</span>;
const Grade7Icon = () => <span className="ml-2 text-xl">📐</span>;
const Grade8Icon = () => <span className="ml-2 text-xl">🧪</span>;
const Grade9Icon = () => <span className="ml-2 text-xl">🧭</span>;
const Grade10Icon = () => <span className="ml-2 text-xl">📈</span>;
const Grade11Icon = () => <span className="ml-2 text-xl">🧬</span>;
const Grade12Icon = () => <span className="ml-2 text-xl">🎓</span>;


export default function Homeschooling() {

    // --- State برای تب‌ها و FAQ ---
    const [activeTab, setActiveTab] = useState('primary');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleFaqToggle = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // --- داده‌های مقاطع تحصیلی (با کارت‌های مجزا برای همه پایه‌ها) ---
    const educationalLevels = {
        primary: {
            title: "مقطع ابتدایی",
            content: (
                // استفاده از Grid Layout
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* --- پایه اول --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        {/* بخش کاور/بصری */}
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-1.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        {/* بخش محتوا */}
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه اول ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه دوم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-2.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه دوم ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه سوم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-3.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه سوم ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه چهارم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-4.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه چهارم ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                <li><StarIcon /> آمادگی تیزهوشان</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه پنجم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-5.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه پنجم ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                <li><StarIcon /> آمادگی تیزهوشان</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه ششم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/1-6.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه ششم ابتدایی</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                <li><StarIcon /> آمادگی تیزهوشان</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                </div> // پایان Grid
            )
        },
        middle1: {
            title: "متوسطه دوره اول",
            content: (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* --- پایه هفتم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/2-1.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه هفتم</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه هشتم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/2-2.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه هشتم</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                <li><StarIcon /> آمادگی تیزهوشان</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                    {/* --- پایه نهم --- */}
                    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                            {/* Image Content */}
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/2-3.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                            <h4 className="text-md font-semibold text-secondary mb-2">پایه نهم</h4>
                            <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                <li><StarIcon /> آمادگی تیزهوشان</li>
                            </ul>
                            <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری</p>
                        </div>
                    </div>
                </div> // پایان Grid
            )
        },
        middle2: {
            title: "متوسطه دوره دوم",
            content: (
                // استفاده از Fragment چون باکس ویژه کنکور خارج از گرید قرار می‌گیرد
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* --- پایه دهم --- */}
                        <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                                {/* Image Content */}
                                <ImageWithPlaceholder
                                    src="/images/HomeSchool/3-1.webp"
                                    className="w-full h-full object-cover"
                                    alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                    priority
                                />
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <h4 className="text-md font-semibold text-secondary mb-2">پایه دهم</h4>
                                <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                    <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                    <li><AcademicCapIcon /> آمادگی کنکور</li>
                                </ul>
                                <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری / مجموعه</p>
                            </div>
                        </div>
                        {/* --- پایه یازدهم --- */}
                        <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                                {/* Image Content */}
                                <ImageWithPlaceholder
                                    src="/images/HomeSchool/3-2.webp"
                                    className="w-full h-full object-cover"
                                    alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                    priority
                                />
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <h4 className="text-md font-semibold text-secondary mb-2">پایه یازدهم</h4>
                                <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                    <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                    <li><AcademicCapIcon /> آمادگی کنکور</li>
                                </ul>
                                <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری / مجموعه</p>
                            </div>
                        </div>
                        {/* --- پایه دوازدهم --- */}
                        <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                            <div className="h-72 bg-amber-50 flex items-center justify-center"> {/* رنگ نمونه برای متوسطه ۲ */}
                                {/* Image Content */}
                                <ImageWithPlaceholder
                                    src="/images/HomeSchool/3-3.webp"
                                    className="w-full h-full object-cover"
                                    alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                    priority
                                />
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <h4 className="text-md font-semibold text-secondary mb-2">پایه دوازدهم</h4>
                                <ul className="text-sm space-y-1 list-inside text-slate-600 mb-3 flex-grow">
                                    <li><CheckCircleIcon /> کلاس‌های تقویتی</li>
                                    <li><AcademicCapIcon /> آمادگی کنکور</li>
                                </ul>
                                <p className="mt-auto text-xs text-slate-500 pt-2 border-t border-slate-100"><InformationCircleIcon /> آنلاین / حضوری / مجموعه</p>
                            </div>
                        </div>
                    </div>

                    {/* --- کلاس‌های ویژه کنکور (خارج از Grid) --- */}
                    <div className="mt-8 p-4 w-fit border border-amber-200 bg-amber-50 rounded-lg shadow-sm">
                        <h4 className="text-lg font-semibold text-amber-800 mb-3">کلاس‌های ویژه کنکور (تکمیلی)</h4>
                        <p className="text-sm text-amber-700 mb-3">علاوه بر کلاس‌های مستمر آمادگی کنکور، این کارگاه‌ها و همایش‌های ویژه نیز ارائه می‌شوند:</p>
                        <ul className="space-y-2 list-inside text-amber-700 text-sm">
                            <li>⭐ همایش جمع‌بندی</li>
                            <li>⭐ کارگاه نکته و تست مبحثی</li>
                            <li>⭐ کارگاه شب امتحان</li>
                        </ul>
                        <p className="mt-3 text-xs text-amber-600">این کلاس‌ها ممکن است به صورت آنلاین یا حضوری (در محل یا مجموعه) برگزار شوند.</p>
                    </div>
                </> // پایان Fragment
            )
        }
    };

    // --- داده‌های سوالات متداول (FAQ) ---
    const faqs = [
        {
            question: "نحوه برگزاری امتحانات در سیستم هوم اسکولینگ چگونه است؟",
            answer: "دانش‌آموزان هوم اسکولینگ می‌توانند طبق قوانین آموزش و پرورش در امتحانات مدارس دولتی یا غیردولتی مشخصی که به عنوان مدرسه میزبان تعیین می‌شوند، شرکت کرده و مدرک رسمی دریافت کنند. هماهنگی‌های لازم توسط مجموعه یوحنا انجام می‌شود."
        },
        {
            question: "شرایط شرکت در کلاس‌های هوم اسکولینگ یوحنا چیست؟",
            answer: "شرط اصلی، تمایل خانواده و دانش‌آموز به استفاده از این روش آموزشی است. پس از مشاوره اولیه و تعیین سطح، برنامه آموزشی شخصی‌سازی شده و کلاس‌ها آغاز می‌شود. نیاز به تعهد و همکاری خانواده برای پیگیری روند آموزشی وجود دارد."
        },
        {
            question: "هزینه کلاس‌ها و نحوه پرداخت به چه صورت است؟",
            answer: "هزینه‌ها بر اساس مقطع تحصیلی، تعداد کلاس‌های انتخابی و نحوه برگزاری (آنلاین، حضوری در محل، حضوری در مجموعه) متفاوت است. پس از مشاوره و نهایی شدن برنامه، جزئیات پرداخت به صورت کامل اعلام خواهد شد. امکان پرداخت اقساطی نیز وجود دارد."
        },
        {
            question: "آیا مدرک تحصیلی هوم اسکولینگ معتبر است؟",
            answer: "بله، از آنجایی که دانش‌آموزان در امتحانات رسمی آموزش و پرورش شرکت می‌کنند، مدرک تحصیلی دریافتی کاملاً معتبر و رسمی است و تفاوتی با مدرک دانش‌آموزان مدارس عادی ندارد."
        }
    ];

    // --- داده‌های گالری بنتو (نمونه) ---
    const bentoItems = [
        { id: 1, type: 'image', span: 'col-span-2 row-span-2', content: '/images/Homeschooling/bento/hs_1.webp', alt: 'دانش آموز در حال یادگیری آنلاین در خانه' },
        { id: 2, type: 'image', span: 'col-span-1 row-span-1', content: '/images/Homeschooling/bento/hs_2.webp', alt: 'معلم در حال تدریس خصوصی در محل دانش آموز' },
        { id: 3, type: 'image', span: 'col-span-1 row-span-1', content: '/images/Homeschooling/bento/hs_3.webp', alt: 'محیط آموزشی منعطف و شاد' },
        { id: 4, type: 'image', span: 'col-span-2 row-span-1', content: '/images/Homeschooling/bento/hs_4.webp', alt: 'کتاب ها و منابع آموزشی هوم اسکولینگ' },
    ];


    return (
        <>
            {/* === Hero Section === */}
            <section className='relative flex flex-col lg:flex-row justify-center items-center pt-5 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-white'>
                {/* افکت‌های پس‌زمینه */}
                <div className="absolute -top-20 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-accent/10 to-transparent blur-3xl opacity-50 pointer-events-none z-0" aria-hidden="true"></div>
                <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-100/20 to-transparent blur-3xl opacity-40 pointer-events-none z-0" aria-hidden="true"></div>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div
                        className="w-full h-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"
                        style={{
                            maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
                            WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)"
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                        <h1 className="text-[clamp(28px,7vw,50px)] sm:text-[clamp(32px,5vw,40px)] text-secondary font-extrabold leading-tight sm:leading-tight mb-6">
                             هـــــوم اِسکـــول       
                            <br className="block" />
                              آموزش در <span className="relative mt-2 text-accent inline-block px-1">محیط دلخواه</span> شما
                        </h1>
                        <p className="text-[clamp(15px,3vw,18px)] text-slate-600 max-w-2xl text-center md:text-justify leading-relaxed mb-8">
                            کلاس‌های آموزشی <span className="font-semibold text-slate-700">انعطاف‌پذیر</span> در محل موردنظر شما (آنلاین یا حضوری)، با برنامه درسی <span className="font-semibold text-slate-700">شخصی‌سازی‌شده</span> و امکان شرکت در امتحانات مدارس تعیین‌شده برای دریافت مدرک رسمی. بهترین مسیر برای شکوفایی استعدادهای فرزندتان را با یوحنا تجربه کنید.
                        </p>
                        <button className='flex items-center gap-2 group bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-6 py-3 rounded-full ring-1 ring-inset ring-accent/30 transition-all duration-300 hover:ring-accent/40 shadow-md hover:shadow-lg hover:shadow-accent/20'>
                            <span>شروع کنید: درخواست مشاوره رایگان</span>
                            <ArrowLeftIcon />
                        </button>
                    </div>
                    {/* Image Content */}
                    <div className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 flex justify-center lg:justify-start">
                        <div className="w-full aspect-[4/3] md:aspect-square relative z-10 rounded-2xl shadow-xl shadow-slate-900/10 overflow-hidden border border-slate-200/50">
                            <ImageWithPlaceholder
                                src="/images/HomeSchool/HS.webp"
                                className="w-full h-full object-cover"
                                alt="کودک در حال یادگیری با سیستم هوم اسکولینگ یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* === End Hero Section === */}

            {/* === Educational Levels & Services Section === */}
            <section id="services" className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">خدمات آموزشی برای هر پایه</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            مقطع مورد نظر را انتخاب کنید و خدمات مخصوص هر پایه را ببینید.
                        </p>
                    </div>

                    {/* Tab Buttons (بدون تغییر) */}
                    <div className="flex justify-center flex-wrap space-x-1 space-x-reverse border-b border-slate-200 mb-8">
                        {Object.keys(educationalLevels).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-3 py-3 text-sm md:text-base font-medium rounded-t-lg transition-colors duration-200 focus:outline-none mb-[-1px] ${ // mb-[-1px] برای همپوشانی border
                                    activeTab === key
                                        ? 'border border-slate-200 border-b-white text-accent bg-white' // استایل تب فعال
                                        : 'border border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100/50' // استایل تب غیرفعال
                                    }`}
                            >
                                {educationalLevels[key].title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-8">
                        {educationalLevels[activeTab]?.content}
                    </div>
                </div>
            </section>
            {/* === End Educational Levels & Services Section === */}

            {/* === Bento Gallery Section === */}
            {/* <section id="gallery" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">نگاهی به تجربه هوم اسکولینگ</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            تصاویری از محیط‌های یادگیری منعطف و فعالیت‌های دانش‌آموزان ما.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,_auto)] md:auto-rows-[minmax(220px,_auto)]">
                        {bentoItems.map((item) => (
                            <div key={item.id} className={`${item.span} bg-white rounded-xl border border-slate-200/80 overflow-hidden group relative transition-shadow duration-300 shadow-sm hover:shadow-md`}>
                                <ImageWithPlaceholder
                                    src={item.content}
                                    alt={item.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            {/* === End Bento Gallery Section === */}

            {/* === Pricing Section (Commented Out) === */}
            {/* <PricingSection /> */}

            {/* === FAQ Section === */}
            <section id="faq" className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">سوالات متداول</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            پاسخ به پرسش‌های رایج شما درباره هوم اسکولینگ در یوحنا.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                                <button
                                    onClick={() => handleFaqToggle(index)}
                                    className="w-full flex justify-between items-center text-right p-4 md:p-5 bg-slate-50 hover:bg-slate-100 focus:outline-none transition-colors duration-200"
                                >
                                    <span className="text-base md:text-lg font-medium text-secondary">{faq.question}</span>
                                    <span className={`transform ${openFaqIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                        <ChevronDownIcon />
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-4 md:p-5 border-t border-slate-200 text-slate-600 leading-relaxed text-sm md:text-base bg-white">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* === End FAQ Section === */}

            {/* === CTA Section === */}
            <CTA />

        </>
    );
}