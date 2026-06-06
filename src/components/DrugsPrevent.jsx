import armer from "../assets/armer.png";

// فصلنا البيانات في مصفوفة لتسهيل إدارتها وجعل الكود أنظف
const preventionPoints = [
  {
    title: "التوعية",
    desc: "يجب توفير التوعية المستمرة حول المخاطر المرتبطة بتعاطي المخدرات. يمكن ذلك من خلال الحملات الإعلامية والمناهج التعليمية في المدارس والأنشطة التوعوية المجتمعية.",
  },
  {
    title: "بناء الثقة",
    desc: "يجب تعزيز الثقة بين الأفراد وتوفير بيئة مريحة للحديث عن المخدرات ومشاكل التعاطي. يجب أن يشعر الأفراد بأنهم قادرون على البحث عن المساعدة والدعم دون خوف من العقاب أو الإدانة.",
      },
  {
    title: "تعزيز المهارات الشخصية",
    desc: "يجب تعزيز المهارات الشخصية لدى الأفراد، مثل تعزيز القدرة على اتخاذ القرارات الصحيحة، وتحسين التحصيل الدراسي والمهارات الاجتماعية، وتعزيز الثقة بالنفس وبناء الهوية الشخصية.",
      },
  {
    title: "التواصل العائلي",
    desc: "يجب تعزيز التواصل العائلي الصحي وتوفير بيئة داعمة للأسرة. يمكن أن يكون الدعم العائلي والمشاركة في الأنشطة العائلية والتحدث بصراحة عن المخاطر المحتملة للمخدرات أدوات فعالة للوقاية.",
      },
  {
    title: "تعزيز النشاطات البديلة",
    desc: "يجب تعزيز النشاطات البديلة الإيجابية لدى الشباب، مثل المشاركة في الرياضة والفنون والأنشطة الاجتماعية، لتوفير مصادر تحفيز وإشغال الوقت الفارغ بطرق صحية.",
      },
  {
    title: "توفير الدعم العاطفي والعلاج",
    desc: "يجب توفير الدعم العاطفي والعلاج للأفراد الذين يعانون من مشاكل التعاطي أو الإدمان على المخدرات. يمكن أن يشمل ذلك الدعم النفسي والعلاج السلوكي والدوائي وبرامج إعادة التأهيل.",
      }
];

export default function DrugsPrevent() {
  return (
    // استخدام خلفية فاتحة جداً لراحة العين أثناء القراءة
    <div
      className="container mx-auto px-4 py-10"
      dir="rtl"
    >
        
        {/* --- قسم العنوان والصورة (Hero Section) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div className="md:w-1/2 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#CA8A04] mb-4 tracking-tight">
              الوقاية من المخدرات
            </h2>
            <p className="text-lg text-[#F3F4F6] max-w-2xl">
              حماية المجتمع تبدأ بخطوات استباقية. تعرف على أهم الركائز الأساسية لبناء بيئة صحية وآمنة للجميع.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-end">
            <img
              src={armer}
              alt="درع الوقاية"
              className="w-48 md:w-80 lg:w-[450px] h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* --- قسم البطاقات (باستخدام Flexbox بدلاً من Grid لتبسيط الكود) --- */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
          {preventionPoints.map((point, index) => (
            <div 
              key={index} 
              // أضفنا عرضاً محدداً للبطاقات لتعمل مع الفليكس بوكس
              className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className=" flex items-center justify-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-blue-900 text-center">
                  {point.title}
                </h3>
              </div>
              <p className=" text-slate-600 leading-relaxed text-base grow">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
}