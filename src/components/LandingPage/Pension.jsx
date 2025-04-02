import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'
import TagsButton from '@/components/LandingPage/Tags'
import Link from 'next/link';



export default function Pension() {


    return (

        <section className="flex flex-col">
            <div className='p-8 md:px-32 lg:px-64 w-full flex flex-col items-start sm:items-center justify-center gap-4 md:gap-6'>
                <span className='text-4xl sm:text-5xl md:text-6xl font-extraBlack text-secondary pb-4 w-fit border-b-4 border-accent'>
                    خانه <span className='text-accent'>مطالعه</span>
                </span>

                {/* <span className='font-extraBold text-[#497886] text-lg md:text-2xl lg:text-3xl'>
                    یک فضای حرفه‌ای ذهنتو منسجم میکنه...
                </span> */}
            </div>

            <div className="px-8 md:px-32 lg:px-64">
                <div className="h-[50px] sm:h-[100px] border-x  border-dashed border-accent">

                </div>
            </div>
            <div className="px-8 md:px-32 lg:px-64 border-y border-dashed border-accent">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-t from-accent/10 to-white gap-5 border-x border-dashed border-accent p-5 sm:p-20">
                    <Link href="/pension-online" passHref legacyBehavior={false}>
                        <div className=" w-full relative cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <ImageWithPlaceholder
                                src="/images/Pension/Pension-Online.webp"
                                alt="Apply for Pension Online" // Improved alt text
                                fill
                                className="object-cover rounded-md object-center"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                            />
                        </div>
                    </Link>

                    <Link href="/pension-inperson" passHref legacyBehavior={false}>
                        <div className=" w-full relative cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <ImageWithPlaceholder
                                src="/images/Pension/Pension-inPerson.webp"
                                alt="Apply for Pension In Person" // Improved alt text
                                fill
                                className="object-cover rounded-md object-center"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                            />
                        </div>
                    </Link>

                </div>
            </div>
            <div className="px-8 md:px-32 lg:px-64">
                <div className="h-[50px] sm:h-[100px]  border-x  border-dashed border-accent">

                </div>
            </div>
        </section>
    )
}