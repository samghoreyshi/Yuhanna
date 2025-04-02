import React from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import CTA from "@/components/LandingPage/CTA";
import PricingSection from "@/components/LandingPage/PricingSection";


// --- Icons ---
const FeatureIcon1 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const FeatureIcon2 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>;
const FeatureIcon3 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;
const FeatureIcon4 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" /></svg>;
const ArrowLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H3.56l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06L3.56 7.25H13.25A.75.75 0 0 1 14 8Z" clipRule="evenodd" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>;
// Add ClockIcon if using Opening Hours
// const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>;


export default function Pension() {

    const features = [
        {
            icon: <FeatureIcon1 />,
            title: "محیط مطالعاتی اختصاصی",
            description: "یک فضای آرام، منظم و بدون حواس‌پرتی برای تمرکز حداکثری روی درس‌ها."
        },
        {
            icon: <FeatureIcon2 />,
            title: "برنامه‌ریزی و نظارت روزانه",
            description: "نظارت مستمر بر روند مطالعه شما و ارائه راهکارهای بهینه برای پیشرفت."
        },
        {
            icon: <FeatureIcon3 />,
            title: "نظم و مدیریت زمان",
            description: "کنترل زمان مطالعه و استراحت با روش‌های استاندارد برای افزایش بهره‌وری."
        },
        {
            icon: <FeatureIcon4 />,
            title: "فضای انگیزشی و حمایتی",
            description: "در کنار دانش‌آموزان پرتلاش دیگر، با انگیزه بیشتری برای موفقیت تلاش کنید."
        },
    ]

    const bentoItems = [
        { id: 1, type: 'image', span: 'col-span-2 row-span-2', content: 'bentoGallery/1.webp', alt: 'دانش‌آموز در حال مطالعه' },
        { id: 2, type: 'image', span: 'col-span-1 row-span-1', content: 'bentoGallery/2.webp', alt: 'گرافیک نمایش تجربه' },
        { id: 3, type: 'image', span: 'col-span-1 row-span-1', content: 'bentoGallery/3.webp', alt: 'جلسه مشاوره آنلاین' },
        { id: 4, type: 'image', span: 'col-span-2 row-span-1', content: 'bentoGallery/4.webp', alt: 'تصویر مرتبط با رضایت دانش‌آموز' },
        { id: 5, type: 'image', span: 'col-span-1 row-span-1', content: 'bentoGallery/5.webp', alt: 'کتاب‌های کمک آموزشی' },
    ];

    return (
        <>
            {/* === Hero Section === */}
            <section className='relative flex flex-col lg:flex-row justify-center items-center pt-5 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-white'>
                {/* ... blurred elements ... */}
                <div className="absolute -top-20 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br from-accent/15 to-transparent blur-3xl opacity-60 pointer-events-none z-0" aria-hidden="true"></div>
                <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-100/30 to-transparent blur-3xl opacity-50 pointer-events-none z-0" aria-hidden="true"></div>
                {/* ... grid background ... */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div
                        className="w-full h-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
                        style={{
                            maskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)",
                            WebkitMaskImage: "radial-gradient(ellipse at top, black 30%, transparent 70%)"
                        }}
                    />
                </div>
                {/* ... content area ... */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-right">
                        <h1 className="text-[clamp(28px,7vw,50px)] sm:text-[clamp(32px,5vw,40px)] text-secondary font-extrabold leading-tight sm:leading-tight mb-6">
                            پانسیون
                            <br className="hidden md:block" />
                            <span className="relative text-accent inline-block px-1">حضوری</span> خانه یوحــــنا
                        </h1>
                        <p className="text-[clamp(15px,3vw,18px)] text-slate-600 max-w-2xl md:text-justify leading-relaxed mb-8">
                            اگر به دنبال یک محیط <span className="font-semibold text-slate-700">آرام، منظم و پرانرژی</span> برای مطالعه و آمادگی کنکور هستید، پانسیون مطالعاتی حضوری ما بهترین انتخاب برای شماست!
                            اینجا، شما در یک فضای <span className="font-semibold text-slate-700">اختصاصی و حرفه‌ای</span> بدون حواس‌پرتی، می‌توانید با تمرکز کامل درس بخوانید.
                            با <span className="font-semibold text-slate-700">برنامه‌ریزی و نظارت روزانه</span>، مدیریت زمان و سیستم‌های هوشمند، بهره‌وری شما به حداکثر می‌رسد.
                            در کنار دانش‌آموزانی که مانند شما برای موفقیت تلاش می‌کنند، <span className="font-semibold text-accent">انگیزه و پشتکار شما چند برابر خواهد شد!</span>
                            📍 همین حالا ثبت‌نام کنید و یک قدم به رتبه‌ی برتر نزدیک‌تر شوید!
                        </p>
                        <button className='flex items-center gap-2 group bg-accent/10 hover:bg-accent/20 text-accent font-semibold text-sm px-6 py-3 rounded-full ring-1 ring-inset ring-accent/30 transition-all duration-300 hover:ring-accent/40 hover:shadow-md hover:shadow-accent/10'>
                            <span>ثبت‌نام کن و به خانواده یوحنا بپیوند!</span>
                            <ArrowLeftIcon />
                        </button>
                    </div>
                    {/* Image Content */}
                    <div className="relative w-full max-w-xl lg:max-w-none mx-auto lg:mx-0 flex justify-center lg:justify-start">
                        <div className="w-full aspect-square relative z-10 rounded-2xl shadow-xl shadow-slate-900/10 overflow-hidden border border-slate-200/50">
                            <ImageWithPlaceholder
                                src="/images/Pension/p-inhero.webp"
                                className="w-full h-full object-cover"
                                alt="تصویر گرافیکی مرتبط با آموزش و موفقیت در یوحنا"
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 45vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* === End Hero Section === */}

            {/* === Features Section === */}
            <section id="features" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">چرا یوحنا؟</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            ما فقط مشاوره نمی‌دیم، مسیر موفقیت شخصی‌سازی‌شده‌ی شما رو طراحی و اجرا می‌کنیم.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                                <div className="bg-accent/10 p-3 rounded-full mb-4 inline-block">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* === End Features Section === */}

            {/* === Bento Gallery Section === */}
            <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">نگاهی به دنیای یوحنا</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            تصاویری از محیط آموزشی، نتایج دانش‌آموزان و فعالیت‌های ما.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,_auto)]">
                        {bentoItems.map((item) => (
                            <div key={item.id} className={`${item.span} bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden group relative transition-shadow duration-300 shadow-sm hover:shadow-md`}>
                                <ImageWithPlaceholder
                                    src={item.content}
                                    alt={item.alt}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {/* <p className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.alt}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* === End Bento Gallery Section === */}


            <PricingSection />

            {/* === CTA Section === */}
            <CTA />

        </>
    );
}