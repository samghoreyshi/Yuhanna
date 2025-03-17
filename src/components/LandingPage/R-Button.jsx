export default function RButton({ title, background, BGradinetFrom, BGradientTo, TextColor, scrollTo }) {
    return (
      <div
        className={`bg-gradient-to-t p-[1px] w-fit cursor-pointer ${BGradinetFrom} ${BGradientTo} shadow-md rounded-md`}
      >
        {/* The 'group' class enables targeting children on hover */}
        <div
          className={`group relative py-2 px-5 text-[clamp(14px,1vw,14px)] sm:text-[clamp(10px,4vw,14px)] whitespace-nowrap w-fit flex justify-center items-center ${TextColor} shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)] rounded-md ${background} transition-all duration-300 ease-in-out`}
        >
          {/* Title text: visible by default, fades out on hover */}
          <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            {title}
          </span>
          {/* SVG icon: initially hidden, fades in on hover */}
          <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Example: a check icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      </div>
    );
  }
  