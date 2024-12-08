import "./globals.css";


export const metadata = {
  title: "خانه یوحنا",
  description: "خانه یوحنا مکانی برای یادگیری در بهترین زمان",
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
