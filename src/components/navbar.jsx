import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 right-auto w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-2xl border ${
      scrolled ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-lg shadow-slate-200/20" 
               : "bg-white/50 backdrop-blur-md border-white/20"
    }`}>
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* CTA Button, Phone & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Phone Number */}
            <a 
              href="tel:+989123456789" 
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-slate-600 hover:text-slate-900 
                       rounded-xl transition-all duration-300 hover:bg-slate-100/50 group"
            >
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-IranSans text-sm">۰۹۱۲۳۴۵۶۷۸۹</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('counseling')}
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-xl text-sm font-IranSans font-demiBold 
                       transition-all duration-300 whitespace-nowrap shadow-lg shadow-accent/20 hover:shadow-accent/30
                       relative group"
            >
              <span className="relative z-10">درخواست مشاوره</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-xl p-2.5 text-slate-600 hover:bg-slate-100/50 transition-colors relative group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg
                className="w-5 h-5 relative"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-100/50 rounded-xl p-1.5">
            {[
              ['تماس با ما', 'contact'],
              ['نظرات', 'testimonials'],
              ['خانه آموزش', 'educationHouse'],
              ['مشاوره', 'counseling'],
              ['درباره ما', 'about'],
            ].map(([title, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative px-4 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg transition-all duration-300 font-IranSans
                         hover:bg-white hover:shadow-md hover:shadow-slate-200/20 group"
              >
                <span className="relative z-10">{title}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>

          {/* Logo - Now on the right */}
          <div className="flex-shrink-0">
            <a href="#" className="block relative group">
              <div className="absolute -inset-3 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="/logo/logo.png" 
                alt="Logo" 
                className="h-14 w-14 object-contain relative"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 space-y-1 border-t border-slate-200/50">
            {[
              ['درباره ما', 'about'],
              ['مشاوره', 'counseling'],
              ['خانه آموزش', 'educationHouse'],
              ['نظرات', 'testimonials'],
              ['تماس با ما', 'contact'],
            ].map(([title, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-right px-4 py-3 text-sm text-slate-600 hover:text-slate-900 
                         hover:bg-slate-50 rounded-xl transition-all duration-300 font-IranSans relative group"
              >
                <span className="relative z-10">{title}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
