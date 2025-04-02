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
      <div className="relative max-w-4xl mx-auto md:rounded-md md:mt-5 h-[30vh] md:h-[50vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <ImageWithPlaceholder
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.CoverImage?.formats?.large?.url || event.CoverImage?.url}`}
            alt={event.Title}
            className="object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-10 pb-5 md:pb-5">
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <HiOutlineArrowRight className="w-5 h-5" />
              <span>بازگشت</span>
            </Link>

            {/* Title and Date */}
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {event.Title}
              </h1>
              {/* <time
                dateTime={event.publishedAt}
                className="inline-flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <HiOutlineCalendar className="w-5 h-5" />
                {new Date(event.publishedAt).toLocaleDateString('fa-IR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time> */}
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

      
      {/* Decorative Elements */}
    </main>
  );
}

export default function EventPage({ params }) {
  const resolvedParams = use(params);
  return <EventPageContent slug={resolvedParams.slug} />;
}
