import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading, setIsLoading }) => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [ 'خانه مشاوره', 'خانه آموزش', 'خانه مطالعه'];
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const cycleTexts = async () => {
        for (let i = 0; i < texts.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 1500));
          setCurrentText(i);
        }
        setHasCompletedCycle(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      };

      cycleTexts();
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center font-IranSans"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo or Brand Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center">
            <img 
              src="/logo/logo.png" 
              alt="Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
        </motion.div>

        {/* Text Animation Container */}
        <div className="bg-white/50 backdrop-blur-sm border border-slate-100 rounded-3xl p-8 shadow-lg">
          <div className="h-24 overflow-hidden flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl font-black text-slate-800 text-center"
              >
                <span className="relative">
                  {texts[currentText]}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute bottom-1 left-0 h-3 bg-accent/10 -z-10 rounded-full"
                  ></motion.div>
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Loading Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className={`w-3 h-3 rounded-full bg-accent ${
                  hasCompletedCycle ? 'opacity-0 transition-opacity duration-500' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
