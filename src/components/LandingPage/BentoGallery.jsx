import ImageWithPlaceholder from '@/components/ImageWithPlaceholder'

const images = [
    "/bentoGallery/1.webp",
    "/bentoGallery/2.webp",
    "/bentoGallery/3.webp",
    "/bentoGallery/4.webp",
    "/bentoGallery/5.webp",
    "/bentoGallery/6.webp",
]

export default function BentoGallery() {
    return (
        <section className=' p-4 md:py-10 md:px-32  lg:px-64'>
            <div className='w-full columns-2 md:columns-2 lg:columns-3'>
                {images.map((src, index) => {
                    return (
                        <div key={index} className='mb-4 h-[250px] break-inside-avoid'>
                            <ImageWithPlaceholder
                                src={src}
                                className="w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                alt="Hero illustration"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}