'use client';

import { useState } from 'react';
import { registerUser } from '@/utils/auth';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    FirstNameLastName: '',
    CodeMelli: '',
    PhoneNumber: '',
  });
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
    setError(''); // Clear error when user types
  };

  const validateStep1 = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError('لطفاً تمام فیلدهای مرحله اول را پر کنید');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.FirstNameLastName || !formData.CodeMelli || !formData.PhoneNumber) {
      setError('لطفاً تمام اطلاعات شخصی را وارد کنید');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
      return;
    }

    if (!validateStep2()) {
      return;
    }

    setLoading(true);

    try {
      const result = await registerUser(
        formData.username,
        formData.email,
        formData.password,
        formData.FirstNameLastName,
        formData.CodeMelli,
        formData.PhoneNumber
      );

      if (result.success) {
        await register(result.data.jwt, result.data.user);
        router.push('/dashboard');
      } else {
        setError(result.error || 'خطا در ثبت نام');
        if (result.error?.includes('username') || result.error?.includes('email')) {
          setStep(1); // Go back to step 1 if username/email error
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('خطا در برقراری ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-5">
      <div className="relative">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="نام کاربری"
          id="username"
        />
        <label
          htmlFor="username"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          نام کاربری
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="ایمیل"
          id="email"
        />
        <label
          htmlFor="email"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          ایمیل
        </label>
      </div>

      <div className="relative">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="رمز عبور"
          id="password"
        />
        <label
          htmlFor="password"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          رمز عبور
        </label>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-5">
      <div className="relative">
        <input
          type="text"
          name="FirstNameLastName"
          value={formData.FirstNameLastName}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="نام و نام خانوادگی"
          id="FirstNameLastName"
        />
        <label
          htmlFor="FirstNameLastName"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          نام و نام خانوادگی
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="CodeMelli"
          value={formData.CodeMelli}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="کد ملی"
          id="CodeMelli"
        />
        <label
          htmlFor="CodeMelli"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          کد ملی
        </label>
      </div>

      <div className="relative">
        <input
          type="tel"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
          required
          dir="rtl"
          placeholder="شماره تلفن"
          id="PhoneNumber"
        />
        <label
          htmlFor="PhoneNumber"
          className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
        >
          شماره تلفن
        </label>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto">
      {error && (
        <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 text-red-600 px-4 py-3 rounded-2xl mb-6 text-right font-IranSans">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Progress Indicator */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-sm font-IranSans ${step === 2 ? 'text-gray-600' : 'text-blue-600'}`}>
              اطلاعات حساب کاربری
            </span>
            <span className={`text-sm font-IranSans ${step === 2 ? 'text-blue-600' : 'text-gray-600'}`}>
              اطلاعات شخصی
            </span>
          </div>
          <div className="h-1 bg-gray-200 rounded-full">
            <div 
              className={`h-1 bg-blue-500 rounded-full transition-all duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`}
            ></div>
          </div>
        </div>

        {step === 1 ? renderStep1() : renderStep2()}

        <div className="flex gap-4">
          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-100 text-gray-700 py-3.5 px-4 rounded-2xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-IranSans"
            >
              بازگشت
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 relative bg-gradient-to-l from-blue-500 to-blue-600 text-white py-3.5 px-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-IranSans disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span className="relative z-10 flex items-center justify-center">
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  در حال ثبت نام...
                </>
              ) : (
                step === 1 ? 'مرحله بعد' : 'ثبت نام'
              )}
            </span>
          </button>
        </div>

        {step === 1 && (
          <div className="text-center mt-8">
            <p className="text-gray-600 font-IranSans">
              قبلاً ثبت نام کرده‌اید؟{' '}
              <Link href="/auth/login" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 font-IranSans">
                وارد شوید
              </Link>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
