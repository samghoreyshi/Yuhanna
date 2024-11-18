import "./globals.css";


export const metadata = {
  title: "پانسیون یوحنا",
  description: "خانه یوحنا مکانی برای یادگیری در بهترین زمان",
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
