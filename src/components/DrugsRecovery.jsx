const treatmentMethods = [
  {
    title: "العلاج السلوكي المعرفي (CBT)",
    desc: "يهدف إلى مساعدة الفرد في التعرف على السلوكيات السلبية والأفكار المضرة المرتبطة بالتعاطي وتعلم استبدالها بسلوكيات صحية وإيجابية.",
    icon: "🧠",
  },
  {
    title: "الدعم النفسي والعاطفي",
    desc: "يشمل الاستشارة النفسية والجلسات الاستشارية الفردية والجماعية لمساعدة الشخص على التغلب على التحديات النفسية والعاطفية المرتبطة بالإدمان.",
    icon: "🫂",
  },
  {
    title: "العلاج بالأدوية",
    desc: "قد يتم استخدام أدوية خاصة للمساعدة في تخفيف أعراض الانسحاب والحد من الرغبة في التعاطي تحت إشراف طبي متخصص.",
    icon: "💊",
  },
  {
    title: "مجموعات الدعم",
    desc: "الانضمام إلى مجموعات دعم محلية يمكن أن يكون له تأثير إيجابي، حيث يشارك الأفراد الذين يعانون من التحديات ذاتها تجاربهم ويدعمون بعضهم البعض.",
    icon: "🤝",
  },
  {
    title: "العلاج الوقائي",
    desc: "يهدف إلى تقديم المعلومات والتوعية حول المخاطر المرتبطة بالمخدرات وكيفية تجنب الانتكاس والعودة للتعاطي.",
    icon: "🛡️",
  },
  {
    title: "البرامج العلاجية السكنية",
    desc: "في الحالات الشديدة، يمكن أن تكون برامج إعادة التأهيل الداخلي (Inpatient) ذات فائدة، حيث يقضي المريض فترة زمنية في بيئة داعمة وخالية تماماً من المخدرات.",
    icon: "🏥",
  },
];

export default function DrugsRecovery() {
  return (
    <div className="w-full py-16 lg:py-24 relative" dir="rtl">
      {/* إضاءة خلفية خفيفة جداً لكسر جمود اللون الداكن */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- قسم العنوان والمقدمة --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#CA8A04] font-bold tracking-wider text-sm md:text-base mb-3 block">
            طريق التعافي والأمل
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            علاج <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CA8A04] to-yellow-200">إدمان المخدرات</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            علاج الإدمان ليس مستحيلاً، بل هو رحلة تمر عبر عدة مراحل متكاملة من الرعاية الصحية والدعم النفسي. 
            إليك أبرز الطرق الفعالة للوصول إلى التعافي التام:
          </p>
        </div>

        {/* --- قسم البطاقات (باستخدام Flexbox بدلاً من Grid للتبسيط) --- */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full">
          {treatmentMethods.map((method, index) => (
            <div
              key={index}
              // نحدد العرض ليكون 100% في الجوال، و 45% في التابلت، و 30% في الشاشات الكبيرة
              className="w-full sm:w-[45%] lg:w-[30%] relative group bg-[#11111a] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#CA8A04]/50 transition-all duration-500 overflow-hidden shadow-xl flex flex-col"
            >
              {/* إضاءة التمرير (Hover Gradient) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#CA8A04]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* المحتوى */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(202,138,4,0.2)]">
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                  {/* رقم خلفي (Watermark) */}
                  <span className="text-6xl font-black text-white/5 group-hover:text-[#CA8A04]/20 transition-colors duration-500 select-none">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#CA8A04] transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base grow">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}