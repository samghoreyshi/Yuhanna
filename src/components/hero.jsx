import Image from "next/image";

export default function Hero() {
  return (
    <>
      <header className="h-[calc(100vh)] sm:py-20 sm:bg-[url('/illus/pers-grid.webp')] bg-cover bg-center">
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Image */}
            <img
              src="/illus/hero-illus.webp"
              alt=""
              className="inline-block h-full w-full max-w-2xl"
            />
            {/* Hero Content */}
            <div className="flex flex-col direction-rtl ">
              {/* Hero Title */}
              <h1
                className="font-extraBold mb-4 text-4xl md:text-6xl font-IranSans"
                style={{ lineHeight: "1.35" }}
              >
                کورترین گره زندگیت هم فقط با دستای{" "}
                <span className="font-extraBlack text-accent">خودت</span> باز
                میشه!
              </h1>
              <p className="font-IranSans font-medium mb-6 max-w-lg text-right text-sm text-gray-500 sm:text-lg md:mb-10 lg:mb-12">
                هدف یوحنا، تغییر یه باوره، باوری که از کنکور یه دِژ نفوذناپذیر
                درست کرده؛ ولی راه قبولی در کنکور مشخص‌تر از چیزی که بهتون گفتن!
                اما خب فوت و فن خودش رو داره.
              </p>
              {/* Hero Button */}
              <div className="flex gap-2 items-center">
                <a
                  href="#"
                  className="font-IranSans items-center rounded-2xl bg-accent px-6 py-3 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                  درخواست مشاوره
                </a>
                <a
                  href="#"
                  className="font-IranSans items-center rounded-2xl bg-gray-100 border-2 border-gray-300 px-6 py-3 font-semibold hover:border-accent hover:border-2 text-black transition-all duration-300 ease-in-out"
                >
                  پرسش و پاسخ
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-white">
        <div className="flex flex-col justify-center items-center gap-10 py-28">
          <h1 className="font-IranSans mx-10 font-extraBold sm:text-center text-2xl text-right leading-relaxed direction-rtl">
            می‌دونیم که گوشتون از این حرفا پُره، ولی ما
            فقط اهل حرف و{" "}
            <span className="font-extraBlack text-accent">شعار</span> نیستیم!
          </h1>
          <div className="grid sm:grid-cols-3 gap-5 mx-10 sm:mx-40">
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img className="" src="/illus/feat-3.webp" alt="" />
              <h2 className="font-extraBlack">همیشه یک قدم جلوتر باشید</h2>
              <p className="text-gray-500">
                در یوحنا، هدف ما این است که شما به صورت پیوسته و هدفمند درس
                بخوانید. برای رسیدن به این هدف، ما سیستم نظارت دقیقی طراحی
                کرده‌ایم که از ابتدا تا انتهای مسیر همراه شماست.
              </p>
            </span>
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img className="" src="/illus/feat-2.webp" alt="" />
              <h2 className="font-extraBlack">
                محیطی آرام و حرفه‌ای برای بهترین بهره‌وری از زمان مطالعه شما!
              </h2>
              <p className="text-gray-500">
                حواس‌پرتی و اتلاف وقت، بزرگ‌ترین دشمنان موفقیت در درس خواندن
                هستند. ما در یوحنا فضایی صمیمانه و گرم، همراه با نظم و سخت‌گیری
                لازم، ایجاد کرده‌ایم تا شما در محیطی آرام و اختصاصی به مطالعه
                بپردازید.
              </p>
            </span>
            <span className="flex flex-col w-full h-full font-IranSans bg-white border border-gray-300 direction-rtl p-10 gap-5 rounded-3xl shadow-lg">
              <img src="/illus/feat-1.webp" alt="" />
              <h2 className="font-extraBlack">
                یوحنا به شما کمک می‌کند با باورهای نادرست خداحافظی کنید!
              </h2>
              <p className="text-gray-500">
                ما معتقدیم که موفقیت در کنکور صرفاً به پشتکار و تلاش شما بستگی
                ندارد، بلکه به استفاده صحیح از دانش، برنامه‌ریزی دقیق و روش‌های
                مطالعه علمی نیاز دارد.
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col  bg-white p-10">
        <div className="flex flex-col sm:flex-row items-center font-IranSans direction-rtl gap-5 justify-between mx-5 sm:mx-32 sm:my-10">
          <span className="flex flex-col direction-rtl gap-10  ">
            <h1 className="text-4xl sm:text-6xl text-accent font-extraBlack">
              پانسیون حضوری
            </h1>
            <p className="sm:w-[800px]">
              یعنی حواس و هرز رفتن وقت همیشه بزرگترین سدهای درست درس خوندن بوده
              و هست. ما در خانه مطالعه یوحنا با چند ترفند حساب‌شده چاره‌ای برای
              این مسئله پیدا کرده‌ایم! فضای مطالعه که به اندازه اتاق خودتون گرم،
              آشنا و صمیمانه و به اندازه یک کتابخانه آزموده و برنامه‌ریزی شده
              نظم و سخت‌گیری دارد، جایی که راحت و درست درس بخونید.
            </p>
          </span>
          <span>
            <img
              className="w-full h-[500px] object-contain"
              src="/illus/feat-4.webp"
              alt=""
            />
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mx-5 sm:mx-32 my-5">
          <div className="h-[150px] sm:h-[300px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/photos/h-1.webp"
              alt=""
            />
          </div>
          <div className="h-[150px] sm:h-[300px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/photos/h-2.webp"
              alt=""
            />
          </div>
          <div className="h-[150px] sm:h-[300px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/photos/h-3.webp"
              alt=""
            />
          </div>
          <div className="h-[150px] sm:h-[300px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/photos/h-4.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center font-IranSans direction-rtl gap-5 justify-between mx-5 sm:mx-32 sm:my-10">
          <span className="flex flex-col direction-rtl gap-10 my-5 ">
            <h1 className="text-4xl sm:text-6xl text-accent font-extraBlack">
              پانسیون آنلاین
            </h1>
            <p className="sm:w-[800px]">
              جلسات آنلاین ما تو ایام کنکور برای کسایی که از راه دور نمی‌تونن
              ثبت نام کنن ولی دلمون می‌خواد بتونن از مزایای فضای مطالعه ما بهره
              ببرن و دسترسی به همراهی و انرژی تیممون بهره‌مند بشن.
            </p>
          </span>
          <span>
            <img
              className="w-full h-[500px] object-contain"
              src="/illus/feat-5.webp"
              alt=""
            />
          </span>
        </div>
      </section>
    </>
  );
}
