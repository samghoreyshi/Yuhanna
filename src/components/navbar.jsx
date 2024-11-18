import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row-reverse justify-between items-center gap-10  h-auto sm:mx-[500px] sm:my-4 rounded-3xl shadow-sm border border-gray-300 py-2 px-4 bg-white font-IranSans font-medium text-[14px]">
        <div id="Logo">
            <img className="h-12" src="/logo/logo.png" alt="" />
        </div>
        <div id="NavLinks" className="flex w-auto gap-10 h-full  items-center text-gray-600 ">
            <span>وبلاگ</span>
            <span>درباره ما</span>
            <span>مشاوره</span>
            <span>رویدادها</span>
        </div>
        <div>
            <button className="bg-accent text-white p-2 px-4 rounded-xl">درخواست مشاوره</button>
        </div>
      </div>
    </>
  );
}