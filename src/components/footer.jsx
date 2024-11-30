import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 direction-rtl">
          {/* Logo & About */}
          <div className="space-y-4">
            <Image
              src="/logo/logo.png"
              alt="یوحنا"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="font-IranSans text-gray-600 text-sm leading-relaxed">
              خانه یوحنا، مرکز آموزشی پیشرو در ارائه خدمات آموزشی با کیفیت و مشاوره تخصصی
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-IranSans font-bold text-gray-900 mb-4">دسترسی سریع</h3>
            <div className="space-y-2">
              <a href="#" className="block font-IranSans text-gray-600 hover:text-accent transition-colors">درباره ما</a>
              <a href="#" className="block font-IranSans text-gray-600 hover:text-accent transition-colors">تماس با ما</a>
              <a href="#" className="block font-IranSans text-gray-600 hover:text-accent transition-colors">خدمات مشاوره</a>
              <a href="#" className="block font-IranSans text-gray-600 hover:text-accent transition-colors">دوره‌های آموزشی</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-IranSans font-bold text-gray-900 mb-4">اطلاعات تماس</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-accent/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} className="fill-accent">
                    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
                  </svg>
                </div>
                <span className="font-IranSans text-sm">۰۲۱-۲۸۱۱۱۱۹٥</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-accent/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={16} className="fill-accent">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <span className="font-IranSans text-sm">info@yuhanna.ir</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="bg-accent/10 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={16} className="fill-accent">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </div>
                <span className="font-IranSans text-sm">تهران، پاسداران، میدان هروی، جنب مرکز خرید گلستان، پلاک 65، طبقه همکف غربی</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-IranSans font-bold text-gray-900 mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-accent">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#" className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-accent">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.64c-.55 1.68-1.83 5.72-2.59 7.59-.35.87-1.03 1.03-1.66.66l-2.37-1.75c-.69-.51-.89-.99-.2-1.68l4.25-4.25c.47-.47.23-.73-.24-.26l-5.21 4.21c-.52.42-1.02.5-1.99.11l-2.73-.99c-.89-.33-.89-1.05.2-1.57l10.61-4.12c.78-.31 1.46.19 1.13 1.04z"/>
                </svg>
              </a>
              <a href="#" className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-accent">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center font-IranSans text-sm text-gray-500">
            تمام حقوق مادی و معنوی این وبسایت متعلق به خانه یوحنا می‌باشد © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
