import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
import TagsButton from '@/components/LandingPage/Tags'

export default function Education() {
    return (
        <section className="w-full px-8 sm:px-32 lg:px-32 xl:px-64 sm:py-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Text Content */}
            <div className='w-full lg:max-w-[50%] xl:max-w-[600px] flex flex-col justify-center gap-4 md:gap-6'>
                <span className='text-4xl sm:text-5xl md:text-6xl font-extraBlack pb-4 w-fit border-b border-accent'>
                    خانه <span className='text-accent'>آموزش</span>
                </span>

                <span className='font-extraBold text-[#497886] text-xl md:text-2xl lg:text-3xl'>
                    یک معلم خوب بهت انگیزه میده...
                </span>

                <p className='w-full text-justify text-[clamp(12px,3vw,14px)] text-[#497886]  leading-relaxed'>
                    خانه آموزش، بر خلاف چیزی که ممکنه از اسمش برداشت کنید، صرفاً یه برنامه کلاس هفتگی و ماهیانه روتین و از پیش تعیین‌شده نیست، بلکه مجموعه‌ای از کارگاه‌های آموزشی دقیق، منظم و متنوعه که منحصراً تکنیک شما برنامه‌ریزی میشه و ماه به ماه. اینجا بعد از تعیین سطح اولیه (که ناگفته پیداست با روش و آزمون‌های علمی و توسط ما آنالیز سطح دانش)، هدفتون بر اساس میزان مهارتتون تو هر سطح به برنامه آموزشی شخصی براتون چیده میشه تا برای بخش‌هایی که مهارت کمتری در اونها دارید، زمان بیشتری داشته باشید. با این روش، نه تعداد جلسه‌های کلاس متناسب با نیاز خود شما تعیین شده تا حضورتون در کلاس‌هایی که اونها رو بلد دارین، زمان و انرژی صرفه‌جویی کنه، پشتیبانی هم در همه مراحل، عملکردتون رو گیلد و بعد از هر جلسه آموزشی با آزمون‌های QT به دقت تحلیل و پیگیری می‌کنه تا بفهمیم کجا نیاز به صرف وقت و انرژی بیشتری دارید و هم بتونیم در اون قسمت‌ها پیشرفتتون سرعت بیشتری بدیم.
                    کلاس‌ها کارگاه‌محور، تا کمترین توجه روی جزئیات مباحث هر درس تمرکز کنید و برای باقی قسمت‌ها ذهن بازتری داشته باشید.                </p>

                <div className=' flex items-center  gap-2 mt-4 md:mt-6 w-full md:w-fit'>
                    <TagsButton

                        title='کارگاه های آموزشی'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                    <TagsButton

                        title='آنالیز مهارت های شما'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                    <TagsButton
                        title='ثبت نام در دوره ‌ها'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                </div>
            </div>

            {/* Image Container */}
            <div className='w-full lg:max-w-[50%] overflow-visible  xl:max-w-[600px] aspect-square md:aspect-[4/5] lg:aspect-square'>
                <ImageWithPlaceholder
                    src="/images/Educator.webp"
                    className="w-full overflow-visible h-full object-contain rounded-lg shadow-sm"
                    alt="Counseling illustration"
                />
            </div>
        </section>
    )
}