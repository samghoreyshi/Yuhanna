import "./globals.css";

export const metadata = {

  title: "خانه یوحنا | مشاوره | پانسیون | آموزش",

  description: "بر اساس متن زیر متناسب با کلید واژه های برتر در زمینه کنکور متن متا را بنویس : خانه یوحنا، با مدیریت مجتبی شهابادی، مشاور برتر کنکور، ارائه دهنده خدمات مشاوره تحصیلی، برنامه‌ریزی درسی، انتخاب رشته، پشتیبانی، پانسیون مطالعاتی، برگزاری اردو‌های مطالعاتی مانند اردوی نوروزی و ...، آموزش دروس با برجسته‌ترین اساتید کنکور، برگزاری آزمون‌های آزمایشی، تحلیل آزمون، معرفی و اصلاح منابع برای موفقیت در کنکور است.",

  icons: {

    icon: '/favicon-new.ico',

  },
  themeColor: '#3B82F6',
  manifest: '/manifest.json',
  appleWebApp: {
    statusBarStyle: 'default',
    title: 'خانه یوحنا',
  },

};

export default function RootLayout({ children }) {

  return (

    <html lang="fa">

      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-navbutton-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#3B82F6" />
      </head>

      <body>

        {children}

      </body>

    </html>

  );

}
