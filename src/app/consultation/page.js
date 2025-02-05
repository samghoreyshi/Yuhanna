'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FullName: '',
    PhoneNumber: '',
    ConsultationType: 'مشاوره تحصیلی',
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const consultationTypes = [
    {
      title: 'مشاوره تحصیلی',
      description: 'مشاوره تخصصی برای موفقیت تحصیلی شما با بهره‌گیری از مشاوران مجرب و برنامه‌ریزی دقیق متناسب با شرایط شما',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-9-5 9-5 9 5-9 5z" />
        </svg>
      ),
    },
    {
      title: 'مشاوره لایف استایل',
      description: 'برنامه‌ریزی جامع برای بهبود سبک زندگی، مدیریت زمان، تغذیه سالم و ایجاد تعادل در زندگی شخصی و تحصیلی',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const validateForm = () => {
    const errors = {};
    
    // Validate phone number
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(formData.PhoneNumber)) {
      errors.PhoneNumber = 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد';
    }

    // Validate full name
    if (formData.FullName.trim().length < 3) {
      errors.FullName = 'لطفاً نام و نام خانوادگی را کامل وارد کنید';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleTypeSelect = (type) => {
    setFormData(prev => ({ ...prev, ConsultationType: type }));
    setStep(2);
    // Scroll to form
    document.getElementById('consultationForm').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const requestData = {
        data: formData
      };

      const response = await fetch('https://admin.yuhanna.ir/api/consultation-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || 'خطا در ثبت درخواست');
      }

      const data = await response.json();
      
      toast.success('درخواست مشاوره شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت');
      setFormData({
        FullName: '',
        PhoneNumber: '',
        ConsultationType: formData.ConsultationType, // Keep the consultation type
      });
    } catch (error) {
      toast.error(error.message || 'متأسفانه در ثبت اطلاعات خطایی رخ داد. لطفاً دوباره تلاش کنید');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-IranSans" dir="rtl">
      <section className="w-full py-24 bg-gradient-to-l from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-36 -mt-36"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-36 -mb-36"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 text-lg font-medium mb-2 block">خدمات مشاوره</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">مشاوره یوحنا</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultationTypes.map((type) => (
                <div key={type.title} className="bg-white/30 rounded-lg p-6 transition-all duration-300 hover:bg-white/50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center ml-3">
                      {type.icon}
                    </div>
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-justify">{type.description}</p>
                  <button 
                    onClick={() => handleTypeSelect(type.title)}
                    className="w-full group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105"
                  >
                    <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                    <span className="relative flex items-center">
                      درخواست {type.title}
                      <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Registration Form */}
            <div id="consultationForm" className={`mt-16 transition-all duration-500 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {step === 2 && (
                <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      درخواست {formData.ConsultationType}
                    </h3>
                    <p className="text-gray-600">لطفاً فرم زیر را با دقت تکمیل کنید</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <input
                        type="text"
                        name="FullName"
                        value={formData.FullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white rounded-xl border ${formErrors.FullName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:outline-none focus:ring-1 ${formErrors.FullName ? 'focus:ring-red-500' : 'focus:ring-blue-500'} transition-colors text-right`}
                        placeholder="نام و نام خانوادگی"
                        dir="rtl"
                      />
                      {formErrors.FullName && (
                        <p className="text-red-500 text-sm">{formErrors.FullName}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <input
                        type="tel"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white rounded-xl border ${formErrors.PhoneNumber ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'} focus:outline-none focus:ring-1 ${formErrors.PhoneNumber ? 'focus:ring-red-500' : 'focus:ring-blue-500'} transition-colors text-right`}
                        placeholder="شماره موبایل"
                        dir="rtl"
                      />
                      {formErrors.PhoneNumber && (
                        <p className="text-red-500 text-sm">{formErrors.PhoneNumber}</p>
                      )}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 px-6 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-all duration-200 font-medium"
                      >
                        بازگشت
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 disabled:opacity-70"
                      >
                        <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative">
                          {loading ? 'در حال ثبت...' : 'ثبت درخواست'}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
