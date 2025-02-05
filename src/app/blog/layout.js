import { Metadata } from 'next'

export const metadata = {
  title: 'وبلاگ یوحنا | مقالات آموزشی و مشاوره‌ای',
  description: 'مقالات آموزشی و مشاوره‌ای یوحنا در زمینه تحصیل، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
  openGraph: {
    title: 'وبلاگ یوحنا | مقالات آموزشی و مشاوره‌ای',
    description: 'مقالات آموزشی و مشاوره‌ای یوحنا در زمینه تحصیل، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'یوحنا',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وبلاگ یوحنا | مقالات آموزشی و مشاوره‌ای',
    description: 'مقالات آموزشی و مشاوره‌ای یوحنا در زمینه تحصیل، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
  },
  alternates: {
    canonical: 'https://yuhanna.ir/blog'
  }
}

export default function BlogLayout({ children }) {
  return (
    <section className="w-full">
      {children}
    </section>
  )
}
