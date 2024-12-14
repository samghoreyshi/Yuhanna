import "./globals.css";

export const metadata = {

  title: "خانه یوحنا | مرکز جامع آموزش و مشاوره تحصیلی",

  description: "یوحنا، پیشرو در ارائه خدمات آموزشی و مشاوره تحصیلی با رویکرد نوین و شخصی‌سازی شده. همراه شما در مسیر موفقیت تحصیلی با بهره‌گیری از متدهای علمی و کادر مجرب.",

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
