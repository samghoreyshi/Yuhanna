import react from 'react';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
import TagsButton from '@/components/LandingPage/Tags'




export default function BookExam() {

    const CardsData = [
        { id: 1, tag: "خرید کتاب", title: "کتاب", ImagePath: "/images/BookExam/1.webp", description: "اینجا هم ماجرا کاملاً شخصیه، شخص خود شما! در یوحنا بر اساس سنجش سطح علمی، روحیه و هدفی که دارید مناسب‌ترین کتاب‌ها رو براتون مشخص می‌کنیم (که می‌تونید با ۲۰ درصد تخفیف و بدون هزینه ارسال تو خود یوحنا تهیه کنید). این کار باعث میشه که همه منابع درسی شما رو بی‌جهت اضافه نکنیم، بلکه با مشخص کردن منابعی که مناسب‌تون هست مسیر رو براتون هموارتر می‌کنیم." },
        { id: 2, tag: "ثبت نام در آزمون", title: "آزمون", ImagePath: "/images/BookExam/2.webp", description: "آزمون‌های آزمایشی: ما در یوحنا، آزمون‌های قلمچی و سنجش‌های جامع رو هم برگزار می‌کنیم (که البته این‌ها هم تخفیف ویژه‌ی یوحنا رو دارن) و از اون مهم‌تر اینه که با نتیجه آزمون‌ها و با دقت تحلیل کاملاً جدید مناسب‌تر شدن برنامه‌ی درسی و کمک گرفتن خودتون ساخته باشید و بر اساس اون‌ها بتونید بیشتر و بهتر جلو برید." },
    ];



    return (
        <section className='px-8 md:px-32 lg:px-64 sm:py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {CardsData.map(item => (
                    <div
                        key={item.id}
                        className='flex flex-col h-full min-h-[550px] items-start justify-between gap-2 sm:gap-5 bg-gradient-to-b from-accent/20 to-white p-5 rounded-lg border border-[#AFDDEB] shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)]'
                    >
                        {/* Image */}
                        <div className="bg-blue-50 w-full h-[250px] relative">
                            <ImageWithPlaceholder
                                src={item.ImagePath}
                                alt="Hero illustration"
                                fill
                                className="object-cover rounded-md object-center"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                            />
                        </div>

                        {/* Title */}
                        <h3 className='font-extraBold text-xl md:text-2xl lg:text-3xl text-secondary'>
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className='w-full text-justify text-[clamp(12px,3vw,14px)] text-[#497886] leading-relaxed flex-grow'>
                            {item.description}
                        </p>

                        {/* Button (Stays at Bottom) */}
                        <div className='mt-2 w-full md:w-fit'>
                            <TagsButton
                                title={item.tag}
                                background='bg-blue-50'
                                BGradinetFrom='from-blue-400'
                                BGradientTo='to-blue-100'
                                TextColor='text-blue-900'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>



    )
}