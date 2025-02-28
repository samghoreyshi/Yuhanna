"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SButton from '@/components/LandingPage/S-Button';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import ImageCarousel from '@/components/ImageCarousel';


export default function Hero() {
    const [isSticky, setIsSticky] = useState(false);
    const [isHidden, setIsHidden] = useState(false); // State for hiding when footer is visible

    // Observer for auto-scroll-buttons visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When auto-scroll-buttons is visible, set isSticky to false
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const buttonContainer = document.getElementById('auto-scroll-buttons');
        if (buttonContainer) observer.observe(buttonContainer);

        return () => {
            if (buttonContainer) observer.unobserve(buttonContainer);
        };
    }, []);

    // Observer for Footer visibility
    useEffect(() => {
        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsHidden(entry.isIntersecting); // Hide buttons when footer is visible
            },
            { threshold: 0.5 }
        );

        const footer = document.getElementById('Footer');
        if (footer) footerObserver.observe(footer);

        return () => {
            if (footer) footerObserver.unobserve(footer);
        };
    }, []);

    return (
        <>
            <section className="relative  overflow-visible  px-8 pt-5  md:px-24 lg:px-64 flex flex-col justify-center items-center bg-gradient-to-b from-accent/10 via-white to-white ">
                {/* Grid Background Overlay */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div
                        className="w-full h-full bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"
                        style={{
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col gap-2 justify-center">
                    <h1 className=" text-[clamp(16px,7vw,55px)] sm:text-[clamp(16px,5vw,55px)] sm:text-center text-black font-extrabold leading-relaxed text-center">
                        کورترین گره زندگیت هم،
                        <br className="hidden md:block" />
                        فقط با دستای <span className="relative text-accent">خودت</span> باز میشه!
                    </h1>
                    <p className="text-[clamp(12px,3vw,16px)] text-[#497886] max-w-4xl text-center mx-auto">
                        هدف یوحنا: تغییر یه باوره. باوری که از کنکور به در نفوذناپذیر درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتند! اما خب فوت و فن خودش رو داره. در یوحنا، ما از تجربه سال‌ها فعالیت در فضای کنکور و به‌کارگیری دانش و روش‌های روز دنیا، دنیای مختص خود شما برای رد شدن از کنکور می‌سازیم. می‌دونیم که گوش‌تون از این حرفا پره؛ ولی ما فقط اهل حرف نیستیم؛ اینجا ما به حرفامون عمل می‌کنیم.
                    </p>

                    {/* Auto-scroll Buttons */}
                    <div id="auto-scroll-buttons" className="p-[1px] mt-4 shadow-md bg-gradient-to-l from-accent to-gray-200 rounded-xl w-fit mx-auto">
                        <div className="flex flex-row sm:flex-nowrap  gap-1 justify-center items-center bg-white rounded-xl p-3">
                            <SButton title='خانه مشاوره' background='bg-blue-50' BGradinetFrom='from-blue-400' BGradientTo='to-blue-100' TextColor='text-blue-900' scrollTo='consulting' />
                            <SButton title='خانه مطالعه' background='bg-[#FFD2EE]' BGradinetFrom='from-[#DD0C78]' BGradientTo='to-[#FFC1E3]' TextColor='text-[#9D144B]' scrollTo='pension' />
                            <SButton title='خانه آموزش' background='bg-orange-100' BGradinetFrom='from-orange-400' BGradinetTo='to-orange-100' TextColor='text-orange-900' scrollTo='education-home' />
                            <SButton title='آزمون' background='bg-[#DEFFD2]' BGradinetFrom='from-[#45800A]' BGradientTo='to-[#CCFFC1]' TextColor='text-[#24570C]' scrollTo='azmoon' />
                            <SButton title='کتاب' background='bg-[#EAD2FF]' BGradinetFrom='from-[#7E25A7]' BGradinetTo='to-[#E8C1FF]' TextColor='text-[#531059]' scrollTo='book-exam' />
                        </div>
                    </div>
                </div>

                {/* Sticky Auto-scroll Buttons with Animation */}
                <motion.div
                    initial={false}
                    animate={{
                        opacity: isSticky && !isHidden ? 1 : 0,
                        y: isSticky && !isHidden ? 0 : 50
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    // Disable pointer events when hidden
                    style={{ pointerEvents: isSticky && !isHidden ? 'auto' : 'none' }}
                    className="fixed z-40 bottom-0 bg-gradient-to-t from-white to-white/0 py-5 left-0 w-full flex justify-center items-center"
                >
                    <div className="p-[1px] mt-4 shadow-xl bg-gradient-to-l from-accent to-gray-200 rounded-xl w-fit mx-auto">
                        <div className="flex flex-row sm:flex-nowrap sm:gap-2 gap-1 justify-center items-center bg-white rounded-xl p-3">
                            <SButton title="خانه مشاوره" background="bg-blue-50" BGradinetFrom="from-blue-400" BGradientTo="to-blue-100" TextColor="text-blue-900" scrollTo="consulting" />
                            <SButton title="خانه مطالعه" background="bg-[#FFD2EE]" BGradinetFrom="from-[#DD0C78]" BGradientTo="to-[#FFC1E3]" TextColor="text-[#9D144B]" scrollTo="pension" />
                            <SButton title="خانه آموزش" background="bg-orange-100" BGradinetFrom="from-orange-400" BGradientTo="to-orange-100" TextColor="text-orange-900" scrollTo="education-home" />
                            <SButton title="آزمون" background="bg-[#DEFFD2]" BGradinetFrom="from-[#45800A]" BGradientTo="to-[#CCFFC1]" TextColor="text-[#24570C]" scrollTo="azmoon" />
                            <SButton title="کتاب" background="bg-[#EAD2FF]" BGradinetFrom="from-[#7E25A7]" BGradinetTo="to-[#E8C1FF]" TextColor="text-[#531059]" scrollTo="book-exam" />
                        </div>
                    </div>
                </motion.div>

            </section>
            {/* Image */}
            <div className="relative overflow-visible mb-5  md:px-32 lg:px-64  ">
                {/* Decorative blurred pink circle behind */}
                <div className="absolute   bg-pink-100 blur-2xl w-64 h-56 sm:w-96 sm:h-96 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                {/* Your existing container */}
                <div className="w-full  overflow-visible   mt-5 max-w-8xl rounded-md sm:rounded-lg aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9] relative z-10">
                    <ImageWithPlaceholder
                        src="/images/hero-banner.webp"
                        className="w-full h-auto overflow-auto object-cover object-center"
                        alt="Hero illustration"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                    />
                </div>
            </div>

        </>
    );
}
