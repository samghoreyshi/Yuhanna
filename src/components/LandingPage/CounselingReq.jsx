"use client";

import { useState } from 'react';
import RButton from '@/components/LandingPage/R-Button';

export default function CounselingReq() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    const SENDER_NUMBER = "500091456654104"; // شماره فرستنده (شماره اختصاصی پنل پیامکی)
    
    const handleInput = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, '').slice(0, 11);
        setPhoneNumber(numericValue);
    }

    const checkPhoneNumber = async () => {
        try {
            const response = await fetch("https://admin.yuhanna.ir/api/news-letters", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) throw new Error('خطا در دریافت اطلاعات');

            const data = await response.json();
            console.log('API Response:', data);
            const exist = data.data.some((entry) => entry.PhoneNumber === phoneNumber);
            console.log(exist);
            return exist;
        } catch (error) {
            console.error('خطا در بررسی شماره تماس:', error);
            return false;
        }
    }

    const sendSMS = async () => {
        try {
            const smsResponse = await fetch('/api/send-sms', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    From: SENDER_NUMBER,
                    ToNumber: phoneNumber,
                    Content: "پیام شما با موفقیت ثبت شد."
                }),
            });
            const smsData = await smsResponse.json();
            console.log(smsData)
            if (smsData.Succeeded) {
                console.log("اسمس با موفقیت ارسال شد. RefId:", smsData.refId);
            } else {
                console.error("خطا در ارسال اسمس. کد خطا:", smsData.resultCode);
            }
        } catch (error) {
            console.error("خطا در ارتباط با سرویس اسمس:", error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const checkPhone = await checkPhoneNumber();

        if (checkPhone) {
            setStatus("duplicate");
            return;
        }

        try {
            const response = await fetch("https://admin.yuhanna.ir/api/news-letters", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: { PhoneNumber: phoneNumber },
                }),
            });

            if (!response.ok) {
                const { message } = await response.json().catch(() => ({}));
                throw new Error(message ?? 'خطا در ارسال درخواست');
            };

            console.log("ارسال موفقیت آمیز بود.");
            setStatus('success');

            // ارسال اسمس پس از ثبت موفق شماره
            await sendSMS();

        } catch (error) {
            console.error("خطای ارسال درخواست: ", error);
            setStatus('error');
        }
    }

    return (
        <>
            <section className="px-8 pt-5 md:px-32 lg:px-64 flex flex-col justify-center gap-5 items-center">
                <div className="relative z-10 w-full flex flex-col gap-2 justify-center">
                    <h1 className="text-[clamp(16px,7vw,32px)] sm:text-center text-secondary font-extrabold leading-relaxed text-center">
                        به کمک و<span className="relative text-accent"> مشاوره </span> نیاز داری؟!
                    </h1>
                    <p className="text-[clamp(12px,3vw,16px)] text-[#497886] max-w-md text-center mx-auto">
                        می‌تونی از طریق فرم زیر خیلی سریع درخواست مشاوره ارسال کنی، کارشناسان ما در خانه یوحنا در اسرع وقت با شما تماس خواهند گرفت.
                    </p>
                </div>
                <div className="my-2 sm:max-w-lg rounded-lg border-2 border-[#8BCBDE] pr-2 flex gap-5 justify-between shadow-lg items-center w-full">
                    <input className="bg-inherit direction-rtl w-full outline-none text-[#497886] placeholder:text-[#8dafb9]"
                        value={phoneNumber}
                        onChange={handleInput}
                        type="tel"
                        placeholder="شماره همراهتو وارد کن!"
                        maxLength={11}
                        required
                    />
                    <div onClick={handleSubmit}>
                        <RButton
                            title='ارسال درخواست'
                            background='bg-blue-50'
                            BGradinetFrom='from-[#96CEF2]'
                            BGradientTo='to-blue-100'
                            TextColor='text-[#10708C]'
                        />
                    </div>
                </div>
                <div>
                    {status === 'loading' && <p className='bg-[#DEFFD2]  text-[#24570C] p-1 px-2 rounded-full text-sm'>در حال ثبت درخواست...</p>}
                    {status === 'success' && <p className='bg-[#DEFFD2]  text-[#24570C] p-1 px-2 rounded-full text-sm'>شماره با موفقیت ثبت شد!</p>}
                    {status === 'error' && <p className='bg-[#DEFFD2] text-[#24570C] p-1 px-2 rounded-full text-sm'>خطا در ثبت شماره. دوباره تلاش کنید.</p>}
                    {status === 'duplicate' && <p className='bg-[#DEFFD2] text-[#24570C] p-1 px-2 rounded-full text-sm'>درخواست شما در مرحله پیگیری است.</p>}
                </div>
            </section>
        </>
    )
}
