import { useState } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-8 relative z-50"
      dir="rtl"
    >
      {/* النصوص */}
      <div className="w-full lg:w-1/2 max-w-2xl text-right">
        <h1 className="font-bold text-3xl md:text-5xl pb-5 text-[#CA8A04] ">
          نتائج إدمان المخدرات : -
        </h1>

        <div className="text-lg md:text-2xl leading-relaxed pt-5">
          <ul className="space-y-4">
            <li>
              <h5 className="text-[#CA8A04] inline font-semibold">
                {" "}
                ضياع المستقبل:{" "}
              </h5>
              الفشل الدراسي وخسارة الوظيفة ومصدر الدخل.
            </li>
            <li>
              <h5 className="text-[#CA8A04] inline font-semibold">
                {" "}
                الانهيار المادي والجريمة:{" "}
              </h5>
              استنزاف الأموال واللجوء للسرقة أو الترويج.
            </li>
            <li>
              <h5 className="text-[#CA8A04] inline font-semibold">
                {" "}
                تدمير السلوك:{" "}
              </h5>
              العدوانية، والتهور، وفقدان السيطرة على العقل.
            </li>
            <li>
              <h5 className="text-[#CA8A04] inline font-semibold">
                {" "}
                التفكك الاجتماعي:{" "}
              </h5>
              خسارة الأهل والارتباط الدائم برفقاء السوء.
            </li>
          </ul>
        </div>
      </div>

      {/* Video Container: Absolute safe z-index, inline pointerEvents, exact wrapper sizes */}
      <div className="w-full lg:w-1/2 relative z-50 flex justify-center">
        <div 
          className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black border border-white/10 relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src="https://img.youtube.com/vi/utmnWaFN_Xk/maxresdefault.jpg" 
                alt="صورة مصغرة للفيديو" 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300" 
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-[#CA8A04] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(202,138,4,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/utmnWaFN_Xk?si=aulv6z3Mrp7Nzuuo&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
