import { Metadata } from 'next'

export const metadata = {
  title: 'اخبار یوحنا | آخرین اخبار و اطلاعیه‌ها',
  description: 'آخرین اخبار و اطلاعیه‌های یوحنا در زمینه آموزش، کنکور، مهاجرت تحصیلی و تغییرات مهم آموزشی',
  openGraph: {
    title: 'اخبار یوحنا | آخرین اخبار و اطلاعیه‌ها',
    description: 'آخرین اخبار و اطلاعیه‌های یوحنا در زمینه آموزش، کنکور، مهاجرت تحصیلی و تغییرات مهم آموزشی',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'یوحنا',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'اخبار یوحنا | آخرین اخبار و اطلاعیه‌ها',
    description: 'آخرین اخبار و اطلاعیه‌های یوحنا در زمینه آموزش، کنکور، مهاجرت تحصیلی و تغییرات مهم آموزشی',
  },
  alternates: {
    canonical: 'https://yuhanna.ir/news'
  }
}

export default function NewsLayout({ children }) {
  return (
    <section className="w-full">
      {children}
    </section>
  )
}
