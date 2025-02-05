import RegisterForm from '@/components/auth/RegisterForm';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <Navbar />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-white/80 rounded-3xl shadow-2xl shadow-blue-500/20 border border-gray-200 overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              {/* Left Side - Decorative */}
              <div className="hidden md:block md:col-span-2 relative bg-gradient-to-br from-blue-500 to-blue-600 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                <div className="relative h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white font-IranSans text-right mb-4">به خانواده یوحنا بپیوندید</h2>
                  <p className="text-blue-100 text-right font-IranSans leading-relaxed">
                    برای استفاده از خدمات سایت، لطفا ثبت نام کنید. اطلاعات شما نزد ما محفوظ خواهد ماند.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 md:p-12">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
