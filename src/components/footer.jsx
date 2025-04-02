import Image from "next/image";
import Link from 'next/link';

// --- Placeholder Icons (Replace with your actual icon library/components) ---
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.852 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent mt-1"> {/* Added mt-1 for alignment */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-slate-300 group-hover:text-white transition-colors duration-300" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.1-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-slate-300 group-hover:text-white transition-colors duration-300" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.829 0 8s.01 2.444.048 3.297c.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923.445-.444.719-.891.923-1.417.198-.51.333-1.09.372-1.942C15.99 10.445 16 10.171 16 8s-.01-2.444-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.01 10.171 0 8 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.281-.24-.705-.276-1.485C1.448 10.389 1.442 10.136 1.442 8s.006-2.389.046-3.232c.036-.78.166-1.204.276-1.486a2.5 2.5 0 0 1 .598-.92 2.5 2.5 0 0 1 .92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 3.888c-2.277 0-4.113 1.836-4.113 4.112S5.723 12.112 8 12.112s4.113-1.836 4.113-4.112S10.277 3.888 8 3.888zm0 6.778c-1.473 0-2.667-1.194-2.667-2.666S6.527 5.334 8 5.334 10.667 6.528 10.667 8s-1.194 2.666-2.667 2.666zm5.338-6.851a1.2 1.2 0 1 0 0-2.399 1.2 1.2 0 0 0 0 2.4z" />
  </svg>
);
// --- End Placeholder Icons ---


// Same subtle background pattern, adjusted for dark background
const darkBackgroundPatternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23475569' stroke-opacity='0.1' stroke-width='1.5'%3E%3Cpath d='M20 15v10M15 20h10' stroke-linecap='round'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  // Explanation:
  // width='40' height='40': Size of the repeating tile. Adjust for density.
  // stroke='%23475569': Color of the plus sign (slate-600). Visible on slate-900.
  // stroke-opacity='0.2': Makes the pattern very faint (20% opacity). Adjust as needed (e.g., 0.1 to 0.3).
  // stroke-width='1.5': Thickness of the plus sign lines.
  // d='M20 15v10M15 20h10': Draws the vertical line (M20 15v10) and horizontal line (M15 20h10).
  // stroke-linecap='round': Gives slightly rounded ends to the lines.
};


export default function ModernFooter() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer
      className="bg-slate-900 text-slate-300 border-t border-slate-700/50 font-IranSans" // Dark bg, light text
      style={darkBackgroundPatternStyle} // Apply pattern
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* Main Footer Content Grid */}
        {/* Adjusted column spans for better balance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 direction-rtl">

          {/* Logo & About (Wider on large screens) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" passHref>
              <Image
                src="/logo/logo-white.png" // Assuming you have a white version for dark bg
                alt="یوحنا (لوگوی سفید)"
                width={140} // Slightly larger logo
                height={48}
                className="mb-2 filter brightness-0 invert" // Fallback if no white logo: invert colors
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              خانه یوحنا، مرکز آموزشی پیشرو در ارائه خدمات آموزشی با کیفیت و مشاوره تخصصی برای ساختن آینده‌ای درخشان.
            </p>
            {/* Social Links Moved Here (Optional but common placement) */}
            <div className="flex gap-3 pt-2">
              <Link href="https://wa.me/+989901617862" target="_blank" rel="noopener noreferrer" passHref
                className="group bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
                title="واتساپ">
                <WhatsappIcon />
              </Link >
              <Link href="https://www.instagram.com/yuhanna.ir/" target="_blank" rel="noopener noreferrer" passHref
                className="group bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
                title="اینستاگرام">
                <InstagramIcon />
              </Link >
              {/* Add more social links here */}
            </div>
          </div>

          {/* Spacer for layout on large screens */}
          {/* <div className="hidden lg:block lg:col-span-1"></div> */}

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg text-white mb-4">دسترسی سریع</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-slate-300 hover:text-accent transition-colors duration-200">درباره ما</Link>
              <Link href="/contact" className="block text-slate-300 hover:text-accent transition-colors duration-200">تماس با ما</Link>
              <Link href="/services/counseling" className="block text-slate-300 hover:text-accent transition-colors duration-200">خدمات مشاوره</Link>
              <Link href="/courses" className="block text-slate-300 hover:text-accent transition-colors duration-200">دوره‌های آموزشی</Link>
              {/* Add more links */}
            </div>
          </div>

          {/* Services/Other Links (Example Column) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg text-white mb-4">خدمات اصلی</h3>
            <div className="space-y-3">
              <Link href="/pension-inperson" className="block text-slate-300 hover:text-accent transition-colors duration-200">پانسیون حضوری</Link>
              <Link href="/pension-online" className="block text-slate-300 hover:text-accent transition-colors duration-200">پانسیون آنلاین</Link>
              <Link href="/blog" className="block text-slate-300 hover:text-accent transition-colors duration-200">مقالات و بلاگ</Link>
              <Link href="/faq" className="block text-slate-300 hover:text-accent transition-colors duration-200">سوالات متداول</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-semibold text-lg text-white mb-4">ارتباط با ما</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="bg-slate-800 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <PhoneIcon />
                </div>
                <a href="tel:+982128111195" className="font-IranSans text-sm tracking-wider">۰۲۱-۲۸۱۱۱۱۹٥</a>
              </div>

              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="bg-slate-800 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <EmailIcon />
                </div>
                <a href="mailto:info@yuhanna.ir" className="font-IranSans text-sm">info@yuhanna.ir</a>
              </div>

              {/* Address aligned better */}
              <div className="flex items-start gap-3 text-slate-300">
                <div className="bg-slate-800 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"> {/* Adjusted margin */}
                  <LocationIcon />
                </div>
                <span className="font-IranSans text-sm leading-relaxed">
                  تهران، پاسداران، میدان هروی، جنب مرکز خرید گلستان، پلاک ۶۵، طبقه همکف غربی
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Divider & Text */}
        <div className="mt-16 pt-8 border-t border-slate-700/60 text-center">
          <p className="text-sm text-slate-400">
            تمام حقوق مادی و معنوی این وبسایت متعلق به خانه یوحنا می‌باشد &copy; {currentYear}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            طراحی و توسعه توسط{' '}
            <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition-colors">
              Sam.Ghoreyshi
            </a>
            {/* You can add your logo here too if desired */}
          </p>
        </div>
      </div>
    </footer>
  );
}