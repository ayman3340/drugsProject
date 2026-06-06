import images from "../assets/websiteIcon.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Added dir="rtl" so the layout flows correctly for Arabic
    <nav
      className=" bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/10 w-full shadow-sm fixed top-0 left-0 z-50 flex justify-between items-center transition-all duration-300"
      dir="rtl"
    >
      <div className=" container  mx-auto px-4 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="shrink-0">
            <a href="#FirstSection" onClick={() => setIsOpen(false)}>
              <img src={images} alt="logo" className="logo h-24 w-auto" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="basic-navbar-nav"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <div className="flex flex-row gap-4 lg:gap-5 xl:gap-8 font-medium text-white">
              <a
                href="#FiveSection"
                className="font-bold text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                التبليغ عن تجار المخدرات
              </a>
              <a
                href="#FourSection"
                className="text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                علاج ادمان المخدرات
              </a>
              <a
                href="#ThirdSection"
                className="text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                الوقاية من المخدرات
              </a>
              <a
                href="#SecondSection"
                className="text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                أنواع المخدرات
              </a>
              <a
                href="#VideoSection"
                className="text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                نتائج الإدمان
              </a>
              <a
                href="#FirstSection"
                className="text-base lg:text-lg xl:text-xl hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                الرئيسية
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Collapse */}
      <div
        className={`${isOpen ? "block" : "hidden"} lg:hidden absolute top-full left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-xl border-b border-white/10`}
        id="basic-navbar-nav"
      >
        <div className="px-4 pt-2 pb-4 flex flex-col items-center text-center gap-1">
          <a
            href="#FiveSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            التبليغ عن تجار المخدرات
          </a>
          <a
            href="#FourSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            علاج ادمان المخدرات
          </a>
          <a
            href="#ThirdSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            الوقاية من المخدرات
          </a>
          <a
            href="#SecondSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            أنواع المخدرات
          </a>
          <a
            href="#VideoSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            نتائج الإدمان
          </a>
          <a
            href="#FirstSection"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-3 text-lg font-medium text-gray-200 hover:text-yellow-500 hover:bg-white/5 rounded-md transition-colors"
          >
            الرئيسية
          </a>
        </div>
      </div>
    </nav>
  );
}
