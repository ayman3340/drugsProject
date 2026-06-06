import { useEffect, useState, createContext } from "react";

import Header from "./components/Header";
import Video from "./components/Video";
import Drugs from "./components/Drugs";
import DrugsTypes from "./components/DrugsTypes";
import DrugsPrevent from "./components/DrugsPrevent";
import DrugsRecovery from "./components/DrugsRecovery";
import DrugsReport from "./components/DrugsReport";
import Book from "./components/Book";

const LenisContext = createContext(null);

// هذا المكون هو السر! يمكنك استخدامه لتغليف محتوى كل قسم في ملفاتك الحقيقية
const PageSection = ({ children, index, bgClass, id }) => {
  return (
    <section
      id={id}
      // تمت إزالة خاصية التثبيت (sticky) لضمان ظهور المحتوى بالكامل في جميع الشاشات إذا كان أطول من الشاشة
      className={`w-full flex flex-col items-center justify-center rounded-t-3xl transition-all duration-500 ${bgClass} text-white relative min-h-[100dvh] h-auto overflow-visible ${
        index > 0
          ? "shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/10"
          : ""
      }`}
    >
      {/* تم تغيير h-full إلى flex-1 لضمان تمدد الحاوية بشكل صحيح مع min-h-[100dvh] وعدم قص المحتوى */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center py-20 px-4 text-center">
        {children}
      </div>
    </section>
  );
};

// هذه المكونات تحاكي ملفاتك الموجودة في مجلد ./components/
const HeaderDiv = () => <Header></Header>;

// في ملفاتك الحقيقية، ستحتاج فقط لإضافة نفس الكلاسات الموجودة في PageSection إلى العنصر الأب لكل مكون
const FirstSectionDiv = () => (
  <PageSection id="FirstSection" index={0} bgClass="bg-[#1F2937]">
    <Drugs></Drugs>
  </PageSection>
);

const VideoDiv = () => (
  <PageSection id="VideoSection" index={1} bgClass="bg-indigo-950">
    <Video></Video>
  </PageSection>
);

const SecondSectionDiv = () => (
  <PageSection id="SecondSection" index={2} bgClass="bg-[#1F2937]">
    <DrugsTypes></DrugsTypes>
  </PageSection>
);

const ThirdSectionDiv = () => (
  <PageSection id="ThirdSection" index={3} bgClass="bg-indigo-950">
    <DrugsPrevent></DrugsPrevent>
  </PageSection>
);

const BookDiv = () => (
  <PageSection id="BookSection" index={4} bgClass="bg-[#1F2937]">
    <Book></Book>
  </PageSection>
);

const FourSectionDiv = () => (
  <PageSection id="FourSection" index={5} bgClass="bg-indigo-950">
    <DrugsRecovery></DrugsRecovery>
  </PageSection>
);

const FiveSectionDiv = () => (
  <PageSection id="FiveSection" index={6} bgClass="bg-[#1F2937]">
    <DrugsReport></DrugsReport>
  </PageSection>
);

export default function App() {
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    let lenis;
    let rafId;
    let isUnmounted = false;

    const initLenis = () => {
      if (!window.Lenis || isUnmounted) return;
      lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      setLenisInstance(lenis);

      const raf = (time) => {
        if (isUnmounted) return;
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    let script = document.querySelector('script[src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"]');

    if (!window.Lenis) {
      if (!script) {
        script = document.createElement("script");
        script.src = "https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js";
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener("load", initLenis);
    } else {
      initLenis();
    }

    return () => {
      isUnmounted = true;
      if (script) script.removeEventListener("load", initLenis);
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // إضافة مستمع لروابط التنقل ليعمل التمرير السلس بشكل متوافق مع Lenis
  useEffect(() => {
    if (!lenisInstance) return;

    const handleHashClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const id = target.getAttribute('href');
      if (id === '#') return;
      
      e.preventDefault();

      const element = document.querySelector(id);

      if (element) {
        lenisInstance.scrollTo(element, { duration: 1.5 });
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, [lenisInstance]);

  // إضافة ستايلات Lenis الأساسية
  // إضافة ستايلات Lenis الأساسية وإخفاء شريط التمرير
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* ستايلات Lenis الافتراضية الخاصة بك */
      html.lenis, html.lenis body { height: auto; }
      .lenis.lenis-smooth { scroll-behavior: auto !important; }
      .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
      .lenis.lenis-stopped { overflow: hidden; }

      /* منع الفيديو من اعتراض السكرول أثناء التمرير النشط (Iframe Scroll Trap) */
      html.lenis-scrolling iframe {
        pointer-events: none !important;
      }

      /* ✨ السطور الجديدة لإخفاء شريط التمرير ✨ */
      
      /* 1. إخفاء الشريط في متصفحات Chrome, Safari, Edge الحديثة */
      ::-webkit-scrollbar {
        display: none;
        width: 0px;
        background: transparent;
      }
      
      /* 2. إخفاء الشريط في متصفحات Firefox و Edge القديم */
      html, body {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // قمنا بتغيير اتجاه الصفحة ليدعم العربية (RTL) لأنك تستخدم خط عربي
  return (
    <LenisContext.Provider value={lenisInstance}>
      <div
        dir="rtl"
        className="relative antialiased font-sans bg-[#1a1a1a] selection:bg-emerald-400 selection:text-black "
      >
        <HeaderDiv />

        {/* حاوية الموقع التي طلبتها في الكود الخاص بك */}
        {/* قمنا بإضافة pb-20 لإعطاء مساحة للتمرير قبل الوصول للفوتر */}
        <FirstSectionDiv />
        <VideoDiv />
        <SecondSectionDiv />
        <ThirdSectionDiv />
        <BookDiv />
        <FourSectionDiv />
        <FiveSectionDiv />


      </div>
    </LenisContext.Provider>
  );
}
