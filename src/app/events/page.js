'use client';
import Link from 'next/link';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import {
  HiOutlineSearch,
  HiOutlineChevronRight,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineUsers,
  HiOutlineTicket,
  HiOutlineCheckCircle,
  HiOutlineUserCircle,
  HiOutlineChevronDown,
  HiOutlineChevronLeft
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';

async function getEvents() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*`,
      { next: { revalidate: 60 } }
    );
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    Event: '',
    PhoneNumber: '',
    FullName: ''
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    try {
      const response = await fetch('https://admin.yuhanna.ir/api/event-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            FullName: formData.FullName,
            PhoneNumber: formData.PhoneNumber,
            Event: formData.Event
          }
        })
      });

      const result = await response.json();

      if (response.status >= 400) {
        throw new Error(result.error?.message || 'Submission failed');
      }

      setSubmissionSuccess(true);
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({ Event: '', PhoneNumber: '', FullName: '' });
        setSubmissionSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Registration error:', error);
      alert('خطا در ثبت نام. لطفا مجددا تلاش کنید.');
    }
  };

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
      setFilteredEvents(data);
      setIsLoading(false);
      if (data.length > 0) {
        setFormData((prev) => ({ ...prev, Event: data[0].Title }));
      }
    });
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) =>
      event.Title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  return (
    <div className="min-h-screen relative overflow-hidden font-IranSans bg-slate-50" dir="rtl">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:34px_34px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-purple-500/20 rounded-full filter blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-12 md:pt-20 pb-6 md:pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl md:max-w-3xl mx-auto space-y-3 md:space-y-4 mt-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
              {/* <span className="text-blue-600 font-medium text-xs md:text-sm">سلام 👋</span> */}
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue-600">
                  رویداد های یوحنـــا
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Events Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        {/*
          On mobile: a flex container with horizontal scrolling.
          On md and up: a grid layout with defined columns.
          We force LTR on this container for proper horizontal scrolling.
        */}
        <div
          style={{ direction: 'ltr' }}
          className="w-full flex md:grid flex-nowrap md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto md:overflow-visible"
        >
          {isLoading ? (
            // Loading skeletons
            [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="min-w-[60%] md:min-w-0 min-h-[180px] bg-white/30 backdrop-blur rounded-xl md:rounded-2xl p-2 md:p-3 animate-pulse"
              >
                <div className="h-full bg-gray-100/50 rounded-xl" />
              </div>
            ))
          ) : (
            filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                // Increased minimum heights on desktop view
                className="min-w-[80%] md:min-w-0 min-h-[220px] md:min-h-[260px] group relative overflow-hidden rounded-lg md:rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500"
              >
                <Link href={`/events/${event.Slug}`} className="block h-full group">
                  <div className="relative h-full w-full overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ImageWithPlaceholder
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          event.CoverImage?.formats?.small?.url || event.CoverImage?.url
                        }`}
                        alt={event.Title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform transition-all duration-500 group-hover:-translate-y-2 space-y-4">
                        {/* Hover reveal extra info */}
                        <div className="overflow-hidden">
                          <div className="transform translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <div dir="rtl" className="inline-flex items-center gap-1 text-sm text-white/80">
                              <span>مشاهده جزئیات</span>
                              <HiOutlineChevronLeft className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
        {/* Mobile-only tip */}
        <div className="md:hidden text-center mt-2 text-gray-500 text-sm">
          برای مشاهده رویدادهای بیشتر، به صورت افقی اسکرول کنید
        </div>
      </div>

      {/* Event Explanation Section */}
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-6 md:space-y-8 p-6 md:p-8 bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-lg rounded-xl border border-blue-100 shadow-md shadow-blue-500/10 max-w-3xl mx-auto"
        >
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 relative">
                <span className="relative z-10">رویدادهایی برای ساخت آینده‌ی هوشمند</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg">
              رویدادهای یوحنا دریچه‌ای به دنیای هوش مصنوعی است که در آن یادگیری با عمل در هم می‌آمیزد. هر رویداد ما ترکیبی است از:
            </p>
            <ul className="space-y-3 md:space-y-4 text-gray-600">
              {[
                { icon: HiOutlineSparkles, text: 'جلسات بحث و تبادل نظر با پیشگامان صنعت' },
                { icon: HiOutlineCode, text: 'کارگاه‌های آموزشی با پروژه‌های واقعی و داده‌های زنده' },
                { icon: HiOutlineUsers, text: 'فرصت‌های شبکه‌سازی با جامعه‌ی حرفه‌ای' }
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-blue-600/20">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="pt-0.5">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg">
            ما معتقدیم یادگیری واقعی زمانی اتفاق می‌افتد که تئوری با عمل همراه شود. بنابراین هر رویداد شامل چالش‌های عملی است که شرکت‌کنندگان می‌توانند:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {[
              { title: 'مهارت‌ها را بیاموزند', desc: 'با آخرین ابزارها و تکنیک‌های روز دنیا', bg: 'from-green-50/80 to-white/80' },
              { title: 'تجربه کسب کنند', desc: 'در محیطی شبیه‌سازی شده به مشکلات واقعی', bg: 'from-purple-50/80 to-white/80' }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4 backdrop-blur-sm rounded-xl border border-blue-50 bg-gradient-to-br ${card.bg} hover:shadow-md transition-all`}
              >
                <h3 className="font-medium text-blue-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed text-justify text-base md:text-lg"
          >
            تمام رویدادها به صورت زنده و آنلاین برگزار می‌شوند و محتوای آنها پس از برگزاری در دسترس شرکت‌کنندگان قرار می‌گیرد.
          </motion.p>
        </motion.div>
      </div> */}

      {/* Registration Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          className="relative bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 shadow-md shadow-blue-500/10 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Graphic Section */}
          <div className="hidden lg:block relative w-full bg-blue-50/50 rounded-xl overflow-hidden">
            <ImageWithPlaceholder
              src="/images/event-illustration.png"
              alt="Event illustration"
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-white/30" />
          </div>

          {/* Form Content */}
          <div className="max-w-sm mx-auto space-y-6 w-full lg:w-auto">
            <div className="text-center space-y-3">
              <HiOutlineTicket className="w-12 h-12 text-blue-600 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">ثبت نام رویداد</h2>
              <p className="text-gray-500 text-sm">اطلاعات تماس خود را وارد کنید</p>
            </div>
            {!submissionSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-5">
                  {currentStep === 1 && (
                    <>
                      <Combobox value={formData.Event} onChange={(value) => setFormData({ ...formData, Event: value })}>
                        {({ open }) => (
                          <div className="relative">
                            <Combobox.Label className="block text-sm font-medium text-gray-700 mb-2">
                              انتخاب رویداد
                            </Combobox.Label>
                            <Combobox.Button className="w-full relative">
                              {({ open }) => (
                                <div
                                  className={`
                                  w-full px-4 py-3 rounded-xl border
                                  ${open ? 'border-blue-500 ring-1 ring-blue-200' : 'border-gray-200'}
                                  transition-all flex items-center justify-between
                                  bg-white hover:bg-gray-50 cursor-pointer
                                `}
                                >
                                  <span className="text-gray-700">{formData.Event}</span>
                                  <HiOutlineChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                                </div>
                              )}
                            </Combobox.Button>

                            <Combobox.Options className="absolute z-10 mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-lg">
                              <div className="p-2 space-y-1 max-h-60 overflow-auto">
                                {[
                                  'اردو امتحانات',
                                  'اردو قرنطینه',
                                  'اردوی نوروزی',
                                  'همایش استراتژی مطالعه نوروزی خانه یوحنا'
                                ].map((event) => (
                                  <Combobox.Option
                                    key={event}
                                    value={event}
                                    className={({ active }) => `
                                      px-4 py-3 rounded-lg cursor-pointer
                                      ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}
                                      transition-colors
                                    `}
                                  >
                                    {event}
                                  </Combobox.Option>
                                ))}
                              </div>
                            </Combobox.Options>
                          </div>
                        )}
                      </Combobox>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          شماره موبایل
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all pl-12"
                            placeholder="0912XXXXXXX"
                            pattern="09[0-9]{9}"
                            required
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <HiOutlineUserCircle className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          نام کامل
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="FullName"
                            value={formData.FullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all pl-12"
                            placeholder="نام و نام خانوادگی"
                            required
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <HiOutlineUser className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="px-5 py-2 text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <HiOutlineChevronLeft className="w-4 h-4" />
                      بازگشت
                    </button>
                  )}

                  <button
                    type="submit"
                    className="ml-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all flex items-center gap-2"
                  >
                    {currentStep === 1 ? 'مرحله بعد' : 'تکمیل ثبت نام'}
                    <HiOutlineChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center p-6 space-y-4">
                <HiOutlineCheckCircle className="w-16 h-16 text-green-500 mx-auto animate-pulse" />
                <h3 className="text-xl font-semibold text-gray-900">ثبت نام موفقیت‌آمیز بود</h3>
                <p className="text-gray-500 text-sm">هماهنگی‌های لازم از طریق پیامک ارسال خواهد شد</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
