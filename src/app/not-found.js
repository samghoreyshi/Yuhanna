'use client';

import Link from 'next/link';
import { HiOutlineHome } from 'react-icons/hi';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Changed text-blue-600 to text-accent */}
          <h1 className="text-6xl font-bold text-accent">404</h1> 
          <h2 className="text-2xl font-semibold text-gray-900">صفحه مورد نظر یافت نشد</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/"
            // Changed bg-blue-600 to bg-accent
            // Changed hover:bg-blue-700 to hover:bg-accent-700 (assuming accent-700 is defined)
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-accent rounded-xl hover:bg-accent-700 transition-colors duration-300" 
          >
            <HiOutlineHome className="w-5 h-5" />
            <span>بازگشت به صفحه اصلی</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}