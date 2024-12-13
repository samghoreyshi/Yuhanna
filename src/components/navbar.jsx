"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    ["درباره ما", "about"],
    ["مشاوره", "counseling"],
    ["خانه آموزش", "educationHouse"],
    ["نظرات", "testimonials"],
    ["تماس با ما", "contact"],
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div
            className={`w-full rounded-2xl backdrop-blur-lg ${
              scrolled
                ? "bg-white/70 shadow-lg"
                : "bg-white/50"
            } px-4 py-2.5 border border-white/20`}
          >
            <div className="flex items-center justify-between">
              {/* Left Section: Mobile Menu + CTA */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-5 h-4 flex flex-col justify-between">
                    <motion.span
                      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                      className="w-full h-0.5 bg-gray-700 transform origin-center transition-all"
                    />
                    <motion.span
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                      className="w-full h-0.5 bg-gray-700 transition-all"
                    />
                    <motion.span
                      animate={
                        isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                      }
                      className="w-full h-0.5 bg-gray-700 transform origin-center transition-all"
                    />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("counseling")}
                  className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-IranSans font-demiBold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                >
                  <span className="relative z-10">درخواست مشاوره</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </div>

              {/* Center: Navigation */}
              <div className="hidden md:flex items-center justify-center flex-1 rtl space-x-1 space-x-reverse">
                {menuItems.map(([title, id]) => (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(id)}
                    className="group relative px-4 py-2 text-gray-600 hover:text-blue-600 font-IranSans text-sm transition-colors duration-300"
                  >
                    <span className="relative">
                      {title}
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-1 right-0 w-full h-0.5 bg-gradient-to-l from-blue-500 to-blue-600 origin-right"
                      />
                    </span>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 -z-10 rounded-xl bg-blue-50/50"
                    />
                  </motion.button>
                ))}
              </div>

              {/* Right: Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 cursor-pointer relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gradient-to-br from-white/80 to-white/50 p-2.5 rounded-2xl border border-white/20 shadow-lg shadow-accent/5 group-hover:shadow-accent/10 transition-all duration-300">
                  <img
                    src="/logo/logo.png"
                    alt="Logo"
                    className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[80%] sm:w-[60%] md:hidden bg-white z-40 overflow-hidden shadow-2xl"
            >
              <div className="h-full flex flex-col pt-24 px-6">
                <div className="space-y-1">
                  {menuItems.map(([title, id], index) => (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        damping: 20,
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(id)}
                      className="group flex items-center justify-end w-full py-3.5 text-gray-600 font-IranSans relative overflow-hidden rounded-xl hover:bg-gray-50/80 transition-colors duration-200"
                    >
                      <span className="relative z-10 px-4 text-base transition-colors duration-200 group-hover:text-blue-600">
                        {title}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -bottom-1 right-0 w-full h-0.5 bg-gradient-to-l from-blue-500 to-blue-600 origin-right"
                        />
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", damping: 15 }}
                        className="absolute right-0 w-1 h-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Additional Mobile Menu Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pb-8 text-center"
                >
                  <div className="text-sm text-gray-500 mb-4 font-IranSans">
                    با ما در ارتباط باشید
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("counseling")}
                    className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/80 text-white px-8 py-3.5 rounded-xl text-sm font-IranSans font-demiBold w-full shadow-lg shadow-accent/20"
                  >
                    <span className="relative z-10">درخواست مشاوره</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
