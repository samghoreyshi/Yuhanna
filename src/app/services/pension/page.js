'use client';

import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function PensionServices() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    FullName: '',
    PhoneNumber: '',
    EducationalLevel: '',
    PensionType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handlePensionSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      PensionType: type
    }));
    setStep(2);
    // Scroll to form
    document.getElementById('registrationForm').scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

    // Validate educational level
    if (!formData.EducationalLevel) {
      errors.EducationalLevel = 'لطفاً پایه تحصیلی خود را انتخاب کنید';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const payload = {
        data: {
          FullName: formData.FullName,
          PhoneNumber: formData.PhoneNumber,
          EducationalLevel: formData.EducationalLevel,
          PensionType: formData.PensionType
        }
      };
      
      console.log('Sending payload:', payload);

      const response = await fetch('https://admin.yuhanna.ir/api/pension-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || 'خطا در ثبت اطلاعات');
      }

      const result = await response.json();
      console.log('API Response:', result);

      setSubmitStatus({
        type: 'success',
        message: 'ثبت‌نام شما با موفقیت انجام شد. به زودی با شما تماس خواهیم گرفت.'
      });
      setFormData({
        FullName: '',
        PhoneNumber: '',
        EducationalLevel: '',
        PensionType: formData.PensionType // Keep the pension type
      });
      // Don't reset step here
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' }); // Clear success message after 5 seconds
      }, 5000);
    } catch (error) {
      console.error('Submit Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'متأسفانه در ثبت اطلاعات خطایی رخ داد. لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.'
      });
    } finally {
      setIsSubmitting(false);
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
              <span className="text-blue-600 text-lg font-medium mb-2 block">خدمات پانسیون</span>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">پانسیون یوحنا</h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online Pension */}
              <div className="bg-white/30 rounded-lg p-6 transition-all duration-300 hover:bg-white/50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  پانسیون آنلاین
                </h3>
                <p className="text-gray-600 mb-6 text-justify">
                  با استفاده از خدمات پانسیون آنلاین، می‌توانید از هر کجا که هستید به منابع آموزشی، مشاوره تحصیلی و برنامه‌ریزی شخصی‌سازی شده دسترسی داشته باشید.
                </p>
                <button 
                  onClick={() => handlePensionSelect('پانسیون آنلاین')}
                  className="w-full group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105"
                >
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    ثبت‌نام در پانسیون آنلاین
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* In-Person Pension */}
              <div className="bg-white/30 rounded-lg p-6 transition-all duration-300 hover:bg-white/50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center ml-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  پانسیون حضوری
                </h3>
                <p className="text-gray-600 mb-6 text-justify">
                  در محیطی آرام و مجهز، با دسترسی به کتابخانه فیزیکی و میزهای مطالعه اختصاصی، تمرکز خود را افزایش دهید و به اهداف تحصیلی خود برسید.
                </p>
                <button 
                  onClick={() => handlePensionSelect('پانسیون حضوری')}
                  className="w-full group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105"
                >
                  <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    رزرو جایگاه مطالعه
                    <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Registration Form */}
            <div id="registrationForm" className={`mt-16 transition-all duration-500 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {step === 2 && (
                <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {formData.PensionType === 'پانسیون آنلاین' ? 'ثبت‌نام در پانسیون آنلاین' : 'رزرو جایگاه مطالعه'}
                    </h3>
                    <p className="text-gray-600">لطفاً فرم زیر را با دقت تکمیل کنید</p>
                  </div>

                  {submitStatus.message && (
                    <div 
                      className={`mb-6 p-4 rounded-lg ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {submitStatus.type === 'success' ? (
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        {submitStatus.message}
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        name="FullName"
                        value={formData.FullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          formErrors.FullName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                      />
                      {formErrors.FullName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.FullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">شماره تماس</label>
                      <input
                        type="tel"
                        name="PhoneNumber"
                        value={formData.PhoneNumber}
                        onChange={handleInputChange}
                        required
                        pattern="^09\d{9}$"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          formErrors.PhoneNumber ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                        placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                      />
                      {formErrors.PhoneNumber && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.PhoneNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">پایه تحصیلی</label>
                      <select
                        name="EducationalLevel"
                        value={formData.EducationalLevel}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          formErrors.EducationalLevel ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                      >
                        <option value="">پایه تحصیلی خود را انتخاب کنید</option>
                        <option value="سال دهم">سال دهم</option>
                        <option value="سال یازدهم">سال یازدهم</option>
                        <option value="سال دوازدهم">سال دوازدهم</option>
                        <option value="فارغ التحصیل">فارغ التحصیل</option>
                      </select>
                      {formErrors.EducationalLevel && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.EducationalLevel}</p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 px-6 py-2.5 text-gray-700 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        بازگشت
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-2/3 group relative inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-blue-600 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
                      >
                        <span className="absolute left-0 w-0 h-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative flex items-center gap-2">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              در حال ثبت...
                            </>
                          ) : (
                            'ثبت درخواست'
                          )}
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
