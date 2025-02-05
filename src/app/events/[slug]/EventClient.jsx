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

export default function EventClient({ params }) {
  const resolvedParams = use(params);
  const [mounted, setMounted] = useState(false);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchEvent() {
      try {
        setLoading(true);
        const eventData = await getEvent(resolvedParams.slug);
        if (!eventData) {
          notFound();
        }
        setEvent(eventData);
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [resolvedParams.slug]);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-white/50 rounded-xl w-3/4"></div>
            <div className="h-4 bg-white/50 rounded-xl w-1/2"></div>
            <div className="h-64 bg-white/50 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
            <p className="font-IranSans">خطا در بارگذاری رویداد. لطفا دوباره تلاش کنید.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Events Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-gray-700 hover:text-blue-600 
              transition-all duration-300 group bg-white/80 backdrop-blur-sm rounded-xl border 
              border-gray-200 hover:border-blue-100 hover:bg-white hover:shadow-md"
          >
            <HiOutlineArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-IranSans text-sm">بازگشت به رویدادها</span>
          </Link>
        </motion.div>

        {/* Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Event Image */}
          {event.CoverImage?.url && (
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <ImageWithPlaceholder
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.CoverImage.url}`}
                alt={event.Title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Event Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600">
                <HiOutlineCalendar className="w-5 h-5" />
                <span className="font-IranSans text-sm">
                  {new Date(event.StartDate).toLocaleDateString('fa-IR')}
                </span>
              </div>

              {/* Location */}
              {event.Location && (
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineUser className="w-5 h-5" />
                  <span className="font-IranSans text-sm">{event.Location}</span>
                </div>
              )}

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-lg font-IranSans text-sm
                  ${event.Status === 'در حال برگزاری'
                    ? 'bg-green-50 text-green-600 border border-green-200'
                    : event.Status === 'به پایان رسیده'
                      ? 'bg-gray-50 text-gray-600 border border-gray-200'
                      : 'bg-blue-50 text-blue-600 border border-blue-200'
                  }`}
                >
                  {event.Status}
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-IranSans">
              {event.Title}
            </h1>

            {event.Description && (
              <p className="text-gray-600 mb-6 font-IranSans leading-relaxed">
                {event.Description}
              </p>
            )}

            {/* Rich Text Content */}
            <div className="prose prose-lg max-w-none">
              <RichTextRenderer content={event.Content} />
            </div>

            {/* Registration Section */}
            {event.Status !== 'به پایان رسیده' && (
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 font-IranSans">
                      ثبت‌نام در رویداد
                    </h3>
                    <p className="text-gray-600 font-IranSans text-sm">
                      برای شرکت در این رویداد ثبت‌نام کنید
                    </p>
                  </div>
                  <Link
                    href={event.RegistrationLink || '#'}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl
                      hover:bg-blue-700 transition-colors duration-200 font-IranSans text-sm"
                  >
                    <HiOutlineTicket className="w-5 h-5" />
                    ثبت‌نام
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
