'use client'

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center gap-10 h-auto sm:mx-[500px] sm:my-4 sm:rounded-3xl shadow-sm border border-gray-300 py-2 px-4 bg-white font-IranSans font-medium text-[14px]">
        <div id="Logo">
          <img className="h-12" src="/logo/logo.png" alt="" />
        </div>
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent text-2xl">
            ☰
          </button>
        </div>
        <ul className="hidden sm:flex flex-col sm:flex-row gap-8 text-gray-600 font-IranSans ">
          <li>وبلاگ</li>
          <li>درباره ما</li>
          <li>مشاوره</li>
          <li>رویدادها</li>
        </ul>
        <div className="hidden sm:block">
          <button className="bg-accent text-white p-2 px-4 rounded-xl">
            درخواست مشاوره
          </button>
        </div>
      </div>
      <div
        id="NavLinks"
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-white shadow-md sm:rounded-b-3xl py-2 px-4`}
      >
        <ul className="flex flex-col gap-2 text-gray-600 text-right font-IranSans py-5">
          <li>وبلاگ</li>
          <li>درباره ما</li>
          <li>مشاوره</li>
          <li>رویدادها</li>
        </ul>
      </div>
    </>
  );
}