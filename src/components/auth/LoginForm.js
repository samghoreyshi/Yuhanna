'use client';

import { useState } from 'react';
import { loginUser } from '@/utils/auth';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await loginUser(identifier, password);
      
      if (result.success) {
        // Pass jwt first, then user data
        await login(result.data.jwt, result.data.user);
        router.push('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError('خطا در برقراری ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {error && (
        <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 text-red-600 px-4 py-3 rounded-2xl mb-6 text-right font-IranSans">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <div className="relative">
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="peer w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-right font-IranSans placeholder-transparent"
              required
              dir="rtl"
              placeholder="ایمیل یا نام کاربری"
              id="identifier"
            />
            <label
              htmlFor="identifier"
              className="absolute -top-2 right-3 text-xs font-IranSans bg-white px-1 text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:right-4 peer-focus:-top-2 peer-focus:right-3 peer-focus:text-xs peer-focus:text-blue-600"
            >
              ایمیل یا نام کاربری
            </label>
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <button
          type="submit"
          disabled={loading}
          className="relative w-full bg-gradient-to-l from-blue-500 to-blue-600 text-white py-3.5 px-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-IranSans disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center">
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                در حال ورود...
              </>
            ) : (
              'ورود به حساب'
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>

        <div className="text-center mt-8">
          <p className="text-gray-600 font-IranSans">
            حساب کاربری ندارید؟{' '}
            <Link href="/auth/register" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 font-IranSans">
              ثبت نام کنید
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
