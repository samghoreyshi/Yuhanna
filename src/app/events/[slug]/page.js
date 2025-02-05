'use client';

import RichTextRenderer from '@/components/RichTextRenderer';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { notFound } from 'next/navigation';
import { HiOutlineCalendar, HiOutlineArrowRight, HiOutlineTicket, HiOutlineChevronLeft, HiOutlineUser, HiOutlineUserCircle, HiOutlineCheckCircle } from 'react-icons/hi';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';

async function getEvent(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?filters[Slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 60 } }
    );
    const { data } = await res.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

function EventPageContent({ slug }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    Event: '',
    PhoneNumber: '',
    FullName: ''
  });
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const eventData = await getEvent(slug);
      if (!eventData) {
        notFound();
      }
      setEvent(eventData);
      setFormData(prev => ({ ...prev, Event: eventData.Title }));
      setLoading(false);
    };

    fetchEvent();
  }, [slug]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-24">
          {/* Rotating Logo */}
          <div className="flex justify-center mb-16">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="space-y-6">
              <div className="h-12 bg-blue-100/30 rounded-2xl w-3/4 animate-pulse" />
              <div className="h-6 bg-blue-100/30 rounded-xl w-1/2 animate-pulse" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-blue-100/30 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              <div className="aspect-video bg-blue-100/30 rounded-2xl animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-blue-100/30 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-white font-IranSans" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithPlaceholder
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.CoverImage?.formats?.large?.url || event.CoverImage?.url}`}
            alt={event.Title}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            {/* Back Link */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <HiOutlineArrowRight className="w-5 h-5" />
              <span>بازگشت به رویدادها</span>
            </Link>

            {/* Title and Date */}
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {event.Title}
              </h1>
              <time
                dateTime={event.publishedAt}
                className="inline-flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <HiOutlineCalendar className="w-5 h-5" />
                {new Date(event.publishedAt).toLocaleDateString('fa-IR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="py-12 md:py-16">
              <article className="prose prose-lg max-w-none">
                <RichTextRenderer content={event.Content} />
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-6 md:space-y-8 p-6 md:p-8 bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-lg rounded-xl border border-blue-100 shadow-md shadow-blue-500/10 max-w-3xl mx-auto"
        >
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

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </main>
  );
}

export default function EventPage({ params }) {
  const resolvedParams = use(params);
  return <EventPageContent slug={resolvedParams.slug} />;
}
