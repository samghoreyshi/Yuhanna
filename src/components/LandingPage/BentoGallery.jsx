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
    <section className="p-8 pr-0 md:py-10 md:px-32 lg:px-64">
      {/* Mobile layout: horizontally scrollable images */}
      <div className="relative block md:hidden ">
        <div
          className="flex flex-row space-x-4 overflow-x-auto "
          style={{ direction: "ltr" }}
        >
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-3/4 h-[250px] ">
              <ImageWithPlaceholder
                src={src}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
        {/* White gradient overlay on the right */}
        <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Desktop layout: maintain original column layout */}
      <div className="hidden md:block">
        <div className="w-full columns-2 lg:columns-3">
          {images.map((src, index) => (
            <div key={index} className="mb-4 h-[250px] break-inside-avoid">
              <ImageWithPlaceholder
                src={src}
                className="w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
