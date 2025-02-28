import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
import TagsButton from '@/components/LandingPage/Tags'

export default function Counseling() {
    return (
        <section className="w-full px-8 sm:px-32 lg:px-32 xl:px-64 sm:py-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-20 items-center">
            {/* Text Content */}
            <div className='w-full lg:max-w-[50%] xl:max-w-[600px] flex flex-col justify-center gap-4 md:gap-6'>
                <span className='text-4xl sm:text-5xl md:text-6xl font-extraBlack pb-4 w-fit border-b border-accent'>
                    خانه <span className='text-accent'>مشاوره</span>
                </span>

                <span className='font-extraBold text-[#497886] text-xl md:text-2xl lg:text-3xl'>
                    یک مشاور خوب راه رو برات باز میکنه...
                </span>

                <p className='w-full text-justify text-[clamp(12px,3vw,14px)] text-[#497886]  leading-relaxed'>
                    در خانه مشاوره، هدف ما هدایت شما به سمت علایق و اهداف واقعی‌تان با روش‌های علمی و کاربردی است. ما مهارت‌های تحصیلی، از تست‌زنی و مدیریت زمان تا پیشگیری از بحران‌های درسی را آموزش می‌دهیم و برنامه‌ریزی اختصاصی متناسب با سبک زندگی شما ارائه می‌کنیم. پشتیبانی ما محدود به ارائه یک برنامه نیست، بلکه در تمام مسیر همراهتان هستیم و عملکرد شما را بررسی و بهینه‌سازی می‌کنیم. همچنین، به آرامش و تمرکز شما اهمیت می‌دهیم و در مدیریت استرس کمکتان می‌کنیم. انتخاب رشته نیز برای ما یک فرآیند تخصصی است که براساس علایق و استعدادهای شما طراحی می‌شود تا بهترین مسیر را برای آینده‌تان رقم بزنیم.
                </p>

                <div className=' flex items-center  gap-2 mt-4 md:mt-6 w-full md:w-fit'>
                    <TagsButton

                        title='مشاوره لایف استایل'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                    <TagsButton

                        title='مشاوره تحصیلی'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                    <TagsButton
                        title='درخواست مشاوره'
                        background='bg-blue-50'
                        BGradinetFrom='from-blue-400'
                        BGradientTo='to-blue-100'
                        TextColor='text-blue-900'
                    />
                </div>
            </div>

            {/* Image Container */}
            <div className='w-full lg:max-w-[50%] xl:max-w-[600px] aspect-square md:aspect-[4/5] lg:aspect-square'>
                <ImageWithPlaceholder
                    src="/images/counseling.webp"
                    className="w-full h-full object-contain rounded-lg shadow-sm"
                    alt="Counseling illustration"
                />
            </div>
        </section>
    )
}