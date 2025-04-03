import React from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';

export default function BookExam() {
    const CardsData = [
        { id: 1, tag: "کتاب های آموزشی اختصاصی", title: "کتاب", ImagePath: "/images/BookExam/1.webp", description: "اینجا هم ماجرا کاملاً شخصیه، شخص خود شما! در یوحنا بر اساس سنجش سطح علمی، روحیه و هدفی که دارید مناسب‌ترین کتاب‌ها رو براتون مشخص می‌کنیم (که می‌تونید با ۲۰ درصد تخفیف و بدون هزینه ارسال تو خود یوحنا تهیه کنید). این کار باعث میشه که همه منابع درسی شما رو بی‌جهت اضافه نکنیم، بلکه با مشخص کردن منابعی که مناسب‌تون هست مسیر رو براتون هموارتر می‌کنیم." , cta: "خرید کتاب" },
        { id: 2, docId: "azmoon", tag: "آزمون های آزمایشی متداول", title: "آزمون", ImagePath: "/images/BookExam/2.webp", description: "آزمون‌های آزمایشی: ما در یوحنا، آزمون‌های قلمچی و سنجش‌های جامع رو هم برگزار می‌کنیم (که البته این‌ها هم تخفیف ویژه‌ی یوحنا رو دارن) و از اون مهم‌تر اینه که با نتیجه آزمون‌ها و با دقت تحلیل کاملاً جدید مناسب‌تر شدن برنامه‌ی درسی و کمک گرفتن خودتون ساخته باشید و بر اساس اون‌ها بتونید بیشتر و بهتر جلو برید.", cta: "ثبت نام در آزمون ها" },
    ];

    return (
        <section className='px-8 md:px-10 lg:px-64 py-8 sm:py-12 md:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
                {CardsData.map(item => (
                    <div
                        key={item.id}
                        id={item.docId}
                        className='flex flex-col h-full mx-auto max-w-lg bg-gradient-to-b from-accent/20 to-white p-5 rounded-lg border border-[#AFDDEB] shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)]'
                    >
                        {/* Responsive Image Container */}
                        <div className="w-full aspect-video relative mb-4">
                            <ImageWithPlaceholder
                                src={item.ImagePath}
                                alt={`${item.title} illustration`}
                                fill
                                className="object-contain rounded-md object-center"
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                            />
                        </div>

                        {/* --- Tag and Title Container --- */}
                        <div className="flex justify-between items-center mb-2"> {/* Container to hold tag and title */}

                            {/* Title */}
                            <h3 className='font-extraBold text-xl md:text-2xl lg:text-3xl text-accent'>
                                {item.title}
                            </h3>

                            {/* Minimal Tag */}
                            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                {/* Added whitespace-nowrap if tags are short and shouldn't wrap */}
                                {item.tag}
                            </span>


                        </div>
                        {/* --- End Tag and Title Container --- */}


                        {/* Description */}
                        <p className='w-full text-justify text-[clamp(13px,1.5vw,15px)] text-[#497886] leading-relaxed flex-grow mb-4'>
                            {item.description}
                        </p>

                        {/* CTA Button */}
                        <div className='mt-auto w-full flex justify-center md:justify-end'>
                            <button
                                type="button"
                                // Ensure 'accent' is defined in your tailwind.config.js colors
                                className='bg-accent text-white font-semibold px-6 py-2 rounded-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors w-full md:w-auto'
                            >
                                {item.cta} {/* Or maybe a different CTA text like "Learn More"? */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}