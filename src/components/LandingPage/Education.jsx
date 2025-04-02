import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
// Using outline icons again
// import { AcademicCapIcon, SparklesIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Placeholder Icons (Outline Style - slightly adjusted colors)
const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-1.5 text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block mr-1.5 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);
const ArrowLeftIcon = () => ( // For RTL
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[-4px]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);


// Example subtle background pattern (SVG URL encoded) - place this in a style tag or CSS file
const backgroundPatternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dbeafe' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
};


export default function CounselingDetailedClean() {
    return (
        // Section: Added subtle pattern via style prop (or use Tailwind config/CSS)
        <section
            className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-48 py-20 lg:py-28 bg-white"
            style={backgroundPatternStyle} // Apply the subtle background pattern
        >
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 xl:gap-24 items-center">

                {/* Text Content Area: Slightly elevated feel with background */}
                <div className='w-full lg:w-[55%] xl:w-3/5 flex flex-col justify-center gap-5 md:gap-6 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm border border-slate-200/50'>
                    {/* Title: Kept clean */}
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 pb-3 mb-2 border-b-4 border-accent w-fit'>
                        خانه{' '} {/* Added space for clarity */}
                        <span className='text-accent font-extrabold'>آموزش</span>
                    </h1>
                    {/* Subtitle: Clear, professional */}
                    <h2 className='text-xl md:text-2xl lg:text-2xl font-semibold text-slate-700 !leading-normal'>
                        یک معلم خوب بهت انگیزه میده...
                    </h2>
                    {/* Paragraph: Clear, readable text */}
                    <p className='w-full text-justify text-base text-slate-600 leading-relaxed mt-4'>
                        خانه آموزش، بر خلاف چیزی که ممکنه از اسمش برداشت کنید، صرفاً یه برنامه کلاس هفتگی و ماهیانه روتین و از پیش تعیین‌شده نیست، بلکه مجموعه‌ای از کارگاه‌های آموزشی دقیق، منظم و متنوعه که منحصراً تکنیک شما برنامه‌ریزی میشه و ماه به ماه. اینجا بعد از تعیین سطح اولیه (که ناگفته پیداست با روش و آزمون‌های علمی و توسط ما آنالیز سطح دانش)، هدفتون بر اساس میزان مهارتتون تو هر سطح به برنامه آموزشی شخصی براتون چیده میشه تا برای بخش‌هایی که مهارت کمتری در اونها دارید، زمان بیشتری داشته باشید. با این روش، نه تعداد جلسه‌های کلاس متناسب با نیاز خود شما تعیین شده تا حضورتون در کلاس‌هایی که اونها رو بلد دارین، زمان و انرژی صرفه‌جویی کنه، پشتیبانی هم در همه مراحل، عملکردتون رو گیلد و بعد از هر جلسه آموزشی با آزمون‌های QT به دقت تحلیل و پیگیری می‌کنه تا بفهمیم کجا نیاز به صرف وقت و انرژی بیشتری دارید و هم بتونیم در اون قسمت‌ها پیشرفتتون سرعت بیشتری بدیم. کلاس‌ها کارگاه‌محور، تا کمترین توجه روی جزئیات مباحث هر درس تمرکز کنید و برای باقی قسمت‌ها ذهن بازتری داشته باشید.                    </p>

                    {/* Subtle Separator */}
                    <hr className="w-1/3 mx-auto sm:mx-0 my-6 border-t border-slate-300/70" />

                    {/* ---- Tags & CTA Area - Enhanced for Better Balance ---- */}
                    <div className='flex flex-col sm:flex-row items-center justify-start gap-x-5 gap-y-4 mt-4 flex-wrap'>
                        {/* ---- CTA Button with Enhanced Hover Effects ---- */}
                        <button className='group inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-accent hover:to-blue-600 hover:shadow-md hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'>
                            <span className="flex items-center">
                                ثبت نام در کلاس ها
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[-3px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </span>
                        </button>

                        {/* ---- Tags with Enhanced Styling ---- */}
                        <div className='flex items-center gap-3 flex-wrap'>
              
                        </div>
                    </div>
                    {/* ---- End Enhanced Tags & CTA ---- */}
                </div>

                {/* Image Container: Added small accent */}
                <div className='w-full lg:w-lg xl:w-1/2 aspect-square'>
                    <div className="relative w-full h-full  p-2 rounded-xl  ">
                        <ImageWithPlaceholder
                            src="/images/Educator.webp"
                            className="w-full h-full object-contain rounded-lg"
                            alt="Professional counselor reviewing options with a student" // Updated alt text
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}