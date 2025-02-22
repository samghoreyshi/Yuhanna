"use client";
export default function TagsButton({ title, background, BGradinetFrom, BGradientTo, TextColor,  }) {

    return (
        <div
            className={`bg-gradient-to-t p-[1px] w-fit cursor-pointer ${BGradinetFrom} ${BGradientTo} shadow-md rounded-2xl transition-all duration-300 hover:-translate-y-1`}
        >
            <div
                className={`py-1 px-2 text-[clamp(10px,1vw,14px)] whitespace-nowrap w-fit flex justify-center items-center ${TextColor} shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)] rounded-2xl ${background}`}
            >
                {title}
            </div>
        </div>
    );
}