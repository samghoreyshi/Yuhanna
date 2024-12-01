'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const books = [
  {
    id: 1,
    title: 'زیست‌شناسی',
    description: 'مفاهیم پایه تا پیشرفته',
    color: 'from-green-400 to-emerald-600',
    image: '/images/biology-book.webp',
    stats: [
      { value: '۱۲+', label: 'فصل' },
      { value: '۱۰۰۰+', label: 'تست' },
      { value: '۵۰+', label: 'تمرین' },
    ]
  },
  {
    id: 2,
    title: 'شیمی',
    description: 'از اتم تا مولکول',
    color: 'from-blue-400 to-indigo-600',
    image: '/images/chemistry-book.webp',
    stats: [
      { value: '۱۵+', label: 'فصل' },
      { value: '۸۰۰+', label: 'تست' },
      { value: '۴۰+', label: 'تمرین' },
    ]
  },
  {
    id: 3,
    title: 'فیزیک',
    description: 'از نیرو تا حرکت',
    color: 'from-purple-400 to-violet-600',
    image: '/images/physics-book.webp',
    stats: [
      { value: '۱۴+', label: 'فصل' },
      { value: '۹۰۰+', label: 'تست' },
      { value: '۴۵+', label: 'تمرین' },
    ]
  },
  {
    id: 4,
    title: 'ریاضیات',
    description: 'از جبر تا هندسه',
    color: 'from-red-400 to-rose-600',
    image: '/images/math-book.webp',
    stats: [
      { value: '۱۶+', label: 'فصل' },
      { value: '۱۲۰۰+', label: 'تست' },
      { value: '۶۰+', label: 'تمرین' },
    ]
  },
];

export default function Books() {
  const [activeBook, setActiveBook] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-IranSans font-extraBlack mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            کتاب‌های <span className="text-accent">درسی</span> ما
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg font-IranSans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            با بهترین منابع آموزشی، مسیر موفقیت را هموار کنید
          </motion.p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className={`relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 
                          ${activeBook === book.id ? 'scale-105' : 'hover:scale-102'}`}
                onMouseEnter={() => setActiveBook(book.id)}
                onMouseLeave={() => setActiveBook(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Book Image */}
                  <div className="w-48 h-64 mx-auto mb-6 relative">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:-rotate-6 transition-transform duration-500"
                    />
                    {/* Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  </div>

                  {/* Book Info */}
                  <h3 className="text-xl font-IranSans font-bold mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 font-IranSans group-hover:text-white/80 transition-colors duration-500 mb-6">
                    {book.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {book.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-IranSans font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-500">
                          {stat.value}
                        </div>
                        <div className="text-sm font-IranSans text-gray-600 group-hover:text-white/80 transition-colors duration-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="mt-6 px-6 py-2 bg-white/20 font-IranSans text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/30">
                    مشاهده جزئیات
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
