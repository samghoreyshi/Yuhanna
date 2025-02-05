import { Metadata } from 'next'

export const metadata = {
  title: 'رویدادهای یوحنا | همایش‌ها و کارگاه‌های آموزشی',
  description: 'رویدادها، همایش‌ها و کارگاه‌های آموزشی یوحنا در زمینه مشاوره تحصیلی، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
  openGraph: {
    title: 'رویدادهای یوحنا | همایش‌ها و کارگاه‌های آموزشی',
    description: 'رویدادها، همایش‌ها و کارگاه‌های آموزشی یوحنا در زمینه مشاوره تحصیلی، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'یوحنا',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رویدادهای یوحنا | همایش‌ها و کارگاه‌های آموزشی',
    description: 'رویدادها، همایش‌ها و کارگاه‌های آموزشی یوحنا در زمینه مشاوره تحصیلی، کنکور، مهاجرت تحصیلی و موضوعات مرتبط',
  },
  alternates: {
    canonical: 'https://yuhanna.ir/events'
  }
}

export default function EventsLayout({ children }) {
  return (
    <section className="w-full">
      {children}
    </section>
  )
}
