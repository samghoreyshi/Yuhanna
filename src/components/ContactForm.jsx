'use client';

import { useState } from 'react';
import { HiOutlineMail, HiOutlineUser, HiOutlinePhone, HiOutlinePaperAirplane } from 'react-icons/hi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      // Reset form after success
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative group">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-accent transition-colors duration-200">
          <HiOutlineUser className="w-5 h-5" />
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="نام و نام خانوادگی"
          required
          className="w-full px-4 pr-12 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 hover:border-gray-300"
        />
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-accent transition-colors duration-200">
          <HiOutlineMail className="w-5 h-5" />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="آدرس ایمیل"
          required
          className="w-full px-4 pr-12 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 hover:border-gray-300"
          dir="ltr"
        />
      </div>

      <div className="relative group">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-accent transition-colors duration-200">
          <HiOutlinePhone className="w-5 h-5" />
        </div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="شماره تماس"
          required
          className="w-full px-4 pr-12 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 hover:border-gray-300"
          dir="ltr"
        />
      </div>

      <div className="relative group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="پیام شما"
          required
          rows={5}
          className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 hover:border-gray-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white py-3.5 px-6 rounded-xl transition-all duration-200 font-semibold relative overflow-hidden ${
          isSubmitting ? 'cursor-not-allowed opacity-80' : ''
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            در حال ارسال...
          </div>
        ) : (
          <>
            <HiOutlinePaperAirplane className={`w-5 h-5 rotate-90 transition-transform duration-200 ${submitStatus === 'success' ? 'translate-y-[-100px]' : ''}`} />
            ارسال پیام
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus && (
        <div className={`text-center py-2 px-4 rounded-lg ${
          submitStatus === 'success' 
            ? 'bg-green-50 text-green-600' 
            : 'bg-red-50 text-red-600'
        }`}>
          {submitStatus === 'success' 
            ? 'پیام شما با موفقیت ارسال شد' 
            : 'خطا در ارسال پیام. لطفا دوباره تلاش کنید'}
        </div>
      )}
    </form>
  );
}
