'use client';

import React from 'react';
import { motion } from 'framer-motion';

// کامپوننت کارت قیمت‌گذاری
const PricingCard = ({ title, price, features, isPopular, ctaText }) => {
  return (
    <motion.div
      // کلاس‌های CSS برای استایل‌دهی و برجسته کردن پلن محبوب
      className={`relative flex flex-col p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-2 border-accent bg-white scale-105 z-10' : 'bg-white border border-gray-200'}`}
      // انیمیشن کوچک هنگام هاور
      whileHover={{ y: -5 }}
      // انیمیشن اولیه هنگام ظاهر شدن
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // انیمیشن فقط یک بار اجرا شود
    >
      {/* نمایش برچسب "محبوب‌ترین" برای پلن ویژه */}
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-accent text-white text-sm font-demiBold py-1 px-4 rounded-full shadow-md">
            محبوب‌ترین
          </span>
        </div>
      )}

      {/* عنوان پلن */}
      <h3 className="text-2xl font-extraBold text-secondary mb-2 text-right">{title}</h3>

      {/* نمایش قیمت */}
      <div className="mb-6 text-right">
        {/* قیمت اصلی */}
        <span className="text-4xl font-extraBold text-secondary">{price}</span>
        {/* واحد تومان و دوره زمانی - افزایش فاصله با mr-2 */}
        <span className="text-textSecondary mr-2" > تومان </span>
      </div>

      {/* لیست ویژگی‌های پلن */}
      {/* ul با جهت‌دهی از طریق dir والد کنترل می‌شود */}
      <ul className="flex-grow space-y-3 mb-6">
        {features.map((feature, index) => (
          // li با چینش آیتم‌ها از انتها (راست در حالت rtl)
          <li key={index} className="flex items-start justify-end">
            {/* متن ویژگی: راست‌چین، اشغال فضای موجود، فاصله از آیکون */}
            <span className="text-textSecondary ml-2 text-right flex-grow">{feature}</span>
            {/* آیکون تیک در سمت راست متن قرار می‌گیرد */}
            <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </li>
        ))}
      </ul>

      {/* دکمه فراخوان عمل (CTA) */}
      <button className={`w-full py-3 px-6 rounded-lg font-demiBold transition-all duration-300 ${isPopular ? 'bg-accent text-white hover:bg-opacity-90' : 'bg-secondary text-white hover:bg-opacity-90'}`}>
        {ctaText}
      </button>
    </motion.div>
  );
};

// کامپوننت بخش قیمت‌گذاری
const PricingSection = () => {
  // تعریف داده‌های پلن‌های قیمت‌گذاری
  const pricingPlans = [
    {
      title: 'پلن ماهانه',
      price: '۱۰ میلیون', // قیمت به تومان
      features: [
        'دسترسی به دوره‌های پایه',
        'پشتیبانی ایمیلی',
        'منابع آموزشی',
        'گزارش پیشرفت ماهانه',
        'دسترسی به انجمن کاربری'
      ],
      isPopular: false,
      ctaText: 'شروع کنید'
    },
    {
      title: 'پلن سه ماهه',
      price: '۵۰ میلیون', // قیمت به تومان - مثال داده شده
      features: [
        'دسترسی به تمام دوره‌ها',
        'پشتیبانی ایمیلی ویژه',
        'منابع آموزشی پیشرفته',
        'گزارش پیشرفت هفتگی',
        'جلسات مطالعه گروهی',
        'تدریس خصوصی (۲ ساعت در ماه)'
      ],
      isPopular: true, // این پلن محبوب‌ترین است
      ctaText: 'دریافت پلن ویژه'
    },
    {
      title: 'پلن سالانه',
      price: '۹۰ میلیون', // قیمت به تومان
      features: [
        'دسترسی به تمام دوره‌ها و منابع',
        'پشتیبانی ویژه ۲۴/۷',
        'منابع آموزشی ویژه',
        'پیگیری پیشرفت روزانه',
        'جلسات گروهی نامحدود',
        'تدریس خصوصی (۵ ساعت در ماه)',
        'مسیر یادگیری شخصی‌سازی شده'
      ],
      isPopular: false,
      ctaText: 'انتخاب پلن حرفه‌ای'
    }
  ];

  return (
    // اضافه کردن dir="rtl" برای راست‌چین کل بخش
    <section className="py-20 px-4 bg-gradient-to-b from-white to-accent/10 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* عنوان و توضیحات بخش */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extraBold text-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            پلن مناسب خود را انتخاب کنید
          </motion.h2>
          <motion.p
            className="text-lg text-textSecondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            پلنی را انتخاب کنید که به بهترین شکل با نیازها و اهداف آموزشی شما مطابقت دارد. هر زمان خواستید می‌توانید پلن خود را تغییر دهید.
          </motion.p>
        </div>

        {/* نمایش کارت‌های قیمت‌گذاری */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price} // ارسال قیمت تومان
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;