"use client";
export default function RButton({ title, background, BGradinetFrom, BGradientTo, TextColor, scrollTo }) {

    const handleScroll = () => {
        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                // Get the absolute top position of the section
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                // Get the viewport height
                const viewportHeight = window.innerHeight;
                // Calculate the scroll position to center the section's top
                const targetScroll = sectionTop - (viewportHeight / 5);
                // Scroll to the calculated position smoothly
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
            }
        }
    };

    return (
        <div
            className={`bg-gradient-to-t p-[1px] w-fit cursor-pointer ${BGradinetFrom} ${BGradientTo} shadow-md rounded-md`}
            onClick={handleScroll}
        >
            <div
                className={`py-2 px-5 text-[clamp(14px,1vw,14px)] sm:text-[clamp(10px,4vw,14px)] whitespace-nowrap w-fit  flex justify-center items-center ${TextColor} shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)] rounded-md ${background}`}
            >
                {title}
            </div>
        </div>
    );
}