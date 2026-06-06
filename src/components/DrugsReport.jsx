import hand from "../assets/hand.png";

export default function DrugsReport() {
  return (
    <div
      className="container mx-auto px-4 py-10 flex flex-col items-center gap-8"
      dir="rtl"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold text-[#CA8A04]">
        كيف تبلغ عن من يقوم بالاتجار بالمخدرات في المملكة العربية السعودية
      </h2>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-2/3 flex flex-col gap-6 bg-black/20 border border-white/5 rounded-2xl p-8 shadow-sm text-right text-lg md:text-xl text-gray-200 leading-relaxed">
          <div>
            <span className="text-yellow-500 font-bold ml-1">
              الاتصال بالشرطة:
            </span>
            يُمكنك الاتصال بالشرطة المحلية عن طريق الرقم الهاتفي العام (999)،
            وتقديم معلوماتك وتفاصيلك حول الشخص المشتبه به ونشاطه في توزيع
            المخدرات.
            <p className="mt-3 text-base md:text-lg text-gray-400">
              * قد يكون من الأفضل توضيح الموقف بشكل دقيق وتوفير أي أدلة أو
              معلومات إضافية قد تساعد الشرطة في التحقيق.
            </p>
          </div>

          <hr className="border-white/5" />

          <div>
            <span className="text-yellow-500 font-bold ml-1">
              الاتصال بالهيئة العامة لمكافحة المخدرات:
            </span>
            يمكنك الاتصال بالهيئة العامة لمكافحة المخدرات في المملكة العربية
            السعودية على الرقم المجاني (995) وتوفير المعلومات والتفاصيل اللازمة
            حول الشخص المشتبه به ونشاطه.
          </div>

          <hr className="border-white/5" />

          <div>
            <span className="text-yellow-500 font-bold ml-1">
              الإبلاغ عبر البريد الإلكتروني:
            </span>
            توفر الهيئة العامة لمكافحة المخدرات خيارًا للإبلاغ عبر البريد
            الإلكتروني، حيث يمكنك إرسال التفاصيل والمعلومات إليهم عبر البريد
            الإلكتروني المخصص لذلك.
            <span
              className="font-semibold block mt-3 text-white tracking-wider"
              dir="ltr"
            >
              995@gdnc.gov.sa
            </span>
          </div>
        </div>

        <div className="w-2/3 md:w-1/2 lg:w-1/3 flex justify-center items-center">
          <img
            src={hand}
            alt="Report drug trafficking"
            className="w-full h-auto drop-shadow-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
