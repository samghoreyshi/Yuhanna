import "./globals.css";

export const metadata = {

  title: "خانه یوحنا | مرکز جامع آموزش و مشاوره تحصیلی",

  description: "یوحنا، پیشرو در ارائه خدمات آموزشی و مشاوره تحصیلی با رویکرد نوین و شخصی‌سازی شده. همراه شما در مسیر موفقیت تحصیلی با بهره‌گیری از متدهای علمی و کادر مجرب.",

  icons: {

    icon: '/favicon-new.ico',

  },

};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}
