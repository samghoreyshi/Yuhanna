
import { QuestionMarkCircleIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Example icons, replace if needed
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';




export default function CTA() {

    return (

        <>

            <section className="flex flex-col md:flex-row justify-center gap-24 items-center bg-accent/10 text-secondary py-16 px-10 text-center">
                <div className='hidden max-w-sm md:block'>
                    <ImageWithPlaceholder
                        src="/images/CTA/1.webp"
                        className="w-full h-full object-contain rounded-lg"
                        alt="Professional counselor reviewing options with a student" // Updated alt text
                    />
                </div>
                <div className='flex flex-col items-start justify-start gap-1'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">آماده شروع هستید؟</h2>
                    <p className="text-md md:text-lg mb-8 max-w-lg text-right mx-auto">از طریق راه های ارتباطی زیر میتونی با کارشناسان خانه یوحنا ارتباط برقرار کنی و در پانسیون های خانه یوحنا ثبت نام کنی.</p>
                    <div className="flex flex-col sm:flex-row justify-start items-start md:items-center md:justify-center gap-4">
                        <a
                            href="tel:02128111195" // Replace with actual phone number
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-white hover:bg-gray-100 transition duration-300 shadow-md"
                        >
                            <PhoneIcon className="h-5 w-5 ml-2" />
                            تماس بگیرید
                        </a>
                        <a
                            href="https://wa.me/989901617862" // Replace with actual WhatsApp number (including country code)
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 shadow-md"
                        >
                            <ChatBubbleLeftRightIcon className="h-5 w-5 ml-2" /> {/* Using generic chat icon, replace if you have a specific WhatsApp icon */}
                            گفتگو در واتساپ
                        </a>
                    </div>
                </div>
            </section>

        </>
    )




}