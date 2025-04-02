import {
    MapIcon,               // For Planning/Roadmap
    CpuChipIcon,           // For Skills/Brain
    ChatBubbleLeftRightIcon, // For Support/Chat
    CursorArrowRaysIcon,   // Changed: For Guidance/Direction (was CompassIcon)
} from '@heroicons/react/24/outline'; // Using Outline style

// Feature data using actual Heroicons
const features = [
    {
        icon: MapIcon,
        title: "برنامه‌ریزی شخصی‌سازی شده",
        description: "نقشه راه تحصیلی و مطالعاتی شما، متناسب با اهداف، سبک یادگیری و نقاط قوت‌تان طراحی می‌شود.",
    },
    {
        icon: CpuChipIcon,
        title: "توسعه مهارت‌های کلیدی",
        description: "تکنیک‌های حرفه‌ای تست‌زنی، مدیریت زمان مؤثر و راهکارهای عملی برای افزایش تمرکز و کاهش استرس.",
    },
    {
        icon: ChatBubbleLeftRightIcon,
        title: "پشتیبانی و پیگیری مستمر",
        description: "ما فقط برنامه نمی‌دهیم؛ در طول مسیر همراهتان هستیم، عملکرد شما را بررسی و راهنمایی‌تان می‌کنیم.",
    },
    {
        icon: CursorArrowRaysIcon, // Corrected icon
        title: "راهنمایی تخصصی انتخاب مسیر",
        description: "مشاوره دقیق و آگاهانه برای انتخاب رشته تحصیلی و ترسیم مسیر شغلی آینده بر اساس استعدادهای شما.",
    },
];


export default function FeaturesSection() {
    return (
        <section
            // Changed background: Subtle gradient instead of pattern
            className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-48 py-20 lg:py-28 "
        >
            <div className="max-w-screen-xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        ویژگی‌های <span className="text-accent">خدمات ما</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        چرا خانه مشاوره بهترین انتخاب برای هدایت تحصیلی و شغلی شماست؟
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            // Enhanced Card Styling: Solid bg, more shadow, subtle scale on hover
                            className="flex flex-col items-center text-center bg-white p-8 rounded-xl bg-gradient-to-bl from-accent/10 to-white  border border-[#AFDDEB] shadow-[inset_0_0_1px_2px_rgba(255,255,255,0.8)] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]"
                        >
                            {/* Styled Icon Container */}
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 via-blue-100/70 to-cyan-100/70 shadow-sm">
                                {/* Render the icon component dynamically */}
                                <feature.icon className="w-8 h-8 text-accent" aria-hidden="true" />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl whitespace-nowrap font-semibold text-accent mb-3">
                                {feature.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}