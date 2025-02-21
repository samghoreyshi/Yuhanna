
import SButton from '@/components/LandingPage/S-Button'
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'

export default function Hero() {

    return (
        <section className=" p-8 md:py-10 md:px-32  lg:px-64 flex flex-col justify-center items-center bg-gradient-to-b from-accent/10 via-white to-white overflow-hidden">
            {/* title Section */}
            <div className="w-full flex flex-col gap-2 justify-center">
                <h1 className="text-[clamp(16px,7vw,38px)] sm:text-center  text-black font-extraBlack leading-relaxed text-right ">
                    کورترین گره زندگیت هم،
                    <br className="hidden md:block" />
                    فقط با دستای <span className="text-accent">خودت</span> باز میشه!
                </h1>
                <p className=" text-[clamp(12px,3vw,14px)] text-[#497886] max-w-3xl text-justify sm:text-center mx-auto">
                    هدف یوحنا: تغییر یه باوره. باوری که از کنکور به در نفوذناپذیر درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتند! اما خب فوت و فن خودش رو داره. در یوحنا، ما از تجربه سال‌ها فعالیت در فضای کنکور و به‌کارگیری دانش و روش‌های روز دنیا، دنیای مختص خود شما برای رد شدن از کنکور می‌سازیم. می‌دونیم که گوش‌تون از این حرفا پره؛ ولی ما فقط اهل حرف نیستیم؛ اینجا ما به حرفامون عمل می‌کنیم. در یوحنا، هر کدام از شما دانش‌آموزها روش اختصاصی خودتون رو برای مطالعه، آماده‌سازی و حتی انتخاب رشته تجربه می‌کنید. ما به شما مسیر نمی‌دیم؛ ما همراه شما هستیم تا کمک کنیم بهترین مسیر رو برای خودتون بسازید.
                </p>
                {/* autoscroll buttons */}
                <div className="p-[1px] mt-4 sm:shadow-md sm:bg-gradient-to-l from-accent to-gray-200 rounded-xl w-fit mx-auto ">
                    <div className="flex flex-row sm:flex-nowrap gap-2 justify-center items-center sm:bg-white rounded-xl sm:p-3  ">
                        <SButton
                            title='خانه مشاوره'
                            background='bg-blue-50'
                            BGradinetFrom='from-blue-400'
                            BGradientTo='to-blue-100'
                            TextColor='text-blue-900'
                            scrollTo='consulting'

                        />
                        <SButton
                            title='خانه مطالعه'
                            background='bg-[#FFD2EE]'
                            BGradinetFrom='from-[#DD0C78]'
                            BGradientTo='to-[#FFC1E3]'
                            TextColor='text-[#9D144B]'
                            scrollTo='pension'

                        />
                        <SButton

                            title='خانه آموزش'
                            background='bg-orange-100'
                            BGradinetFrom='from-orange-400'
                            BGradientTo='to-orange-100'
                            TextColor='text-orange-900'
                            scrollTo='education-home'
                        />
                        <SButton

                            title='آزمون'
                            background='bg-[#DEFFD2]'
                            BGradinetFrom='from-[#45800A]'
                            BGradientTo='to-[#CCFFC1]'
                            TextColor='text-[#24570C]'
                            scrollTo='book-exam'
                        />
                        <SButton

                            title='کتاب'
                            background='bg-[#EAD2FF]'
                            BGradinetFrom='from-[#7E25A7]'
                            BGradientTo='to-[#E8C1FF]'
                            TextColor='text-[#531059]'
                            scrollTo='book-exam'
                        />
                    </div>
                </div>

            </div>
            <div className="w-full border border-accent/20 max-w-7xl overflow-hidden mt-8 sm:mt-10 rounded-md sm:rounded-lg bg-accent/20 sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]">
                <ImageWithPlaceholder
                    src="/images/hero.webp"
                    className="w-full h-auto object-contain sm:object-cover object-center"
                    alt="Hero illustration"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
            </div>




        </section>
    )
}