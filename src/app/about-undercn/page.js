import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineBuildingOffice2, HiOutlineTrophy } from 'react-icons/hi2';
import Image from 'next/image';
import TeamMemberImage from '@/components/TeamMemberImage';

const aboutSections = [
  {
    title: 'داستان ما',
    content: 'خانه یوحنا در سال ۱۳۹۵ با هدف ارائه خدمات آموزشی و مشاوره‌ای با کیفیت به دانش‌آموزان تاسیس شد. ما با تیمی متشکل از مشاوران و اساتید مجرب، همواره در تلاش بوده‌ایم تا مسیر موفقیت تحصیلی را برای دانش‌آموزان هموار کنیم. در طول این سال‌ها، افتخار همراهی هزاران دانش‌آموز را در مسیر موفقیت داشته‌ایم و با ارائه خدمات متنوع از جمله مشاوره تحصیلی، پانسیون مطالعاتی، آموزش تخصصی و برگزاری آزمون‌های آزمایشی، به یکی از مراکز معتبر آموزشی تبدیل شده‌ایم.',
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: 'ماموریت ما',
    content: 'ماموریت ما در خانه یوحنا، تغییر باور غلط درباره کنکور و ارائه راهکارهای علمی و عملی برای موفقیت تحصیلی است. ما معتقدیم هر دانش‌آموز با داشتن برنامه‌ریزی صحیح، مشاوره تخصصی و آموزش اصولی می‌تواند به اهداف تحصیلی خود دست یابد. تلاش ما ایجاد محیطی امن، حمایتی و انگیزشی برای دانش‌آموزان است تا بتوانند با اعتماد به نفس و آرامش در مسیر موفقیت گام بردارند.',
    icon: HiOutlineLightBulb,
  },
  {
    title: 'ارزش‌های ما',
    content: 'در خانه یوحنا، ارزش‌های ما بر پایه صداقت، احترام، تعهد و نوآوری استوار است. ما به هر دانش‌آموز به عنوان یک فرد منحصر به فرد با استعدادها و نیازهای خاص نگاه می‌کنیم و برنامه‌های آموزشی و مشاوره‌ای خود را متناسب با این نیازها طراحی می‌کنیم. پایبندی به اخلاق حرفه‌ای، ارائه خدمات با کیفیت و به‌روز، و ایجاد رابطه‌ای مبتنی بر اعتماد متقابل از اصول اساسی فعالیت ما است.',
    icon: HiOutlineHeart,
  },
];

const teamMembers = [
  {
    name: 'مجتبی شهابادی',
    position: 'مدیر و مشاور ارشد',
    bio: 'بنیانگذار و مدیر خانه یوحنا، با بیش از ۱۰ سال تجربه در زمینه مشاوره تحصیلی و برنامه‌ریزی کنکور. ایشان با رویکردی علمی و عملی، هزاران دانش‌آموز را در مسیر موفقیت همراهی کرده‌اند.',
    image: '/images/team/member1.webp',
  },
  {
    name: 'دکتر سارا محمدی',
    position: 'مشاور تحصیلی',
    bio: 'دکترای روانشناسی تربیتی با تخصص در زمینه انگیزش تحصیلی و مدیریت استرس. ایشان با تجربه ۸ ساله در زمینه مشاوره تحصیلی، به دانش‌آموزان در غلبه بر چالش‌های روانی کنکور کمک می‌کنند.',
    image: '/images/team/member2.webp',
  },
  {
    name: 'استاد علی رضایی',
    position: 'مدرس ریاضی و فیزیک',
    bio: 'فارغ‌التحصیل دانشگاه صنعتی شریف با بیش از ۱۲ سال سابقه تدریس دروس ریاضی و فیزیک. روش تدریس منحصر به فرد ایشان، یادگیری مفاهیم پیچیده را برای دانش‌آموزان آسان می‌کند.',
    image: '/images/team/member3.webp',
  },
  {
    name: 'دکتر نیما کریمی',
    position: 'مدرس زیست‌شناسی',
    bio: 'دکترای زیست‌شناسی مولکولی و مدرس برتر کنکور با سابقه تالیف کتب کمک آموزشی. شیوه تدریس جذاب و کاربردی ایشان، درس زیست‌شناسی را برای دانش‌آموزان به تجربه‌ای لذت‌بخش تبدیل می‌کند.',
    image: '/images/team/member4.webp',
  },
];

const achievements = [
  {
    title: 'بیش از ۵۰۰۰ دانش‌آموز موفق',
    description: 'افتخار همراهی بیش از ۵۰۰۰ دانش‌آموز در مسیر موفقیت و قبولی در دانشگاه‌های برتر کشور',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'بیش از ۱۰۰ رتبه زیر ۱۰۰۰ کنکور',
    description: 'کسب بیش از ۱۰۰ رتبه زیر ۱۰۰۰ در کنکور سراسری توسط دانش‌آموزان خانه یوحنا',
    icon: HiOutlineTrophy,
  },
  {
    title: 'بیش از ۵۰ مشاور و مدرس مجرب',
    description: 'همکاری با بیش از ۵۰ مشاور و مدرس مجرب و متخصص در زمینه‌های مختلف آموزشی',
    icon: HiOutlineAcademicCap,
  },
];

export default function AboutPage() {
  return (
    <div className="w-full font-IranSans bg-white" dir="rtl">
      {/* Mission Section */}
      <section className="w-full py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">ماموریت ما</h1>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto mb-10"></div>
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-12">
              ایجاد نسل بعدی ابزار مدیریت ارتباط با مشتری برای کسب‌وکارها در سراسر جهان
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <Image 
                src="/images/gallery/1.webp" 
                alt="Team gathering" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <Image 
                src="/images/gallery/2.webp" 
                alt="Team members" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <Image 
                src="/images/gallery/3.webp" 
                alt="Team collaboration" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <Image 
                src="/images/gallery/4.webp" 
                alt="Team dinner" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* About Sections in a cleaner layout */}
          <div className="max-w-4xl mx-auto mb-20">
            {aboutSections.map((section, index) => (
              <div 
                key={section.title}
                className="mb-12 flex flex-col md:flex-row items-start gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shrink-0 md:mt-1">
                  <section.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with cleaner design */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2 text-center">تیم ما</h2>
            <p className="text-accent text-center mb-12">متخصصان خبره در کنار شما</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden">
                    <TeamMemberImage 
                      src={member.image} 
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-1">{member.name}</h3>
                    <p className="text-accent text-sm mb-3 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements in a cleaner layout */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center">دستاوردهای ما</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.title}
                  className="bg-gray-50 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white mb-6 mx-auto">
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Clients Section */}
      <section className="w-full py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-500 text-center mb-8 text-sm">ما مهارت‌های خود را در این شرکت‌ها تقویت کرده‌ایم</p>
            
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
              <div className="w-32">
                <Image src="/logo/intercom.svg" alt="Intercom" width={128} height={40} className="w-full h-auto" />
              </div>
              <div className="w-32">
                <Image src="/logo/asana.svg" alt="Asana" width={128} height={40} className="w-full h-auto" />
              </div>
              <div className="w-32">
                <Image src="/logo/twilio.svg" alt="Twilio" width={128} height={40} className="w-full h-auto" />
              </div>
              <div className="w-32">
                <Image src="/logo/segment.svg" alt="Segment" width={128} height={40} className="w-full h-auto" />
              </div>
              <div className="w-32">
                <Image src="/logo/zendesk.svg" alt="Zendesk" width={128} height={40} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with cleaner design */}
      <section className="w-full py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">آماده همکاری با ما هستید؟</h2>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">
              اگر به دنبال مشاوره تحصیلی، آموزش با کیفیت یا استفاده از خدمات پانسیون مطالعاتی هستید، همین امروز با ما تماس بگیرید.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-accent font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-opacity-90"
            >
              تماس با ما
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}