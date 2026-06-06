import Captiogon from "../assets/Captiogon.png";
import hashsh from "../assets/hashsh.png";
import Crstal from "../assets/Crstal.png";
export default function SecondSection() {
  return (
    <div
      className="container mx-auto px-4 py-10 flex flex-col gap-8"
      dir="rtl"
    >
      {/* --- Main Header Section --- */}

      <div className="bg-gray-900/20 p-6 rounded-xl border border-gray-800 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-[#CA8A04] mb-2">
            انواع المخدرات
          </h2>
          <h2 className="text-lg md:text-xl font-medium text-[#F3F4F6]">
            المخدرات الأكثر انتشارًا في المملكة العربية السعودية
          </h2>
      </div>

      {/* --- قسم البطاقات (باستخدام Flexbox مبسط بدلاً من Grid) --- */}
      {/* نستخدم flex-wrap لكي تنزل البطاقات لسطر جديد إذا لم تكفِ المساحة */}
      <div className="flex flex-wrap justify-center gap-6 flex-1 w-full">
        {/* Captagon Card */}
        {/* نحدد عرض البطاقة لتأخذ ثلث المساحة تقريباً في الشاشات الكبيرة */}
        <div className="w-full lg:w-[31%] flex flex-col bg-gray-900/40 border border-gray-800 rounded-xl p-6">
          <img
            src={Captiogon}
            alt="Captagon"
            className="w-full h-48 md:h-64 object-contain rounded-lg mb-4 shrink-0"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-[#CA8A04] mb-4 shrink-0">
            الكبتاجون
          </h3>
          <div className="text-lg md:text-xl text-[#F3F4F6] leading-relaxed">
            <p className="mb-2">
              منشط كيميائي قوي للجهاز العصبي ينتمي لعائلة الأمفيتامينات، يؤدي
              إلى فرط النشاط واليقظة الوهمية.
            </p>
            <span className="font-semibold text-[#ca0404] block mb-1">
              أبرز أضراره ومخاطره:
            </span>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>الإدمان السريع:</strong> اعتماد نفسي وجسدي شديد.
              </li>
              <li>
                <strong>الاضطرابات النفسية:</strong> هلاوس، قلق حاد، وسلوكيات
                عدوانية.
              </li>
              <li>
                <strong>الدمار الجسدي:</strong> أمراض القلب، وتلف خلايا الدماغ.
              </li>
            </ul>
          </div>
        </div>

        {/* Hashish Card */}

        {/* تمت إضافة w-full lg:w-[31%] لتكون مطابقة لباقي البطاقات وتترتب بشكل صحيح */}
        <div className="w-full lg:w-[31%] flex flex-col bg-gray-900/40 border border-gray-800 rounded-xl p-6">
          <img
            src={hashsh}
            alt="Hashish"
            className="w-full h-48 md:h-64 object-contain rounded-lg mb-4 shrink-0"
          />

          <h3 className="text-2xl md:text-3xl font-bold text-[#CA8A04] mb-4 shrink-0">
            الحشيش
          </h3>

          <div className="text-lg md:text-xl text-[#F3F4F6] leading-relaxed">
            <p className="mb-2">
              مخدر يُستخلص من نبات القنب الهندي، يحتوي على مادة (THC) المؤثرة
              بشكل مباشر على العقل والجهاز العصبي.
            </p>
            <span className="font-semibold text-[#ca0404] block mb-1">
              أبرز أضراره ومخاطره:
            </span>
            <p>
              يؤدي تعاطيه المستمر إلى الإدمان، ضعف في الذاكرة، نوبات من القلق
              والذهان، وتدهور ملحوظ في الصحة العقلية والجسدية، مما يؤثر سلباً
              على حياة الفرد.
            </p>
          </div>
        </div>

        {/* Methamphetamine Card */}
        <div className="w-full lg:w-[31%] flex flex-col bg-gray-900/40 border border-gray-800 rounded-xl p-6">
          <img
            src={Crstal}
            alt="Methamphetamine Crystal"
            className="w-full h-48 md:h-64 object-contain rounded-lg mb-4 shrink-0"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-[#CA8A04] mb-4 shrink-0">
            الميثامفيتامين (الشبو / الكريستال)
          </h3>
          <div className="text-lg md:text-xl text-[#F3F4F6] leading-relaxed">
            <p className="mb-2">
              مخدر كيميائي شديد الخطورة يُصنع في مختبرات غير قانونية، ويُعتبر من
              أقوى المنشطات العصبية المُدمرة.
            </p>
            <span className="font-semibold text-[#ca0404] block mb-1 ">
              أبرز أضراره ومخاطره:
            </span>
            <p>
              يسبب تدميراً سريعاً لخلايا المخ، ويؤدي إلى فرط طاقة غير طبيعي ينتج
              عنه سلوكيات عنيفة جداً، هلاوس سمعية وبصرية، وتدهور جسدي مرعب في
              وقت قصير.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
