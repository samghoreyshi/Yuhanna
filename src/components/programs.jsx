'use client';
import { useState } from 'react';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('حضوری');

  const programs = {
    'حضوری': {
      title: 'پانسیون حضوری',
      description: 'محیط مطالعاتی حرفه‌ای با امکانات کامل و مشاوران متخصص',
      features: [
        {
          title: 'محیط مطالعه اختصاصی',
          description: 'فضای مطالعه کاملاً آرام و مجهز برای تمرکز بیشتر',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
        },
        {
          title: 'مشاوره تخصصی روزانه',
          description: 'برنامه‌ریزی و مشاوره شخصی‌سازی شده برای هر دانش‌آموز',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ),
        },
        {
          title: 'تغذیه سالم و متنوع',
          description: 'برنامه غذایی متعادل و مقوی برای حفظ انرژی در طول روز',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
        },
        {
          title: 'کلاس‌های تقویتی',
          description: 'رفع اشکال و تقویت دروس با اساتید مجرب',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          ),
        },
      ],
      stats: [
        { value: '+۵۰۰', label: 'دانش‌آموز موفق' },
        { value: '۲۴/۷', label: 'پشتیبانی' },
        { value: '۹۸٪', label: 'رضایت والدین' },
      ],
      image: '/images/inp-c.webp',
    },
    'آنلاین': {
      title: 'پانسیون آنلاین',
      description: 'تجربه یادگیری حرفه‌ای از هر نقطه‌ای که هستید',
      features: [
        {
          title: 'پلتفرم اختصاصی آموزش',
          description: 'سیستم هوشمند آموزش آنلاین با امکانات پیشرفته',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: 'مشاوره آنلاین',
          description: 'ارتباط مستقیم با مشاوران از طریق ویدیو کال',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          title: 'محتوای تعاملی',
          description: 'ویدیوهای آموزشی با کیفیت و تکالیف تعاملی',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
        {
          title: 'گزارش پیشرفت',
          description: 'پیگیری مستمر پیشرفت با نمودارهای تحلیلی',
          icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
      ],
      stats: [
        { value: '+۱۰۰۰', label: 'دانش‌آموز فعال' },
        { value: '۱۰۰٪', label: 'پوشش دروس' },
        { value: '۲۴/۷', label: 'دسترسی' },
      ],
      image: '/images/online-c.webp',
    },
  };

  const activeProgram = programs[activeTab];

  return (
    <section className="py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-IranSans mb-6">
            برنامه‌های آموزشی
          </h2>
          <p className="text-gray-600 font-IranSans text-lg leading-relaxed">
            انتخاب کنید، پیشرفت کنید، موفق شوید!
          </p>
        </div>

        {/* Program Selector */}
        <div className="flex justify-center gap-4 mb-16">
          {Object.keys(programs).map((program) => (
            <button
              key={program}
              onClick={() => setActiveTab(program)}
              className={`px-8 py-3 rounded-full font-IranSans text-lg transition-all duration-300
                ${activeTab === program 
                  ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              پانسیون {program}
            </button>
          ))}
        </div>

        {/* Active Program Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold font-IranSans mb-4">
                  {activeProgram.title}
                </h3>
                <p className="text-gray-600 font-IranSans text-lg">
                  {activeProgram.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6">
                {activeProgram.features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex gap-4 items-start">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent
                        transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-IranSans font-bold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="font-IranSans text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex justify-between items-center py-6 px-8 bg-gray-50 rounded-2xl">
                {activeProgram.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-IranSans">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform rotate-6"></div>
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="relative rounded-[2rem] shadow-xl transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
