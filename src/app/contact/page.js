import ContactForm from '@/components/ContactForm';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { HiOutlinePaperAirplane, HiOutlineCamera, HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import { 
  faTelegram, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactInfo = [
  {
    icon: HiOutlinePhone,
    title: 'تماس تلفنی',
    details: ['۰۲۱-۲۸۱۱۱۱۹۵'],
  },
  {
    icon: HiOutlineMail,
    title: 'راه‌های ارتباطی',
    details: ['info@yuhanna.ir', 'support@yuhanna.ir'],
  },
  {
    icon: HiOutlineLocationMarker,
    title: 'آدرس',
    details: ['خانه یوحنا، تهران، خیابان پاسداران، میدان هروی، جنب مرکز خرید گلستان'],
  },

];

const socialLinks = [
  {
    icon: faTelegram,
    href: 'https://t.me/yuhanna.ir',
    label: 'تلگرام',
  },
  {
    icon: faInstagram,
    href: 'https://instagram.com/yuhanna.ir',
    label: 'اینستاگرام',
  },
  {
    icon: faWhatsapp,
    href: 'https://wa.me/989901617862',
    label: 'واتساپ',
  },
];

export default function ContactPage() {
  return (
    <div className="w-full font-IranSans" dir="rtl">
      <section className="w-full py-24 bg-gradient-to-l from-blue-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mb-36"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <span className="text-blue-600 text-lg font-medium mb-2 block">ارتباط با ما</span>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">تماس با یوحنا</h1>
              <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                {contactInfo.map((item) => (
                  <div 
                    key={item.title}
                    className="bg-white/30 rounded-xl p-6 transition-all duration-300 hover:bg-white/50 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <div className="space-y-1">
                          {item.details.map((detail) => (
                            <p key={detail} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="bg-white/30 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">شبکه‌های اجتماعی</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form and Map */}
              <div className="lg:col-span-2 space-y-8">


                {/* Google Maps */}
                <div className="bg-white/30 rounded-xl p-2 backdrop-blur-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2441376539668!2d51.41769591524919!3d35.71425998018765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011c5400f417%3A0x31fce522f2664925!2sValiasr%20St%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1644935267593!5m2!1sen!2s"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}