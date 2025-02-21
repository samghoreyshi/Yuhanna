
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'


export default function EventBanner() {

    return (

        <section>
            <div className="w-full my-10 sm:aspect-[16/9] md:aspect-[21/9] lg:[21/9]">
                <ImageWithPlaceholder
                    src="/images/HeroSection/BannerNowruz.webp"
                    className="w-full h-auto object-cover object-center"
                    alt="Hero illustration"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
            </div>
        </section>
    )


}