
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'


export default function HeroBanner() {

    return (

        <section>
            <div className="w-full sm:aspect-[16/9] md:aspect-[21/9] lg:h-[calc(70vh-64px)]">
                <ImageWithPlaceholder
                    src="/images/hero-banner.webp"
                    className="w-full h-auto object-contain sm:object-cover object-center"
                    alt="Hero illustration"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 90vw"
                />
            </div>
        </section>
    )


}