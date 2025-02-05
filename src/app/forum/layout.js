import { Metadata } from 'next'

export const metadata = {
  title: 'انجمن یوحنا | پرسش و پاسخ تخصصی',
  description: 'انجمن تخصصی یوحنا برای پرسش و پاسخ در زمینه تحصیل، کنکور، مهاجرت تحصیلی و مشاوره. از تجربیات دیگران بهره‌مند شوید و سوالات خود را مطرح کنید.',
  openGraph: {
    title: 'انجمن یوحنا | پرسش و پاسخ تخصصی',
    description: 'انجمن تخصصی یوحنا برای پرسش و پاسخ در زمینه تحصیل، کنکور، مهاجرت تحصیلی و مشاوره. از تجربیات دیگران بهره‌مند شوید و سوالات خود را مطرح کنید.',
    type: 'website',
    locale: 'fa_IR',
    siteName: 'یوحنا',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'انجمن یوحنا | پرسش و پاسخ تخصصی',
    description: 'انجمن تخصصی یوحنا برای پرسش و پاسخ در زمینه تحصیل، کنکور، مهاجرت تحصیلی و مشاوره. از تجربیات دیگران بهره‌مند شوید و سوالات خود را مطرح کنید.',
  },
  alternates: {
    canonical: 'https://yuhanna.ir/forum'
  }
}

export default function ForumLayout({ children }) {
  return (
    <section className="w-full">
      {children}
    </section>
  )
}
