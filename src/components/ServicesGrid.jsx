const ServicesGrid = () => {
  const services = [
    {
      title: "خانه مشاوره",
      description: "مشاوره تخصصی با بهترین مشاوران تحصیلی کنکور برای موفقیت شما در مسیر تحصیلی. برنامه‌ریزی شخصی‌سازی شده، راهنمایی در انتخاب رشته و همراهی مستمر در طول دوره آمادگی کنکور",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
      href: "/counseling",
      featured: true,
      illustration: "/illustrations/counseling.webp",
      cta: "رزرو مشاوره"
    },
    {
      title: "خانه آموزش",
      description: "دسترسی به دوره‌های آموزشی با کیفیت و به‌روز توسط برترین اساتید کنکور. ویدیوهای آموزشی تعاملی، جزوات تخصصی و کلاس‌های آنلاین زنده برای یادگیری بهتر",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.91 59.91 0 0 1 12 3.493a59.91 59.91 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
      href: "/education-house",
      illustration: "/illustrations/education.webp",
      cta: "مشاهده دوره‌ها"
    },
    {
      title: "خانه مطالعه",
      description: "محیطی آرام و مجهز برای مطالعه با برنامه‌ریزی دقیق و نظارت مستمر. امکانات ویژه مطالعه گروهی، مشاوره درسی آنی و گزارش‌گیری روزانه از پیشرفت تحصیلی",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      href: "/study-house",
      illustration: "/illustrations/study.webp",
      cta: "ثبت‌نام"
    },
    {
      title: "کتاب",
      description: "دسترسی به جامع‌ترین مجموعه کتب کمک آموزشی و تست. شامل کتاب‌های تخصصی هر درس، بانک سوالات طبقه‌بندی شده و جزوات برتر با تخفیف ویژه برای دانش‌آموزان",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      href: "/books",
      illustration: "/illustrations/books.webp",
      cta: "مشاهده کتاب‌ها"
    },
    {
      title: "آزمون",
      description: "برگزاری آزمون‌های آزمایشی استاندارد با کیفیت بالا. تحلیل جامع نتایج، رتبه‌بندی کشوری، کارنامه تفصیلی و مشاوره اختصاصی پس از هر آزمون برای بهبود عملکرد",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      ),
      href: "/exams",
      illustration: "/illustrations/exam.webp",
      cta: "ثبت‌نام آزمون"
    },
    {
      title: "رویدادها",
      description: "شرکت در همایش‌ها و کارگاه‌های آموزشی متنوع. برنامه‌های انگیزشی، دوره‌های مهارت‌افزایی، نشست‌های تخصصی با رتبه‌های برتر و وبینارهای کاربردی برای موفقیت در کنکور",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      ),
      href: "/events",
      illustration: "/illustrations/events.webp",
      cta: "مشاهده رویدادها"
    }
  ];

  // Separate featured and regular services
  const featuredService = services.find(service => service.featured);
  const regularServices = services.filter(service => !service.featured);

  return (
    <section className="py-12 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Card */}
          <a
            href={featuredService.href}
            className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group relative overflow-hidden border border-gray-100 flex flex-col h-[420px]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_100%_100%,#3b82f6_0.5px,transparent_1px)] bg-[length:16px_16px]"></div>
            
            {/* Content */}
            <div className="relative flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {featuredService.icon}
                </div>
                <div className="text-justify flex-1 mr-4">
                  <h3 className="font-IranSans text-xl font-black text-gray-800 mb-2">
                    {featuredService.title}
                  </h3>
                  <p className="font-IranSans text-sm text-gray-500 leading-6 text-justify">
                    {featuredService.description}
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="flex-grow flex items-center justify-center py-4">
                <div className="w-full h-40 relative">
                  <img
                    src={featuredService.illustration}
                    alt={featuredService.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-100">
                <span className="font-IranSans text-blue-600 text-sm ml-2">{featuredService.cta}</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>

          {/* Regular Cards */}
          {regularServices.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group relative overflow-hidden border border-gray-100 flex flex-col h-[420px]"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_100%_100%,#3b82f6_0.5px,transparent_1px)] bg-[length:16px_16px]"></div>
              
              {/* Content */}
              <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {service.icon}
                  </div>
                  <div className="text-justify flex-1 mr-4">
                    <h3 className="font-IranSans text-xl font-black text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="font-IranSans text-sm text-gray-500 leading-6 text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Illustration */}
                <div className="flex-grow flex items-center justify-center py-4">
                  <div className="w-full h-40 relative">
                    <img
                      src={service.illustration}
                      alt={service.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-100">
                  <span className="font-IranSans text-blue-600 text-sm ml-2">{service.cta}</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
