import "./globals.css";
import { Providers } from '@/components/providers/Providers';
import Footer from '@/components/footer';
import Navbar from '@/components/LandingPage/Navbar'

import { Toaster } from 'react-hot-toast';

export const metadata = {

  title: "خانه یوحنا | مشاوره | پانسیون | آموزش",

  description: "خانه یوحنا، با مدیریت مجتبی شهابادی، مشاور برتر کنکور، ارائه دهنده خدمات مشاوره تحصیلی، برنامه‌ریزی درسی، انتخاب رشته، پشتیبانی، پانسیون مطالعاتی، برگزاری اردو‌های مطالعاتی مانند اردوی نوروزی و ...، آموزش دروس با برجسته‌ترین اساتید کنکور، برگزاری آزمون‌های آزمایشی، تحلیل آزمون، معرفی و اصلاح منابع برای موفقیت در کنکور است.",

  icons: {

    icon: '/favicon-new.ico',

  },

};

export default function RootLayout({ children }) {

  return (

    <html lang="fa" dir="rtl">

      <head>

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>

    </html>

  );

}
