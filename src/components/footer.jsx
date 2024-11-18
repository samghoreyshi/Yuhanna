import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="block">
        {/* Container */}
        <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
          {/* Component */}
          <div className="sm:flex-row flex justify-between flex-col items-center">
            <div className="mt-8 md:mt-0">
              <div className="mb-4 flex max-w-72 items-start justify-start">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg"
                  alt=""
                  className="inline-block mr-3"
                />
                <p className="text-gray-500 text-sm sm:text-base font-IranSans">
                 تهران، پاسداران، میدان هروی، جنب پاساژ گلستان
                </p>
              </div>
              <div className="mb-4 flex max-w-72 items-start justify-start">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg"
                  alt=""
                  className="inline-block mr-3"
                />
                <p className="text-gray-500 text-sm sm:text-base font-IranSans">
                  info@yuhanna.ir
                </p>
              </div>
            </div>
            <h2 style={{ lineHeight: "1.35" }} className="leading- realxed text-3xl md:text-5xl w-full max-w-xl direction-rtl font-IranSans font-extraBlack">
              بهترین اتفاقا<br/> اینجا می‌افته!
            </h2>
          </div>
          <div className="mb-14 w-full border-b border-gray-300 mt-16"></div>
          <div className="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
            <div className="font-IranSans mb-4 sm:mb-0 py-1 text-center sm:text-center">
              <a
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                درباره ما
              </a>
              <a
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                رویدادها
              </a>
              <a
                href="#"
                className="inline-block font-normal text-gray-500 transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6"
              >
                پشتیبانی
              </a>

            </div>
            <p className="text-gray-500 text-sm sm:text-base font-IranSans">
              © تمام حقوق مادی و معنوی این وبسایت متعلق به پانسیون یوحنا می‌باشد. 2024
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
