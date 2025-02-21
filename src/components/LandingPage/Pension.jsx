import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
import TagsButton from '@/components/LandingPage/Tags'



export default function Pension() {


    return (

        <section className="flex flex-col">
            <div className='p-8 md:px-32 lg:px-64 w-full flex flex-col items-start sm:items-center justify-center gap-4 md:gap-6'>
                <span className='text-4xl sm:text-5xl md:text-6xl font-extraBlack text-secondary pb-4 w-fit border-b border-accent'>
                    خانه <span className='text-accent'>مطالعه</span>
                </span>

                <span className='font-extraBold text-secondary text-xl md:text-2xl lg:text-3xl'>
                    یک فضای حرفه‌ای ذهنتو منسجم میکنه...
                </span>

                <p className='max-w-5xl text-justify sm:text-center text-[clamp(12px,3vw,14px)] text-[#497886]  leading-relaxed'>
                    پانسیون حضوری: پَرتی حواس و هدر رفتن وقت همیشه بزرگ‌ترین سدهای درست درس خوندن بوده و هست. ما در خانه‌ی مطالعه‌ی یوحنا با چند ترفند حساب‌شده، راه‌حلی برای این مسئله پیدا کرده‌ایم.
                    یه فضای مطالعه که به اندازه‌ی اتاق خودتون گرم، آشنا و خودمونی و به اندازه‌ی یه کتابخونه آرومه و برنامه‌ریزی درست و حساب‌شده داره. اینجا می‌تونید راحت و درست درس بخونید.

                    ۵ اردو! راستی ما ۵ تا اردوی مطالعه هم داریم که تو تابستون، امتحان‌های نهایی و کنکور (نوروز و البته ۴ روز مونده به کنکور) برگزار می‌شه تا شما رو آماده کنیم.
                    این رو هم بگیم که در تک‌تک مطالعه‌هامون به همون اندازه امکانات واقعی‌ای (مثل آشپزخونه، خوابگاه و حتی فضای سبز...) که اینجا داریم، موقع اردو هم داریم در کنار یک هم‌پای مهربون که اونجا کمتر هوای خونه به سرتون بزنه!

                    پانسیون آنلاین: ترافیک و تلف شدن وقت؟ می‌تونید تو پانسیون آنلاین یوحنا انقدر از تو خونه و اتاق خودتون به شکل وبینار شرکت کنید. ضروریه پلتفرم‌های مجازتون مستندات از وقت و انرژیتون، بهترین بهره رو ببرید.
                </p>
                <div className=' flex items-center justify-center gap-2 mt-4 md:mt-6 w-full md:w-fit'>
                    <TagsButton

                        title='فضای حرفه‌ای'
                        background='bg-[#EAD2FF]'
                        BGradinetFrom='from-[#7E25A7]'
                        BGradientTo='to-[#E8C1FF]'
                        TextColor='text-[#531059]'
                    />
                    <TagsButton

                        title='امن و آرام'
                        background='bg-[#DEFFD2]'
                        BGradinetFrom='from-[#45800A]'
                        BGradientTo='to-[#CCFFC1]'
                        TextColor='text-[#24570C]'
                    />
                    <TagsButton
                        title='ثبت نام پانسیون'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                </div>
            </div>

            <div className="px-8 md:px-32 lg:px-64">
                <div className="h-[50px] sm:h-[100px] border-x  border-dashed border-accent">

                </div>
            </div>
            <div className="px-8 md:px-32 lg:px-64 border-y border-dashed border-accent">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-t from-accent/10 to-white gap-5 border-x border-dashed border-accent p-5 sm:p-20">
                    <div className=" w-full relative  overflow-hidden">
                        <ImageWithPlaceholder
                            src="/images/Pension/Pension-Online.webp"
                            alt="Hero illustration"
                            fill
                            className="object-cover rounded-md object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                        />
                    </div>
                    <div className=" w-full relative">
                        <ImageWithPlaceholder
                            src="/images/Pension/Pension-inPerson.webp"
                            alt="Hero illustration"
                            fill
                            className="object-cover rounded-md object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                        />
                    </div>
                </div>
            </div>
            <div className="px-8 md:px-32 lg:px-64">
                <div className="h-[50px] sm:h-[100px]  border-x  border-dashed border-accent">

                </div>
            </div>
        </section>
    )
}