import React from 'react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "تغییرات جدید در کنکور سراسری ۱۴۰۳",
      description: "اطلاعیه سازمان سنجش درباره تغییرات مهم کنکور سراسری و نحوه محاسبه تراز نمرات",
      date: "۲۵ دی ۱۴۰۲",
      category: "کنکور",
      image: "/news/exam-changes.webp",
      featured: true,
      readTime: "۵ دقیقه"
    },
    {
      id: 2,
      title: "برگزاری همایش بزرگ موفقیت تحصیلی",
      description: "حضور رتبه‌های برتر کنکور و اساتید برجسته در همایش سراسری موفقیت تحصیلی",
      date: "۲۳ دی ۱۴۰۲",
      category: "رویدادها",
      image: "/news/success-seminar.webp",
      readTime: "۳ دقیقه"
    },
    {
      id: 3,
      title: "معرفی منابع جدید آزمون‌های آزمایشی",
      description: "لیست کامل منابع به‌روز شده برای آزمون‌های آزمایشی با تمرکز بر مباحث پرتکرار",
      date: "۲۰ دی ۱۴۰۲",
      category: "منابع",
      image: "/news/new-resources.webp",
      readTime: "۴ دقیقه"
    },
    {
      id: 4,
      title: "راه‌اندازی سامانه مشاوره آنلاین",
      description: "امکان مشاوره آنلاین با برترین مشاوران تحصیلی از طریق سامانه جدید",
      date: "۱۸ دی ۱۴۰۲",
      category: "خدمات",
      image: "/news/online-counseling.webp",
      readTime: "۲ دقیقه"
    },
    {
      id: 5,
      title: "برنامه کلاس‌های فشرده نوروزی",
      description: "جدول زمان‌بندی کلاس‌های فشرده نوروزی برای دروس اختصاصی و عمومی",
      date: "۱۵ دی ۱۴۰۲",
      category: "آموزش",
      image: "/news/nowruz-classes.webp",
      readTime: "۳ دقیقه"
    }
  ];

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-IranSans text-3xl font-black text-gray-800 mb-4">
            آخرین اخبار و رویدادها
          </h2>
          <p className="font-IranSans text-gray-500 max-w-2xl mx-auto">
            جدیدترین اخبار و رویدادهای آموزشی، تغییرات کنکور و برنامه‌های ویژه یوحنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <a
              href={`/news/${featuredNews.id}`}
              className="group relative overflow-hidden rounded-2xl lg:row-span-2 bg-gradient-to-b from-blue-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-IranSans">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm font-IranSans">
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featuredNews.readTime}
                  </div>
                  <span className="text-gray-500 text-sm font-IranSans">{featuredNews.date}</span>
                </div>
                <h3 className="font-IranSans text-2xl font-black text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {featuredNews.title}
                </h3>
                <p className="font-IranSans text-gray-500 leading-7 mb-6">
                  {featuredNews.description}
                </p>
                <div className="flex items-center text-blue-600 font-IranSans">
                  <span className="ml-2">ادامه مطلب</span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* Regular News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularNews.map((item, index) => (
              <a
                key={item.id}
                href={`/news/${item.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-IranSans">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm font-IranSans">
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="font-IranSans text-lg font-black text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-IranSans text-sm text-gray-500 leading-6 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm font-IranSans">{item.date}</span>
                    <div className="flex items-center text-blue-600 font-IranSans">
                      <span className="text-sm ml-2">ادامه مطلب</span>
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
